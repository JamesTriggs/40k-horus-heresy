#!/usr/bin/env node
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const base = process.env.BASE_URL || 'http://127.0.0.1:8899/';
const quizData = JSON.parse(readFileSync(new URL('../quiz-data.json', import.meta.url), 'utf8'));
const horusAnswers = quizData.works['horus-rising'].questions.map((question) => question.answer);
const browser = await chromium.launch();
const errors = [];

async function newPage(width = 390) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
        if (response.url().startsWith(base) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    return page;
}

function assert(condition, message) { if (!condition) throw new Error(message); }

try {
    const page = await newPage();
    await page.goto(new URL('quiz.html', base).href);
    await page.locator('#quizHome').waitFor({ state: 'visible' });
    assert(await page.locator('#startCompleted').isDisabled(), 'fresh reader should not see a finished-work quiz');
    assert(await page.locator('#quizBookResults li').count() === 12, 'book finder did not render');
    await page.locator('#quizBookSearch').fill('Horus Rising');
    assert(await page.locator('#quizBookResults li').count() === 1, 'book search did not narrow results');
    await page.locator('#quizBookResults a').click();
    await page.locator('#quizIntro').waitFor({ state: 'visible' });
    assert(!await page.locator('#quizQuestion').isVisible(), 'question leaked before spoiler acknowledgement');
    await page.locator('#startQuiz').click();
    for (let index = 0; index < 3; index++) {
        await page.locator('#quizAnswers button').first().waitFor();
        const wrong = page.locator('#quizAnswers button').filter({ hasNotText: horusAnswers[index] }).first();
        await wrong.click();
        assert(await page.locator('#quizFeedback').isVisible(), 'answer feedback missing');
        await page.locator('#quizNext').click();
    }
    assert(await page.locator('#quizResult').isVisible(), 'result did not render');
    assert((await page.locator('#quizScore').textContent()).includes('0 / 3'), 'wrong answers were not scored');
    assert(await page.locator('#quizMissedList li').count() === 3, 'missed answers were not reviewed');
    await page.locator('#quizRetry').click();
    assert(await page.locator('#quizStage').isVisible(), 'retake did not restart');
    await page.close();
    console.log('PASS curated book quiz, spoiler gate, scoring and retake');

    const recall = await newPage(320);
    await recall.goto(new URL('quiz.html?work=tales-of-heresy-the-last-church', base).href);
    await recall.locator('#quizIntro').waitFor({ state: 'visible' });
    await recall.locator('#startQuiz').click();
    assert(await recall.locator('#quizReveal').isVisible(), 'catalogue recall prompt missing');
    await recall.locator('#quizReveal').click();
    assert(await recall.locator('#quizRevealText').isVisible(), 'recap did not reveal');
    await recall.locator('[data-rating="no"]').click();
    await recall.locator('#quizNext').click();
    assert(await recall.locator('#quizAnswers button').count() === 4, 'catalogue fact question missing');
    assert(await recall.evaluate(() => document.documentElement.scrollWidth <= innerWidth), '320px quiz overflows');
    await recall.close();
    console.log('PASS all-work recall mode and narrow phone layout');

    const completed = await newPage();
    await completed.addInitScript(() => localStorage.setItem('horusHeresyProgress', JSON.stringify({ 'horus-rising': 'finished', 'false-gods': 'finished', 'galaxy-in-flames': 'reading' })));
    await completed.goto(new URL('quiz.html', base).href);
    await completed.locator('#startCompleted').waitFor({ state: 'visible' });
    assert(!await completed.locator('#startCompleted').isDisabled(), 'finished-work mode stayed disabled');
    await completed.locator('#startCompleted').click();
    await completed.locator('#startQuiz').click();
    assert((await completed.locator('#quizProgressText').textContent()).includes('/ 2'), 'unfinished work entered the refresher');
    await completed.close();
    console.log('PASS refresher uses finished works only');

    const archive = await newPage();
    await archive.addInitScript(() => localStorage.setItem('horusHeresySeenWelcome', '1'));
    await archive.goto(base);
    await archive.locator('.book-card').first().waitFor();
    assert(await archive.locator('.quiz-entry').isVisible(), 'quiz entry missing from Archive');
    await archive.locator('.book-card[data-book="horus-rising"]').click();
    assert((await archive.locator('#workQuizLink').getAttribute('href')) === 'quiz.html?work=horus-rising', 'book quiz link has wrong identity');
    await archive.goto(new URL('work/horus-rising/', base).href);
    assert(await archive.locator('a[href="../../quiz.html?work=horus-rising"]').count() === 1, 'standalone work quiz link missing');
    await archive.close();
    console.log('PASS Archive and standalone work entry points');

    for (const width of [320, 390, 1280]) {
        const visual = await newPage(width);
        await visual.goto(new URL('quiz.html?mode=core', base).href);
        await visual.locator('#quizIntro').waitFor({ state: 'visible' });
        assert(await visual.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px intro overflows`);
        await visual.locator('#startQuiz').click();
        assert(await visual.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px question overflows`);
        await visual.close();
    }
    console.log('PASS Core challenge at phone and desktop widths');
    assert(errors.length === 0, `Browser errors: ${errors.join('; ')}`);
    console.log('PASS no browser or local network errors');
} finally {
    await browser.close();
}
