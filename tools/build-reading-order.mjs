#!/usr/bin/env node
// Builds reading-order.json: the recommended reading order, phase-grouped.
//
// Run with: node tools/build-reading-order.mjs
//
// Why this exists
// ---------------
// Chronological order and reading order are different things. In Daunt's chart
// `Horus Rising` is the topmost node and a root with nothing pointing at it,
// while `Descent of Angels` (820.M30) and `The Wolf of Ash and Fire` (999.M30)
// both sit below it despite being centuries earlier in universe. The arrows
// encode "what must you already have read", not "when did this happen".
//
// Strict chronology puts 31 books ahead of the entry point, and one of them is
// A Thousand Sons, which covers the Council of Nikaea and spoils the main arc.
// So chronology is a reference index, not advice.
//
// Why this is not a flattening of the chart
// -----------------------------------------
// A topological sort of the 205 prerequisite edges is valid and useless. It
// pulls every lane's entry point up immediately after the spine, producing
// Garro: Ashes of Fealty at 7th and Fulgrim at 11th. The chart's lanes are
// parallel storylines and cross-lane vertical position implies no reading
// order, which is why the graph is offered as its own view rather than
// linearised. Only 8 of 205 edges point upward in the diagram, so the chart is
// close to its own reading order within a lane, but not across lanes.
//
// What this does instead
// ----------------------
// Groups into phases anchored on in-universe date, pins the opening quartet
// first, holds The Primarchs back as optional, and carries each book's charted
// prerequisites through so the interface can warn when a phase places a book
// ahead of something that should precede it.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadFromScript, repoRoot as root } from './load-data.mjs';


// ---------------------------------------------------------------------------
// Load both sides
// ---------------------------------------------------------------------------
const source = readFileSync(join(root, 'script.js'), 'utf8');
const { bookData } = loadFromScript(['bookData']);
const bookKeys = Object.keys(bookData);
const chronoRank = new Map(bookKeys.map((k, i) => [k, i + 1]));

const chart = JSON.parse(readFileSync(join(root, 'daunt-chart.json'), 'utf8'));

// ---------------------------------------------------------------------------
// Map chart nodes to bookData keys
// ---------------------------------------------------------------------------
const normalise = (s) => String(s)
    .toLowerCase()
    .replace(/^(garro|bjorn):\s*/, '')
    .replace(/[^a-z0-9]+/g, '');

// The chart carries typos and variant titles. Recorded in
// DAUNT-CHART-EXTRACTION.md and reproduced here so the mapping is auditable.
const ALIASES = {
    'thief of revelation': 'THIEF OF REVELATIONS',
    'vulcan lives': 'VULKAN LIVES',
    'the heart of pharos': 'THE HEART OF THE PHAROS',
    wolfhunt: 'WOLF HUNT',
    'guardian of the order': 'CYPHER: GUARDIAN OF ORDER',
    'herald of sangiunius': 'HERALD OF SANGUINIUS',
    'the devine adoratrice': 'THE DIVINE ADORATRICE',
    'tallarn: executioner': 'TALLARN',
};

const byTitle = new Map();
for (const key of bookKeys) {
    const n = normalise(bookData[key].title);
    // First writer wins, so a reprint resolves to its earliest position
    if (!byTitle.has(n)) byTitle.set(n, key);
}

const nodeToKey = new Map();
const keyToNode = new Map();
const unmatchedNodes = [];
for (const node of chart.nodes) {
    if (node.isAnthologyContainer) continue;   // a container, not a readable unit
    const alias = ALIASES[node.label.toLowerCase()];
    const key = byTitle.get(normalise(alias ?? node.label));
    if (key) {
        nodeToKey.set(node.id, key);
        if (!keyToNode.has(key)) keyToNode.set(key, node.id);
    } else {
        unmatchedNodes.push(node.label);
    }
}

const prerequisitesFor = (key) => {
    const nodeId = keyToNode.get(key);
    if (!nodeId) return [];
    return [...new Set(
        chart.edges
            .filter((e) => e.to === nodeId)
            .map((e) => nodeToKey.get(e.from))
            .filter((k) => k && k !== key)
    )];
};

// ---------------------------------------------------------------------------
// Phases
// ---------------------------------------------------------------------------
const SPINE = ['horus-rising', 'false-gods', 'galaxy-in-flames', 'the-flight-of-the-eisenstein'];

