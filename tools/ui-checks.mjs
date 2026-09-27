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

// The first-run panel is modal, so every other check has to start past it.
// Seeding the flag before navigation is closer to a returning visitor than
// clicking through, and it keeps the panel's own behaviour testable in a
// clean context below.
const SEEN_FLAGS = `
    try {
        localStorage.setItem('horusHeresySeenWelcome', '1');
        localStorage.setItem('horusHeresySeenSaveHint', '1');
    } catch (e) {}
`;

const newPage = async (viewport, { firstRun = false } = {}) => {
    const page = await browser.newPage({ viewport });
    if (!firstRun) await page.addInitScript(SEEN_FLAGS);
    page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
    return page;
};

const page = await newPage({ width: 1440, height: 1000 });
await page.goto(BASE, { waitUntil: 'load' });
await page.waitForSelector('.book-card');
await page.waitForTimeout(1300);

await check('a new reader starts with spoilers hidden', async () => {
    const enabled = await page.$eval('#showSpoilers', (e) => e.checked);
    if (enabled) throw new Error('spoilers were enabled on first visit');
});
await page.check('#showSpoilers');

console.log('\nReader routes');
await check('publisher-curated Core route has the 12 novels in published order', async () => {
    await page.click('#coreRoute');
    const titles = await page.locator('.book-card .book-title').allTextContents();
    if (titles.length !== 12 || titles[0] !== 'HORUS RISING' || titles[11] !== 'SLAVES TO DARKNESS') {
        throw new Error(`${titles.length} Core works, from ${titles[0]} to ${titles.at(-1)}`);
    }
    if (!new URL(page.url()).searchParams.has('route')) throw new Error('route is not linkable');
    if (!await page.locator('#routeSource a').isVisible()) throw new Error('publisher source missing');
});
await check('Core route opens from a fresh URL and Full Fiction restores the catalogue', async () => {
    const linked = await newPage({ width: 1280, height: 850 });
    await linked.goto(new URL('?route=core', BASE).href);
    await linked.waitForSelector('.book-card');
    if (await linked.locator('.book-card').count() !== 12) throw new Error('direct Core link failed');
    await linked.click('#fullRoute');
    if (await linked.locator('.book-card').count() !== 228) throw new Error('Full Fiction did not restore entries');
    await linked.close();
});
await check('Start Here switches from chronology to the curated reading sequence', async () => {
    await page.click('#viewChronological');
    await page.click('#coreRoute');
    const first = await page.locator('.book-card .book-title').first().textContent();
    const active = await page.locator('#viewReading').getAttribute('aria-pressed');
    if (first !== 'HORUS RISING' || active !== 'true') throw new Error(`first=${first}, reading=${active}`);
});
await check('a returning reader can reopen an in-progress work from the header', async () => {
    const returning = await newPage({ width: 390, height: 844 });
    await returning.addInitScript(() => localStorage.setItem('horusHeresyProgress', JSON.stringify({ 'horus-rising': 'reading' })));
    await returning.goto(BASE, { waitUntil: 'load' });
    await returning.waitForSelector('.book-card');
    const button = returning.locator('#continueReading');
    if (!await button.isVisible() || !await button.textContent().then((value) => value.includes('HORUS RISING'))) {
        throw new Error('Continue action is missing or points to another work');
    }
    await button.click();
    if (await returning.locator('#modalTitle').textContent() !== 'HORUS RISING') {
        throw new Error('Continue action did not open the work');
    }
    await returning.evaluate(() => {
        readingProgress.setStatus('horus-rising', 'finished');
        updateProgressCounter();
    });
    if (await button.isVisible()) throw new Error('Continue action remained after finishing the work');
    await returning.close();
});
await check('next-read guide explains, skips and restores a Core suggestion', async () => {
    const guide = await newPage({ width: 390, height: 844 });
    await guide.goto(new URL('?route=core', BASE).href);
    await guide.waitForSelector('.book-card');
    await guide.locator('#nextReadGuide summary').click();
    const first = await guide.locator('#nextReadPrimary').textContent();
    await guide.locator('#nextReadSkip').click();
    await guide.reload();
    await guide.waitForSelector('.book-card');
    await guide.locator('#nextReadGuide summary').click();
    const second = await guide.locator('#nextReadPrimary').textContent();
    await guide.locator('#nextReadReset').click();
    const restored = await guide.locator('#nextReadPrimary').textContent();
    await guide.close();
    if (!first.includes('HORUS RISING') || !second.includes('FALSE GODS') ||
        !restored.includes('HORUS RISING')) throw new Error(`${first}, ${second}, ${restored}`);
});
await check('next-read guide never suggests a finished work', async () => {
    const guide = await newPage({ width: 1280, height: 850 });
    await guide.addInitScript(() => localStorage.setItem('horusHeresyProgress', JSON.stringify({ 'horus-rising': 'finished' })));
    await guide.goto(new URL('?route=core', BASE).href);
    await guide.waitForSelector('.book-card');
    await guide.locator('#nextReadGuide summary').click();
    const primary = await guide.locator('#nextReadPrimary').textContent();
    const options = await guide.locator('#nextReadAlternatives').textContent();
    await guide.close();
    if (!primary.includes('FALSE GODS') || options.includes('HORUS RISING')) {
        throw new Error(`${primary}, ${options}`);
    }
});

await check('next-read guide flags an unfinished chart predecessor without changing the route order', async () => {
    const guide = await newPage({ width: 390, height: 844 });
    await guide.goto(BASE, { waitUntil: 'load' });
    await guide.waitForFunction(() => Boolean(readingOrder?.byKey));
    const result = await guide.evaluate(() => {
        const progress = {};
        for (const key of getSortedBookKeys('reading')) {
            if (key === 'garro-sword-truth') break;
            progress[key] = 'finished';
        }
        readingProgress.save(progress);
        renderNextReadGuide();
        const primary = document.getElementById('nextReadPrimary').dataset.workKey;
        const before = document.getElementById('nextReadChartNote').textContent;
        readingProgress.setStatus('garro-burden-duty', 'finished');
        renderNextReadGuide();
        return {
            primary,
            before,
            hiddenAfter: document.getElementById('nextReadChartNote').hidden,
        };
    });
    await guide.close();
    if (result.primary !== 'garro-sword-truth' || !result.before.includes('1 unfinished work') ||
        !result.hiddenAfter) throw new Error(JSON.stringify(result));
});
await check('next-read guide can switch from Full Fiction to the shorter Core path', async () => {
    const guide = await newPage({ width: 1280, height: 850 });
    await guide.goto(BASE);
    await guide.waitForSelector('.book-card');
    await guide.locator('#nextReadGuide summary').click();
    await guide.locator('#nextReadShorter').click();
    const route = new URL(guide.url()).searchParams.get('route');
    const first = await guide.locator('#nextReadPrimary').textContent();
    await guide.close();
    if (route !== 'core' || !first.includes('HORUS RISING')) throw new Error(`${route}: ${first}`);
});
await page.click('#fullRoute');

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

