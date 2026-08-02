#!/usr/bin/env node
// Data validator for the Horus Heresy Archive.
//
// Run with: node tools/validate-data.mjs
// Exits non-zero on any error, so it can gate a commit or a CI run.
//
// This exists because the book data lives in a JavaScript object literal, where
// a duplicated property is legal syntax and silently wins. That is how 223 of
// 224 books came to render in the wrong order without anything failing.

import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

// ---------------------------------------------------------------------------
// Load script.js up to the point where it starts touching the DOM.
// ---------------------------------------------------------------------------
const source = readFileSync(join(root, 'script.js'), 'utf8');
const domBoundary = source.indexOf('const modalOverlay');
if (domBoundary === -1) fail('Could not find the DOM boundary in script.js');

// A browser stub wide enough for script.js to reach its data definitions
// without a DOM. It has to cover the top-level event listeners the chart view
// registers, not just the element lookups.
const sandbox = {
    document: {
        getElementById: () => null,
        querySelector: () => null,
        querySelectorAll: () => [],
        addEventListener: () => {},
        documentElement: { classList: { toggle: () => {} } },
        body: { style: {} },
    },
    localStorage: { getItem: () => null, setItem: () => {} },
    window: { addEventListener: () => {} },
    requestAnimationFrame: () => {},
    console,
};
const context = createContext(sandbox);
runInContext(
    source.slice(0, domBoundary) +
        '\n;globalThis.__exports = { bookData, characterData, getSortedBookKeys, romanToNumber, chronologicalRank };',
    context
);
const { bookData, characterData, getSortedBookKeys, romanToNumber, chronologicalRank } =
    context.__exports;

const bookKeys = Object.keys(bookData);
const bookEntries = Object.entries(bookData);

// ---------------------------------------------------------------------------
// 1. Duplicated properties within an entry. This is the defect that shipped.
// ---------------------------------------------------------------------------
{
    const literalStart = source.indexOf('const bookData = {');
    const literalEnd = source.indexOf('const UNKNOWN_NUMBER');
    const literal = source.slice(literalStart, literalEnd);
    const entryPattern = /\n {4}'([^']+)': \{([\s\S]*?)\n {4}\},?/g;
    let match;
    let checked = 0;
    while ((match = entryPattern.exec(literal)) !== null) {
        const [, key, body] = match;
        checked++;
        const seen = new Map();
        for (const prop of body.matchAll(/^ {8}([a-zA-Z]+):/gm)) {
            const name = prop[1];
            seen.set(name, (seen.get(name) ?? 0) + 1);
        }
        for (const [name, count] of seen) {
            if (count > 1) {
                fail(`bookData['${key}'] declares '${name}' ${count} times. The last one silently wins.`);
            }
        }
    }
    if (checked !== bookKeys.length) {
        warn(`Property scan parsed ${checked} entries but bookData has ${bookKeys.length}. The regex may be stale.`);
    }
}

// ---------------------------------------------------------------------------
// 2. The retired sortOrder field must not come back.
// ---------------------------------------------------------------------------
for (const [key, book] of bookEntries) {
    if ('sortOrder' in book) {
        fail(`bookData['${key}'] has a 'sortOrder' field. Chronological order comes from key insertion order, see ORDERING_DECISIONS.md.`);
    }
}

// ---------------------------------------------------------------------------
// 3. Required fields.
// ---------------------------------------------------------------------------
const REQUIRED = ['number', 'title', 'author', 'timeline', 'coverImage', 'legions', 'details', 'blurb', 'blurbSafe'];
for (const [key, book] of bookEntries) {
    for (const field of REQUIRED) {
        if (book[field] === undefined || book[field] === null || book[field] === '') {
            fail(`bookData['${key}'] is missing required field '${field}'`);
        }
    }
    if (book.number !== undefined && typeof book.number !== 'string') {
        fail(`bookData['${key}'].number must be a string, got ${typeof book.number}`);
    }
    if (book.legions !== undefined && !Array.isArray(book.legions)) {
        fail(`bookData['${key}'].legions must be an array`);
    }
}

