#!/usr/bin/env node
// Data validator for the Horus Heresy Archive.
//
// Run with: node tools/validate-data.mjs
// Exits non-zero on any error, so it can gate a commit or a CI run.
//
// Duplicated properties are still legal in JSON and silently win on parse. The
// old JavaScript literal hid this defect in 139 entries, so scan raw source.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadFromScript, repoRoot as root } from './load-data.mjs';

const errors = [];
const warnings = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);
const isBlackLibraryUrl = (value) => {
    try {
        const url = new URL(value);
        return url.protocol === 'https:' && url.hostname === 'www.blacklibrary.com';
    } catch { return false; }
};

// ---------------------------------------------------------------------------
// Load generated browser data and the reviewable JSON source.
// ---------------------------------------------------------------------------
const { bookData, characterData, getSortedBookKeys, romanToNumber, chronologicalRank } =
    loadFromScript(['bookData', 'characterData', 'getSortedBookKeys', 'romanToNumber', 'chronologicalRank']);

const bookKeys = Object.keys(bookData);
const bookEntries = Object.entries(bookData);
for (const key of bookKeys) if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) fail(`Unsafe book key '${key}'`);
for (const key of Object.keys(characterData)) if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) fail(`Unsafe character key '${key}'`);
const publisherCollections = JSON.parse(readFileSync(join(root, 'data/publisher-collections.json'), 'utf8'));
const readingRoutes = JSON.parse(readFileSync(join(root, 'data/reading-routes.json'), 'utf8'));
const eventData = JSON.parse(readFileSync(join(root, 'data/events.json'), 'utf8'));
const eventIds = new Set();
const knownFactions = new Set(bookEntries.flatMap(([, book]) => book.legions));
for (const event of eventData.events) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(event.id) || eventIds.has(event.id)) {
        fail(`Event has an invalid or duplicate ID '${event.id}'`);
    }
    eventIds.add(event.id);
    if (!event.title || !event.introSafe || !Array.isArray(event.works) || !event.works.length) {
        fail(`Event '${event.id}' needs a title, safe introduction and works`);
        continue;
    }
    try {
        const source = new URL(event.source);
        if (source.protocol !== 'https:' || source.hostname !== 'www.warhammer-community.com') {
            fail(`Event '${event.id}' needs an official HTTPS source`);
        }
    } catch { fail(`Event '${event.id}' has an invalid source URL`); }
    for (const faction of event.factions || []) {
        if (!knownFactions.has(faction)) fail(`Event '${event.id}' has unknown faction '${faction}'`);
    }
    const keys = new Set();
    for (const work of event.works) {
        if (!bookData[work.key]) fail(`Event '${event.id}' has unknown work '${work.key}'`);
        if (!['covers', 'mentions', 'continues', 'opens'].includes(work.relation)) {
            fail(`Event '${event.id}' has unknown relationship '${work.relation}'`);
        }
        if (keys.has(work.key)) fail(`Event '${event.id}' repeats work '${work.key}'`);
        keys.add(work.key);
        if (work.viewpoint && !knownFactions.has(work.viewpoint)) {
            fail(`Event '${event.id}' has unknown viewpoint '${work.viewpoint}'`);
        }
    }
}
const characterAppearances = JSON.parse(readFileSync(join(root, 'data/character-appearances.json'), 'utf8'));
for (const [characterKey, keys] of Object.entries(characterAppearances.characters)) {
    if (!characterData[characterKey]) fail(`Character appearance list has unknown character '${characterKey}'`);
    if (!Array.isArray(keys) || new Set(keys).size !== keys.length) fail(`Character '${characterKey}' has duplicate or invalid appearance links`);
    for (const key of keys) if (!bookData[key]) fail(`Character '${characterKey}' links to missing work '${key}'`);
}
for (const [characterKey, character] of Object.entries(characterData)) {
    const expected = bookEntries.filter(([, book]) => {
        const field = book.details.match(/Main Characters:<\/strong>\s*([^<]*)/i)?.[1] || '';
        return field.split(',').some((name) =>
            name.trim().replace(/\s*\([^)]*\)/g, '').toLocaleLowerCase() === character.name.toLocaleLowerCase());
    }).map(([key]) => key);
    const actual = characterAppearances.characters[characterKey] || [];
    if (expected.join('|') !== actual.join('|')) {
        fail(`Character '${characterKey}' appearance links have drifted from the catalogue's Main Characters fields`);
    }
}
for (const [name, route] of Object.entries(readingRoutes)) {
    if (!route.title || !route.reviewedAt || !Array.isArray(route.works) || !route.works.length) {
        fail(`Reading route '${name}' is missing its title, review date or works`);
        continue;
    }
    try {
        if (new URL(route.source).protocol !== 'https:') fail(`Reading route '${name}' needs an HTTPS source`);
    } catch { fail(`Reading route '${name}' has an invalid source URL`); }
    if (new Set(route.works.map((work) => work.key)).size !== route.works.length) fail(`Reading route '${name}' repeats a work`);
    for (const work of route.works) {
        const book = bookData[work.key];
        if (!book) fail(`Reading route '${name}' refers to missing work '${work.key}'`);
        else if (book.title !== work.title || book.author !== work.author || book.format !== work.format) {
            fail(`Reading route '${name}' has stale checked title, author or format for '${work.key}'`);
        }
        if (name === 'core' && work.format !== 'Novel') fail(`Core route work '${work.key}' is not a novel`);
    }
}