await check('work detail shows research limits and safe source links', async () => {
    const result = await page.$eval('#workResearch', (host) => ({
        note: host.textContent.includes('not all been checked against a primary source'),
        links: [...host.querySelectorAll('a')].map((link) => ({
            href: link.href, rel: link.rel,
            internalWork: link.origin === location.origin && link.hash.startsWith('#work='),
        })),
    }));
    if (!result.note) throw new Error('missing research limitation');
    if (!result.links.some((link) => link.href.includes('/issues/new?'))) throw new Error('missing correction link');
    if (result.links.some((link) => !link.internalWork &&
        (!link.href.startsWith('https://') || !link.rel.includes('noopener')))) {
        throw new Error('unsafe research link');
    }
});

await check('Core novel detail cites the publisher list for title, author and format', async () => {
    const sourced = await newPage({ width: 1200, height: 900 });
    await sourced.goto(new URL('#work=horus-rising', BASE).href, { waitUntil: 'load' });
    await sourced.waitForSelector('#modalOverlay.active');
    const result = await sourced.$eval('#workResearch', (host) => ({
        claim: host.textContent.includes('Title, author and novel format:'),
        publisher: [...host.querySelectorAll('a')].some((link) =>
            link.hostname === 'www.warhammer-community.com' && link.textContent.includes('Horus Heresy Saga')),
    }));
    await sourced.close();
    if (!result.claim || !result.publisher) throw new Error(JSON.stringify(result));
});

await check('series overview cites checked title and author separately from summaries', async () => {
    const sourced = await newPage({ width: 1200, height: 900 });
    await sourced.goto(new URL('#work=fallen-angels', BASE).href, { waitUntil: 'load' });
    await sourced.waitForSelector('#modalOverlay.active');
    const result = await sourced.$eval('#workResearch', (host) => ({
        claim: host.textContent.includes('Title and author:'),
        link: [...host.querySelectorAll('a')].some((a) => a.hostname === 'www.warhammer-community.com' &&
            a.textContent.includes('series overview')),
        summaryLimit: host.textContent.includes('Publication details and chronology have not all been checked'),
    }));
    await sourced.close();
    if (!result.claim || !result.link || !result.summaryLimit) throw new Error(JSON.stringify(result));
});

await check('numbered novel cites its own Black Library publication page', async () => {
    const sourced = await newPage({ width: 1200, height: 900 });
    await sourced.goto(new URL('#work=descent-of-angels', BASE).href, { waitUntil: 'load' });
    await sourced.waitForSelector('#modalOverlay.active');
    const result = await sourced.$eval('#workResearch', (host) => ({
        claim: host.textContent.includes('Title, author and novel format:'),
        link: [...host.querySelectorAll('a')].some((a) => a.hostname === 'www.blacklibrary.com' &&
            a.textContent === 'Black Library product page'),
    }));
    await sourced.close();
    if (!result.claim || !result.link) throw new Error(JSON.stringify(result));
});

await check('direct publication citations name the actual work format', async () => {
    const sourced = await newPage({ width: 390, height: 844 });
    for (const [key, format] of [
        ['sot-sons-of-selenar', 'novella'],
        ['sot-era-of-ruin', 'anthology'],
        ['tallarn', 'anthology'],
    ]) {
        await sourced.goto(new URL(`#work=${key}`, BASE).href, { waitUntil: 'load' });
        await sourced.waitForSelector('#modalOverlay.active');
        const result = await sourced.evaluate((workKey) => ({
            format: bookData[workKey].format.toLowerCase(),
            citation: document.getElementById('workResearch').textContent,
        }), key);
        if (result.format !== format || !result.citation.includes(`Title, author and ${format} format:`)) {
            throw new Error(`${key}: ${JSON.stringify(result)}`);
        }
    }
    await sourced.close();
});

await check('Garro sources distinguish audio drama, novella and novelisation', async () => {
    const sourced = await newPage({ width: 390, height: 844 });
    for (const [key, title, format] of [
        ['garro-burden-duty', 'GARRO: BURDEN OF DUTY', 'Audio Drama'],
        ['garro-shield-lies', 'GARRO: SHIELD OF LIES', 'Audio Drama'],
        ['garro-vow-faith', 'GARRO: VOW OF FAITH', 'Novella'],
    ]) {
        await sourced.goto(new URL(`#work=${key}`, BASE).href, { waitUntil: 'load' });
        await sourced.waitForSelector('#modalOverlay.active');
        const result = await sourced.evaluate((workKey) => ({
            title: bookData[workKey].title,
            format: bookData[workKey].format,
            citations: document.getElementById('workResearch').textContent,
            urls: [...document.querySelectorAll('#workResearch a')].map((link) => link.href),
        }), key);
        if (result.title !== title || result.format !== format ||
            !result.citations.toLowerCase().includes(`${format.toLowerCase()} format:`) ||
            (key !== 'garro-burden-duty' && !result.urls.some((url) => url.includes('hh-garro-weapon-of-fate-ebook.html')))) {
            throw new Error(`${key}: ${JSON.stringify(result)}`);
        }
    }
    await sourced.close();
});

await check('Mark of Calth cites seven listed stories without silently verifying Athame', async () => {
    const sourced = await newPage({ width: 390, height: 844 });
    await sourced.goto(BASE, { waitUntil: 'load' });
    const listed = await sourced.evaluate(() => publisherCollectionsData.disputed['Mark of Calth'].publisherListed);
    if (listed.length !== 7 || listed.some((entry) => entry.key === 'mark-of-calth-athame')) {
        throw new Error('the disputed publisher list changed');
    }
    for (const [key, cited] of [['mark-of-calth-calth-that-was', true], ['mark-of-calth-athame', false]]) {
        await sourced.goto(new URL(`#work=${key}`, BASE).href, { waitUntil: 'load' });
        await sourced.waitForSelector('#modalOverlay.active');
        const research = await sourced.locator('#workResearch').innerText();
        const hasCitation = research.includes('Title and author listed in');
        if (hasCitation !== cited) throw new Error(`${key}: cited=${hasCitation}`);
        if (!cited && (!research.includes('British National Bibliography record') ||
            !research.includes('Black Library’s current contents list omits this story'))) {
            throw new Error('Athame needs its bibliographic citation and publisher caveat');
        }
    }
    await sourced.close();
});

await check('character links preserve overlapping names and plain text', async () => {
    const result = await page.evaluate(() => {
        const host = document.createElement('div');
        host.innerHTML = makeCharactersClickable('Captain Garviel Loken meets Loken.', false);
        return { text: host.textContent, links: [...host.querySelectorAll('.character-link')].map((x) => x.textContent) };
    });
    if (result.text !== 'Captain Garviel Loken meets Loken.') throw new Error('text was corrupted: ' + result.text);
    if (result.links.join(',') !== 'Garviel Loken,Loken') throw new Error('wrong character links: ' + result.links.join(','));
});

