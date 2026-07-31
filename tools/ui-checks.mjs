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

await check('224 cards render', async () => {
    const n = (await page.$$('.book-card')).length;
    if (n !== 224) throw new Error('got ' + n);
});

await check('chronological badges ascend 1..224 with no gaps', async () => {
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
    await page.selectOption('#sortOrder', 'chronological');
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
    if (n !== 224) throw new Error('got ' + n + ' cards');
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
    if (n !== 224) throw new Error('got ' + n + ' cards');
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
    if (v !== 'chronological') throw new Error('sort is ' + v);
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
