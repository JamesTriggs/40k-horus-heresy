#!/usr/bin/env node
// Applies researched corrections from tools/blurb-fixes/*.json into data/books.json.
//
// Run:  node tools/apply-blurb-fixes.mjs --dry-run
//       node tools/apply-blurb-fixes.mjs --replace-prose
//
// Research files stay separate from data/books.json, so corrections are
// reviewable, re-runnable and cannot half-apply. Every change is checked
// against the rules below before anything is written.
//
// Entries marked "unresolved" are deliberately NOT applied. The whole point of
// this exercise is that a plausible invention is worse than a known gap.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadFromScript, repoRoot as root } from './load-data.mjs';

const fixesDir = join(root, 'tools', 'blurb-fixes');
const dryRun = process.argv.includes('--dry-run');
const replaceProse = process.argv.includes('--replace-prose');

// 'Anthology' covers collected volumes that the dataset holds as a single
// entry rather than as component stories, such as TALLARN.
const VALID_TYPES = new Set([
    'Novel', 'Novella', 'Short Story', 'Audio Drama', 'Audio Book', 'Graphic Novel', 'Anthology',
]);
const VALID_VERDICTS = new Set(['corrected', 'confirmed', 'unresolved']);
const VALID_CONFIDENCE = new Set(['high', 'medium', 'low']);

// Phrases that should never appear in a spoiler-free summary. Matched on word
// boundaries, not as substrings: a naive match reads "dies" inside "bodies",
// which is the same defect this project already found in the site's own
// character matcher, where "Amon" matched "among".
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

const { bookData } = loadFromScript(['bookData']);

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
    // Files describing books that did not exist yet use `proposedKey` and were
    // inserted by hand, so this corrections pipeline has nothing to do with
    // them. Kept in the directory as the provenance record.
    if (parsed.newEntries) {
        console.log(`  skipping ${file}: new entries, applied separately`);
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
// This is a historical prose research pipeline. Publication metadata and the
// display details have since received separate publisher review, so never
// rebuild them from older research files.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Update the structured catalogue source. Generated browser data is rebuilt
// after the source write, so contributors never edit a JavaScript literal.
// ---------------------------------------------------------------------------
const out = JSON.parse(JSON.stringify(bookData));
let applied = 0;

for (const entry of applicable) {
    const book = out[entry.bookKey];
    const changes = [];
    const fields = {
        blurb: entry.blurb.trim(),
        blurbSafe: entry.blurbSafe.trim(),
    };
    for (const [field, value] of Object.entries(fields)) {
        if (JSON.stringify(book[field]) !== JSON.stringify(value)) {
            changes.push(field);
            if (replaceProse) book[field] = value;
        }
    }
    if (changes.length && replaceProse) {
        applied++;
    } else if (changes.length) {
        warnings.push(`${entry.bookKey}: researched ${changes.join(', ')} differs from the live catalogue; use --replace-prose only after reviewing the change`);
    }
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
    console.log('\nDry run, data/books.json untouched.\n');
    process.exit(0);
}

if (!replaceProse) {
    console.log('\nNo catalogue changes. Pass --replace-prose to apply reviewed prose updates.\n');
    process.exit(0);
}

writeFileSync(join(root, 'data', 'books.json'), JSON.stringify(out, null, 2) + '\n');

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

console.log(`\nWritten. Run node tools/build-catalogue.mjs and node tools/validate-data.mjs next.\n`);
