#!/usr/bin/env node
// Browser checks for the Horus Heresy Archive.
//
// Setup (once):   npm init -y && npm i -D playwright && npx playwright install chromium-headless-shell
// Serve:          python3 -m http.server 8899
// Run:            node tools/ui-checks.mjs
//
// These exist because the data validator cannot see rendering. Several defects
// here passed every DOM assertion and were only caught by looking at a
// screenshot, so each check asserts a computed style or a hit test rather than
// merely the presence of an element.

import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:8899/';
let failed = 0;

const check = async (name, fn) => {
    try {
        await fn();
        console.log('  PASS  ' + name);
    } catch (error) {
        failed++;
        console.log('  FAIL  ' + name + ' :: ' + error.message.split('\n')[0]);
    }
};

// WCAG relative luminance and contrast ratio
const luminance = ([r, g, b]) => {
    const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a, b) => {
    const l1 = luminance(a), l2 = luminance(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
const rgb = (css) => css.match(/\d+/g).slice(0, 3).map(Number);

const browser = await chromium.launch();
const errors = [];

const newPage = async (viewport) => {
    const page = await browser.newPage({ viewport });
    page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
    return page;
};

const page = await newPage({ width: 1440, height: 1000 });
await page.goto(BASE, { waitUntil: 'load' });
await page.waitForSelector('.book-card');
await page.waitForTimeout(1300);

console.log('\nOrdering and data');

// These assertions are about the chronological index specifically, so pin the
// view. The site now defaults to reading order, which is deliberately not
// chronological.
await page.click('#viewChronological');
await page.waitForTimeout(600);

// The expected count comes from the data, so adding a book does not silently
// fail a hardcoded assertion.
const EXPECTED_ENTRIES = await page.evaluate(() => Object.keys(bookData).length);
console.log(`  (dataset holds ${EXPECTED_ENTRIES} entries)`);

await check('every entry renders as a card', async () => {
    const n = (await page.$$('.book-card')).length;
    if (n !== EXPECTED_ENTRIES) throw new Error(`${n} cards for ${EXPECTED_ENTRIES} entries`);
});

await check('chronological badges ascend with no gaps', async () => {
    const nums = await page.$$eval('.chronological-badge', (e) =>
        e.map((x) => Number(x.textContent.replace('Chrono: ', ''))));
    if (!nums.every((n, i) => n === i + 1)) throw new Error('not sequential');
});

await check('chronological order starts with the earliest story', async () => {
    const first = await page.$eval('.book-card .book-title', (e) => e.textContent);
    if (first !== 'THE LAST CHURCH') throw new Error('first card is ' + first);
});

await check('publication sort is numeric, not alphabetical', async () => {
    await page.selectOption('#sortOrder', 'publication');
    await page.waitForTimeout(400);
    const nums = await page.$$eval('.book-number-overlay', (e) => e.slice(0, 9).map((x) => x.textContent));
    const expected = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    if (nums.join(',') !== expected.join(',')) throw new Error(nums.join(','));
});

await check('Chrono badge is fixed, not the index of the current sort', async () => {
    await page.selectOption('#sortOrder', 'title');
    await page.waitForTimeout(400);
    const badges = await page.$$eval('.chronological-badge', (e) =>
        e.slice(0, 4).map((x) => Number(x.textContent.replace('Chrono: ', ''))));
    if (badges.join(',') === '1,2,3,4') throw new Error('badge is renumbering with the sort');
    await page.selectOption('#sortOrder', 'view');
    await page.waitForTimeout(400);
});

await check('anthology cards name their parent volume', async () => {
    const labels = await page.$$eval('.anthology-label', (e) => e.map((x) => x.textContent.trim()));
    if (labels.some((l) => l === 'ANTHOLOGY')) throw new Error('still the literal word');
    if (new Set(labels).size < 10) throw new Error('only ' + new Set(labels).size + ' distinct volumes');
});

console.log('\nResilience');

await check('a corrupt progress value does not blank the archive', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE);
    await p.evaluate(() => localStorage.setItem('horusHeresyProgress', '{oops'));
    await p.reload({ waitUntil: 'load' });
    await p.waitForSelector('.book-card', { timeout: 8000 });
    const n = (await p.$$('.book-card')).length;
    await p.evaluate(() => localStorage.clear());
    await p.close();
    if (n !== EXPECTED_ENTRIES) throw new Error('got ' + n + ' cards');
});