await check('a direct work URL opens the right work on a fresh visit', async () => {
    const fresh = await newPage({ width: 1200, height: 900 }, { firstRun: true });
    await fresh.goto(new URL('#work=horus-rising', BASE).href, { waitUntil: 'load' });
    await fresh.waitForSelector('#modalOverlay.active');
    const title = await fresh.$eval('#modalTitle', (e) => e.textContent);
    const pageTitle = await fresh.title();
    const pageDescription = await fresh.$eval('meta[name="description"]', (e) => e.content);
    const welcome = await fresh.$eval('#welcomeOverlay', (e) => e.classList.contains('active'));
    await fresh.click('#closeModal');
    const hash = await fresh.evaluate(() => location.hash);
    const restoredTitle = await fresh.title();
    await fresh.close();
    if (title !== 'HORUS RISING' || welcome || hash || !pageTitle.includes('HORUS RISING') ||
        !pageDescription || restoredTitle.includes('HORUS RISING')) {
        throw new Error(`${title}, pageTitle=${pageTitle}, welcome=${welcome}, hash=${hash}`);
    }
});

await check('browser Back closes a clicked work and Forward restores it', async () => {
    const visit = await newPage({ width: 1200, height: 900 });
    await visit.goto(BASE, { waitUntil: 'load' });
    await visit.locator('.book-card').first().click();
    const opened = await visit.evaluate(() => location.hash);
    await visit.goBack();
    const closed = await visit.$eval('#modalOverlay', (e) => !e.classList.contains('active'));
    await visit.goForward();
    const restored = await visit.$eval('#modalOverlay', (e) => e.classList.contains('active'));
    await visit.close();
    if (!opened.startsWith('#work=') || !closed || !restored) throw new Error('history did not restore modal state');
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

await check('character work lists use explicit main-character links rather than blurb mentions', async () => {
    await page.evaluate(() => showCharacterModal('rogal-dorn'));
    const list = await page.locator('#characterBooks').textContent();
    await page.evaluate(() => closeCharacterModal());
    if (!list.includes('LISTED AS A MAIN CHARACTER IN:') || !list.includes('PRAETORIAN OF DORN')) {
        throw new Error('explicit character links missing');
    }
    if (list.includes('THE FLIGHT OF THE EISENSTEIN')) {
        throw new Error('a synopsis mention was presented as a character appearance');
    }
});

await check('a character work link replaces the parent detail without stacking modal traps', async () => {
    const linked = await newPage({ width: 1200, height: 900 });
    await linked.goto(new URL('#work=horus-rising', BASE).href);
    await linked.waitForSelector('#modalOverlay.active');
    await linked.evaluate(() => {
        document.getElementById('showSpoilers').checked = true;
        showModal('horus-rising', { updateUrl: false });
        showCharacterModal('garviel-loken');
    });
    await linked.locator('.character-book-item').filter({ hasText: 'FALSE GODS' }).click();
    const result = await linked.evaluate(() => ({
        title: document.getElementById('modalTitle').textContent,
        characterOpen: document.getElementById('characterModalOverlay').classList.contains('active'),
        traps: focusManager._stack.length,
        locked: document.documentElement.classList.contains('modal-open'),
        hash: location.hash,
    }));
    await linked.click('#closeModal');
    await linked.waitForFunction(() => document.getElementById('modalTitle').textContent === 'HORUS RISING');
    const returned = await linked.evaluate(() => ({
        open: document.getElementById('modalOverlay').classList.contains('active'),
        traps: focusManager._stack.length,
    }));
    await linked.click('#closeModal');
    const released = await linked.evaluate(() => focusManager._stack.length === 0 &&
        !document.documentElement.classList.contains('modal-open'));
    await linked.close();
    if (result.title !== 'FALSE GODS' || result.characterOpen || result.traps !== 1 ||
        !result.locked || result.hash !== '#work=false-gods' || !returned.open ||
        returned.traps !== 1 || !released) {
        throw new Error(JSON.stringify({ ...result, returned, released }));
    }
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
            unsafeLinks: [...b.querySelectorAll('a')].filter((a) => a.protocol !== 'https:').length,
        };
    });
    if (r.length < 5000) throw new Error('only ' + r.length + ' chars, the book list is missing');
    if (r.literalQuotes) throw new Error('blockquote markdown rendered literally');
    if (r.orphanListItems) throw new Error(r.orphanListItems + ' list items outside a ul/ol');
    if (r.retiredPrinciple) throw new Error('still shows the retired ordering principle');
    if (r.unsafeLinks) throw new Error('ordering guide contains an unsafe link');

    // The log is generated, so it must reflect the live dataset rather than
    // whatever the data looked like when someone last edited it by hand.
    const body = await page.$eval('#orderingModalBody', (e) => e.innerText);
    const total = await page.evaluate(() => Object.keys(bookData).length);
    if (!body.includes(String(total))) {
        throw new Error(`the log does not mention the current total of ${total} entries`);
    }
    for (const recent of ['SONS OF THE SELENAR', 'FURY OF MAGNUS', 'GARRO: KNIGHT OF GREY', 'ERA OF RUIN']) {
        if (!body.includes(recent)) throw new Error('the log omits ' + recent);
    }
    // The summary table's dates are derived from the data, so a stale value
    // here means the log was not regenerated after a timeline correction.
    for (const stale of ['820-970.M30', '962.M30']) {
        if (body.includes(stale)) throw new Error('the events table still shows the stale value ' + stale);
    }
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

await check('compact list keeps work links and persists across reload', async () => {
    const p = await newPage({ width: 390, height: 844 });
    await p.goto(BASE);
    await p.click('#filterDisclosure');
    await p.click('#layoutToggle');
    const layout = await p.$eval('.book-display', (el) => ({
        list: el.classList.contains('is-list-layout'),
        columns: getComputedStyle(el).gridTemplateColumns,
    }));
    if (!layout.list || layout.columns.includes(' ')) throw new Error('list still uses several columns');
    await p.reload();
    await p.waitForSelector('.book-card');
    if (!await p.$eval('.book-display', (el) => el.classList.contains('is-list-layout'))) {
        throw new Error('layout did not persist');
    }
    await p.locator('.book-card').first().click();
    if (!await p.locator('#modalOverlay').evaluate((el) => el.classList.contains('active'))) {
        throw new Error('list card did not open');
    }
    await p.close();
});

await check('a browse URL restores search, collection and view on a fresh visit', async () => {
    const p = await newPage({ width: 1200, height: 850 });
    await p.goto(BASE + '?view=chronological&q=wolf&collection=The+Silent+War');
    await p.waitForSelector('.book-card');
    const state = await p.evaluate(() => ({
        search: document.getElementById('searchInput').value,
        collection: document.getElementById('collectionFilter').value,
        view: document.getElementById('viewChronological').getAttribute('aria-pressed'),
        cards: document.querySelectorAll('.book-card').length,
    }));
    if (state.search !== 'wolf' || state.collection !== 'The Silent War' || state.view !== 'true' || !state.cards) {
        throw new Error(JSON.stringify(state));
    }
    await p.selectOption('#formatFilter', 'Audio Drama');
    if (!p.url().includes('format=Audio+Drama')) throw new Error('filter was not reflected in URL');
    await p.close();
});
await check('search returns one work for a reprint and shows both of its collections', async () => {
    const p = await newPage({ width: 1200, height: 850 });
    await p.goto(BASE);
    await p.waitForSelector('.book-card');
    await p.fill('#searchInput', 'ARTEFACTS');
    await p.waitForTimeout(400);
    const cards = await p.locator('.book-card').count();
    await p.locator('.book-card').first().click();
    const collections = await p.locator('.collection-browse').allTextContents();
    await p.close();
    if (cards !== 1 || collections.length !== 2) {
        throw new Error(`${cards} search results, ${collections.length} containers`);
    }
});

await check('a collection can mark distinct component works finished in bulk', async () => {
    const p = await newPage({ width: 1200, height: 850 });
    await p.goto(BASE);
    await p.waitForSelector('.book-card');
    await p.selectOption('#collectionFilter', 'Born of Flame');
    const before = await p.$eval('#collectionBulk', (button) => ({ hidden: button.hidden, text: button.textContent }));
    if (before.hidden || !before.text.includes('5')) throw new Error(JSON.stringify(before));
    p.once('dialog', (dialog) => dialog.accept());
    await p.click('#collectionBulk');
    const result = await p.evaluate(() => ({
        finished: document.querySelectorAll('.book-card.book-finished').length,
        count: readingProgress.getCount('finished'),
        reprint: readingProgress.getStatus('war-artefacts'),
    }));
    await p.close();
    if (result.finished !== 5 || result.count !== 5 || result.reprint !== 'finished') {
        throw new Error(JSON.stringify(result));
    }
});
await check('collection ownership survives reload without changing reading progress', async () => {
    const owned = await newPage({ width: 390, height: 844 });
    await owned.goto(BASE);
    await owned.waitForSelector('.book-card');
    await owned.locator('#filterDisclosure').click();
    await owned.selectOption('#collectionFilter', 'Born of Flame');
    await owned.locator('#collectionOwned').click();
    const selected = await owned.locator('#collectionOwned').getAttribute('aria-pressed');
    await owned.reload();
    await owned.waitForSelector('.book-card');
    const result = await owned.evaluate(() => ({
        name: document.getElementById('collectionFilter').value,
        pressed: document.getElementById('collectionOwned').getAttribute('aria-pressed'),
        progress: readingProgress.getCount(),
    }));
    await owned.close();
    if (selected !== 'true' || result.name !== 'Born of Flame' || result.pressed !== 'true' || result.progress !== 0) {
        throw new Error(JSON.stringify({ selected, ...result }));
    }
});

await check('a reprinted work links to each collection and opens a shareable full-catalogue result', async () => {
    const p = await newPage({ width: 1200, height: 850 });
    await p.goto(new URL('?route=core#work=war-artefacts', BASE).href);
    await p.waitForSelector('#modalOverlay.active');
    const names = await p.locator('.collection-browse').allTextContents();
    if (names.length !== 2 || !names.some((name) => name.includes('War Without End')) ||
        !names.some((name) => name.includes('Born of Flame'))) throw new Error(JSON.stringify(names));
    await p.locator('.collection-browse').filter({ hasText: 'Born of Flame' }).click();
    const result = {
        cards: await p.locator('.book-card').count(),
        collection: await p.locator('#collectionFilter').inputValue(),
        focused: await p.evaluate(() => document.activeElement?.className),
        url: new URL(p.url()),
    };
    await p.close();
    if (result.cards !== 5 || result.collection !== 'Born of Flame' || result.focused !== 'filter-info' ||
        result.url.searchParams.get('collection') !== 'Born of Flame' ||
        result.url.searchParams.has('route') || result.url.hash) {
        throw new Error(`${result.cards} cards, ${result.collection}, ${result.url}`);
    }
});

await check('legion sentinels do not leak into the UI', async () => {
    await page.selectOption('#legionFilter', '__LOYALIST__');
    await page.waitForTimeout(400);
    const info = await page.$eval('.filter-info', (e) => e.textContent);
    if (info.includes('__')) throw new Error(info);
});

await check('broad-scope books filter without pretending scope is a Legion', async () => {
    await page.selectOption('#legionFilter', '__BROAD_SCOPE__');
    const result = await page.evaluate(() => ({
        cards: document.querySelectorAll('.book-card').length,
        valid: [...document.querySelectorAll('.book-card')].every((card) =>
            !!bookData[card.dataset.book].factionScope),
        label: document.querySelector('.filter-info')?.textContent,
    }));
    await page.click('#clearAllFilters');
    if (result.cards !== 8 || !result.valid || result.label.includes('__')) {
        throw new Error(JSON.stringify(result));
    }
});

await check('CLEAR ALL resets the sort order too', async () => {
    await page.selectOption('#sortOrder', 'author');
    await page.waitForTimeout(300);
    await page.click('#clearAllFilters');
    await page.waitForTimeout(400);
    const v = await page.$eval('#sortOrder', (e) => e.value);
    if (v !== 'view') throw new Error('sort is ' + v);
});

await check('a collection can be browsed from a story and cleared', async () => {
    await page.evaluate(() => showModal('tales-of-heresy-the-last-church'));
    const button = page.locator('#workCollections .collection-browse');
    if (!(await button.textContent()).includes('Tales of Heresy · 7 listed works')) {
        throw new Error('wrong collection contents count');
    }
    const publisher = await page.$eval('#workCollections .collection-source a', (link) => link.href);
    if (!publisher.startsWith('https://www.blacklibrary.com/')) {
        throw new Error('checked collection lacks publisher source');
    }
    await button.click();
    const selected = await page.$eval('#collectionFilter', (e) => e.value);
    const cards = await page.locator('.book-card').count();
    if (selected !== 'Tales of Heresy' || cards !== 7) throw new Error(`${selected}: ${cards} cards`);
    await page.click('#clearAllFilters');
    if (await page.$eval('#collectionFilter', (e) => e.value)) throw new Error('collection filter not cleared');
});

await check('Garro is labelled a novelisation and Mark of Calth stays disputed', async () => {
    const result = await page.evaluate(() => {
        renderWorkCollections('garro-oath-moment');
        const garro = document.getElementById('workCollections').textContent;
        renderWorkCollections('mark-of-calth-athame');
        const calth = document.getElementById('workCollections').textContent;
        return { garro, calth };
    });
    if (!result.garro.includes('Novelised in this volume') ||
        !result.garro.includes('Black Library explains the relationship') ||
        !result.calth.includes('omits Athame') ||
        !result.calth.includes('Bibliographic record')) {
        throw new Error('collection relationship or dispute is hidden');
    }
});

await check('format filter uses structured fields and resets cleanly', async () => {
    await page.selectOption('#formatFilter', 'Novel');
    const result = await page.evaluate(() => ({
        cards: document.querySelectorAll('.book-card').length,
        allNovels: [...document.querySelectorAll('.book-card')].every((card) =>
            bookData[card.dataset.book].format === 'Novel'),
    }));
    await page.click('#clearAllFilters');
    const reset = await page.$eval('#formatFilter', (e) => e.value);
    if (result.cards !== 65 || !result.allNovels || reset) {
        throw new Error(`${result.cards} novels, all=${result.allNovels}, reset=${reset}`);
    }
});

await check('Primarchs standalones are novels with publisher format evidence', async () => {
    const result = await page.evaluate(() => {
        showModal('primarch-vulkan', { updateUrl: false });
        return {
            format: bookData['primarch-vulkan'].format,
            details: document.getElementById('keyDetails').textContent,
            source: document.getElementById('workResearch').textContent,
        };
    });
    await page.evaluate(() => closeModal({ updateHistory: false }));
    if (result.format !== 'Novel' || !result.details.includes('Type: Novel') ||
        !result.source.includes('Black Library novel catalogue')) throw new Error(JSON.stringify(result));
});
await check('Ferrus Manus direct link uses the corrected publisher title and stable ID', async () => {
    const primarch = await newPage({ width: 1200, height: 850 });
    await primarch.goto(new URL('#work=primarch-ferrus-manus', BASE).href);
    await primarch.waitForSelector('#modalOverlay.active');
    const result = {
        title: await primarch.locator('#modalTitle').textContent(),
        source: await primarch.locator('#workResearch').textContent(),
        url: new URL(primarch.url()).hash,
    };
    await primarch.close();
    if (result.title !== 'FERRUS MANUS: GORGON OF MEDUSA' ||
        !result.source.includes('Black Library product page') || result.url !== '#work=primarch-ferrus-manus') {
        throw new Error(JSON.stringify(result));
    }
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

await check('spoiler-free search ignores the full blurb', async () => {
    await page.uncheck('#showSpoilers');
    await page.fill('#searchInput', 'The Great Mother of the Solaria is killed');
    await page.waitForTimeout(450);
    const hiddenCount = await page.locator('.book-card').count();
    if (hiddenCount !== 0) throw new Error(`${hiddenCount} full-blurb matches leaked`);
    await page.check('#showSpoilers');
    await page.waitForTimeout(450);
    const shownCount = await page.locator('.book-card').count();
    if (shownCount < 1) throw new Error('full-blurb search did not return when enabled');
    await page.fill('#searchInput', '');
    await page.waitForTimeout(450);
});

await check('spoiler-free book and character details hide outcomes', async () => {
    await page.uncheck('#showSpoilers');
    await page.evaluate(() => showModal('titandeath'));
    const details = await page.locator('#keyDetails').innerText();
    await page.evaluate(() => closeModal());
    await page.evaluate(() => showCharacterModal('sanguinius'));
    const character = await page.locator('#characterModalOverlay').innerText();
    await page.evaluate(() => closeCharacterModal());
    await page.check('#showSpoilers');
    if (!details.includes('Character and event details are hidden')) throw new Error('book details were not redacted');
    if (!details.includes('Author: Guy Haley') || !details.includes('Format: Novel')) {
        throw new Error('spoiler-free publication facts are missing');
    }
    if (character.includes('sacrificing himself')) throw new Error('character bio leaked');
    if (!character.includes('Character details are hidden')) throw new Error('character details were not redacted');
});

await check('reviewed safe introductions keep major plot turns out of default work details', async () => {
    const reader = await newPage({ width: 390, height: 844 });
    for (const [key, spoiler] of [
        ['a-thousand-sons', 'Webway Project'],
        ['fulgrim', 'becomes possessed'],
        ['vulkan-lives', 'each time Curze kills him'],
        ['betrayer', 'dark ritual'],
        ['vengeful-spirit', 'warp gate'],
        ['slaves-to-darkness', 'beyond anyone’s command'],
    ]) {
        await reader.goto(new URL(`#work=${key}`, BASE).href, { waitUntil: 'load' });
        await reader.waitForSelector('#modalOverlay.active');
        const result = await reader.evaluate((workKey) => ({
            summary: document.getElementById('blurb').textContent,
            expected: bookData[workKey].blurbSafe,
            citation: document.getElementById('workResearch').textContent,
            link: [...document.querySelectorAll('#workResearch a')].some((a) =>
                a.hostname === 'www.blacklibrary.com' && a.textContent.includes('product description')),
        }), key);
        if (!result.summary.includes(result.expected) || result.summary.includes(spoiler) ||
            !result.citation.includes('external page may contain spoilers') || !result.link) {
            throw new Error(`${key}: ${JSON.stringify(result)}`);
        }
    }
    await reader.close();
});

await check('all Core introductions have publisher reviews and hide the key reveals', async () => {
    const reader = await newPage({ width: 390, height: 844 });
    await reader.goto(new URL('?route=core', BASE).href, { waitUntil: 'load' });
    const reviewed = await reader.evaluate(() => CORE_ROUTE.every((key) =>
        bookData[key].safeSummaryReview?.source.startsWith('https://www.blacklibrary.com/')));
    if (!reviewed) throw new Error('a Core introduction has no individual publisher review');
    for (const [key, spoiler] of [
        ['false-gods', 'Serpent Lodge'],
        ['galaxy-in-flames', 'loyalists within four Legions'],
        ['the-first-heretic', 'Eye of Terror'],
        ['know-no-fear', 'Word Bearers, harboring'],
        ['praetorian-of-dorn', 'infiltration that has been in place'],
        ['the-master-of-mankind', 'Webway'],
    ]) {
        await reader.goto(new URL(`#work=${key}`, BASE).href, { waitUntil: 'load' });
        await reader.waitForSelector('#modalOverlay.active');
        const blurb = await reader.locator('#blurb').innerText();
        if (!blurb.includes('SPOILER-FREE MODE') || blurb.includes(spoiler)) {
            throw new Error(`${key}: ${blurb}`);
        }
    }
    await reader.close();
});

await check('spoiler-free ordering guide hides its event table', async () => {
    await page.uncheck('#showSpoilers');
    await page.click('#orderingGuideBtn');
    await page.waitForTimeout(400);
    const guide = await page.locator('#orderingModalBody').innerText();
    await page.click('#closeOrderingModal');
    await page.check('#showSpoilers');
    if (guide.includes('Isstvan V Drop Site Massacre')) throw new Error('event table leaked');
    if (!guide.includes('hidden while spoilers are off')) throw new Error('missing redaction explanation');
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

await check('a legacy reprint status counts once and reaches both entries', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE);
    await p.evaluate(() => localStorage.setItem('horusHeresyProgress',
        JSON.stringify({ 'flame-artefacts': 'finished' })));
    await p.reload({ waitUntil: 'load' });
    await p.waitForSelector('.book-card');
    const result = await p.evaluate(() => ({
        original: readingProgress.getStatus('war-artefacts'),
        reprint: readingProgress.getStatus('flame-artefacts'),
        finished: readingProgress.getCount('finished'),
        total: readingProgress.getTotalBooks(),
    }));
    await p.evaluate(() => showModal('war-artefacts'));
    await p.click('#markReadBtn');
    const cleared = await p.evaluate(() => ({
        original: readingProgress.getStatus('war-artefacts'),
        reprint: readingProgress.getStatus('flame-artefacts'),
        markedCards: document.querySelectorAll(
            '.book-card[data-book="war-artefacts"].book-finished, .book-card[data-book="flame-artefacts"].book-finished'
        ).length,
    }));
    await p.close();
    if (result.original !== 'finished' || result.reprint !== 'finished') {
        throw new Error('a legacy reprint status did not reach both entries');
    }
    if (result.finished !== 1 || result.total !== 226) {
        throw new Error(`progress counted ${result.finished}/${result.total} works`);
    }
    if (cleared.original || cleared.reprint || cleared.markedCards) {
        throw new Error('clearing one reprint did not clear the work everywhere');
    }
});

await check('old 228-entry transfer codes still restore reprint progress', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE);
    await p.waitForSelector('.book-card');
    const result = await p.evaluate(() => {
        const keys = syncKeyList();
        const bytes = new Uint8Array(Math.ceil(keys.length / 4));
        const index = keys.indexOf('flame-artefacts');
        bytes[index >> 2] = 2 << ((index % 4) * 2);
        const oldCode = `${SYNC_PREFIX}-${syncFingerprint(keys)}-${toBase64Url(bytes)}`;
        const restored = importProgressCode(oldCode);
        return {
            restored,
            original: readingProgress.getStatus('war-artefacts'),
            reprint: readingProgress.getStatus('flame-artefacts'),
            newCode: exportProgressCode(),
        };
    });
    await p.close();
    if (!result.restored.ok || result.restored.applied !== 1 ||
        result.original !== 'finished' || result.reprint !== 'finished') {
        throw new Error('legacy transfer was not migrated as one finished work');
    }
    if (!result.newCode.startsWith('HH2-')) throw new Error('transfer format changed');
});

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
    await context.addInitScript(SEEN_FLAGS);
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
    if (r.ok) throw new Error('a mismatched cipher was accepted');
    // The wording is in-universe, so assert that it explains the cause rather
    // than matching a phrase that flavour changes will keep breaking.
    if (!/revision|version/i.test(r.reason)) throw new Error('unhelpful reason: ' + r.reason);
    if (!/reload/i.test(r.reason)) throw new Error('reason gives no way forward: ' + r.reason);
});

