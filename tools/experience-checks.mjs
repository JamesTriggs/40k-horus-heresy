#!/usr/bin/env node
// Focused reader journeys for the Stages 1–3 experience pass.
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:8899/';
const browser = await chromium.launch();
const errors = [];
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.setDefaultTimeout(5000);
await page.addInitScript(() => {
    localStorage.setItem('horusHeresySeenWelcome', '1');
    if (!localStorage.getItem('horusHeresyProgress')) {
        localStorage.setItem('horusHeresyProgress', JSON.stringify({ 'horus-rising': 'finished' }));
    }
});
page.on('pageerror', (error) => errors.push(error.message));
page.on('response', (response) => {
    if (response.url().startsWith(base) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
});

try {
    await page.goto(new URL('?route=novels&status=unread', base).href);
    await page.waitForSelector('.book-card');
    const route = new URL(page.url()).searchParams;
    if (route.get('route') !== 'novels' || route.get('status') !== 'unread') throw new Error('novel and status route was lost');
    if (await page.locator('.book-card[data-book="horus-rising"]').count()) throw new Error('finished work survived unread filter');
    const novels = await page.locator('.book-card').evaluateAll((cards) => cards.map((card) => card.dataset.book));
    const invalidNovel = await page.evaluate((keys) => keys.find((key) => bookData[key].format !== 'Novel'), novels);
    if (novels.length !== 64 || invalidNovel) throw new Error(`novel route has ${novels.length} unread works or includes ${invalidNovel}`);
    await page.locator('.book-card[data-book="false-gods"]').click();
    await page.locator('#markReadBtn').click();
    await page.locator('#closeModal').click();
    if (await page.locator('.book-card[data-book="false-gods"]').count() ||
        await page.locator('.book-card').count() !== 63) throw new Error('Not Started results stayed stale after marking Reading');
    await page.goto(new URL('?route=novels&status=reading', base).href);
    await page.waitForSelector('.book-card[data-book="false-gods"]');
    await page.locator('.book-card[data-book="false-gods"]').click();
    await page.locator('#markReadBtn').click();
    await page.locator('#closeModal').click();
    if (await page.locator('.book-card').count() ||
        !await page.locator('.filter-info').evaluate((result) => result === document.activeElement)) {
        throw new Error('Reading results or keyboard focus stayed stale after marking Finished');
    }
    await page.goto(new URL('?route=full&status=finished&format=Novel&legion=Sons+of+Horus', base).href);
    await page.waitForSelector('.book-card');
    const combined = await page.locator('.book-card').evaluateAll((cards) => cards.map((card) => card.dataset.book));
    const invalidCombined = await page.evaluate((keys) => keys.find((key) =>
        bookData[key].format !== 'Novel' || !bookData[key].legions.includes('Sons of Horus') ||
        readingProgress.getStatus(key) !== 'finished'), combined);
    if (!combined.length || invalidCombined) throw new Error(`combined status filter included ${invalidCombined}`);
    await page.goto(new URL('?route=novels&status=finished', base).href);
    await page.waitForSelector('.book-card[data-book="horus-rising"]');
    await page.locator('.book-card[data-book="horus-rising"]').click();
    await page.locator('#markReadBtn').click();
    await page.locator('#closeModal').click();
    if (await page.locator('.book-card[data-book="horus-rising"]').count()) throw new Error('Finished results stayed stale after clearing status');
    await page.locator('#findStory').click();
    if (!await page.locator('#searchInput').isVisible() || !await page.locator('#searchInput').evaluate((input) => input === document.activeElement)) {
        throw new Error('Find a story did not focus the search field on a phone');
    }
    await page.locator('#searchInput').fill('The Last Church');
    await page.waitForFunction(() => document.querySelectorAll('.book-card').length === 1 &&
        document.querySelector('.book-card .book-title')?.textContent === 'THE LAST CHURCH');
    if (new URL(page.url()).searchParams.get('route')) {
        throw new Error('Find a story did not search the full catalogue');
    }
    await page.goto(new URL('factions.html?legion=Thousand+Sons', base).href);
    if (await page.locator('#factionTitle').textContent() !== 'Thousand Sons') throw new Error('direct faction link failed');
    if (!await page.locator('#factionEvents a[href="events.html#prospero"]').count()) throw new Error('Prospero event link missing');
    if (!await page.locator('#factionWorks a[href*="work=a-thousand-sons"]').count()) throw new Error('faction work link missing');
    if (await page.locator('#factionWorks li').count() !== 15) throw new Error('faction work identities were duplicated or lost');
    await page.selectOption('#factionPicker', 'Space Wolves');
    await page.waitForURL(/legion=Space%20Wolves/);
    if (await page.locator('#factionTitle').textContent() !== 'Space Wolves') throw new Error('faction picker did not navigate');
    await page.selectOption('#factionPicker', 'Orks');
    await page.waitForURL(/legion=Orks/);
    if (!await page.locator('#factionEvents').textContent().then((value) => value.includes('No event'))) {
        throw new Error('zero-event faction had no clear fallback');
    }
    await page.goto(new URL('factions.html?legion=Thousand+Sons', base).href);
    if (!await page.locator('#browseFaction[href*="legion=Thousand%20Sons"]').count()) throw new Error('Archive filter link missing');
    await page.evaluate(() => localStorage.setItem('horusHeresyRoute', 'core'));
    await page.locator('#browseFaction').click();
    await page.waitForSelector('.book-card');
    if (new URL(page.url()).searchParams.get('route') !== 'full' || await page.locator('.book-card').count() < 12) {
        throw new Error('faction browse did not leave a saved Core route');
    }
    await page.locator('.book-card[data-book="a-thousand-sons"]').click();
    if (!await page.locator('#workFactions a[href*="Thousand%20Sons"]').count()) {
        throw new Error('work detail lost its faction link');
    }
    await page.goto(new URL('events.html#prospero', base).href);
    if (!await page.locator('#prospero a[href*="factions.html?legion=Thousand%20Sons"]').count()) {
        throw new Error('event atlas did not link back to faction');
    }
    await page.goto(base);
    await page.waitForSelector('.book-card');
    await page.locator('#fullRoute').click();
    await page.locator('#nextReadGuide summary').click();
    await page.selectOption('#nextReadFormat', 'Audio Drama');
    const firstAudio = await page.locator('#nextReadPrimary').getAttribute('data-work-key');
    const firstFormat = await page.evaluate((key) => bookData[key]?.format, firstAudio);
    if (firstFormat !== 'Audio Drama') throw new Error(`format preference suggested ${firstFormat}`);
    await page.reload();
    await page.waitForSelector('.book-card');
    if (await page.locator('#nextReadFormat').inputValue() !== 'Audio Drama') throw new Error('format preference was not saved');
    await page.locator('#coreRoute').click();
    await page.locator('#nextReadGuide summary').click();
    const core = await page.locator('#nextReadPrimary').textContent();
    if (!core.includes('HORUS RISING') || !await page.locator('#nextReadFormat').isDisabled()) {
        throw new Error('format preference incorrectly changed the publisher Core route');
    }
    await page.locator('#fullRoute').click();
    const animated = await page.evaluate(() => {
        const select = document.getElementById('nextReadFormat');
        select.value = 'Short Story';
        select.dispatchEvent(new Event('change', { bubbles: true }));
        return document.getElementById('nextReadContent').getAnimations().length;
    });
    if (!animated) throw new Error('suggestion change had no motion');
    await page.waitForFunction(() => document.getElementById('nextReadContent').getAnimations().length === 0);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const reduced = await page.evaluate(() => {
        const select = document.getElementById('nextReadFormat');
        select.value = 'Novel';
        select.dispatchEvent(new Event('change', { bubbles: true }));
        return document.getElementById('nextReadContent').getAnimations().length;
    });
    if (reduced) throw new Error('suggestion animation ignored reduced motion');
    if (errors.length) throw new Error(errors.join('; '));
    console.log('PASS mobile discovery, faction connections, and saved format guidance');
} finally {
    await browser.close();
}
