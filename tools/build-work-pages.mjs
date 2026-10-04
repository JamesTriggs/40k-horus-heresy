// Generate crawlable, spoiler-safe work pages from the same reviewed records as
// the interactive archive. The pages are generated outputs, never hand-edited.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { repoRoot } from './load-data.mjs';

const readJson = (name) => JSON.parse(readFileSync(join(repoRoot, name), 'utf8'));
const books = readJson('data/books.json');
const identities = readJson('data/work-identities.json').identities;
const publisherFacts = readJson('data/publisher-work-facts.json');
const publisherCollections = readJson('data/publisher-collections.json');
const coreRoute = readJson('data/reading-routes.json').core;
const coreKeys = new Set(coreRoute.works.map((work) => work.key));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);
const siteDescription = 'Independent Horus Heresy reading guide with cited work records and a local reading tracker.';

export function buildWorkPages(output) {
    const entries = identities.map((identity) => {
        const book = books[identity.legacyKeys[0]];
        if (!book) throw new Error(`Work '${identity.id}' has no catalogue entry`);
        return { identity, book };
    }).sort((a, b) => a.book.title.localeCompare(b.book.title));

    const indexRows = entries.map(({ identity, book }) =>
        `<li><a href="work/${identity.id}/">${escapeHtml(book.title)}</a> <span>${escapeHtml(book.author)} · ${escapeHtml(book.format)}</span></li>`).join('\n');
    writeFileSync(join(output, 'works.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Work index | Horus Heresy Archive</title>
<meta name="description" content="Browse ${entries.length} distinct Horus Heresy works represented in the Archive.">
<link rel="canonical" href="works.html"><link rel="icon" href="favicon-32.png" sizes="32x32" type="image/png">
<link rel="stylesheet" href="styles.css"></head><body>
<main class="source-page work-index"><a class="source-back" href="index.html">← Back to the Archive</a>
<h1>Work index</h1><p>${entries.length} distinct works represented in this archive. This is an alphabetical index, not a reading order. Shorter-work premises awaiting spoiler review are withheld.</p>
<ol>${indexRows}</ol></main></body></html>\n`);

    for (const { identity, book } of entries) {
        const pageDir = join(output, 'work', identity.id);
        mkdirSync(pageDir, { recursive: true });
        const premise = book.safeSummaryReview
            ? book.blurbSafe : 'Introduction pending spoiler review. Open the interactive archive to choose whether to reveal the full synopsis.';
        const source = book.safeSummaryReview
            ? `<p>Introduction reviewed against <a href="${escapeHtml(book.safeSummaryReview.source)}" target="_blank" rel="noopener noreferrer">Black Library’s description</a> on ${escapeHtml(book.safeSummaryReview.reviewedAt)}. The publisher page may contain spoilers.</p>`
            : '<p>This introduction has not had a spoiler review.</p>';
        const collectionNames = [...new Set(identity.legacyKeys.map((key) => books[key])
            .filter((entry) => entry?.anthology && entry.collectionRelation !== 'novelised in')
            .map((entry) => entry.anthology))];
        const collections = collectionNames.length
            ? `<p>Listed in: ${collectionNames.map(escapeHtml).join(', ')}.</p>` : '';
        const publication = identity.legacyKeys.map((key) => publisherFacts.directWorks[key]).find(Boolean);
        const collection = collectionNames.map((name) => publisherCollections.collections[name]).find(Boolean);
        const disputed = collectionNames.map((name) => publisherCollections.disputed?.[name]).find(Boolean);
        const disputedListed = disputed?.publisherListed?.some((entry) => identity.legacyKeys.includes(entry.key));
        const seriesFact = identity.legacyKeys.some((key) => publisherFacts.works[key]);
        const coreFact = identity.legacyKeys.some((key) => coreKeys.has(key));
        const publicationSource = publication?.source || collection?.source ||
            (disputed ? disputedListed ? disputed.publisherSource : disputed.bibliographicSource : null) ||
            (seriesFact ? publisherFacts.source : null) ||
            (coreFact ? coreRoute.source : null);
        const checkedAt = publication
            ? publication.reviewedAt || publisherFacts.reviewedAt
            : collection ? collection.reviewedAt || publisherCollections.reviewedAt
                : disputed ? publisherCollections.reviewedAt
                    : seriesFact ? publisherFacts.reviewedAt
                        : coreFact ? coreRoute.reviewedAt : null;
        const publicationNote = publicationSource
            ? `<p>Publication facts: <a href="${escapeHtml(publicationSource)}" target="_blank" rel="noopener noreferrer">${disputed && !disputedListed ? 'bibliographic record' : 'publisher source'}</a>${checkedAt ? `, checked ${escapeHtml(checkedAt)}` : ''}${disputed ? '. The collection contents remain disputed' : ''}.</p>`
            : '';
        const formatConflict = publication?.formatConflict
            ? `<p>${escapeHtml(publication.formatConflict.note)} <a href="${escapeHtml(publication.formatConflict.source)}" target="_blank" rel="noopener noreferrer">Black Library collection page</a>.</p>`
            : '';
        const description = book.safeSummaryReview ? book.blurbSafe : siteDescription;
        writeFileSync(join(pageDir, 'index.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(book.title)} | Horus Heresy Archive</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="./"><link rel="icon" href="../../favicon-32.png" sizes="32x32" type="image/png">
<link rel="stylesheet" href="../../styles.css"></head><body>
<main class="source-page work-landing"><a class="source-back" href="../../works.html">← Work index</a>
<h1>${escapeHtml(book.title)}</h1>
<div class="work-landing-content"><img src="../../${escapeHtml(book.coverImage)}" alt="Cover associated with ${escapeHtml(book.title)}" width="315" height="508">
<div><p><strong>Author:</strong> ${escapeHtml(book.author)}<br><strong>Format:</strong> ${escapeHtml(book.format)}</p>
<p>${escapeHtml(premise)}</p>${collections}${source}${publicationNote}${formatConflict}
<p><a href="../../index.html#work=${encodeURIComponent(identity.id)}">Open this work in the interactive Archive</a> to track reading progress and explore related works.</p>
<p><a href="../../quiz.html?work=${encodeURIComponent(identity.id)}">Take the three-question memory check</a> for this work. The quiz contains story spoilers.</p></div></div>
</main></body></html>\n`);
    }
    return entries.length;
}