await check('junk input is rejected cleanly', async () => {
    const r = await page.evaluate(() => importProgressCode('not a code'));
    if (r.ok) throw new Error('junk accepted');
});

await check('plain JSON progress restores work IDs and rejects invalid files', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE, { waitUntil: 'load' });
    await p.waitForSelector('.book-card');
    const exported = await p.evaluate(() => {
        readingProgress.setStatus('flame-artefacts', 'finished');
        readingProgress.setStatus('horus-rising', 'reading');
        return exportProgressFile();
    });
    if (exported.works['war-artefacts'] !== 'finished' || exported.works['flame-artefacts']) {
        throw new Error('file did not use canonical work IDs');
    }
    await p.evaluate(() => readingProgress.save({}));
    await p.click('#syncBtn');
    await p.setInputFiles('#uploadProgress', {
        name: 'progress.json', mimeType: 'application/json',
        buffer: Buffer.from(JSON.stringify(exported)),
    });
    await p.waitForFunction(() => document.getElementById('syncStatus').textContent.includes('restored from JSON'));
    const restored = await p.evaluate(() => ({
        first: readingProgress.getStatus('war-artefacts'),
        reprint: readingProgress.getStatus('flame-artefacts'),
        second: readingProgress.getStatus('horus-rising'),
    }));
    await p.setInputFiles('#uploadProgress', {
        name: 'invalid.json', mimeType: 'application/json',
        buffer: Buffer.from(JSON.stringify({ ...exported, works: { unknown: 'finished' } })),
    });
    await p.waitForFunction(() => document.getElementById('syncStatus').textContent.includes('not a supported'));
    const afterInvalid = await p.evaluate(() => readingProgress.getCount());
    await p.close();
    if (restored.first !== 'finished' || restored.reprint !== 'finished' ||
        restored.second !== 'reading' || afterInvalid !== 2) {
        throw new Error('JSON restore lost or changed a work status');
    }
});

