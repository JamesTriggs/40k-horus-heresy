#!/usr/bin/env node
// A short reader journey in engines other than the full Chromium suite.
import { firefox, webkit } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:8899/';
for (const [name, engine] of [['Firefox', firefox], ['WebKit', webkit]]) {
    const browser = await engine.launch();
    try {
        for (const viewport of [{ width: 1280, height: 850 }, { width: 390, height: 844 }]) {
            const context = await browser.newContext({ viewport });
            await context.addInitScript(() => localStorage.setItem('horusHeresySeenWelcome', '1'));
            const page = await context.newPage();
            const errors = [];
            page.on('pageerror', (error) => errors.push(error.message));
            await page.goto(base, { waitUntil: 'load' });
            await page.waitForSelector('.book-card');
            const first = await page.locator('.book-card').first().getAttribute('aria-label');
            if (!first?.includes('HORUS RISING')) throw new Error(`${name}: wrong starting book: ${first}`);
            await page.click('#coreRoute');
            if (await page.locator('.book-card').count() !== 12) throw new Error(`${name}: Core route count changed`);
            await page.click('#fullRoute');
            await page.locator('.book-card').first().click();
            await page.waitForSelector('#modalOverlay.active');
            if (!await page.title().then((title) => title.includes('HORUS RISING'))) {
                throw new Error(`${name}: work title missing`);
            }
            await page.click('#closeModal');
            if (viewport.width < 769) await page.click('#filterDisclosure');
            await page.selectOption('#collectionFilter', 'Born of Flame');
            if (await page.locator('.book-card').count() !== 5) throw new Error(`${name}: collection filter failed`);
            await page.click('#viewChart');
            await page.waitForSelector('#chartSvg');
            if (await page.locator('.chart-node').count() !== 185) throw new Error(`${name}: chart node count changed`);
            const width = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
            if (width > 1) throw new Error(`${name}: horizontal overflow of ${width}px`);
            if (errors.length) throw new Error(`${name}: ${errors.join('; ')}`);
            console.log(`PASS ${name} ${viewport.width}px`);
            await context.close();
        }
    } finally {
        await browser.close();
    }
}
