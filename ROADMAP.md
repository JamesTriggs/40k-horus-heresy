# Horus Heresy Archive roadmap

**Drafted:** 26 September 2026
**Horizon:** roughly six to nine months of focused work, then ongoing editorial maintenance
**Aim:** become the most useful independent place to decide what to read, find where a story appears, understand how works connect, and keep a reliable reading record.

## Product promise

A reader should be able to answer four questions without leaving the Archive:

1. **Where do I start?** Give a newcomer a small, clear route into the series.
2. **What should I read next?** Use their progress, interests and chosen reading depth to make an explainable recommendation.
3. **Where can I find this story?** Distinguish a work from its anthology, audio edition, reprint and shop listing.
4. **How does it connect?** Show the relevant characters, Legions, events and prerequisites with spoilers controlled by the reader.

The differentiator is **trust plus navigation**. A larger list, a more elaborate chart or a general lore wiki alone will not make the Archive indispensable.

## Evidence and assumptions

**What exists now.** The repository holds 228 catalogue entries, a 185-node and 205-edge storyline chart, three reading views, 123 character records, local progress tracking and transfer codes. It has a data validator and 77 browser checks. The separate [2026 review](REVIEW-2026-07-31.md) is useful context, but several of its findings have since been fixed. This roadmap uses the current code as the baseline.