await check('plain JSON backup downloads a readable file', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE, { waitUntil: 'load' });
    await p.waitForSelector('.book-card');
    await p.evaluate(() => readingProgress.setStatus('horus-rising', 'finished'));
    await p.click('#syncBtn');
    const [download] = await Promise.all([
        p.waitForEvent('download'),
        p.click('#downloadProgress'),
    ]);
    const chunks = [];
    for await (const chunk of await download.createReadStream()) chunks.push(chunk);
    await p.close();
    const payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (download.suggestedFilename() !== 'horus-heresy-progress.json' ||
        payload.works['horus-rising'] !== 'finished') {
        throw new Error('download did not contain the marked work');
    }
});

await check('plain JSON backup restores owned collections and rejects unknown IDs', async () => {
    const p = await newPage({ width: 1200, height: 900 });
    await p.goto(BASE);
    await p.waitForSelector('.book-card');
    const result = await p.evaluate(() => {
        saveOwnedCollections(new Set(['born-of-flame']));
        const backup = exportProgressFile();
        saveOwnedCollections(new Set());
        const restored = importProgressFile(backup);
        const invalid = importProgressFile({ ...backup, ownedCollections: ['unknown-volume'] });
        const legacy = importProgressFile({ format: backup.format, version: 1, works: {} });
        return { backup: backup.ownedCollections, restored, invalid,
            legacy, owned: [...loadOwnedCollections()] };
    });
    await p.close();
    if (!result.backup.includes('born-of-flame') || !result.restored.ok || result.invalid.ok || !result.legacy.ok ||
        !result.owned.includes('born-of-flame')) throw new Error(JSON.stringify(result));
});

