# Daunt's Horus Heresy Timeline v0.9 - extraction notes

Classification: **Internal**

Machine-readable output: [`daunt-chart.json`](./daunt-chart.json)
Source: `~/Downloads/40k-heresy.pdf` (single page, 2160 x 6480 pt, drawn in draw.io and printed to PDF from Chrome / Skia)

## Headline numbers

| Measure | Value |
| --- | --- |
| Nodes (books, stories, audio dramas) | 185 |
| Edges (reading-order arrows) | 205 unique (207 arrow instances, 2 duplicated pairs) |
| Columns / faction lanes | 17 |
| Anthologies in the reference panel | 14 |
| Legion shoulder-pad column icons | 11, plus a Luna Wolves pad on the main arc and a Mechanicum cog placed inline |
| Cross-column edges | 71 of 205 |
| Root nodes (no prerequisite) | 16 |
| Leaf nodes (nothing depends on them) | 61 |

Format breakdown: 101 short stories, 50 novels, 18 novellas, 12 audio dramas, 3 exclusive unnumbered short stories, 1 graphic novel.

## Method

The whole extraction is derived from the PDF's **vector content stream**, not from pixel inspection. Renders were used only to validate and to read the icon and cover images.

1. `pdftocairo -svg` converted the page to SVG. draw.io output survives this cleanly: every node is one or two `<path>` elements carrying an explicit `fill`, `stroke` and full path geometry, and every arrow is a stroked polyline plus a small solid-black triangle for the head.
2. A custom parser (`M/L/C/H/V/S/Q/A/Z` plus the page `matrix(0.707047, 0, 0, 0.707047, 14.197148, 50.722483)` transform) recovered 638 paths in page coordinates with their fills and strokes. These sorted into 209 polylines, 209 arrowheads, 200 closed shapes and 3 decorative rules.
3. `pdftotext -bbox-layout` gave 358 text lines with bounding boxes. Each line was assigned to the **smallest** shape whose box contains the line centre. **Every one of the 358 lines landed inside a shape - zero orphans.** That is the strongest single indicator that no node was missed, because a node without a label would be meaningless and a label without a node would have shown up as an orphan.
4. Shape type was classified geometrically (segment pattern plus vertex count plus corner-radius measurement), not by eye.
5. Arrowheads were matched to polylines by nearest endpoint. Every one of the 209 arrowheads is accounted for: 205 are real arrows and 4 are the folded-corner triangles of the "note" shape. Arrow direction comes from the arrowhead vertex furthest from the triangle's centroid (the tip). **All 207 resulting edges resolved both endpoints to a node at a boundary distance of exactly 0 pt**, which is what you expect when draw.io has snapped connectors to shape borders.
6. `pdftoppm -png` renders at 90 to 900 dpi were read as images to identify the 11 shoulder-pad icons, the 14 anthology covers, the legend swatches, and to spot-check nine separate regions of the graph against the extracted edges.

The drawing occupies only x 20 to 2136, y 59 to 2427 of the 2160 x 6480 page. The bottom two thirds of the page are blank.

## Legend, as actually drawn

Read off the legend swatches at high magnification and confirmed against node geometry across the chart.