const PHASES = [
    {
        id: 'opening',
        title: 'Start Here',
        blurb: 'Four books, in this order. They are the entry point to the whole saga, and almost everything else assumes you have read them.',
        pinned: SPINE,
    },
    {
        id: 'before-the-betrayal',
        title: 'Before the Betrayal',
        blurb: 'The Great Crusade, the Primarchs found, and the grievances that will become the Heresy.',
        upTo: 30001,
    },
    {
        id: 'isstvan',
        title: 'Isstvan and the Drop Site Massacre',
        blurb: 'The betrayal breaks into the open. Isstvan III, then the ambush at Isstvan V.',
        upTo: 30006,
    },
    {
        id: 'calth',
        title: 'Calth and the Shadow Crusade',
        blurb: 'The war spreads. Ultramar burns and the traitor Legions carve up the east.',
        upTo: 30008,
    },
    {
        id: 'imperium-secundus',
        title: 'Imperium Secundus and the Ruinstorm',
        blurb: 'Cut off behind the warp storm, the loyalist Primarchs build a second Imperium.',
        upTo: 30011,
    },
    {
        id: 'road-to-terra',
        title: 'The Road to Terra',
        blurb: 'Beta-Garmon and the last campaigns before the Warmaster reaches the Throneworld.',
        upTo: 30013,
    },
    {
        id: 'siege',
        title: 'The Siege of Terra',
        blurb: 'The finale. Read these last, and read them in series order.',
        upTo: 30014,
    },
    {
        id: 'scouring',
        title: 'After the Heresy',
        blurb: 'The Scouring and its aftermath.',
        upTo: Infinity,
    },
];

const OPTIONAL_PHASE = {
    id: 'primarchs',
    title: 'Optional: The Primarchs',
    blurb: 'Seventeen character studies, one per Primarch. Supplementary background rather than plot, absent from the source chart, and readable any time after the opening four.',
};

const anchorYear = (timeline) => {
    const m = /^(\d{3})(?:-(\d{3}))?\.M(\d{2})$/.exec(timeline || '');
    return m ? (Number(m[3]) - 1) * 1000 + Number(m[1]) : Infinity;
};

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------
const entries = [];
const assigned = new Set();

const makeEntry = (key, phaseId) => ({
    bookKey: key,
    number: bookData[key].number,
    title: bookData[key].title,
    timeline: bookData[key].timeline,
    phase: phaseId,
    chronoRank: chronoRank.get(key),
    inChart: keyToNode.has(key),
    prerequisites: prerequisitesFor(key),
});

// The opening quartet is pinned in an explicit order, not derived.
for (const key of SPINE) {
    if (!bookData[key]) throw new Error(`Spine book missing from bookData: ${key}`);
    assigned.add(key);
    entries.push(makeEntry(key, 'opening'));
}

// Held back so the war reads as one narrative.
const optionalKeys = bookKeys.filter((k) => bookData[k].series === 'primarchs');
optionalKeys.forEach((k) => assigned.add(k));

// Order a set of books so that, wherever the chart states a prerequisite
// between two books in the same phase, the prerequisite comes first. Ties fall
// back to the curated order, so main novels still precede their supporting
// stories on a shared date.
//
// This matters because in-universe date and reading order genuinely disagree.
// The chart says read Fulgrim before The First Heretic, even though the site
// dates The First Heretic to 956.M30, because that date describes only its
// prologue while its main arc runs through Isstvan V.
const orderWithinPhase = (keys) => {
    const inPhase = new Set(keys);
    const curated = new Map(keys.map((k, i) => [k, i]));
    const dependents = new Map(keys.map((k) => [k, []]));
    const remaining = new Map(keys.map((k) => [k, 0]));

    for (const key of keys) {
        for (const prerequisite of prerequisitesFor(key)) {
            if (!inPhase.has(prerequisite)) continue;   // cross-phase, flagged instead
            dependents.get(prerequisite).push(key);
            remaining.set(key, remaining.get(key) + 1);
        }
    }

    const ready = keys.filter((k) => remaining.get(k) === 0);
    const ordered = [];
    while (ready.length) {
        ready.sort((a, b) => curated.get(a) - curated.get(b));
        const key = ready.shift();
        ordered.push(key);
        for (const next of dependents.get(key)) {
            remaining.set(next, remaining.get(next) - 1);
            if (remaining.get(next) === 0) ready.push(next);
        }
    }

    // A cycle within a phase would drop books, so fall back to curated order
    // for anything left rather than losing it.
    if (ordered.length !== keys.length) {
        const seen = new Set(ordered);
        ordered.push(...keys.filter((k) => !seen.has(k)));
    }
    return ordered;
};