console.log('\nOnboarding');

await check('a first visit explains that progress is saved locally', async () => {
    const context = await browser.newContext();
    const first = await context.newPage();
    await first.goto(BASE, { waitUntil: 'load' });
    await first.waitForSelector('.book-card');
    await first.waitForTimeout(1200);

    const shown = await first.evaluate(() =>
        document.getElementById('welcomeOverlay').classList.contains('active'));
    if (!shown) throw new Error('the first-run panel did not appear');

    const text = await first.$eval('#welcomeOverlay', (e) => e.innerText);
    // Two things have to hold together: the framing stays in the setting, and
    // the consequence of losing data stays in plain language.
    if (!/dataslate/i.test(text)) throw new Error('not framed in the setting');
    if (!/browser data will erase it/i.test(text)) {
        throw new Error('the data-loss warning is not plainly worded');
    }
    if (!/⇄/.test(text)) throw new Error('does not point at the transfer control');

    await first.click('#welcomeBegin');
    await first.waitForTimeout(400);
    await first.reload({ waitUntil: 'load' });
    await first.waitForSelector('.book-card');
    await first.waitForTimeout(900);
    const again = await first.evaluate(() =>
        document.getElementById('welcomeOverlay').classList.contains('active'));
    await context.close();
    if (again) throw new Error('it reappeared on the second visit');
});