**What outside sources show.** [Black Library's catalogue](https://www.blacklibrary.com/the-horus-heresy) mixes numbered novels, Siege of Terra, Primarchs, quick reads and collections. Its [*The Burden of Loyalty* page](https://www.blacklibrary.com/series/the-horus-heresy/the-burden-of-loyalty-ebook.html) explicitly lists eight component works, which shows why a flat story list cannot answer where to find a story. [Warhammer Community](https://www.warhammer-community.com/en-gb/articles/dN1U9Do2/how-many-threads-are-combined-to-weave-the-incredible-tapestry-of-the-horus-heresy-series/) describes overlapping story threads and multiple viewpoints. The [Horus Heresy Omnibus Project](https://www.heresyomnibus.com/) already organises the fiction into 21 themed packages, while [Black Librarium's interactive order](https://hh-reading-order-app.firebaseapp.com/) focuses on a spoiler-conscious route. The Archive needs a clearer reader workflow than either a flat catalogue or another unexplained order.

**What is still an assumption.** There is no usage, interview or support evidence for this site in the repo. The priorities below are informed hypotheses, not measured demand. Before committing to the larger reference and personalisation phases, observe 8–12 readers across newcomers, faction readers, completionists and collectors. Ask them to find a starting point, locate one anthology story, and choose a next book. Record where they hesitate and whether the recommendation earns their trust.

## Editorial boundaries

- **Core catalogue:** Horus Heresy fiction, including numbered novels, Siege of Terra, Primarch books, novellas, short stories, audio dramas and graphic fiction. Define this scope precisely before changing the headline count.
- **Adjacent catalogue:** Horus Heresy Characters, *The Scouring*, game background books and later 40K connections. Link these as adjacent material, with their own counts and routes. [Black Library currently lists *Ashes of the Imperium* under The Scouring](https://www.blacklibrary.com/the-horus-heresy), and [Warhammer Community treats The Scouring as the next series](https://www.warhammer-community.com/en-gb/articles/xmlkha5o/the-scouring-timeline-how-the-warhammer-studio-worked-with-black-library-authors-on-the-new-series/).
- **Work versus edition:** A story has one stable identity. Anthologies, reprints, ebook, print and audio releases are containers or editions, not new readings of the same work.
- **Chronology versus advice:** In-universe date, publication order and recommended reading order remain separate, with their reasoning visible. Uncertain dates are shown as ranges or disputed placements, never as false precision.
- **Sources:** Official publisher pages and books are primary for publication facts. Community timelines can support reading advice when credited, but must not silently become canon. Cite the reason for disputed claims.

## Roadmap at a glance

| Stage | Outcome | First proof | Approximate effort |
| --- | --- | --- | --- |
| 0. Trust the record | A count and a book page mean exactly what they say | Sampled facts match sources and every item has a stable ID | 4–8 weeks |
| 1. Find a path | A newcomer reaches a suitable first or next read quickly | Usability tasks succeed without explanation | 3–5 weeks |
| 2. Understand connections | Work, collection, character and event pages answer follow-up questions | Readers can trace a story and its context without a second site | 4–8 weeks |
| 3. Personal reading guide | The Archive gives a useful next recommendation that explains itself | Readers accept or knowingly adjust the recommendation | 4–6 weeks |
| 4. Keep it authoritative | New works and corrections arrive through a repeatable process | A release can be added without hand-editing a giant script | Ongoing |

Effort is a planning estimate for one focused contributor, not a release promise. Stages can overlap once their data dependencies are met.

## Stage 0: Trust the record

**Why first:** If the catalogue counts reprints as works, gives uncertain dates as facts, or loses a reader's progress when a key changes, every later feature compounds the error.

### Slice 0.1: Define the catalogue model

- Give every **work** a permanent ID and aliases. Model **editions**, **collections**, **series**, **creators** and **story appearances** separately.
- Reconcile the 228 existing entries against unique works, anthology reprints and the 24 chart nodes absent from the catalogue. Produce a published inclusion list and a deliberate exclusion list.
- Model a story's membership in more than one anthology. Show both the original publication and the easiest currently listed collection, without claiming stock or price.
- Preserve all current reading records with an explicit migration map. Test transfer codes against changed catalogue versions before releasing the new model.

**Acceptance:** A title search returns one work page with all known editions and containers. Moving or renaming a display title does not alter progress. The displayed totals state what is being counted.

### Slice 0.2: Add source-backed metadata

- Move book and character records out of `script.js` into reviewable structured files, with a schema and generated browser data.
- For each fact that matters to a reader, record source URL or bibliographic reference, date checked, confidence and any editorial note. Start with title, author, format, collection membership, series number, publication year and synopsis.
- Audit chronology and faction tags separately. Label estimated dates and distinguish a story's narrative present from flashbacks.
- Replace substring-based character appearances with explicit work-to-character links. Merge duplicate identities and retire empty filler biographies.
- Extend validation to catch duplicate work IDs, orphaned collection members, bad aliases, missing citations, broken internal links and stale generated outputs. Run it in CI.

**Acceptance:** Every displayed work has a primary source for its identity and publication facts. A reviewed sample of at least 30 varied works has no material error. Disputed dates and appearances show their uncertainty.

### Slice 0.3: Establish the public trust baseline

- Finish the open spoiler audit across safe summaries, character links, chart labels and search. The current branch closes several leak paths, but the safe text itself still needs editorial review.
- Credit Daunt's source chart and keep its attribution visible.
- Add a visible “Sources and corrections” page and an entry-level correction link. Keep a dated changelog of substantive corrections.

**Acceptance:** A newcomer can see what is sourced, what is editorial advice and how to report an error. Scripted spoiler checks plus a manual journey reveal no unintentional outcome spoilers.

**Checkpoint:** Ship the trusted catalogue model before building recommendations from it.

## Stage 1: Find a path

### Slice 1.1: Replace the wall of cards with useful entry points

- Lead with **Start here**, **Continue reading**, **Explore a Legion**, **Browse all works** and **Find a story**.
- Add a compact list view and filters for format, series, anthology, Legion, status and reading depth. Keep cover-grid browsing as an option.
- Give anthology parent pages visible contents. A reader who owns *Tales of Heresy* should be able to see and mark its component stories without searching for every title.
- Add a “novels only” route that still flags short works needed to understand an important transition.

**Acceptance:** In moderated tasks, at least 80% of newcomers find *Horus Rising* and a suitable first route within one minute. Readers can locate a named short story's collection within two searches or clicks.

### Slice 1.2: Make every destination linkable

- Give each work, collection, character and view a stable URL. Back closes or reverses navigation sensibly on mobile.
- Add shareable links for a filtered view and a reading path. Search engines should land visitors on an answer, not only the home page.
- Add clear page titles, descriptions, breadcrumbs and canonical links after IDs and scope are stable.

**Acceptance:** A pasted work URL opens that exact work on a fresh device. Browser Back returns to the previous result or view. No modal-only content is unreachable by URL.

### Slice 1.3: Offer a small set of editorial routes

- Publish three distinct routes: **Core story**, **Full fiction**, and **By Legion**. Start Core with the opening sequence and mark optional diversions clearly.
- Show the number of works, approximate commitment and reason for each inclusion. Never imply that a subjective “essential” route is canonical.
- Let readers switch routes without losing progress. Their completed works count across all routes.

**Acceptance:** Readers can explain the difference between publication, chronology and advice after using the page. Each route has a human-reviewed rationale and spoiler-safe introduction.

**Checkpoint:** Repeat the three observed reader tasks. Drop or reshape entry points that do not improve completion.

## Stage 2: Understand connections

### Slice 2.1: Build reference pages around works

- A work page shows a spoiler-safe premise, optional full synopsis, author, format, series position, collection and edition links, narrative date, Legions, principal characters and relevant events.
- Show “read before”, “continues in”, “same event from another viewpoint” and “included in”. These are different relationships and need different labels.
- Cite contested links and explain whether a relationship is official, derived from the chart, or an Archive editorial judgement.

**Acceptance:** Starting from any sampled anthology story, a reader can find its collection, predecessor and follow-up where those relationships exist. No claim rests solely on a name substring.

### Slice 2.2: Create an event and faction atlas

- Start with about 15 high-value events and arcs, such as Isstvan III, the Drop Site Massacre, Prospero, Calth, Imperium Secundus, Beta-Garmon and the Siege.
- For each, show the involved works, viewpoints, approximate date, affected factions and a spoiler-safe introduction. Reveal outcomes only after a clear choice.
- Add curated Legion and character dossiers with aliases, key works and event participation. Record allegiance changes at the relevant point in the story instead of treating affiliation as a timeless fact.
- Connect these pages to the existing chart. Make the chart a visual route into sourced pages, not a second unmaintained database.

**Acceptance:** A reader can answer “Which books cover Prospero, and whose view is each?” from one event page. Chart nodes and work pages agree on IDs and prerequisites.

### Slice 2.3: Make provenance visible

- Expose source links, last review date and confidence on work and event pages. Where two chronologies disagree, show both positions and the Archive's reasoned choice.
- Credit and link the original chart and other editorial sources.

**Acceptance:** A reader can inspect the evidence behind a disputed placement without leaving the page's context.

**Checkpoint:** Review a sample of 20 pages with knowledgeable readers before extending the atlas broadly.

## Stage 3: Personal reading guide

### Slice 3.1: Explain the next recommendation

- Combine completed works, chosen route, faction interest and prerequisite edges to offer one next work plus two alternatives.
- Show a short reason: “continues the Garro thread”, “needed before *The Unremembered Empire*”, or “optional side story”. Show where to find it.
- Permit “skip”, “save for later” and “show shorter route”. Keep recommendations deterministic and inspectable.

**Acceptance:** Every recommendation has a traceable reason and never suggests an already completed work as unread. Users can change route without resetting their record.

### Slice 3.2: Support real collections and formats

- Let a reader mark an owned anthology, then mark its contained works individually or as completed in bulk with confirmation.
- Track reading progress at work level and optional ownership at edition level. Offer a simple print, ebook and audio preference without implying every format exists for every work.
- Keep the current local-first transfer code. Add a plain export and import file before considering accounts or hosted sync.

**Acceptance:** A reader can migrate an existing 228-entry record, mark a collection's contents, export it and restore it on another device without losing statuses.

### Slice 3.3: Test whether guidance is genuinely better

- Test novice, Legion-focused and completionist journeys against the current site and a simple static list.
- Measure task completion, time to a confident next choice, anthology lookup success and recommendation acceptance. Invite a short reason when a reader rejects the suggestion.
- Use the results to tune routes and wording. Do not use page views or total catalogue size as the primary success measure.

**Acceptance:** At least 80% of test readers can choose and explain their next work in under two minutes; fewer than 10% encounter a recommendation they regard as inexplicable. These are validation targets, not claimed current performance.

**Checkpoint:** Only add more personalisation if observed readers need it.

## Stage 4: Keep it authoritative

- Create a release watch for Black Library and Warhammer Community. New fiction enters a review queue, with its scope, source and relationships checked before publication. Reprints update editions rather than inflating work totals.
- Add contributor forms or templates for corrections, missing works and disputed orderings. Require citations and a second review for high-impact changes.
- Run automated link, data, accessibility and browser checks on changes. Periodically test mobile Safari and low-bandwidth loading.
- Publish a monthly or quarterly “archive updated” note with added works and corrections. Recheck external shop links, because availability changes.
- Consider accounts, hosted sync, public lists, ratings or community comments only if research shows local progress and curated routes cannot meet the need. These add moderation, privacy and operational costs.

**Acceptance:** A routine new release can be added through structured data and review, with no manual edit to a giant script and no change to existing progress IDs.

## What to defer

- **An AI lore chatbot.** It would be hard to source, hard to keep spoiler-safe and easy to make confidently wrong. The cited reference layer should come first.
- **A comprehensive 40K wiki.** Lexicanum already covers broad lore. The Archive's advantage is the connection between fiction, reading choices and collection contents.
- **Live prices or stock claims.** These change by region and edition. Link to official product pages and label the check date instead.
- **User accounts and social features.** The current local record solves the basic tracking problem with little operational burden. Prove unmet demand before adding a backend.
- **Adding every adjacent title to the main count.** *The Scouring* and game books deserve links and later routes, but should not blur what “Horus Heresy fiction” means.

## Immediate next three pieces of work

1. **Finish and review the spoiler branch.** Audit the safe summaries themselves, then ship the current leak fixes. The roadmap assumes a reader can trust the spoiler switch.
2. **Produce a catalogue reconciliation table.** Start with the 228 entries, chart-only nodes, anthology parents and reprints. Define stable work IDs and the scope statement before changing UI counts.
3. **Prototype the Start here and Find a story journeys.** Use the existing data for a small clickable prototype, then observe the first reader tasks before committing to a larger redesign.

## Decision record

Revisit this roadmap after Stage 0 and again after the first usability sessions. Change priorities when evidence shows a different broken moment. The mission remains to help readers make a confident, informed reading choice and find the work they chose.
