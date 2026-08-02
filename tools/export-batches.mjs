#!/usr/bin/env node
// Splits bookData into research batches and writes a manifest per batch.
// Run: node tools/export-batches.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'script.js'), 'utf8');
const ctx = createContext({
    document: { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
        addEventListener: () => {}, documentElement: { classList: { toggle: () => {} } }, body: { style: {} } },
    localStorage: { getItem: () => null, setItem: () => {} },
    window: { addEventListener: () => {} }, requestAnimationFrame: () => {}, console,
});
runInContext(src.slice(0, src.indexOf('const modalOverlay')) + '\n;globalThis.__b = bookData;', ctx);
const bookData = ctx.__b;

const typeOf = (d) => (/<strong>Type:<\/strong>\s*([^<]+)/.exec(d || '')?.[1] || '').trim();

const BATCHES = [
    ['tales-age',       ['Tales of Heresy', 'Age of Darkness']],
    ['shadows-primarchs-calth', ['Shadows of Treachery', 'The Primarchs', 'Mark of Calth']],
    ['legacies',        ['Legacies of Betrayal']],
    ['war-without-end', ['War Without End']],
    ['eye-of-terra',    ['Eye of Terra']],
    ['silent-war',      ['The Silent War']],
    ['corax-garro',     ['Corax', 'Garro']],
    ['shattered-flame', ['Shattered Legions', 'Born of Flame']],
    ['burden',          ['The Burden of Loyalty']],
    ['heralds',         ['Heralds of the Siege']],
];

const out = join(root, 'tools', 'blurb-batches');
mkdirSync(out, { recursive: true });

const entry = ([key, b]) => ({
    bookKey: key,
    number: b.number,
    title: b.title,
    author: b.author,
    anthology: b.anthology || null,
    series: b.series || null,
    currentType: typeOf(b.details),
    currentTimeline: b.timeline,
    currentLegions: b.legions,
    currentBlurb: b.blurb,
    currentBlurbSafe: b.blurbSafe,
});

const all = Object.entries(bookData);
const claimed = new Set();
let total = 0;

for (const [name, anthologies] of BATCHES) {
    const rows = all.filter(([, b]) => anthologies.includes(b.anthology));
    rows.forEach(([k]) => claimed.add(k));
    writeFileSync(join(out, name + '.json'), JSON.stringify({ batch: name, anthologies, count: rows.length, entries: rows.map(entry) }, null, 1));
    console.log(`${String(rows.length).padStart(3)}  ${name}`);
    total += rows.length;
}

// Everything not in an anthology: the standalone novels, Primarchs and Siege.
const standalone = all.filter(([k]) => !claimed.has(k));
const groups = {
    'novels-a': standalone.filter(([, b]) => !b.series).slice(0, 13),
    'novels-b': standalone.filter(([, b]) => !b.series).slice(13, 26),
    'novels-c': standalone.filter(([, b]) => !b.series).slice(26),
    'primarchs': standalone.filter(([, b]) => b.series === 'primarchs'),
    'siege': standalone.filter(([, b]) => b.series === 'siege-of-terra'),
};
for (const [name, rows] of Object.entries(groups)) {
    writeFileSync(join(out, name + '.json'), JSON.stringify({ batch: name, anthologies: null, count: rows.length, entries: rows.map(entry) }, null, 1));
    console.log(`${String(rows.length).padStart(3)}  ${name}`);
    total += rows.length;
}

console.log(`\n${total} entries across ${BATCHES.length + Object.keys(groups).length} batches (bookData has ${all.length}).`);
if (total !== all.length) { console.error('BATCH COVERAGE MISMATCH'); process.exit(1); }
