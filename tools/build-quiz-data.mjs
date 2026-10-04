#!/usr/bin/env node
// Build the small, reviewable quiz payload served by the static site.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { repoRoot } from './load-data.mjs';

const read = (path) => JSON.parse(readFileSync(join(repoRoot, path), 'utf8'));
const books = read('data/books.json');
const identities = read('data/work-identities.json').identities;
const curated = read('data/quiz-questions.json');
const core = read('data/reading-routes.json').core.works.map((work) => work.key);
const validFactions = (book) => book.legions.filter((name) => name &&
    !name.startsWith('__') && !['Various', 'All Legions', 'All Traitor Legions'].includes(name));
const characters = (book) => {
    const match = book.details.match(/<strong>Main Characters:<\/strong>\s*([^<]+)/);
    return match ? match[1].split(',').map((name) => name.trim()).filter(Boolean) : [];
};
const firstBook = (identity) => books[identity.legacyKeys[0]];
const unique = (values) => [...new Set(values)];
const characterPool = unique(identities.flatMap((identity) => characters(firstBook(identity))));
const factionPool = unique(identities.flatMap((identity) => validFactions(firstBook(identity))));
const authorPool = unique(identities.map((identity) => firstBook(identity).author));
const formatPool = unique(identities.map((identity) => firstBook(identity).format));

function choices(answer, pool, excluded) {
    const distractors = pool.filter((item) => item !== answer && !excluded.includes(item));
    if (distractors.length < 3) throw new Error(`Not enough distinct choices for ${answer}`);
    return [answer, ...distractors.slice(0, 3)];
}

function generatedQuestions(identity, book) {
    const id = identity.id;
    const record = `index.html#work=${encodeURIComponent(id)}`;
    const questions = [{
        id: `${id}-recall`, type: 'recall',
        prompt: `From memory, what is the central situation or conflict in ${book.title}?`,
        reveal: book.blurb,
        explanation: 'Compare your memory with the Archive synopsis, then mark whether you recalled its main thread.',
        source: record,
    }];
    const listedCharacters = characters(book);
    if (listedCharacters.length) questions.push({
        id: `${id}-character`, type: 'choice',
        prompt: `Which figure does the Archive list among the main characters of ${book.title}?`,
        answer: listedCharacters[0], choices: choices(listedCharacters[0], characterPool, listedCharacters),
        explanation: `${listedCharacters[0]} is named in this work's main-character record.`, source: record,
    });
    const taggedFactions = validFactions(book);
    if (taggedFactions.length) questions.push({
        id: `${id}-faction`, type: 'choice',
        prompt: `Which faction thread does the Archive tag for ${book.title}?`,
        answer: taggedFactions[0], choices: choices(taggedFactions[0], factionPool, taggedFactions),
        explanation: `${taggedFactions[0]} is a catalogue tag for this work.`, source: record,
    });
    if (questions.length < 3) questions.push({
        id: `${id}-author`, type: 'choice', prompt: `Who wrote ${book.title}?`,
        answer: book.author, choices: choices(book.author, authorPool, [book.author]),
        explanation: `${book.author} is credited as the author in the Archive.`, source: record,
    });
    if (questions.length < 3) questions.push({
        id: `${id}-format`, type: 'choice', prompt: `How does the Archive classify ${book.title}?`,
        answer: book.format, choices: choices(book.format, formatPool, [book.format]),
        explanation: `The Archive classifies this work as ${book.format}.`, source: record,
    });
    return questions;
}

function validateQuestion(question, id) {
    let sourceHost;
    try { sourceHost = new URL(question.source).hostname; } catch { sourceHost = ''; }
    if (!question.id || !question.prompt || !question.explanation || !question.source ||
        !['www.blacklibrary.com', 'www.warhammer-community.com'].includes(sourceHost) ||
        !question.source.startsWith('https://')) {
        throw new Error(`Incomplete or unsourced curated question in ${id}`);
    }
    if (!Array.isArray(question.choices) || question.choices.length !== 4 ||
        unique(question.choices).length !== 4 || !question.choices.includes(question.answer)) {
        throw new Error(`Invalid choices in ${question.id}`);
    }
}

if (curated.schemaVersion !== 1) throw new Error('Unsupported quiz question schema');
const knownIds = new Set(identities.map((identity) => identity.id));
for (const [id, questions] of Object.entries(curated.sets)) {
    if (!knownIds.has(id) || questions.length !== 3) throw new Error(`Invalid curated set ${id}`);
    questions.forEach((question) => validateQuestion(question, id));
}
if (core.some((key) => !curated.sets[key])) throw new Error('Every Core work needs a curated quiz');

const works = Object.fromEntries(identities.map((identity) => {
    const book = firstBook(identity);
    if (!book?.blurb) throw new Error(`Missing synopsis for ${identity.id}`);
    const questions = curated.sets[identity.id]
        ? curated.sets[identity.id].map((question) => ({ type: 'choice', ...question }))
        : generatedQuestions(identity, book);
    if (questions.length !== 3) throw new Error(`Expected three questions for ${identity.id}`);
    return [identity.id, {
        title: book.title, cover: book.coverImage, author: book.author,
        legacyKeys: identity.legacyKeys, kind: curated.sets[identity.id] ? 'curated' : 'catalogue',
        questions,
    }];
}));
const payload = JSON.stringify({ schemaVersion: 1, core, works }) + '\n';
const output = join(repoRoot, 'quiz-data.json');
if (process.argv.includes('--check')) {
    if (readFileSync(output, 'utf8') !== payload) throw new Error('quiz-data.json is stale');
    console.log(`Quiz data is current: ${Object.keys(works).length} works.`);
} else {
    writeFileSync(output, payload);
    console.log(`Wrote quiz-data.json for ${Object.keys(works).length} works.`);
}