await check('marking a first book warns that progress is browser-only', async () => {
    const context = await browser.newContext();
    const page2 = await context.newPage();
    await page2.goto(BASE, { waitUntil: 'load' });
    await page2.waitForSelector('.book-card');
    await page2.waitForTimeout(1200);
    await page2.evaluate(() => document.getElementById('welcomeBegin').click());
    await page2.waitForTimeout(400);

    await page2.evaluate(() => document.querySelectorAll('.book-card')[2].click());
    await page2.waitForTimeout(400);
    await page2.evaluate(() => document.getElementById('markReadBtn').click());
    await page2.waitForTimeout(700);

    const toast = await page2.evaluate(() => {
        const el = document.getElementById('progressToast');
        return { visible: !el.hidden && el.classList.contains('is-visible'), text: el.innerText };
    });
    if (!toast.visible) throw new Error('no save hint appeared');
    if (!/dataslate/i.test(toast.text)) throw new Error('not framed in the setting: ' + toast.text);
    if (!/browser data will erase it/i.test(toast.text)) {
        throw new Error('the data-loss warning is not plainly worded: ' + toast.text);
    }

    // It must not nag on every subsequent change.
    await page2.evaluate(() => document.getElementById('toastDismiss').click());
    await page2.waitForTimeout(500);
    await page2.keyboard.press('Escape');
    await page2.waitForTimeout(300);
    await page2.evaluate(() => document.querySelectorAll('.book-card')[6].click());
    await page2.waitForTimeout(400);
    await page2.evaluate(() => document.getElementById('markReadBtn').click());
    await page2.waitForTimeout(600);
    const repeated = await page2.evaluate(() =>
        document.getElementById('progressToast').classList.contains('is-visible'));
    await context.close();
    if (repeated) throw new Error('the hint repeated on a later change');
});