// Everything else falls into a phase by date.
for (const phase of PHASES.slice(1)) {
    const inThisPhase = bookKeys.filter((key) =>
        !assigned.has(key) && anchorYear(bookData[key].timeline) <= phase.upTo);
    inThisPhase.forEach((k) => assigned.add(k));
    for (const key of orderWithinPhase(inThisPhase)) {
        entries.push(makeEntry(key, phase.id));
    }
}

const leftover = bookKeys.filter((k) => !assigned.has(k));
if (leftover.length) throw new Error(`Unphased books: ${leftover.join(', ')}`);

for (const key of optionalKeys.sort((a, b) => chronoRank.get(a) - chronoRank.get(b))) {
    entries.push(makeEntry(key, OPTIONAL_PHASE.id));
}

entries.forEach((e, i) => { e.rank = i + 1; });

// ---------------------------------------------------------------------------
// Verify against the chart's prerequisites
// ---------------------------------------------------------------------------
const rankOf = new Map(entries.map((e) => [e.bookKey, e.rank]));
const violations = [];
for (const edge of chart.edges) {
    const from = nodeToKey.get(edge.from);
    const to = nodeToKey.get(edge.to);
    if (!from || !to || from === to) continue;
    if (rankOf.get(from) > rankOf.get(to)) {
        violations.push({
            prerequisite: bookData[from].title,
            prerequisiteKey: from,
            prerequisiteRank: rankOf.get(from),
            dependent: bookData[to].title,
            dependentKey: to,
            dependentRank: rankOf.get(to),
        });
    }
}

// Drop phases nothing landed in, so the interface never renders an empty
// heading. "After the Heresy" is currently empty because the only two books
// dated past the Siege are Primarchs volumes, held back as optional.
const phaseList = [...PHASES, OPTIONAL_PHASE]
    .filter((p) => entries.some((e) => e.phase === p.id))
    .map((p) => ({ id: p.id, title: p.title, blurb: p.blurb }));

const output = {
    meta: {
        purpose: 'Recommended reading order, phase-grouped, with the opening quartet pinned first.',
        note: 'This is NOT chronological order, and it is not a flattening of the chart either. The chart\'s lanes are parallel storylines, so cross-lane vertical position implies no reading order. Phases are anchored on in-universe date, and the curated order is preserved within each phase.',
        derivedBy: 'tools/build-reading-order.mjs',
        chartSource: chart.meta.source,
        totals: {
            entries: entries.length,
            inChart: entries.filter((e) => e.inChart).length,
            notInChart: entries.filter((e) => !e.inChart).length,
        },
        prerequisiteEdgesTotal: chart.edges.length,
        prerequisiteEdgesHonoured: chart.edges.length - violations.length,
        prerequisiteViolations: violations,
        violationNote: 'A violation means the phase ordering places a book before something the chart says should precede it. These are surfaced in the interface on the affected book rather than silently reordered.',
        chartNodesWithoutBookEntry: unmatchedNodes.length,
    },
    phases: phaseList,
    entries,
};

writeFileSync(join(root, 'reading-order.json'), JSON.stringify(output, null, 1) + '\n');

const countIn = (id) => entries.filter((e) => e.phase === id).length;

console.log(`Wrote reading-order.json, ${entries.length} entries across ${phaseList.length} phases.\n`);
for (const phase of phaseList) {
    console.log(`  ${String(countIn(phase.id)).padStart(3)}  ${phase.title}`);
}
console.log(`\nIn the chart: ${output.meta.totals.inChart}. Not in the chart: ${output.meta.totals.notInChart}.`);
console.log(`Prerequisite edges honoured: ${output.meta.prerequisiteEdgesHonoured} of ${chart.edges.length}.`);
if (violations.length) {
    console.log(`\n${violations.length} book(s) placed before a charted prerequisite, flagged in the data:`);
    violations.slice(0, 10).forEach((v) =>
        console.log(`  ! #${v.dependentRank} ${v.dependent}  before  #${v.prerequisiteRank} ${v.prerequisite}`));
    if (violations.length > 10) console.log(`  ... and ${violations.length - 10} more`);
}
console.log('\nFirst 10:');
entries.slice(0, 10).forEach((e) =>
    console.log(`  ${String(e.rank).padStart(3)} ${e.number.padEnd(9)} ${e.title}`));
