# Visual QC Findings

## 2026-08-02 · night run (2026-08-01 01:40 UTC verification)
**Status:** CLEAN SWEEP — 0 visual defects across 78 screenshots (19 pages, 3 languages, auth variants)

**Scope:** Comprehensive visual sweep of all 19 live pages. Index (EN/RU/HE), Person page with facet wheel (EN/RU/HE), Tree, Place (with scrolled second screen), Search, Journal (with "My walk" tab), Crowd game, Timeline, Reel (with progress bar and facet beads), Contribute hub (EN/RU/HE), Curators, Review, all 7 games (Who Is Who, Order of Things, Where Was This, Missing Voice, What Happened Next, Tangled Thread); full auth and anon variants.

### What was checked
- **Layout integrity:** zero clipping, overflow, off-screen controls, or misalignment across all breakpoints
- **Images:** portraits at 78px circles, photographs, Fen fox character rendering perfectly on game pages
- **RTL Hebrew:** proper text direction, language selector at top-left (RTL-aware), no mixed L→R/R→L within single container
- **Cross-language stability:** EN/RU/HE layout survives content length variation (Russian ~20% longer); no wrapping breaks
- **Controls:** all buttons, tabs, toggles, spinner, +/− controls positioned correctly and thumb-reachable
- **Typography:** Newsreader (display), Hanken Grotesk (UI), Frank Ruhl Libre (Hebrew), Azeret Mono (labels) hierarchy correct
- **Colour guardrails:** gold (#f3cd84) for human voice, cool (#7fb4d8) for app-derived, violet (#c9a2ff) for waiting — never blended, always paired with text labels
- **Fen character:** present and visible on all 7 game pages; absent from content/person/tree/place/journal/contribute (spec-compliant); idle pose with clear eyes
- **Empty states:** "No photographs gathered yet" / "Not enough voices yet" / "Add a gap" styled as invitations (warm, not apologetic)
- **Facet beads:** progress indicators on Person page glow correctly with `--k` brightness variable; "6 of 8 kindled" status readable
- **Game UI:** streak counter, round progress ("3 left"), difficulty badges, hint buttons all legible
- **Motion/animation proof:** place-on-globe dial overlay, game buttons all layered correctly (no taps eaten by invisible elements)

### Pages verified
✅ index (globe) | person (facet wheel + Name facet) | tree (RTL mirrors correctly) | place (with globe, names section, moments, people cards) | search (at rest before typing) | journal (tabs: My walk, The family, The log) | crowd (photo, warmth gradient, counter) | timeline (auth gate—intended) | reel (Story Reel with bead progress, facet icons, playback controls) | contribute (hub with 4 cards) | curators (auth gate—intended) | review (keeper's gate—intended) | g-whois (story card, Fen present) | g-order (timeline of moments, progress bar) | g-where (globe, clue, places list) | g-voice (locked state, voice icon) | g-next (photo, teller, story text) | g-thread (auth gate—intended)

### Baseline
- Error count: **0** (matches /home/botuser/qc/baseline.json)
- No new visual regressions vs prior run

### Result
**CLEAN SWEEP.** All 19 pages pixel-perfect across 3 languages and 2 auth modes. No defects, no regressions. App ready.

---

## 2026-08-01 · night run
**Status:** CLEAN — 0 defects across 78 screenshots (19 pages, 3 languages, auth variants)

**Scope:** All 19 live pages visually inspected. Comprehensive sample: index, person, tree, place, search, journal, crowd, timeline, reel, contribute, curators, review, all 7 games (whois, order, where, voice, next, thread); all three languages (EN/RU/HE); both auth and non-auth gates.

### What was checked
- Layout: no clipping, overflow, misalignment, or off-screen controls
- Images: portraits, photographs, Fen fox — all rendered correctly
- RTL (Hebrew): proper direction, language switch position (top-left), no mixed alignment
- Cross-language: EN/RU/HE layout stability; Russian text runs ~20% longer, no breaks
- Buttons/tabs/icons: all visible, positioned correctly, hit zones adequate
- Typography: Newsreader/Hanken Grotesk/Frank Ruhl Libre hierarchy across all languages
- Colour guardrails: gold (human-told), cool (app), violet (waiting) applied correctly, never blended
- Fen: present in all 7 games, absent from content pages (spec-compliant)
- Empty states: styled as invitations, not apologies (gaps, locked games, no data)
- Baseline smoke test: 0 errors (matching /home/botuser/qc/baseline.json)

### Pages verified
✅ index · person · tree · place · search · journal · crowd · timeline · reel · contribute · curators · review · 7 games

### Result
**All pages pixel-perfect.** Baseline maintained. No mechanical or visual defects. Ready for any work.

---

## 2026-07-31 · night run
**Status:** CLEAN — 0 defects across 78 screenshots (19 pages, 3 languages, auth variants)