| Format | Shape as drawn | Detection rule | Confidence |
| --- | --- | --- | --- |
| Novel | Rounded rectangle, corner radius ~6.4 pt, typically 85 x 42 pt | path `(L C×8)×4` | high |
| Graphic Novel | Horizontal hexagon, pointed left and right | 6 vertices, apex at mid-height on both sides | high |
| Short Story (Book #) | Rounded rectangle with a **chamfered top-left corner**, typically 76 x 34 pt | path `LCLCLCLCLC` **and** a `(Book N)` label line | high |
| Novella | **Geometrically identical to Short Story** | path `LCLCLCLCLC` and **no** `(Book N)` label | medium - see gaps |
| Audio Drama | Circle, 48.8 or 56.6 pt diameter | no `L` segments in the path | high |
| Exclusive Unnumbered Short Story | Sharp-cornered rectangle with a **folded top-right corner** | 5-vertex outline plus a small triangle abutting its top-right corner | high |

Label conventions:

- `(Book N)` means the story sits inside numbered anthology N.
- `(eBook)` marks an eBook-only release. It is an annotation, not a shape.
- `(Anthology)` marks a node that is itself an anthology container. Only two nodes use it: **The Mark of Calth** and **Corax**.
- The legend contains no plain sharp-cornered rectangle other than the Exclusive Unnumbered swatch, so a bare rectangle carries no separate meaning.

## Anthology reference panel

All 14 covers were rendered at 400 dpi and read directly. The mapping is unambiguous.

| Book | Anthology |
| --- | --- |
| 10 | Tales of Heresy |
| 16 | Age of Darkness |
| 20 | The Primarchs |
| 22 | Shadows of Treachery |
| 31 | Legacies of Betrayal |
| 33 | War Without End |
| 35 | Eye of Terra |
| 37 | The Silent War |
| 42 | Garro |
| 43 | Shattered Legions |
| 45 | Tallarn |
| 48 | The Burden of Loyalty |
| 50 | Born of Flame |
| 52 | Heralds of the Siege |

Every `(Book N)` reference in the chart uses one of these 14 numbers, with no strays. Usage counts: 33 (17), 35 (15), 31 (12), 37 (9), 16 (8), 43 (8), 52 (7), 22 (6), 42 (6), 45 (4), 20 (3), 10 (2), 48 (2), 50 (2).

## Colour to faction mapping

Node fill colour is the primary organising signal in this chart. It is more reliable than the x position, because **the vertical lanes are reused as the timeline descends**. For example the x band 1490 to 1590 carries Sons of Horus material around y 380 to 700, and then Terra / Imperium material from y 1050 downwards. Do not treat `xRange` as a hard lane boundary.

| Fill | Column id | Faction reading | Icon | Confidence |
| --- | --- | --- | --- | --- |
| `#dae8fc` (top of chart, y < 200) | `main-arc` | Main Horus arc | White/grey pad, black wolf head over a crescent moon (Luna Wolves), x 456 | high |
| `#dae8fc` (elsewhere) | `sons-of-horus` | Sons of Horus | Sea-green pad, gold Eye of Horus pierced by a downward arrow, x 1511 | high |
| `#126b96` and `#1478a8` | `space-wolves-thousand-sons` | Space Wolves and Thousand Sons (Prospero arc) | Two pads side by side at x 35 and x 89: yellow pad with black wolf head, and blue pad with gold ouroboros | high |
| `#cccccc` | `white-scars` | White Scars | White/silver pad, gold lightning bolt, red trim, x 280 | high |
| `#ff66ff` | `emperors-children` | Emperor's Children | Pink pad, gold wing, x 540 | high |
| `#ccff99` | `iron-warriors` | Iron Warriors (Tallarn arc) | none | medium |
| `#000000` | `raven-guard` | Raven Guard | Black pad, white raven, x 818 | high |
| `#009900` | `salamanders` | Salamanders | Green pad, white dragon head, x 1004 | high |
| `#6e3600` | `word-bearers` | Word Bearers and World Eaters (Calth and Betrayer arc) | Dark red pad, black horned daemon head in gold flames, x 1296 | medium |
| `#cc6600` | `ultramarines-imperium-secundus` | Ultramarines / Imperium Secundus, with Blood Angels and Dark Angels strands | Blue pad, white omega, x 1238 | medium |
| `#003300` | `dark-angels` | Dark Angels (Thramas Crusade, includes the Night Lords strand) | Dark green pad, silver winged sword, x 1849 | high |
| `#e3c800` | `imperial-fists` | Imperial Fists | Yellow pad, black-ringed fist, x 1657 | high |
| `#ffff33` | `terra-imperium` | Terra / Imperium: the Emperor, Malcador, Custodes, Sisters of Silence | none | medium |
| `#4c0099` | `death-guard-garro` | Death Guard, then Garro and the Knights-Errant | none | medium |
| `#4d4d4d` | `mechanicum` | Mechanicum | Cog-and-skull placed inline beside the `Mechanicum` node at x 465, y 1076 | high |
| `#ffffff` or no fill | `unaffiliated` | No faction colour assigned: multi-legion, Imperial and unaligned stories | none | medium |
| `#ffffff` below y 1975 | `siege-of-terra` | The Siege of Terra series | Own banner, no pad | high |

`#1478a8` and `#126b96` are visually indistinguishable in the render and were confirmed to be the same lane, so they are collapsed into one column. The difference is draw.io style drift, not meaning.

### Column summary

| Column | Nodes | Fills | x range | y range | Header icon |
| --- | --- | --- | --- | --- | --- |
| `space-wolves-thousand-sons` | 12 | `#126b96`, `#1478a8` | 20-1496 | 350-1587 | yes |
| `white-scars` | 8 | `#cccccc` | 252-450 | 334-1099 | yes |
| `emperors-children` | 6 | `#ff66ff` | 402-644 | 316-1028 | yes |
| `mechanicum` | 8 | `#4d4d4d` | 433-1591 | 1076-1452 | yes (inline) |
| `main-arc` | 4 | `#dae8fc` | 434-981 | 110-153 | yes |
| `iron-warriors` | 6 | `#ccff99` | 525-603 | 726-991 | no |
| `raven-guard` | 6 | `#000000` | 750-927 | 379-1691 | yes |
| `salamanders` | 9 | `#009900` | 884-1098 | 378-1485 | yes |
| `dark-angels` | 12 | `#003300` | 1012-1914 | 347-1752 | yes |
| `ultramarines-imperium-secundus` | 16 | `#cc6600` | 1037-1369 | 1107-1803 | yes |
| `word-bearers` | 16 | `#6e3600` | 1143-1457 | 373-981 | yes |
| `sons-of-horus` | 6 | `#dae8fc` | 1436-1578 | 377-700 | yes |
| `imperial-fists` | 6 | `#e3c800` | 1493-1814 | 308-905 | yes |
| `terra-imperium` | 9 | `#ffff33` | 1500-1694 | 1052-1950 | no |
| `death-guard-garro` | 7 | `#4c0099` | 1948-2099 | 244-711 | no |
| `unaffiliated` | 41 | `#ffffff`, none | 237-2136 | 262-1860 | no |
| `siege-of-terra` | 13 | `#ffffff` | 128-1756 | 2129-2427 | no |

### Gradient fills mark faction crossovers

Fourteen nodes are filled with a two-stop linear gradient. In most cases the two stops are two faction colours, which reads as a deliberate "this book belongs to both lanes" marker. These are recorded in the JSON under `gradient` as `[fromHex, toHex]`.

| Node | Gradient | Reading |
| --- | --- | --- |
| Flight of the Eisenstein | `#dae8fc` to `#4c0099` | main arc into Death Guard |
| The Path of Heaven | `#ff66ff` to `#999999` | Emperor's Children into White Scars |
| Angels of Caliban | `#cc6600` to `#003300` | Imperium Secundus into Dark Angels |
| Red-Marked | `#cc6600` to `#6e3600` | Imperium Secundus into Word Bearers |
| Wolfsbane | `#126b96` to `#ffffff` | Space Wolves into unaligned |
| Ordo Sinister, Master of Mankind, Magisterium, Bringer of Sorrow, The Board is Set, Prologue to Nikea, The Last Council, The Buried Dagger, Malcador: First Lord of the Imperium | `#ffff33` to `#ffff99` | plain shading inside the Terra lane, no crossover meaning |

## Per-section confidence

| Aspect | Confidence | Why |
| --- | --- | --- |
| Node existence and count | **high** | Straight from the vector stream. All 358 text lines landed inside a shape and all 200 closed shapes are accounted for (185 nodes plus 15 decorative). |
| Node labels | **high** | `pdftotext` word boxes, multi-line labels reassembled by y order inside each shape. Nothing garbled. |
| Node fill colours | **high** | Explicit `rgb(...)` fills. Gradients resolved from their `linearGradient` stops. |
| Node shape and therefore format | **high** except novella | Measured geometry. See the novella problem below. |
| Edges: existence, direction, endpoints | **high** | Every arrowhead consumed, every endpoint on a node border at 0 pt. Nine regions spot-checked visually against the render with no discrepancy found. |
| Anthology reference mapping | **high** | Covers read directly at 400 dpi. |
| Legend interpretation | **high** | Swatches read at 600 dpi. |
| Icon identification | **high** for 9 of 11 | Pads read at 300 to 900 dpi. |
| Column and faction **naming** | **medium** | The chart never writes a legion name. Names are inferred from the pad artwork plus the books in each lane. |
| Column x boundaries | **low to medium** | Lanes are reused vertically. `xRange` is the observed extent of that colour's nodes, not a lane boundary. |

## What I could NOT resolve

These are the real gaps. A human should fill them in.

### 1. Novella versus short story is undecidable from the chart

The legend's Novella swatch and Short Story swatch are **the same shape to the pixel** (86.97 x 25.45 pt versus 86.96 x 25.46 pt, identical path commands). The only distinguishing feature is that the Short Story swatch carries a `(Book #)` line. So the rule I applied is:

- chamfered shape **with** `(Book N)` becomes `short-story`
- chamfered shape **without** `(Book N)` becomes `novella`

All 18 nodes classified `novella` are flagged `"confidence": "medium"`. Fifteen of them are `(eBook)` releases and several of those are really short stories rather than novellas in Black Library terms (Restorer, Myriad, Into Exile, Hands of the Emperor, Dreadwing and similar). The chart simply cannot express the difference. The 18: The Ironfire, The Grey Raven, Into Exile, Myriad, Bringer of Sorrow, Prologue to Nikea, The Last Council, Hands of the Emperor, The Atonement of Fire, The Spear of Ultramar, Dreadwing, Lantern's Light, Old Wounds New Scars, Restorer, Two Metaphysical Blades, The Sons of Selenar, The Fury of Magnus, Garro: Knight of Gray.

### 2. Two icons I could not name with confidence

- **x 1296, the Word Bearers candidate**: a dark red pad with a black horned daemon head wreathed in gold flames. The books beneath it (The First Heretic, Aurelian, Know No Fear, Betrayer, The Mark of Calth, Butcher's Nails, After Desh'ea) are the Word Bearers and World Eaters strand, so I named the column `word-bearers`, but a reader who knows 30k heraldry should confirm whether this pad is Word Bearers or World Eaters. Marked medium.
- **x 1238, the Ultramarines pad**: the pad itself is unmistakably a blue pad with a white omega, so the *icon* is certain. What is uncertain is that it heads the orange `#cc6600` lane rather than a blue one. The orange lane is really "Imperium Secundus", mixing Ultramarines, Blood Angels and Dark Angels material. The column label reflects that but it is my reading, not the chart's words.

### 3. Four faction lanes have no header icon at all

`iron-warriors` (`#ccff99`, the Tallarn cluster), `terra-imperium` (`#ffff33`), `death-guard-garro` (`#4c0099`) and `unaffiliated` (`#ffffff`) have no shoulder pad above them. There are exactly 11 pads on the chart and I have accounted for all 29 embedded images (14 anthology covers, 11 column pads, 1 Luna Wolves pad on the main arc, 1 Mechanicum cog, plus 2 duplicate draws). So these lane names come purely from the books in them. Marked medium.

### 4. The `unaffiliated` bucket is 41 nodes of mixed material

White or transparent fill means "no faction colour assigned", and it lumps together at least these visually distinct sub-groups. I deliberately did **not** invent columns for them:

- An **Iron Hands / Shattered Legions** strand around x 670 to 1030 (Veritas Ferrum, Sermon of Exodus, Gunsight, Feat of Iron, The Iron Within, The Ironfire, Meduson, The Hand Elect). This looks like a genuine lane with no icon and no colour. Worth a human decision.
- Standalone Imperial novels (Nemesis, Legion, Fear to Tread, Damnation of Pythos, Outcast Dead, Vengeful Spirit, Titandeath, Slaves to Darkness).
- Night Lords / assorted short stories at the far right (The Dark King, Child of Night, Lost Sons, Luna Mendax, Grey Angel, The Last Remembrancer, Wolf Mother, The Devine Adoratrice).

### 5. Six nodes have no fill at all rather than a white fill

Daemonology, Perpetual, Riven, The Keys of Hel, Meduson and The Hand Elect are drawn with `fill: none`. They render white on the white page and are indistinguishable from the white-filled nodes by eye. They are recorded with `"colour": null`. Whether the author intended white or transparent is unknowable.

### 6. Two nodes share the label "The Either"

Both are genuinely present and genuinely distinct:

- `the-either-book-43`: chamfered short story, `#cccccc` White Scars, `(Book 43)`, at x 284, y 661.
- `the-either-audio-drama`: circle, `#dae8fc` Sons of Horus, no book ref, at x 1508, y 652.

Verified by rendering both at 300 dpi. Not a parsing error.

### 7. `bookRef` is always null

The chart never prints main-series book numbers (`Book 1`, `Book 19` and so on). Only anthology references appear. The `bookRef` field is present in the schema for the site to fill in from its own data.

### 8. Two duplicated edges collapsed

Where two edges converge on one junction, draw.io draws a single shared arrowhead. Two such pairs exist, at Angel Exterminatus (fed by both Kryptos and The Reflection Crack'd) and at Templar (fed by both The Purge and The Crimson Fist). Both were verified visually and both source books are recorded, so 207 arrow instances become 205 unique `from`/`to` pairs. No information lost.

### 9. Chart typographical errors

The chart contains title misspellings. Extraction preserves the chart's exact text in `label`. Corrections a human may want to apply:

| Chart label | Correct title |
| --- | --- |
| Tallarn: SIren | Tallarn: Siren |
| Herald of Sangiunius | Herald of Sanguinius |
| The Devine Adoratrice | The Divine Adoratrice |
| Vulcan Lives | Vulkan Lives |
| Thief of Revelation | Thief of Revelations |
| Wolfhunt | Wolf Hunt |
| The Heart of Pharos | The Heart of the Pharos |
| Garro: Knight of Gray | Garro: Knight of Grey |

### 10. Nothing was inferred where the vectors were silent

Two gradient nodes had no companion stroke path, so their shape could not be read from geometry. Both were resolved by rendering them at 250 dpi:

- **Angels of Caliban** is a rounded rectangle, so `novel`.
- **Malcador: First Lord of the Imperium** is a circle, so `audio-drama`.

No edge and no node in `daunt-chart.json` was added without a corresponding vector path in the PDF.

## Cross-reference against the site's `bookData`

`bookData` in `script.js` holds 224 entries. Two titles appear twice as reprints across anthologies (ARTEFACTS in both War Without End and Born of Flame, IMMORTAL DUTY in both Shattered Legions and Born of Flame), so there are 222 distinct stories.

Matching normalised titles, with a small alias table for the chart's typos and the `Garro:` prefix:

- **161 of 185 chart nodes match a `bookData` entry.**
- **24 chart nodes have no `bookData` match.**
- **64 `bookData` entries (62 distinct stories) do not appear in the chart.**

### Chart nodes with no `bookData` entry (24)

| Chart node | Format | Note |
| --- | --- | --- |
| The Unburdened | exclusive unnumbered short story | GW event-exclusive Mark of Calth variant, not in `bookData` |
| The Honoured | exclusive unnumbered short story | as above |
| Macragge's Honour | graphic novel | the only graphic novel on the chart |
| Tallarn: Executioner | short story (Book 45) | `bookData` has only the collected `TALLARN` (XLV), not the four component novellas |
| Tallarn: Ironclad | short story (Book 45) | as above |
| Tallarn: SIren | short story (Book 45) | as above |
| Tallarn: Witness | short story (Book 45) | as above |
| The Mark of Calth | novel (anthology container) | `bookData` holds the 8 component stories but no container entry |
| Corax | novel (anthology container) | `bookData` holds the 6 component stories but no container entry. Note `CORAX: LORD OF SHADOWS` (P10) is a different book |
| Restorer | novella (eBook) | |
| Old Wounds, New Scars | novella (eBook) | |
| Nightfane | audio drama | |
| Bringer of Sorrow | novella (eBook) | |
| Prologue to Nikea | novella (eBook) | |
| Malcador: First Lord of the Imperium | audio drama | shape confirmed by render, not by vector geometry |
| Two Metaphysical Blades | novella (eBook) | |
| The Last Council | novella (eBook) | |
| Lantern's Light | novella (eBook) | |
| Dreadwing | novella (eBook) | |
| The Atonement of Fire | novella (eBook) | |
| The Spear of Ultramar | novella (eBook) | |
| The Sons of Selenar | novella | Siege of Terra novella |
| The Fury of Magnus | novella | Siege of Terra novella |
| Garro: Knight of Gray | novella | Siege of Terra novella |

The pattern is clear: the chart is richer than `bookData` on **eBook-only novellas, Siege of Terra novellas, event-exclusive shorts, anthology container nodes and the Tallarn component novellas**.

### `bookData` entries absent from the chart (64)

The chart is much thinner than `bookData` on **anthology short stories** and it omits the entire **Primarchs** series.

**Standalone (18)** - the whole Primarchs series plus the collected Tallarn:
`P1` Roboute Guilliman: Lord of Ultramar, `P2` Leman Russ: The Great Wolf, `P3` Magnus the Red: Master of Prospero, `P4` Perturabo: The Hammer of Olympia, `P5` Lorgar: Bearer of the Word, `P6` Fulgrim: The Palatine Phoenix, `P7` Ferrus Manus: The Gorgon of Medusa, `P8` Jaghatai Khan: Warhawk of Chogoris, `P9` Vulkan: Lord of Drakes, `P10` Corax: Lord of Shadows, `P11` Angron: Slave of Nuceria, `P12` Konrad Curze: The Night Haunter, `P13` Lion El'Jonson: Lord of the First, `P14` Alpharius: Head of the Hydra, `P15` Mortarion: The Pale King, `P16` Rogal Dorn: The Emperor's Crusader, `P17` Sanguinius: The Great Angel, `XLV` Tallarn.

**Mark of Calth (8)** - the chart shows only the container plus Censure and Perpetual:
The Shards of Erebus, Calth That Was, Dark Heart, The Traveller, A Deeper Darkness, The Underworld War, Athame, Unmarked.

Note also that Mark of Calth is **not** in the chart's anthology reference panel, so its component stories have no `(Book N)` handle on the chart at all.

**The Silent War (7)**: The Watcher, The Gates of Terra, Army of One, Distant Echoes of Old Night, Ghosts Speak Not, Patience, The Sigillite.

**Corax (6)**: Weregeld, Soulforge, Ravenlord, The Shadowmasters, The Value of Fear, Raptor.

**Legacies of Betrayal (6)**: Serpent, Hunter's Moon, Strike and Fade, Lucius: The Eternal Blademaster, Khârn: The Eightfold Path, Heart of the Conqueror.

**Tales of Heresy (5)**: Blood Games, Wolf at the Door, Scions of the Storm, The Voice, The Last Church.

**Born of Flame (3)**: Sons of the Forge, Artefacts (reprint), Immortal Duty (reprint).

**Heralds of the Siege (3)**: Blackshield, The Soul Severed, Dreams of Unity.

**Shattered Legions (3)**: Immortal Duty, The Noose, Deeds Endure.

**War Without End (2)**: Lord of the Red Sands, The Harrowing.

**Age of Darkness (1)**: Liar's Due.
**Shadows of Treachery (1)**: Death of a Silversmith.
**The Primarchs (1)**: The Serpent Beneath.

### Matches that required an alias or fuzzy match (10)

Worth eyeballing before wiring the storyline view to `bookData`:

| Chart label | `bookData` entry | Key |
| --- | --- | --- |
| Thief of Revelation | THIEF OF REVELATIONS | `legacies-thief-revelations` |
| Vulcan Lives | VULKAN LIVES | `vulkan-lives` |
| The Heart of Pharos | THE HEART OF THE PHAROS | `burden-heart-pharos` |
| Wolfhunt | WOLF HUNT | `silent-wolf-hunt` |
| Guardian of the Order | CYPHER: GUARDIAN OF ORDER | `legacies-cypher` |
| Herald of Sangiunius | HERALD OF SANGUINIUS | `eye-herald-sanguinius` |
| The Devine Adoratrice | THE DIVINE ADORATRICE | `war-divine-adoratrice` |
| Garro: Oath of Moment, Sword of Truth, Legion of One, Shield of Lies, Vow of Faith, Burden of Duty | same titles without the `Garro:` prefix | `garro-*` |
| Bjorn: Lone Wolf | LONE WOLF | Legacies of Betrayal |
| Garro: Ashes of Fealty | ASHES OF FEALTY | `garro-*` |

## Reproducing this

```bash
pdftocairo -svg 40k-heresy.pdf chart.svg      # geometry, fills, strokes, gradients
pdftotext -bbox-layout 40k-heresy.pdf bbox.html   # text with bounding boxes
pdftoppm -png -r 300 -x X -y Y -W W -H H 40k-heresy.pdf tile   # validation crops
```

The Python parsers used for this extraction were throwaway scripts in a scratch directory and are not checked in. The JSON they produced is self-contained: every node carries its page coordinates (`x`, `y`, `w`, `h`), so any claim in `daunt-chart.json` can be re-checked by cropping that rectangle out of the PDF.
