#!/usr/bin/env node
// Publish only the files the static reader app actually serves.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { repoRoot } from './load-data.mjs';
import { buildWorkPages } from './build-work-pages.mjs';

const output = join(repoRoot, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output);

// GitHub Pages currently serves the repository root. Keep the generated work
// pages there as tracked outputs, then copy the same bytes into Netlify's dist.
rmSync(join(repoRoot, 'work'), { recursive: true, force: true });
const workCount = buildWorkPages(repoRoot);

const files = [
    'index.html', 'sources.html', 'events.html', 'events.js', 'factions.html', 'factions.js', 'quiz.html', 'quiz.js', 'quiz-engine.mjs', 'quiz-data.json', 'styles.css', 'script.js',
    'catalogue-data.js', 'reading-order.json', 'daunt-chart.json',
    'favicon.png', 'favicon-32.png', 'apple-touch-icon.png',
    'ORDERING_DECISIONS.md', 'CATALOGUE_AUDIT.md',
    'CHART_RECONCILIATION.md', 'RELEASE_WATCH.md', 'ROADMAP.md', 'STAGES_1_3_PLAN.md', 'BUILD_LOG.md',
];
for (const file of files) cpSync(join(repoRoot, file), join(output, file));
cpSync(join(repoRoot, 'works.html'), join(output, 'works.html'));
cpSync(join(repoRoot, 'work'), join(output, 'work'), { recursive: true });
cpSync(join(repoRoot, 'images'), join(output, 'images'), { recursive: true });
console.log(`Built static site in ${output} with ${workCount} standalone work pages.`);
