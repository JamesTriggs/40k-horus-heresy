#!/usr/bin/env node
// A short reader journey in engines other than the full Chromium suite.
import { firefox, webkit } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:8899/';
for (const [name, engine] of [['Firefox', firefox], ['WebKit', webkit]]) {
    const browser = await engine.launch();
    try {
        for (const viewport of [{ width: 1280, height: 850 }, { width: 390, height: 844 }, { width: 320, height: 844 }]) {
            const context = await browser.newContext({ viewport });
            await context.addInitScript(() => localStorage.setItem('horusHeresySeenWelcome', '1'));
            const page = await context.newPage();
            const errors = [];
            page.on('pageerror', (error) => errors.push(error.message));
            await page.goto(base, { waitUntil: 'load' });
            await page.waitForSelector('.book-card');
            const first = await page.locator('.book-card').first().getAttribute('aria-label');
            if (!first?.includes('HORUS RISING')) throw new Error(`${name}: wrong starting book: ${first}`);
            await page.locator('#nextReadGuide summary').click();
            await page.selectOption('#nextReadFormat', 'Audio Drama');
            if (!await page.locator('#nextReadPrimary').textContent().then((value) => value.includes('Audio Drama'))) {
                throw new Error(`${name}: work-type preference did not change the suggestion`);
            }
            await page.locator('#nextReadGuide summary').click();
            await page.click('#coreRoute');
            await page.waitForFunction(() => document.querySelectorAll('.book-card').length === 12);
            if (await page.locator('.book-card').count() !== 12) throw new Error(`${name}: Core route count changed`);
            await page.click('#fullRoute');
            await page.locator('.book-card').first().click();
            await page.waitForSelector('#modalOverlay.active');
            if (!await page.title().then((title) => title.includes('HORUS RISING'))) {
                throw new Error(`${name}: work title missing`);
            }
            if (viewport.width === 320) {
                const authorLines = await page.evaluate(() => {
                    const author = document.querySelector('.work-safe-facts strong')?.nextSibling;
                    const range = document.createRange();
                    range.selectNodeContents(author);
                    return range.getClientRects().length;
                });
                if (authorLines !== 1) throw new Error(`${name}: work author wraps awkwardly at 320px`);
            }
            await page.click('#closeModal');
            if (viewport.width < 769) await page.click('#filterDisclosure');
            await page.selectOption('#collectionFilter', 'Born of Flame');
            if (await page.locator('.book-card').count() !== 5) throw new Error(`${name}: collection filter failed`);
            await page.click('#collectionOwned');
            if (await page.locator('#collectionOwned').getAttribute('aria-pressed') !== 'true') {
                throw new Error(`${name}: collection ownership was not saved`);
            }
            await page.click('#viewChart');
            await page.waitForSelector('#chartSvg');
            if (await page.locator('.chart-node').count() !== 185) throw new Error(`${name}: chart node count changed`);
            const width = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
            if (width > 1) throw new Error(`${name}: horizontal overflow of ${width}px`);
            await page.goto(new URL('events.html#prospero', base).href, { waitUntil: 'load' });
            if (await page.locator('.event-card').count() !== 15) throw new Error(`${name}: event atlas count changed`);
            const atlasWidth = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
            if (atlasWidth > 1) throw new Error(`${name}: event atlas overflows by ${atlasWidth}px`);
            await page.goto(new URL('factions.html?legion=Thousand+Sons', base).href, { waitUntil: 'load' });
            if (await page.locator('#factionTitle').textContent() !== 'Thousand Sons' ||
                !await page.locator('#factionEvents a[href="events.html#prospero"]').count()) {
                throw new Error(`${name}: faction atlas direct link failed`);
            }
            const factionWidth = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
            if (factionWidth > 1) throw new Error(`${name}: faction atlas overflows by ${factionWidth}px`);
            await page.goto(new URL('quiz.html?work=horus-rising', base).href, { waitUntil: 'load' });
            await page.locator('#quizIntro').waitFor({ state: 'visible' });
            await page.locator('#startQuiz').click();
            if (await page.locator('#quizAnswers button').count() !== 4) throw new Error(`${name}: book quiz choices missing`);
            await page.locator('#quizAnswers button').first().click();
            if (!await page.locator('#quizFeedback').isVisible()) throw new Error(`${name}: book quiz feedback missing`);
            const quizWidth = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
            if (quizWidth > 1) throw new Error(`${name}: quiz overflows by ${quizWidth}px`);
            if (errors.length) throw new Error(`${name}: ${errors.join('; ')}`);
            console.log(`PASS ${name} ${viewport.width}px`);
            await context.close();
        }
    } finally {
        await browser.close();
    }
}
