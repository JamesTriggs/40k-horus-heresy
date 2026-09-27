#!/usr/bin/env node
// Open every canonical work URL in a real phone-sized browser. This catches
// missing assets and broken deep links that sampled journeys cannot see.
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:8899/';
const identities = JSON.parse(readFileSync(new URL('../data/work-identities.json', import.meta.url), 'utf8')).identities;
const books = JSON.parse(readFileSync(new URL('../data/books.json', import.meta.url), 'utf8'));
const characters = JSON.parse(readFileSync(new URL('../data/characters.json', import.meta.url), 'utf8'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.addInitScript(() => {
    localStorage.setItem('horusHeresySeenWelcome', '1');
    localStorage.setItem('horusHeresySeenSaveHint', '1');
});
const failures = [];
let currentId = '';
page.on('pageerror', (error) => failures.push(`${currentId}: page error: ${error.message}`));
page.on('console', (message) => {
    if (message.type() === 'error') failures.push(`${currentId}: console error: ${message.text()}`);
});
page.on('response', (response) => {
    if (response.url().startsWith(base) && response.status() >= 400) {
        failures.push(`${currentId}: HTTP ${response.status()} ${response.url()}`);
    }
});

try {
    for (const identity of identities) {
        currentId = identity.id;
        const url = new URL(`#work=${encodeURIComponent(identity.id)}`, base).href;
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#modalOverlay.active');
        const result = await page.evaluate(async () => {
            const cover = document.querySelector('.modal-book-cover img');
            await cover?.decode().catch(() => {});
            return {
                title: document.querySelector('#modalTitle')?.textContent,
                pageTitle: document.title,
                meta: document.querySelector('meta[name="description"]')?.content,
                coverLoaded: !!cover?.naturalWidth,
                overflow: document.documentElement.scrollWidth - innerWidth,
                linkedId: new URLSearchParams(location.hash.slice(1)).get('work'),
            };
        });
        if (result.title !== identity.title || !result.pageTitle.startsWith(identity.title + ' |') ||
            !result.meta || !result.coverLoaded || result.overflow > 1 || result.linkedId !== identity.id) {
            failures.push(`${identity.id}: ${JSON.stringify(result)}`);
        }
        const staticResponse = await page.request.get(new URL(`work/${identity.id}/`, base).href);
        const staticHtml = await staticResponse.text();
        if (!staticResponse.ok() || !staticHtml.includes('<h1>') ||
            !staticHtml.includes(`index.html#work=${identity.id}`) ||
            (!books[identity.legacyKeys[0]].safeSummaryReview &&
                !staticHtml.includes('Introduction pending spoiler review'))) {
            failures.push(`${identity.id}: standalone page is missing, incomplete or reveals unreviewed copy`);
        }
    }
    for (const [id, character] of Object.entries(characters)) {
        currentId = `character:${id}`;
        await page.goto(new URL(`#character=${encodeURIComponent(id)}`, base).href,
            { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#characterModalOverlay.active');
        const result = await page.evaluate(async () => {
            const portrait = document.querySelector('#characterImage');
            await portrait?.decode().catch(() => {});
            return {
                name: document.querySelector('#characterName')?.textContent,
                pageTitle: document.title,
                portraitLoaded: !!portrait?.naturalWidth,
                overflow: document.documentElement.scrollWidth - innerWidth,
                linkedId: new URLSearchParams(location.hash.slice(1)).get('character'),
            };
        });
        if (result.name !== character.name || !result.pageTitle.startsWith(character.name + ' |') ||
            !result.portraitLoaded || result.overflow > 1 || result.linkedId !== id) {
            failures.push(`character:${id}: ${JSON.stringify(result)}`);
        }
    }
    const indexResponse = await page.request.get(new URL('works.html', base).href);
    const indexHtml = await indexResponse.text();
    if (!indexResponse.ok() ||
        identities.some((identity) => !indexHtml.includes(`work/${identity.id}/`))) {
        failures.push('The public work index is missing a canonical work link');
    }
} finally {
    await browser.close();
}

if (failures.length) {
    for (const failure of failures.slice(0, 25)) console.error('FAIL', failure);
    if (failures.length > 25) console.error(`...and ${failures.length - 25} more failures`);
    process.exitCode = 1;
} else {
    console.log(`PASS all ${identities.length} work and ${Object.keys(characters).length} character URLs, images and phone layouts, plus standalone work pages`);
}
