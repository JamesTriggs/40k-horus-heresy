#!/usr/bin/env node
// Applies researched corrections from tools/blurb-fixes/*.json into script.js.
//
// Run:  node tools/apply-blurb-fixes.mjs --dry-run
//       node tools/apply-blurb-fixes.mjs
//
// Research agents write JSON only, never script.js, so corrections are
// reviewable, re-runnable and cannot half-apply. Every change is checked
// against the rules below before anything is written.
//
// Entries marked "unresolved" are deliberately NOT applied. The whole point of
// this exercise is that a plausible invention is worse than a known gap.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fixesDir = join(root, 'tools', 'blurb-fixes');
const dryRun = process.argv.includes('--dry-run');

// 'Anthology' covers collected volumes that the dataset holds as a single
// entry rather than as component stories, such as TALLARN.
const VALID_TYPES = new Set([
    'Novel', 'Novella', 'Short Story', 'Audio Drama', 'Audio Book', 'Graphic Novel', 'Anthology',
]);
const VALID_VERDICTS = new Set(['corrected', 'confirmed', 'unresolved']);
const VALID_CONFIDENCE = new Set(['high', 'medium', 'low']);

// Phrases that should never appear in a spoiler-free summary. Not exhaustive,
// but it catches the failure mode where "safe" text still reveals the outcome.
//
// Matched on word boundaries, not as substrings. A naive substring match reads
// "dies" inside "bodies", which is the same defect this project already found
// in the site's own character matcher, where "Amon" matched "among".
const SPOILER_PHRASES = [
    'dies', 'died', 'death of', 'is killed', 'killed by', 'murders', 'murdered by',
    'betrays', 'betrayed by', 'turns traitor', 'falls to chaos', 'becomes a daemon',
    'sacrifices himself', 'sacrifices herself', 'final fate', 'is slain', 'slain by',
];

const findSpoilers = (text) => SPOILER_PHRASES.filter((phrase) =>
    new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text));