// ---------------------------------------------------------------------------
// 4. Series numbers must be unique and parseable, with no collisions.
// ---------------------------------------------------------------------------
{
    const byNumber = new Map();
    const byKey = new Map();
    for (const [key, book] of bookEntries) {
        if (byNumber.has(book.number)) {
            fail(`Duplicate number '${book.number}' on '${key}' and '${byNumber.get(book.number)}'`);
        }
        byNumber.set(book.number, key);

        const sortKey = romanToNumber(book.number);
        if (sortKey === 999999) {
            fail(`bookData['${key}'].number '${book.number}' is not parseable by romanToNumber, so it sorts last`);
        }
        if (byKey.has(sortKey)) {
            fail(`Publication sort key collision: '${book.number}' and '${bookData[byKey.get(sortKey)].number}' both resolve to ${sortKey}`);
        }
        byKey.set(sortKey, key);
    }
}

// ---------------------------------------------------------------------------
// 5. Chronological rank must be total and match ORDERING_DECISIONS.md.
// ---------------------------------------------------------------------------
{
    const chrono = getSortedBookKeys('chronological');
    if (chrono.length !== bookKeys.length) {
        fail(`Chronological sort returned ${chrono.length} keys for ${bookKeys.length} books`);
    }
    const drift = chrono.filter((key, i) => key !== bookKeys[i]);
    if (drift.length) {
        fail(`Chronological sort does not equal key insertion order. ${drift.length} entries differ, first is '${drift[0]}'`);
    }
    for (const key of bookKeys) {
        if (!chronologicalRank.has(key)) fail(`'${key}' has no chronological rank`);
    }

    const docPath = join(root, 'ORDERING_DECISIONS.md');
    if (existsSync(docPath)) {
        const doc = readFileSync(docPath, 'utf8');
        const documented = [...doc.matchAll(/^\*\*(\d+)\.\*\*\s*\[([^\]]+)\]/gm)].map((m) => ({
            position: Number(m[1]),
            number: m[2],
        }));
        if (!documented.length) {
            warn('Could not parse any numbered entries from ORDERING_DECISIONS.md');
        } else {
            const numberToKey = new Map(bookEntries.map(([k, v]) => [v.number, k]));
            let mismatches = 0;
            for (const entry of documented) {
                const key = numberToKey.get(entry.number);
                if (!key) {
                    fail(`ORDERING_DECISIONS.md position ${entry.position} references number '${entry.number}' which is not in bookData`);
                    continue;
                }
                if (chronologicalRank.get(key) !== entry.position) {
                    mismatches++;
                    if (mismatches <= 5) {
                        fail(`'${entry.number}' is documented at position ${entry.position} but ranks ${chronologicalRank.get(key)}`);
                    }
                }
            }
            if (mismatches > 5) {
                fail(`...and ${mismatches - 5} further position mismatches against ORDERING_DECISIONS.md`);
            }
            if (documented.length !== bookKeys.length) {
                warn(`ORDERING_DECISIONS.md documents ${documented.length} entries, bookData has ${bookKeys.length}`);
            }
        }
    }
}

// ---------------------------------------------------------------------------
// 6. Timeline must be parseable, since strict chronology depends on it.
// ---------------------------------------------------------------------------
{
    const TIMELINE = /^(\d{3})(?:-(\d{3}))?\.M(\d{2})$/;
    const unparseable = bookEntries.filter(([, b]) => b.timeline && !TIMELINE.test(b.timeline));
    for (const [key, book] of unparseable) {
        warn(`bookData['${key}'].timeline '${book.timeline}' does not match NNN.MNN or NNN-NNN.MNN, so it cannot be ordered by date`);
    }
}

