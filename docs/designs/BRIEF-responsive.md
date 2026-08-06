# Brief: the forest on every screen

**Decided by Leon, 2026-08-06:** on a tablet or desktop the app must be a
*genuinely wider layout* — not a phone column centred on a background. Every page.

## Where we are (measured, not assumed)

`qc/matrix.js`, real Chromium, keeper session, live site:

| page | phone 360×639 | tablet 768×1024 | tablet-land 1024×768 | desktop 1440×900 |
|---|---|---|---|---|
| tree | 100% | 54%w / 84%h | 40%w / 97%h | **29%w / 96%h** |
| search | 100% | 51%w / 80%h | 38%w / 107%h | **27%w / 91%h** |
| contribute | 100%w / 94%h | 51%w / 80%h | 38%w / 95%h | **27%w / 91%h** |
| person, review, games | 100% / 100% at every size — **no frame at all** |
| index, timeline | no device frame; already partly fluid |

Two distinct problems:

1. **15 pages draw a fake phone frame** (`.device`, 390×820, rounded corners).
   On desktop that frame occupies under a third of the width. It was a prototype
   mockup and it shipped.
2. **Pages without the frame stretch without limit** — person, review and the six
   games will run phone-shaped content across 1920px.

Also true today: **no shared stylesheet** (24 pages each carry their own CSS),
**at most 2 media queries per page**, **no orientation handling anywhere**.
`dvh` is already used on 22 pages, so mobile browser chrome is half-solved.

`search` in phone-landscape measures **228% of viewport height** — the frame is
fixed at 820px tall while the screen is 360. Short-landscape is the hard case:
the Fen strip alone claims 151px of it.

## What the designer is asked for

Breakpoints to design against:

- **phone** < 600
- **tablet** 600–1023
- **desktop** ≥ 1024
- **short-landscape** — any viewport under ~500 tall (phone rotated)

For each page family, what "wider" means:

- **canvas pages** (globe, tree) — the canvas takes the space; controls move to a rail
- **subject pages** (person, moment, place) — two columns: the subject, and its facts/memories
- **list pages** (search, timeline, journal, review) — a reading column plus something
  in the gained space, not a stretched list
- **flow pages** (contribute, gate, clearing) — a form should not become 1440px wide
- **games** — the play area is the point; the frame around it is not

Constraints that do not move:
- gold = human-entered, cool blue = fact. Unchanged at every size.
- backgrounds stay alive — aurora, candle-glow, drifting light.
- three languages including Hebrew RTL; a two-column layout must mirror.
- Fen's strip is fixed at the bottom on phones. On wide screens: where does she live?
- **Nothing already designed is to be redrawn.** Phone stays as it is. This is
  about the space that phone layout never had to think about.

## Order of work after the designer returns

1. `lf-layout.css` — one shared sheet: breakpoint tokens, safe areas, type scale,
   frame behaviour. Removes the 24-copy problem before it grows.
2. Retire `.device` family by family, against the returned layouts.
3. `qc/matrix.js` becomes the regression check — the table above is the baseline.