await check('the progress counter carries a persistent sync affordance', async () => {
    const text = await page.$eval('#progressHint', (e) => e.innerText.replace(/\n/g, ' '));
    if (!/dataslate/i.test(text)) throw new Error('hint reads: ' + text);
    await page.evaluate(() => document.getElementById('progressHint').click());
    await page.waitForTimeout(500);
    const open = await page.evaluate(() =>
        document.getElementById('syncModalOverlay').classList.contains('active'));
    if (!open) throw new Error('it does not open the sync panel');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

await check('a sync link is not blocked by the first-run panel', async () => {
    // Someone arriving on a restore link came to restore, not to read an intro.
    const context = await browser.newContext();
    const linked = await context.newPage();
    linked.on('dialog', (d) => d.accept());
    await linked.goto(BASE + '#s=HH2-badbadb-AAAA', { waitUntil: 'load' });
    await linked.waitForSelector('.book-card');
    await linked.waitForTimeout(1300);
    const blocked = await linked.evaluate(() =>
        document.getElementById('welcomeOverlay').classList.contains('active'));
    await context.close();
    if (blocked) throw new Error('the panel got in the way of a restore');
});

console.log('\nIn-universe wording');

await check('the transfer panel is framed in the setting', async () => {
    await page.evaluate(() => document.getElementById('syncBtn').click());
    await page.waitForTimeout(500);
    const text = await page.$eval('#syncModalOverlay', (e) => e.innerText);
    for (const needed of [/DATASLATE TRANSFER/i, /dataslate/i, /cipher/i, /astropath/i]) {
        if (!needed.test(text)) throw new Error('missing ' + needed);
    }
    for (const stale of [/progress code/i, /another device/i]) {
        if (stale.test(text)) throw new Error('still uses out-of-universe wording: ' + stale);
    }
});

await check('the overwrite consequence is still stated plainly', async () => {
    // Flavour belongs on labels, not on warnings about losing data.
    const text = await page.$eval('#syncModalOverlay', (e) => e.innerText);
    if (!/overwrites the record held here/i.test(text)) {
        throw new Error('the overwrite consequence is not plainly stated');
    }
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

await check('the save hint keeps a plain data-loss warning', async () => {
    const text = await page.$eval('#progressToast', (e) => e.innerText);
    if (!/dataslate/i.test(text)) throw new Error('not in-universe: ' + text);
    if (!/browser data will erase it/i.test(text)) {
        throw new Error('the data-loss warning is not plain: ' + text);
    }
});

console.log('\nNumerals');

await check('High Gothic numerals are the default', async () => {
    const numbers = await page.$$eval('.book-number-overlay', (e) => e.slice(0, 6).map((x) => x.textContent));
    if (!numbers.some((n) => /^[IVXLCDM]+(\.\d+)?$/.test(n))) {
        throw new Error('no Roman numerals present: ' + numbers.join(', '));
    }
});

await check('toggling to Low Gothic converts the numerals', async () => {
    await page.evaluate(() => {
        const d = document.getElementById('filterDisclosure');
        if (d && getComputedStyle(d).display !== 'none') d.click();
    });
    await page.check('#lowGothicNumerals');
    await page.waitForTimeout(600);
    const numbers = await page.$$eval('.book-number-overlay', (e) => e.slice(0, 6).map((x) => x.textContent));
    if (numbers.some((n) => /^[IVXLCDM]+(\.\d+)?$/.test(n))) {
        throw new Error('still Roman: ' + numbers.join(', '));
    }
});

await check('series prefixes are not mangled by the conversion', async () => {
    // P9 and SoT 8a are already Low Gothic, so they must pass through untouched.
    const r = await page.evaluate(() => ['primarch-vulkan', 'sot-solar-war', 'sot-end-and-death-vol-1']
        .map((k) => [bookData[k].number, displayBookNumber(bookData[k].number)]));
    for (const [before, after] of r) {
        if (before !== after) throw new Error(`${before} became ${after}`);
    }
});

await check('the numeral preference survives a reload', async () => {
    await page.reload({ waitUntil: 'load' });
    await page.waitForSelector('.book-card');
    await page.waitForTimeout(900);
    const checked = await page.evaluate(() => document.getElementById('lowGothicNumerals').checked);
    if (!checked) throw new Error('the toggle reset');
    const numbers = await page.$$eval('.book-number-overlay', (e) => e.slice(0, 4).map((x) => x.textContent));
    if (numbers.some((n) => /^[IVXLCDM]+(\.\d+)?$/.test(n))) throw new Error('reverted to Roman');
    // Leave the suite in its default state for anything that follows.
    await page.evaluate(() => {
        const d = document.getElementById('filterDisclosure');
        if (d && getComputedStyle(d).display !== 'none') d.click();
    });
    await page.uncheck('#lowGothicNumerals');
    await page.waitForTimeout(500);
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
await check('mobile: long work titles clear the dialog close button', async () => {
    const mobile = await newPage({ width: 390, height: 844 });
    await mobile.goto(new URL('#work=primarch-ferrus-manus', BASE).href);
    await mobile.waitForSelector('#modalOverlay.active');
    const result = await mobile.evaluate(() => {
        const title = document.querySelector('#modalOverlay .modal-title');
        const close = document.getElementById('closeModal');
        return {
            titleRight: title.getBoundingClientRect().right,
            closeLeft: close.getBoundingClientRect().left,
            overflow: title.scrollWidth - title.clientWidth,
        };
    });
    await mobile.close();
    if (result.titleRight > result.closeLeft - 4 || result.overflow > 1) throw new Error(JSON.stringify(result));
});

await check('narrow phones keep all three accessible view controls on one row', async () => {
    const narrow = await newPage({ width: 320, height: 800 });
    await narrow.goto(BASE, { waitUntil: 'load' });
    const result = await narrow.evaluate(() => {
        const buttons = [...document.querySelectorAll('.view-btn')];
        return {
            tops: buttons.map((button) => Math.round(button.getBoundingClientRect().top)),
            labels: buttons.map((button) => button.getAttribute('aria-label')),
            overflow: document.documentElement.scrollWidth - innerWidth,
        };
    });
    await narrow.close();
    if (new Set(result.tops).size !== 1 || result.labels.some((label) => !label) || result.overflow > 1) {
        throw new Error(JSON.stringify(result));
    }
});

await check('mobile: pinch-zoom is not blocked', async () => {
    const ta = await mobile.evaluate(() => getComputedStyle(document.body).touchAction);
    if (ta === 'pan-y') throw new Error('touch-action: pan-y blocks pinch-zoom, failing WCAG 1.4.4');
});

await check('sources page opens and stays within the mobile viewport', async () => {
    const sourcePage = await newPage({ width: 390, height: 844 });
    await sourcePage.goto(new URL('sources.html', BASE).href, { waitUntil: 'load' });
    const result = await sourcePage.evaluate(() => ({
        title: document.querySelector('h1')?.textContent,
        overflow: document.documentElement.scrollWidth - innerWidth,
        correction: !!document.querySelector('a[href*="issues/new"]'),
    }));
    await sourcePage.close();
    if (result.title !== 'Sources and corrections' || !result.correction || result.overflow > 1) {
        throw new Error(JSON.stringify(result));
    }
});

console.log('\nEvent atlas');
await check('event atlas renders fifteen cited arcs without mobile overflow', async () => {
    const atlas = await newPage({ width: 390, height: 844 });
    await atlas.goto(new URL('events.html', BASE).href);
    const result = await atlas.evaluate(() => ({
        count: document.querySelectorAll('.event-card').length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        sources: [...document.querySelectorAll('.event-source a')].every((link) =>
            link.protocol === 'https:' && link.rel.includes('noopener')),
    }));
    await atlas.close();
    if (result.count !== 15 || result.overflow > 1 || !result.sources) throw new Error(JSON.stringify(result));
});

await check('mobile event index expands and jumps to a selected arc', async () => {
    const atlas = await newPage({ width: 390, height: 844 });
    await atlas.goto(new URL('events.html', BASE).href);
    const firstTop = await atlas.locator('.event-card').first().evaluate((element) => element.getBoundingClientRect().top);
    if (firstTop >= 844) throw new Error(`first event starts at ${firstTop}px`);
    await atlas.locator('.event-navigation summary').click();
    await atlas.locator('#eventJump a[href="#prospero"]').click();
    const focused = await atlas.evaluate(() => document.activeElement?.id);
    const fragment = new URL(atlas.url()).hash;
    await atlas.close();
    if (focused !== 'prospero' || fragment !== '#prospero') throw new Error(`${focused}, ${fragment}`);
});

await check('a direct Prospero link shows both viewpoints and opens the named work', async () => {
    const atlas = await newPage({ width: 1200, height: 850 });
    await atlas.goto(new URL('events.html#prospero', BASE).href);
    const focused = await atlas.evaluate(() => document.activeElement?.id);
    const text = await atlas.locator('#prospero').textContent();
    await atlas.locator('#prospero .event-works a').first().click();
    await atlas.waitForSelector('#modalOverlay.active');
    const title = await atlas.locator('#modalTitle').textContent();
    await atlas.close();
    if (focused !== 'prospero' || !text.includes('Thousand Sons viewpoint') ||
        !text.includes('Space Wolves viewpoint') || title !== 'A THOUSAND SONS') {
        throw new Error(`${focused}, ${title}`);
    }
});

await check('work event links stay hidden until spoilers are enabled', async () => {
    const work = await newPage({ width: 1200, height: 850 });
    await work.goto(new URL('#work=know-no-fear', BASE).href);
    await work.waitForSelector('#modalOverlay.active');
    const hidden = await work.locator('#workEvents').evaluate((element) => element.hidden);
    await work.evaluate(() => {
        document.getElementById('showSpoilers').checked = true;
        showModal('know-no-fear', { updateUrl: false });
    });
    const link = work.locator('#workEvents a');
    const label = await link.textContent();
    await link.click();
    await work.waitForSelector('#calth');
    const destination = new URL(work.url());
    await work.close();
    if (!hidden || label !== 'Calth' || !destination.pathname.endsWith('/events.html') ||
        destination.hash !== '#calth') throw new Error(`${hidden}, ${label}, ${destination}`);
});

await check('work detail distinguishes chart prerequisites and follows them', async () => {
    const work = await newPage({ width: 1200, height: 850 });
    await work.goto(new URL('#work=prospero-burns', BASE).href);
    await work.waitForSelector('#modalOverlay.active');
    const hidden = await work.locator('#workRelationships').evaluate((element) => element.hidden);
    await work.evaluate(() => {
        document.getElementById('showSpoilers').checked = true;
        showModal('prospero-burns', { updateUrl: false });
    });
    const text = await work.locator('#workRelationships').textContent();
    await work.locator('#workRelationships button').filter({ hasText: 'A THOUSAND SONS' }).click();
    const title = await work.locator('#modalTitle').textContent();
    await work.close();
    if (!hidden || !text.includes('Read first in the chart') ||
        !text.includes('Daunt’s timeline') || title !== 'A THOUSAND SONS') {
        throw new Error(`${hidden}, ${title}`);
    }
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
