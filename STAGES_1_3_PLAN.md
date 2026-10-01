# Stages 1–3 experience pass

**Started:** 1 October 2026

**Source:** [ROADMAP.md](ROADMAP.md), Stages 1–3

The September release established the catalogue, routes, event atlas and local
reading record. This pass improves the reader journeys that remain awkward.
It uses the existing reviewed data and does not infer editions, reading times,
event dates or character appearances that have not been checked.

## Slice 1: Find a path

- Add a direct Find a story action that reveals and focuses search, including on
  a phone.
- Add a linkable Novels route and a linkable reading status filter. Make the
  route's scope and count explicit, while retaining Full Fiction and Core.
- Explain when short works appear as chart prerequisites to a novel.
- Verify fresh URL, route switching, search focus, status filtering, keyboard
  access and phone layout in Chromium.

## Slice 2: Understand connections

- Turn faction tags and event links into a navigable, data-derived atlas.
- Provide a direct URL for each faction, links into the matching Archive
  filter, and links to relevant event viewpoints and works.
- Keep the source and uncertainty labels attached to each event.
- Verify cross-page links, spoiler-safe defaults, mobile layout and no console
  or network errors.

## Slice 3: Personal reading guide

- Let readers choose a preferred work format for recommendations without
  changing the reading route or losing progress.
- Explain why the primary and alternatives appear, and keep skipped, started
  and finished works out of new suggestions.
- Make suggestion changes and route transitions feel responsive with restrained
  animations that respect reduced-motion settings.
- Verify deterministic choices, persistence, progress safety, accessibility,
  desktop and phone layouts across Chromium, Firefox and WebKit.

## Acceptance boundary

Automated and visual checks can establish correct behaviour and presentation.
The roadmap's moderated-reader and independent expert acceptance targets still
require actual participants and editorial review.

## Implementation status, 1 October 2026

- Slices 1–3 implemented and checked in the built static site.
- Full browser, accessibility, cross-engine and catalogue audits passed.
- Moderated-reader and expert editorial targets remain unverified.