for (const [name, record] of Object.entries(publisherCollections.collections)) {
    if (!isBlackLibraryUrl(record.source)) {
        fail(`Publisher collection '${name}' needs a Black Library source URL`);
    }
    const expected = new Set(record.entries.map((entry) => entry.key));
    const actual = new Set(bookEntries.filter(([, book]) => book.anthology === name).map(([key]) => key));
    if (expected.size !== record.entries.length || expected.size !== actual.size ||
        [...expected].some((key) => !actual.has(key))) {
        fail(`Publisher collection '${name}' no longer matches its checked member list`);
    }
    for (const entry of record.entries) {
        const book = bookData[entry.key];
        if (!book || book.title !== entry.title || book.author !== entry.author) {
            fail(`Publisher collection '${name}' has stale title or author for '${entry.key}'`);
        }
    }
}
for (const [name, record] of Object.entries(publisherCollections.disputed || {})) {
    if (!isBlackLibraryUrl(record.publisherSource)) {
        fail(`Disputed collection '${name}' needs a Black Library source URL`);
    }
    try {
        if (new URL(record.bibliographicSource).protocol !== 'https:') {
            fail(`Disputed collection '${name}' needs an HTTPS bibliographic URL`);
        }
    } catch { fail(`Disputed collection '${name}' has an invalid bibliographic URL`); }
}

