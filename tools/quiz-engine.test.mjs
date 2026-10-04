import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { finishedWorkIds, refresherQuestions, coreQuestions, bookQuestions, shuffleChoices, isCorrect, resultTier } from '../quiz-engine.mjs';

const data = JSON.parse(readFileSync(new URL('../quiz-data.json', import.meta.url)));

test('every distinct work has a three-question memory check', () => {
    assert.equal(Object.keys(data.works).length, 230);
    for (const [id, work] of Object.entries(data.works)) {
        assert.equal(work.questions.length, 3, id);
        assert.equal(new Set(work.questions.map((question) => question.id)).size, 3, id);
        for (const question of work.questions) {
            assert.ok(question.prompt && question.explanation && question.source, id);
            if (question.type === 'choice') {
                assert.equal(new Set(question.choices).size, 4, question.id);
                assert.ok(question.choices.includes(question.answer), question.id);
            } else {
                assert.equal(question.type, 'recall');
                assert.ok(question.reveal.length > 50, question.id);
            }
        }
    }
});

test('reprints share one canonical book quiz', () => {
    const reprint = Object.entries(data.works).find(([, work]) => work.legacyKeys.length > 1);
    assert.ok(reprint);
    const [id, work] = reprint;
    assert.deepEqual(finishedWorkIds(data, { [work.legacyKeys.at(-1)]: 'finished' }), [id]);
    assert.equal(bookQuestions(data, id).length, 3);
});

test('refresher is limited to finished works and rotates on retake', () => {
    const finished = data.core.slice(0, 3);
    const first = refresherQuestions(data, finished, 10, 0);
    const retake = refresherQuestions(data, finished, 10, 1);
    assert.equal(first.length, 3);
    assert.ok(first.every((question) => finished.includes(question.workId)));
    assert.notDeepEqual(first.map((question) => question.id), retake.map((question) => question.id));
    assert.equal(coreQuestions(data).length, 12);
    assert.deepEqual(refresherQuestions(data, [], 10), []);
});

test('answer scoring handles both choice and honest self-rating', () => {
    const curated = bookQuestions(data, 'horus-rising')[0];
    const catalogue = bookQuestions(data, 'tales-of-heresy-the-last-church')[0];
    assert.ok(isCorrect(curated, curated.answer));
    assert.equal(isCorrect(curated, curated.choices.find((choice) => choice !== curated.answer)), false);
    assert.ok(isCorrect(catalogue, true));
    assert.equal(isCorrect(catalogue, false), false);
    assert.deepEqual(new Set(shuffleChoices(curated.choices, () => 0.5)), new Set(curated.choices));
    assert.equal(resultTier(3, 3), 'strong');
    assert.equal(resultTier(2, 3), 'refresh');
    assert.equal(resultTier(1, 3), 'reread');
});