if (!existsSync(fixesDir)) {
    console.error('No tools/blurb-fixes directory. Nothing to apply.');
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Load the current data
// ---------------------------------------------------------------------------
const source = readFileSync(join(root, 'script.js'), 'utf8');
const ctx = createContext({
    document: { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
        addEventListener: () => {}, documentElement: { classList: { toggle: () => {} } }, body: { style: {} } },
    localStorage: { getItem: () => null, setItem: () => {} },
    window: { addEventListener: () => {} }, requestAnimationFrame: () => {}, console,
});
runInContext(source.slice(0, source.indexOf('const modalOverlay')) + '\n;globalThis.__b = bookData;', ctx);
const bookData = ctx.__b;

const escapeTemplate = (s) => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const escapeSingle = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

// ---------------------------------------------------------------------------
// Collect and validate
// ---------------------------------------------------------------------------
const errors = [];
const warnings = [];
const seen = new Map();
const applicable = [];
const unresolved = [];

const files = readdirSync(fixesDir).filter((f) => f.endsWith('.json')).sort();
if (!files.length) {
    console.error('tools/blurb-fixes contains no JSON files.');
    process.exit(1);
}

for (const file of files) {
    let parsed;
    try {
        parsed = JSON.parse(readFileSync(join(fixesDir, file), 'utf8'));
    } catch (e) {
        errors.push(`${file}: not valid JSON, ${e.message}`);
        continue;
    }
    if (!Array.isArray(parsed.entries)) {
        errors.push(`${file}: missing an entries array`);
        continue;
    }

    for (const e of parsed.entries) {
        const where = `${file} / ${e.bookKey || '(no bookKey)'}`;

        if (!e.bookKey || !bookData[e.bookKey]) {
            errors.push(`${where}: bookKey is not in bookData`);
            continue;
        }
        if (seen.has(e.bookKey)) {
            errors.push(`${where}: duplicate, also in ${seen.get(e.bookKey)}`);
            continue;
        }
        seen.set(e.bookKey, file);

        if (!VALID_VERDICTS.has(e.verdict)) {
            errors.push(`${where}: verdict "${e.verdict}" is not one of ${[...VALID_VERDICTS].join(', ')}`);
            continue;
        }

        if (e.verdict === 'unresolved') {
            unresolved.push({ ...e, file });
            continue;
        }

        // Everything below only applies to entries we intend to write.
        if (!e.blurb || !e.blurbSafe) {
            errors.push(`${where}: verdict is ${e.verdict} but blurb or blurbSafe is missing`);
            continue;
        }
        if (e.blurb.trim() === e.blurbSafe.trim()) {
            errors.push(`${where}: blurbSafe is identical to blurb, so spoiler-free mode would do nothing`);
        }
        if (!VALID_TYPES.has(e.type)) {
            errors.push(`${where}: type "${e.type}" is not one of ${[...VALID_TYPES].join(', ')}`);
        }
        if (!Array.isArray(e.legions) || !e.legions.length) {
            errors.push(`${where}: legions must be a non-empty array`);
        }
        if (!/^\d{3}(-\d{3})?\.M\d{2}$/.test(e.timeline || '')) {
            errors.push(`${where}: timeline "${e.timeline}" must be NNN.MNN or NNN-NNN.MNN`);
        }
        if (!Array.isArray(e.sources) || !e.sources.some((s) => /^https?:\/\/\S+\.\S+/.test(s))) {
            errors.push(`${where}: needs at least one real source URL`);
        }
        if (!VALID_CONFIDENCE.has(e.confidence)) {
            errors.push(`${where}: confidence "${e.confidence}" is not high, medium or low`);
        }

        // Quality checks that warn rather than block.
        const safeLower = e.blurbSafe.toLowerCase();
        const leaked = findSpoilers(e.blurbSafe);
        if (leaked.length) {
            warnings.push(`${where}: blurbSafe may leak a spoiler (${leaked.join(', ')})`);
        }
        const titleWords = String(e.title).toLowerCase().split(/\s+/).filter((w) => w.length > 3);
        if (e.blurb.length < 90) {
            warnings.push(`${where}: blurb is only ${e.blurb.length} characters, check it is not a title restatement`);
        }
        if (titleWords.length && titleWords.every((w) => safeLower.includes(w)) && e.blurbSafe.length < 80) {
            warnings.push(`${where}: blurbSafe looks like a restatement of the title`);
        }
        if (e.confidence === 'low') {
            warnings.push(`${where}: low confidence, worth a human read`);
        }

        applicable.push({ ...e, file });
    }
}

// ---------------------------------------------------------------------------
// Reconcile reprints. Two stories appear twice in the dataset under different
// keys because they were collected in two anthologies. They were researched by
// different agents, so their prose can differ even when the facts agree. Make
// both copies carry the same text, preferring the higher-confidence version.
// ---------------------------------------------------------------------------
{
    const rank = { high: 3, medium: 2, low: 1 };
    const byTitle = new Map();
    for (const e of applicable) {
        const key = String(e.title).trim().toUpperCase();
        if (!byTitle.has(key)) byTitle.set(key, []);
        byTitle.get(key).push(e);
    }
    for (const [title, group] of byTitle) {
        if (group.length < 2) continue;
        const best = group.reduce((a, b) =>
            (rank[b.confidence] || 0) > (rank[a.confidence] || 0) ? b : a);
        let changed = 0;
        for (const e of group) {
            if (e === best) continue;
            if (e.blurb !== best.blurb || e.blurbSafe !== best.blurbSafe) changed++;
            e.blurb = best.blurb;
            e.blurbSafe = best.blurbSafe;
            e.type = best.type;
            e.timeline = best.timeline;
            e.legions = best.legions;
            e.mainCharacters = best.mainCharacters;
        }
        if (changed) {
            warnings.push(`reprint "${title}": ${changed} copy/copies aligned to the ${best.confidence}-confidence version from ${best.file}`);
        }
    }
}

// Coverage: which books has nobody looked at?
const untouched = Object.keys(bookData).filter((k) => !seen.has(k));

if (errors.length) {
    console.log(`\n${errors.length} error(s), nothing was written:\n`);
    errors.forEach((e) => console.log('  x ' + e));
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Rebuild the details block from structured fields.
// This also drops the "Status:" line, which appeared on 66 entries and leaked
// the outcome straight through spoiler-free mode.
// ---------------------------------------------------------------------------

function buildDetails(entry, book) {
    const rows = [
        ['Author', entry.author || book.author],
        ['Type', entry.type],
    ];
    if (book.anthology) rows.push(['From', `${book.anthology} Anthology`]);
    rows.push(['Legion', entry.legions.join(', ')]);
    if (entry.mainCharacters && entry.mainCharacters.length) {
        rows.push(['Main Characters', entry.mainCharacters.join(', ')]);
    }
    rows.push(['Timeline', entry.timeline]);

    return '\n' + rows
        .map(([k, v]) => `            <strong>${k}:</strong> ${v}<br>`)
        .join('\n')
        .replace(/<br>$/, '') + '\n        ';
}

// ---------------------------------------------------------------------------
// Rewrite each entry block in place
// ---------------------------------------------------------------------------
let out = source;
let applied = 0;
const changeLog = [];

for (const entry of applicable) {
    const book = bookData[entry.bookKey];

    // Isolate this entry's literal block, searching only inside the bookData
    // literal. characterData is defined earlier in the file and shares at least
    // one key with bookData ('fulgrim'), so an unscoped indexOf silently edits
    // the wrong object. That went unnoticed because character entries have no
    // title or blurb field for the replacements to match.
    const bookDataStart = out.indexOf('const bookData = {');
    const bookDataEnd = out.indexOf('const UNKNOWN_NUMBER');
    if (bookDataStart === -1 || bookDataEnd === -1 || bookDataEnd < bookDataStart) {
        errors.push('Could not locate the bookData literal bounds in script.js');
        break;
    }

    const startMarker = `    '${entry.bookKey}': {`;
    const relative = out.slice(bookDataStart, bookDataEnd).indexOf(startMarker);
    const startIndex = relative === -1 ? -1 : bookDataStart + relative;
    if (startIndex === -1) {
        errors.push(`${entry.bookKey}: could not locate its block in script.js`);
        continue;
    }
    let depth = 0, i = out.indexOf('{', startIndex), inStr = null;
    while (i < out.length) {
        const c = out[i];
        if (inStr) {
            if (c === '\\') { i += 2; continue; }
            if (c === inStr) inStr = null;
        } else if (c === '"' || c === "'" || c === '`') inStr = c;
        else if (c === '{') depth++;
        else if (c === '}') { depth--; if (depth === 0) break; }
        i++;
    }
    let block = out.slice(startIndex, i + 1);
    const original = block;

    const replaceField = (name, valueLiteral) => {
        const re = new RegExp(`(\\n\\s*${name}:\\s*)(\`[\\s\\S]*?\`|'(?:[^'\\\\]|\\\\.)*'|\\[[^\\]]*\\])(,?)`);
        if (!re.test(block)) return false;
        block = block.replace(re, `$1${valueLiteral}$3`);
        return true;
    };

    const changes = [];
    if (entry.title && entry.title !== book.title) {
        if (replaceField('title', `'${escapeSingle(entry.title)}'`)) changes.push('title');
    }
    if (entry.author && entry.author !== book.author) {
        if (replaceField('author', `'${escapeSingle(entry.author)}'`)) changes.push('author');
    }
    if (entry.timeline !== book.timeline) {
        if (replaceField('timeline', `'${escapeSingle(entry.timeline)}'`)) changes.push('timeline');
    }
    // Build the array literal by escaping each value, not by swapping quote
    // characters wholesale. "Emperor's Children" contains an apostrophe.
    const newLegions = '[' + entry.legions.map((l) => `'${escapeSingle(l)}'`).join(', ') + ']';
    if (JSON.stringify(entry.legions) !== JSON.stringify(book.legions)) {
        if (replaceField('legions', newLegions)) changes.push('legions');
    }
    if (entry.blurb.trim() !== String(book.blurb).trim()) {
        if (replaceField('blurb', '`' + escapeTemplate(entry.blurb.trim()) + '`')) changes.push('blurb');
    }
    if (entry.blurbSafe.trim() !== String(book.blurbSafe).trim()) {
        if (replaceField('blurbSafe', '`' + escapeTemplate(entry.blurbSafe.trim()) + '`')) changes.push('blurbSafe');
    }
    const details = buildDetails(entry, book);
    if (details.trim() !== String(book.details).trim()) {
        if (replaceField('details', '`' + escapeTemplate(details) + '`')) changes.push('details');
    }

    if (block !== original) {
        out = out.slice(0, startIndex) + block + out.slice(i + 1);
        applied++;
        changeLog.push({ bookKey: entry.bookKey, title: entry.title, changes, confidence: entry.confidence });
    }
}

if (errors.length) {
    console.log(`\n${errors.length} error(s) during rewrite, nothing written:\n`);
    errors.forEach((e) => console.log('  x ' + e));
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
const byConfidence = (c) => applicable.filter((e) => e.confidence === c).length;

console.log(`\nResearched:   ${seen.size} of ${Object.keys(bookData).length} entries`);
console.log(`  corrected or confirmed: ${applicable.length}`);
console.log(`  unresolved, left alone: ${unresolved.length}`);
console.log(`  never looked at:        ${untouched.length}`);
console.log(`\nConfidence:   high ${byConfidence('high')}, medium ${byConfidence('medium')}, low ${byConfidence('low')}`);
console.log(`Blocks changed: ${applied}`);

if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    warnings.slice(0, 25).forEach((w) => console.log('  ! ' + w));
    if (warnings.length > 25) console.log(`  ... and ${warnings.length - 25} more`);
}

if (unresolved.length) {
    console.log(`\nUnresolved, deliberately unchanged:`);
    unresolved.forEach((u) => console.log(`  ? ${u.bookKey}: ${u.notes || 'no note given'}`));
}

if (untouched.length) {
    console.log(`\nNot yet researched (${untouched.length}): ${untouched.slice(0, 8).join(', ')}${untouched.length > 8 ? ' ...' : ''}`);
}

if (dryRun) {
    console.log('\nDry run, script.js untouched.\n');
    process.exit(0);
}

writeFileSync(join(root, 'script.js'), out);

// Provenance so every corrected entry can be traced back to its sources.
writeFileSync(join(root, 'tools', 'blurb-provenance.json'), JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    totals: {
        entries: Object.keys(bookData).length,
        researched: seen.size,
        applied: applied,
        unresolved: unresolved.length,
        untouched: untouched.length,
    },
    entries: applicable.map((e) => ({
        bookKey: e.bookKey, title: e.title, verdict: e.verdict,
        confidence: e.confidence, sources: e.sources, notes: e.notes || null,
    })),
    unresolved: unresolved.map((u) => ({ bookKey: u.bookKey, notes: u.notes || null })),
}, null, 1) + '\n');

console.log(`\nWritten. Run node tools/validate-data.mjs next.\n`);