await check("a JSON 'null' progress value does not blank the archive", async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE);
    await p.evaluate(() => localStorage.setItem('horusHeresyProgress', 'null'));
    await p.reload({ waitUntil: 'load' });
    await p.waitForSelector('.book-card', { timeout: 8000 });
    const n = (await p.$$('.book-card')).length;
    await p.evaluate(() => localStorage.clear());
    await p.close();
    if (n !== EXPECTED_ENTRIES) throw new Error('got ' + n + ' cards');
});

console.log('\nModals and scroll lock');

await check('book modal opens', async () => {
    await page.evaluate(() => document.querySelectorAll('.book-card')[3].click());
    await page.waitForTimeout(400);
    const t = await page.$eval('#modalTitle', (e) => e.textContent);
    if (!t) throw new Error('empty title');
});

await check('page scroll is locked while a modal is open', async () => {
    const before = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => window.scrollY);
    if (Math.abs(after - before) > 5) throw new Error(`scrolled ${before} -> ${after}`);
});

await check('floating buttons do not float above an open modal', async () => {
    const top = await page.evaluate(() => {
        const btn = document.querySelector('.ordering-guide-float-btn');
        const r = btn.getBoundingClientRect();
        const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        return el ? el.className : null;
    });
    if (!String(top).includes('modal-overlay')) throw new Error('topmost element is ' + top);
});

await check('closing a nested modal keeps the parent locked', async () => {
    const link = await page.$('#keyDetails .character-link, #blurb .character-link');
    if (!link) throw new Error('no character link to test with');
    await link.click();
    await page.waitForTimeout(400);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const s = await page.evaluate(() => ({
        bookOpen: document.getElementById('modalOverlay').classList.contains('active'),
        locked: document.documentElement.classList.contains('modal-open'),
    }));
    if (!s.bookOpen) throw new Error('parent modal closed too');
    if (!s.locked) throw new Error('page unlocked while parent modal open');
});

await check('page unlocks once every modal is closed', async () => {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const locked = await page.evaluate(() => document.documentElement.classList.contains('modal-open'));
    if (locked) throw new Error('still locked');
});

