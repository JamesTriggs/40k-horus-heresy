#!/usr/bin/env node
// Automated accessibility audit of the main reader journeys.
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const base = process.env.BASE_URL || 'http://localhost:8899/';
const browser = await chromium.launch();
let failed = 0;

async function audit(name, viewport, action) {
    const context = await browser.newContext({ viewport });
    await context.addInitScript(() => localStorage.setItem('horusHeresySeenWelcome', '1'));
    const page = await context.newPage();
    try {
        await page.goto(base, { waitUntil: 'load' });
        if (action) await action(page);
        const { violations } = await new AxeBuilder({ page }).analyze();
        if (violations.length) {
            failed += violations.length;
            for (const violation of violations) {
                console.error(`${name}: ${violation.id} (${violation.impact}), ${violation.nodes.length} node(s)`);
                for (const node of violation.nodes.slice(0, 3)) console.error(`  ${node.target.join(' ')}`);
            }
        } else console.log(`PASS ${name}`);
    } finally {
        await context.close();
    }
}

await audit('desktop catalogue', { width: 1280, height: 800 }, (page) => page.waitForSelector('.book-card'));
await audit('mobile catalogue', { width: 390, height: 844 }, (page) => page.waitForSelector('.book-card'));
await audit('returning reader', { width: 390, height: 844 }, async (page) => {
    await page.evaluate(() => localStorage.setItem('horusHeresyProgress', JSON.stringify({ 'horus-rising': 'reading' })));
    await page.reload({ waitUntil: 'load' });
    await page.waitForSelector('#continueReading:not([hidden])');
});
await audit('work detail', { width: 1280, height: 800 }, async (page) => {
    await page.waitForSelector('.book-card');
    await page.locator('.book-card').first().click();
    await page.waitForSelector('#modalOverlay.active');
});
for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
    await audit(`character profile ${viewport.width}px`, viewport, async (page) => {
        await page.waitForSelector('.book-card');
        await page.evaluate(() => {
            document.getElementById('showSpoilers').checked = true;
            showCharacterModal('rogal-dorn');
        });
        await page.waitForSelector('#characterModalOverlay.active');
    });
}
await audit('storyline chart', { width: 1280, height: 800 }, async (page) => {
    await page.click('#viewChart');
    await page.waitForSelector('#chartSvg');
});
await audit('sources page', { width: 390, height: 844 }, (page) => page.goto(new URL('sources.html', base).href));
for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
    await audit(`event atlas ${viewport.width}px`, viewport,
        (page) => page.goto(new URL('events.html', base).href));
}

await browser.close();
if (failed) process.exitCode = 1;