// ---------------------------------------------------------------------------
// 6b. Blurb quality. Warnings for now, to be promoted to errors once the
// research passes have landed across all 224 entries.
// ---------------------------------------------------------------------------
{
    let identical = 0, thin = 0, statusLine = 0;
    // Word-boundary matched, not substring: "dies" otherwise matches "bodies".
    const SPOILER_PHRASES = [
        'dies', 'died', 'is killed', 'killed by', 'betrays', 'betrayed by',
        'turns traitor', 'sacrifices himself', 'becomes a daemon',
    ];
    const hasSpoiler = (text) => SPOILER_PHRASES.some((p) =>
        new RegExp(`\\b${p}\\b`, 'i').test(text));
    let leaky = 0;

    for (const [key, book] of bookEntries) {
        if (String(book.blurb).trim() === String(book.blurbSafe).trim()) {
            identical++;
            warn(`bookData['${key}'] has blurbSafe identical to blurb, so spoiler-free mode does nothing`);
        }
        if (String(book.blurb).trim().length < 90) thin++;
        if (/<strong>Status:<\/strong>/.test(book.details || '')) statusLine++;
        if (hasSpoiler(String(book.blurbSafe))) leaky++;
    }

    if (thin) warn(`${thin} entries have a blurb under 90 characters, which is usually a title restatement`);
    if (statusLine) warn(`${statusLine} entries still carry a 'Status:' line in details, which leaks through spoiler-free mode`);
    if (leaky) warn(`${leaky} entries have a blurbSafe containing outcome words`);
}

// ---------------------------------------------------------------------------
// 7. Legion taxonomy. Values must be real factions, not formats.
// ---------------------------------------------------------------------------
{
    const NOT_A_LEGION = new Set(['Audio', 'Various', 'All Legions', 'All Traitor Legions']);
    const counts = new Map();
    for (const [, book] of bookEntries) {
        for (const legion of book.legions ?? []) {
            counts.set(legion, (counts.get(legion) ?? 0) + 1);
        }
    }
    for (const value of NOT_A_LEGION) {
        if (counts.has(value)) {
            warn(`'${value}' is used as a legion on ${counts.get(value)} entries but is not a faction`);
        }
    }
}

// ---------------------------------------------------------------------------
// 8. Referenced images must exist.
// ---------------------------------------------------------------------------
{
    const checkImage = (path, owner) => {
        if (!path) return;
        if (!existsSync(join(root, path))) fail(`${owner} references missing image '${path}'`);
    };
    for (const [key, book] of bookEntries) checkImage(book.coverImage, `bookData['${key}']`);
    for (const [key, char] of Object.entries(characterData)) checkImage(char.image, `characterData['${key}']`);
}

// ---------------------------------------------------------------------------
// 9. Character data hygiene.
// ---------------------------------------------------------------------------
{
    const byName = new Map();
    for (const [key, char] of Object.entries(characterData)) {
        if (!char.name) fail(`characterData['${key}'] has no name`);
        const normalised = (char.name ?? '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '');
        if (byName.has(normalised)) {
            warn(`characterData['${key}'] duplicates '${byName.get(normalised)}' (both are "${char.name}")`);
        } else {
            byName.set(normalised, key);
        }
    }
}

// ---------------------------------------------------------------------------
// Report.
// ---------------------------------------------------------------------------
const label = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

if (warnings.length) {
    console.log(`\n${label(warnings.length, 'warning')}:`);
    for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
    console.log(`\n${label(errors.length, 'error')}:`);
    for (const e of errors) console.log(`  x ${e}`);
    console.log(`\nFAILED. ${bookKeys.length} books, ${Object.keys(characterData).length} characters checked.\n`);
    process.exit(1);
}

console.log(`\nPASSED. ${bookKeys.length} books, ${Object.keys(characterData).length} characters checked.`);
console.log(`Chronological order verified against ORDERING_DECISIONS.md.\n`);