await check('the ordering guide renders the generated document', async () => {
    await page.click('#orderingGuideBtn');
    await page.waitForFunction(
        () => !document.getElementById('orderingModalBody').innerText.includes('RETRIEVING'),
        { timeout: 8000 });
    await page.waitForTimeout(400);
    const r = await page.evaluate(() => {
        const b = document.getElementById('orderingModalBody');
        return {
            length: b.innerText.length,
            literalQuotes: (b.innerText.match(/(^|\s)>\s/g) || []).length,
            orphanListItems: [...b.querySelectorAll('li')]
                .filter((li) => !['UL', 'OL'].includes(li.parentElement.tagName)).length,
            retiredPrinciple: b.innerText.includes('Placed at end'),
        };
    });
    if (r.length < 5000) throw new Error('only ' + r.length + ' chars, the book list is missing');
    if (r.literalQuotes) throw new Error('blockquote markdown rendered literally');
    if (r.orphanListItems) throw new Error(r.orphanListItems + ' list items outside a ul/ol');
    if (r.retiredPrinciple) throw new Error('still shows the retired ordering principle');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

console.log('\nProgress tracking');

await check('marking progress does not move the scroll position', async () => {
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(200);
    await page.evaluate(() => document.querySelectorAll('.book-card')[3].click());
    await page.waitForTimeout(400);
    const before = await page.evaluate(() => window.scrollY);
    await page.evaluate(() => document.getElementById('markReadBtn').click());
    await page.waitForTimeout(300);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const after = await page.evaluate(() => window.scrollY);
    if (Math.abs(after - before) > 5) throw new Error(`${before} -> ${after}`);
});

await check('a finished card dims its cover but not its title or badge', async () => {
    await page.evaluate(() => document.querySelectorAll('.book-card')[3].click());
    await page.waitForTimeout(300);
    await page.evaluate(() => document.getElementById('markReadBtn').click());
    await page.waitForTimeout(200);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const r = await page.evaluate(() => {
        const card = document.querySelector('.book-card.book-finished');
        if (!card) return null;
        return {
            card: getComputedStyle(card).opacity,
            cover: getComputedStyle(card.querySelector('.book-cover')).opacity,
            title: getComputedStyle(card.querySelector('.book-title')).opacity,
            badge: card.querySelector('.status-badge')?.textContent?.trim(),
        };
    });
    if (!r) throw new Error('no finished card');
    if (r.card !== '1') throw new Error('whole card dimmed to ' + r.card);
    if (Number(r.cover) >= 1) throw new Error('cover not dimmed');
    if (r.title !== '1') throw new Error('title dimmed to ' + r.title);
    if (r.badge !== '\u2713 FINISHED') throw new Error('badge is ' + JSON.stringify(r.badge));
});

console.log('\nFilters');

await check('legion sentinels do not leak into the UI', async () => {
    await page.selectOption('#legionFilter', '__LOYALIST__');
    await page.waitForTimeout(400);
    const info = await page.$eval('.filter-info', (e) => e.textContent);
    if (info.includes('__')) throw new Error(info);
});

await check('CLEAR ALL resets the sort order too', async () => {
    await page.selectOption('#sortOrder', 'author');
    await page.waitForTimeout(300);
    await page.click('#clearAllFilters');
    await page.waitForTimeout(400);
    const v = await page.$eval('#sortOrder', (e) => e.value);
    if (v !== 'view') throw new Error('sort is ' + v);
});

await check('the spoiler preference survives a reload', async () => {
    await page.uncheck('#showSpoilers');
    await page.waitForTimeout(300);
    await page.reload({ waitUntil: 'load' });
    await page.waitForSelector('.book-card');
    const checked = await page.$eval('#showSpoilers', (e) => e.checked);
    if (checked) throw new Error('spoilers were silently re-enabled');
    await page.check('#showSpoilers');
    await page.waitForTimeout(300);
});

console.log('\nContrast, both themes');

const contrastChecks = [
    ['.book-title', [26, 26, 26], 4.5, 'book title on card'],
    ['.filter-label', [16, 10, 10], 4.5, 'filter label on panel'],
    ['.classification', [38, 38, 38], 4.5, 'classification on header'],
    ['.timestamp', [42, 42, 42], 4.5, 'footer timestamp'],
];

for (const theme of ['loyalist', 'traitor']) {
    if (theme === 'traitor') {
        await page.click('#allegianceToggle');
        await page.waitForTimeout(800);
    }
    for (const [selector, bg, min, label] of contrastChecks) {
        await check(`${theme}: ${label} clears ${min}:1`, async () => {
            const colour = await page.$eval(selector, (e) => getComputedStyle(e).color);
            const r = contrast(rgb(colour), bg);
            if (r < min) throw new Error(`${colour} = ${r.toFixed(2)}:1`);
        });
    }
    await check(`${theme}: progress badges are themed`, async () => {
        const bg = await page.$$eval('.status-badge', (e) =>
            e.length ? getComputedStyle(e[0]).backgroundColor : null);
        if (!bg) return;
        if (theme === 'traitor' && (/\b0,\s*123,\s*255\b/.test(bg) || /\b34,\s*139,\s*34\b/.test(bg))) {
            throw new Error('unthemed bootstrap colour: ' + bg);
        }
    });
}
await page.click('#allegianceToggle');
await page.waitForTimeout(600);

console.log('\nThe three views');

await check('defaults to reading order, not chronological', async () => {
    const fresh = await newPage({ width: 1440, height: 1000 });
    await fresh.goto(BASE, { waitUntil: 'load' });
    await fresh.waitForSelector('.book-card');
    await fresh.waitForTimeout(900);
    const active = await fresh.$eval('.view-btn.is-active', (e) => e.dataset.view);
    await fresh.close();
    if (active !== 'reading') throw new Error('active view is ' + active);
});

await check('reading order opens with the four spine books', async () => {
    await page.click('#viewReading');
    await page.waitForTimeout(600);
    const titles = await page.$$eval('.book-card .book-title', (e) => e.slice(0, 4).map((x) => x.textContent));
    const want = ['HORUS RISING', 'FALSE GODS', 'GALAXY IN FLAMES', 'THE FLIGHT OF THE EISENSTEIN'];
    if (titles.join('|') !== want.join('|')) throw new Error(titles.join(' | '));
});

await check('reading order shows phase headings, chronological does not', async () => {
    const reading = (await page.$$('.phase-title')).length;
    if (reading < 5) throw new Error('only ' + reading + ' phase headings in reading view');
    await page.click('#viewChronological');
    await page.waitForTimeout(600);
    const chrono = (await page.$$('.phase-title')).length;
    if (chrono !== 0) throw new Error('phase headings leaked into the chronological view');
});

await check('chronological opens with the earliest story', async () => {
    const first = await page.$eval('.book-card .book-title', (e) => e.textContent);
    if (first !== 'THE LAST CHURCH') throw new Error('first card is ' + first);
});

await check('the view choice persists across a reload', async () => {
    await page.reload({ waitUntil: 'load' });
    await page.waitForSelector('.book-card');
    await page.waitForTimeout(800);
    const active = await page.$eval('.view-btn.is-active', (e) => e.dataset.view);
    if (active !== 'chronological') throw new Error('got ' + active);
});

await check('chart view hides the grid and filters for real, not just via [hidden]', async () => {
    await page.click('#viewChart');
    await page.waitForSelector('.chart-svg', { timeout: 15000 });
    await page.waitForTimeout(600);
    const r = await page.evaluate(() => ({
        grid: getComputedStyle(document.querySelector('.book-display')).display,
        filters: getComputedStyle(document.querySelector('.filter-section')).display,
        visibleCards: [...document.querySelectorAll('.book-card')].filter((c) => c.offsetParent !== null).length,
    }));
    // [hidden] loses to display: grid and display: flex without an explicit rule
    if (r.grid !== 'none') throw new Error('card grid still rendering, display: ' + r.grid);
    if (r.filters !== 'none') throw new Error('filter bar still rendering, display: ' + r.filters);
    if (r.visibleCards !== 0) throw new Error(r.visibleCards + ' cards visible behind the chart');
});

await check('chart renders every node and edge', async () => {
    const r = await page.evaluate(() => ({
        nodes: document.querySelectorAll('.chart-node').length,
        edges: document.querySelectorAll('.edge').length,
        linked: document.querySelectorAll('.chart-node.is-linked').length,
    }));
    if (r.nodes !== 185) throw new Error('nodes: ' + r.nodes);
    if (r.edges !== 205) throw new Error('edges: ' + r.edges);
    if (r.linked < 140) throw new Error('only ' + r.linked + ' nodes link to a book');
});

await check('chart draws no position-based lane bands', async () => {
    // The source chart reuses vertical bands as the timeline descends, so column
    // xRanges overlap heavily and painting them as swimlanes misleads.
    const lanes = await page.evaluate(() => document.querySelectorAll('.lane').length);
    if (lanes !== 0) throw new Error(lanes + ' lane bands drawn');
});

await check('chart node labels sit inside their own boxes', async () => {
    const bad = await page.evaluate(() => {
        let n = 0;
        document.querySelectorAll('.chart-node').forEach((g) => {
            const shape = g.querySelector('rect,ellipse');
            const text = g.querySelector('text');
            if (!shape || !text) return;
            const s = shape.getBBox(), t = text.getBBox();
            const cx = t.x + t.width / 2, cy = t.y + t.height / 2;
            if (cx < s.x - 4 || cx > s.x + s.width + 4 || cy < s.y - 6 || cy > s.y + s.height + 6) n++;
        });
        return n;
    });
    if (bad > 0) throw new Error(bad + ' labels outside their node box');
});

await check('clicking a chart node opens that book', async () => {
    await page.evaluate(() => document.querySelector('.chart-node.is-linked')
        .dispatchEvent(new MouseEvent('click', { bubbles: true })));
    await page.waitForTimeout(500);
    const open = await page.evaluate(() => document.getElementById('modalOverlay').classList.contains('active'));
    if (!open) throw new Error('modal did not open');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

await check('faction highlight isolates one storyline and clears again', async () => {
    await page.evaluate(() => document.querySelectorAll('.faction-key')[1].click());
    await page.waitForTimeout(400);
    const on = await page.evaluate(() => ({
        dimmed: document.querySelectorAll('.chart-node.is-dimmed').length,
        lit: document.querySelectorAll('.chart-node:not(.is-dimmed)').length,
    }));
    if (!on.dimmed) throw new Error('nothing dimmed');
    if (!on.lit) throw new Error('everything dimmed');
    await page.evaluate(() => document.querySelectorAll('.faction-key')[1].click());
    await page.waitForTimeout(300);
    const off = await page.evaluate(() => document.querySelectorAll('.chart-node.is-dimmed').length);
    if (off !== 0) throw new Error('highlight did not clear');
});

await check('every wrapped label line fits inside its own node box', async () => {
    // Share Tech Mono is monospace, so the renderer can measure text exactly and
    // grow boxes to fit. This asserts the result rather than the intent.
    const bad = await page.evaluate(() => {
        const out = [];
        document.querySelectorAll('.chart-node').forEach((g) => {
            const shape = g.querySelector('rect:not(.node-bar), ellipse');
            const text = g.querySelector('text');
            if (!shape || !text) return;
            const s = shape.getBBox();
            text.querySelectorAll('tspan').forEach((ts) => {
                const t = ts.getBBox();
                const overW = Math.max(0, (t.x + t.width) - (s.x + s.width), s.x - t.x);
                const overH = Math.max(0, (t.y + t.height) - (s.y + s.height), s.y - t.y);
                if (overW > 0.6 || overH > 0.6) out.push(g.getAttribute('aria-label'));
            });
        });
        return out;
    });
    if (bad.length) throw new Error(bad.length + ' lines overflow, first: ' + bad[0]);
});

await check('growing boxes to fit text did not make nodes overlap', async () => {
    const n = await page.evaluate(() => {
        const boxes = [...document.querySelectorAll('.chart-node')]
            .map((g) => g.querySelector('rect:not(.node-bar), ellipse').getBBox());
        let count = 0;
        for (let i = 0; i < boxes.length; i++) {
            for (let j = i + 1; j < boxes.length; j++) {
                const a = boxes[i], b = boxes[j];
                const ox = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
                const oy = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
                if (ox > 1 && oy > 1) count++;
            }
        }
        return count;
    });
    if (n > 0) throw new Error(n + ' overlapping node pairs');
});

await check('FIT WIDTH fills the available width exactly', async () => {
    await page.click('#chartFit');
    await page.waitForTimeout(350);
    const r = await page.evaluate(() => ({
        svgW: Number(document.getElementById('chartSvg').getAttribute('width')),
        avail: document.getElementById('chartScroll').clientWidth,
    }));
    const ratio = r.svgW / r.avail;
    if (ratio < 0.97 || ratio > 1.01) throw new Error(`svg ${r.svgW} vs available ${r.avail}`);
});

await check('zoom in and out change the rendered size', async () => {
    const before = await page.evaluate(() => Number(document.getElementById('chartSvg').getAttribute('width')));
    await page.click('#chartZoomIn');
    await page.waitForTimeout(250);
    const inZoom = await page.evaluate(() => Number(document.getElementById('chartSvg').getAttribute('width')));
    if (inZoom <= before) throw new Error('zoom in did not grow the chart');
    await page.click('#chartZoomOut');
    await page.click('#chartZoomOut');
    await page.waitForTimeout(250);
    const outZoom = await page.evaluate(() => Number(document.getElementById('chartSvg').getAttribute('width')));
    if (outZoom >= inZoom) throw new Error('zoom out did not shrink the chart');
});

await check('fullscreen enters, re-fits, and exits again', async () => {
    await page.click('#chartFullscreen');
    await page.waitForTimeout(700);
    const inside = await page.evaluate(() => ({
        el: document.fullscreenElement?.id || null,
        cls: document.getElementById('chartView').classList.contains('is-fullscreen'),
        label: document.getElementById('chartFullscreen').textContent.trim(),
        svgW: Number(document.getElementById('chartSvg').getAttribute('width')),
        avail: document.getElementById('chartScroll').clientWidth,
    }));
    if (inside.el !== 'chartView') throw new Error('fullscreenElement is ' + inside.el);
    if (!inside.cls) throw new Error('is-fullscreen class not applied');
    if (inside.label !== 'EXIT FULLSCREEN') throw new Error('button reads ' + inside.label);
    const ratio = inside.svgW / inside.avail;
    if (ratio < 0.97 || ratio > 1.01) throw new Error('did not re-fit in fullscreen');

    await page.click('#chartFullscreen');
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => ({
        el: document.fullscreenElement?.id || null,
        cls: document.getElementById('chartView').classList.contains('is-fullscreen'),
    }));
    if (after.el || after.cls) throw new Error('did not exit fullscreen cleanly');
});

await check('chart opens looking at the entry point, not empty margin', async () => {
    await page.click('#chartFit');
    await page.waitForTimeout(300);
    await page.evaluate(() => scrollChartToEntryPoint());
    await page.waitForTimeout(300);
    const visible = await page.evaluate(() => {
        const sc = document.getElementById('chartScroll');
        const g = document.querySelector('.chart-node[data-book="horus-rising"]');
        if (!g) return false;
        const gb = g.getBoundingClientRect(), sb = sc.getBoundingClientRect();
        return gb.left >= sb.left - 2 && gb.right <= sb.right + 2;
    });
    if (!visible) throw new Error('Horus Rising is not in view');
});

await check('chart view does not make the page scroll sideways', async () => {
    const o = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (o > 1) throw new Error('overflows by ' + o + 'px');
});

await check('the header subtitle matches the active view', async () => {
    const chart = await page.$eval('#subtitleSeries', (e) => e.textContent);
    if (!/STORYLINE CHART/.test(chart)) throw new Error('chart view subtitle: ' + chart);
    await page.click('#viewReading');
    await page.waitForTimeout(600);
    const reading = await page.$eval('#subtitleSeries', (e) => e.textContent);
    if (!/READING ORDER/.test(reading)) throw new Error('reading view subtitle: ' + reading);
});

console.log('\nKeyboard and assistive technology');

await check('a book card is a real button, reachable and activatable', async () => {
    await page.evaluate(() => document.querySelector('.book-card').focus());
    const tag = await page.evaluate(() => document.activeElement.tagName);
    if (tag !== 'BUTTON') throw new Error('focused element is a ' + tag);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    const open = await page.evaluate(() => document.getElementById('modalOverlay').classList.contains('active'));
    if (!open) throw new Error('Enter did not open the dialog');
});

await check('focus moves into the dialog and Tab cannot escape it', async () => {
    const inside = () => page.evaluate(() =>
        document.getElementById('modalOverlay').contains(document.activeElement));
    if (!await inside()) throw new Error('focus stayed outside on open');
    for (let i = 0; i < 25; i++) await page.keyboard.press('Tab');
    if (!await inside()) throw new Error('Tab escaped the dialog');
});

await check('the background is inert while a dialog is open', async () => {
    const inert = await page.evaluate(() =>
        document.querySelector('.dataslate-container').hasAttribute('inert'));
    if (!inert) throw new Error('background is still reachable');
});

await check('focus returns to the trigger on close', async () => {
    // The trigger sits inside the inert container, so inert has to be cleared
    // before focus is restored or the restore silently does nothing.
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const back = await page.evaluate(() => document.activeElement.classList.contains('book-card'));
    if (!back) throw new Error('focus was not restored');
});

await check('character names are buttons, not spans', async () => {
    await page.evaluate(() => showModal('horus-rising'));
    await page.waitForTimeout(400);
    const tag = await page.evaluate(() => document.querySelector('.character-link')?.tagName || 'none');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    if (tag !== 'BUTTON') throw new Error('character link is a ' + tag);
});

await check('nothing removes its own focus outline', async () => {
    const bad = await page.evaluate(() => {
        let n = 0;
        for (const el of document.querySelectorAll('button, input, select, a')) {
            el.focus();
            const cs = getComputedStyle(el);
            if (cs.outlineStyle === 'none' && cs.outlineWidth === '0px' && el.matches(':focus-visible')) n++;
        }
        return n;
    });
    if (bad) throw new Error(bad + ' focusable elements have no visible focus state');
});

console.log('\nProgress sync');

await check('a progress code round-trips through a separate browser profile', async () => {
    const source = await newPage({ width: 1200, height: 900 });
    await source.goto(BASE, { waitUntil: 'load' });
    await source.waitForSelector('.book-card');
    await source.waitForTimeout(700);
    await source.evaluate(() => {
        const ks = Object.keys(bookData);
        readingProgress.save({ [ks[0]]: 'finished', [ks[7]]: 'reading', [ks[120]]: 'finished' });
    });
    const code = await source.evaluate(() => exportProgressCode());
    await source.close();

    // A fresh context has its own localStorage, which is the point.
    const context = await browser.newContext();
    const target = await context.newPage();
    await target.goto(BASE, { waitUntil: 'load' });
    await target.waitForSelector('.book-card');
    await target.waitForTimeout(700);
    const result = await target.evaluate((c) => importProgressCode(c), code);
    const restored = await target.evaluate(() => readingProgress.load());
    await context.close();

    if (!result.ok) throw new Error(result.reason);
    if (Object.keys(restored).length !== 3) throw new Error('restored ' + Object.keys(restored).length + ' of 3');
});

await check('a code from a different dataset is refused, not misapplied', async () => {
    // Decoding against shifted indices would silently corrupt the log, so a
    // fingerprint mismatch has to fail loudly.
    const r = await page.evaluate(() => importProgressCode('HH2-badbadb-AAAA'));
    if (r.ok) throw new Error('a mismatched code was accepted');
    if (!/different version/i.test(r.reason)) throw new Error('unhelpful reason: ' + r.reason);
});

await check('junk input is rejected cleanly', async () => {
    const r = await page.evaluate(() => importProgressCode('not a code'));
    if (r.ok) throw new Error('junk accepted');
});

console.log('\nLayout');

await check('the catalogue scrolls with the page, no nested scroller', async () => {
    const r = await page.evaluate(() => {
        const d = document.querySelector('.book-display');
        return { maxHeight: getComputedStyle(d).maxHeight, inner: d.scrollHeight > d.clientHeight + 2 };
    });
    if (r.maxHeight !== 'none') throw new Error('max-height is ' + r.maxHeight);
    if (r.inner) throw new Error('inner scroll region still present');
});

await check('the vignette is pinned to the viewport, not the page', async () => {
    const pos = await page.$eval('.vignette', (e) => getComputedStyle(e).position);
    if (pos !== 'fixed') throw new Error('vignette is ' + pos + ', which veils the whole page');
});

const mobile = await newPage({ width: 390, height: 844 });
await mobile.goto(BASE, { waitUntil: 'load' });
await mobile.waitForSelector('.book-card');
await mobile.waitForTimeout(1300);

await check('mobile: at least one book card is above the fold', async () => {
    const n = await mobile.evaluate(() => [...document.querySelectorAll('.book-card')]
        .filter((c) => c.getBoundingClientRect().top < window.innerHeight).length);
    if (n < 1) throw new Error('the catalogue is entirely below the fold');
});

await check('mobile: no horizontal overflow', async () => {
    const o = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (o > 1) throw new Error('overflows by ' + o + 'px');
});

await check('mobile: pinch-zoom is not blocked', async () => {
    const ta = await mobile.evaluate(() => getComputedStyle(document.body).touchAction);
    if (ta === 'pan-y') throw new Error('touch-action: pan-y blocks pinch-zoom, failing WCAG 1.4.4');
});

console.log('');
if (errors.length) {
    failed++;
    console.log('Console and page errors:');
    for (const e of [...new Set(errors)]) console.log('  x ' + e);
} else {
    console.log('No console or page errors.');
}

await browser.close();
console.log(failed ? `\nFAILED, ${failed} problem(s).\n` : '\nAll checks passed.\n');
process.exit(failed ? 1 : 0);