// ---------------------------------------------------------------------------
// 1. Duplicated properties within a JSON entry. This is the defect that shipped.
// ---------------------------------------------------------------------------
for (const [filename, expectedCount] of [
    ['data/books.json', bookKeys.length],
    ['data/characters.json', Object.keys(characterData).length],
]) {
    const source = readFileSync(join(root, filename), 'utf8');
    const entryPattern = /^  "([^"]+)": \{([\s\S]*?)^  \},?$/gm;
    let match;
    let checked = 0;
    while ((match = entryPattern.exec(source)) !== null) {
        const [, key, body] = match;
        checked++;
        const seen = new Map();
        for (const prop of body.matchAll(/^    "([^"]+)":/gm)) {
            const name = prop[1];
            seen.set(name, (seen.get(name) ?? 0) + 1);
        }
        for (const [name, count] of seen) {
            if (count > 1) {
                fail(`${filename} entry '${key}' declares '${name}' ${count} times. The last one silently wins.`);
            }
        }
    }
    if (checked !== expectedCount) {
        fail(`Property scan parsed ${checked} entries in ${filename}, expected ${expectedCount}.`);
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
const REQUIRED = ['number', 'title', 'author', 'format', 'timeline', 'coverImage', 'legions', 'details', 'blurb', 'blurbSafe'];
for (const [key, book] of bookEntries) {
    for (const field of REQUIRED) {
        if (book[field] === undefined || book[field] === null || book[field] === '') {
            fail(`bookData['${key}'] is missing required field '${field}'`);
        }
    }
    const detailsText = book.details.replace(/<\/?strong>|<br>/g, '');
    if (/[<>]/.test(detailsText)) {
        fail(`bookData['${key}'].details contains markup outside the allowed strong and br tags`);
    }
    if (book.number !== undefined && typeof book.number !== 'string') {
        fail(`bookData['${key}'].number must be a string, got ${typeof book.number}`);
    }
    if (book.legions !== undefined && !Array.isArray(book.legions)) {
        fail(`bookData['${key}'].legions must be an array`);
    }
    if (!['Novel', 'Novella', 'Short Story', 'Audio Drama', 'Anthology'].includes(book.format)) {
        fail(`bookData['${key}'].format is not recognised`);
    }
    const detailFormat = /<strong>Type:<\/strong>\s*([^<\n]+)/.exec(book.details)?.[1]?.trim();
    if (detailFormat !== book.format) {
        fail(`bookData['${key}'].format differs from its legacy detail text`);
    }
    if (book.factionScope && !['various', 'all', 'all-traitor'].includes(book.factionScope)) {
        fail(`bookData['${key}'].factionScope is not recognised`);
    }
    if (book.collectionRelation &&
        (book.collectionRelation !== 'novelised in' || !isBlackLibraryUrl(book.collectionSource))) {
        fail(`bookData['${key}'] has an unsupported collection relationship or source`);
    }
    if (!book.research || !Array.isArray(book.research.sources)) {
        fail(`bookData['${key}'].research.sources must be an array`);
    } else {
        for (const source of book.research.sources) {
            try {
                if (new URL(source).protocol !== 'https:') fail(`bookData['${key}'] has a non-HTTPS research URL`);
            } catch {
                fail(`bookData['${key}'] has an invalid research URL`);
            }
        }
    }
    if (book.research && book.research.reviewedAt !== null &&
        !/^\d{4}-\d{2}-\d{2}$/.test(book.research.reviewedAt)) {
        fail(`bookData['${key}'].research.reviewedAt must be a date or null`);
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
// 5b. The ordering log's summary table must agree with the data beneath it.
// Those dates were hardcoded in the generator, and after 30 timelines were
// corrected 8 of 15 rows were silently wrong.
// ---------------------------------------------------------------------------
{
    const docPath = join(root, 'ORDERING_DECISIONS.md');
    if (existsSync(docPath)) {
        const doc = readFileSync(docPath, 'utf8');
        const byTitle = new Map(bookEntries.map(([, b]) => [b.title.toUpperCase(), b]));
        const rows = [...doc.matchAll(/^\| (\d{3}(?:-\d{3})?\.M\d{2}[^|]*) \| ([^|]+) \| ([^|]+) \|$/gm)];

        if (!rows.length) {
            warn('Could not parse the key events table out of ORDERING_DECISIONS.md');
        }

        const parse = (t) => {
            const m = /^(\d{3})(?:-(\d{3}))?\.M(\d{2})$/.exec(t.trim());
            if (!m) return null;
            const base = (Number(m[3]) - 1) * 1000;
            return { start: base + Number(m[1]), end: base + Number(m[2] ?? m[1]) };
        };

        for (const [, claimed, event, titles] of rows) {
            const span = parse(claimed.trim());
            if (!span) continue;   // cross-millennium rows use a different form
            const books = titles.split(',').map((t) => byTitle.get(t.trim().toUpperCase()));
            if (books.some((b) => !b)) {
                fail(`Key events row "${event.trim()}" names a book that is not in bookData`);
                continue;
            }
            const parsedBooks = books.map((b) => parse(b.timeline)).filter(Boolean);
            if (parsedBooks.length !== books.length) continue;
            const start = Math.min(...parsedBooks.map((p) => p.start));
            const end = Math.max(...parsedBooks.map((p) => p.end));
            if (start !== span.start || end !== span.end) {
                fail(`Key events row "${event.trim()}" claims ${claimed.trim()} but its books span a different range. Regenerate with tools/generate-ordering-doc.mjs`);
            }
        }
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
            fail(`'${value}' is used as a legion on ${counts.get(value)} entries but is not a faction`);
        }
    }
}

// ---------------------------------------------------------------------------
// 8. Referenced images must exist.
// ---------------------------------------------------------------------------
{
    const checkImage = (path, owner) => {
        if (!path) return;
        if (!/^images\/[a-zA-Z0-9/_-]+\.(?:jpg|png|svg|webp)$/.test(path)) {
            fail(`${owner} has an unsafe image path '${path}'`);
            return;
        }
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
            fail(`characterData['${key}'] duplicates '${byName.get(normalised)}' (both are "${char.name}")`);
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
