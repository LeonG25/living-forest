# The Living Forest — Parking Lot

Living list of things to build later. Add freely; nothing here is committed to a date.

---

## Ideas & features (future)

### The Tangled Thread — game, hooks into the Person page
The lightweight **"how are you related"** path on the Person page is the seed for this game.
- That path runs from the **viewing player's own person-node** (via `profiles.id = auth.uid()` → `profiles.person_id`) → shortest path over `relationships` → the person being viewed. "A path not yet traced" when there is no path. Players can only be people already in the system (a profile with a non-null `person_id`).
- **The Tangled Thread game grows exactly here:** turn that static shortest-path into a *played* journey — trace the thread hop by hop, revealing each connecting relative in turn, until it lands on you.
- **RECONCILED (2026-07-15) — this entry had conflated two different games.** Checked against the framework, the gameplay supplement (§2) and the handover, which agree with each other:
  - **The Tangled Thread** is a **hunt across places**: eight people lived in certain cities at certain times; *two strangers once shared a city years apart and never met* — find them. Wrong pairs answer warm/cold; solving draws the thread across the map. It is geographic → it lives in the **Places** facet, and it did need places-lived. **That prerequisite is now closed** (`person_facts` field=`lived`), so **Tangled Thread is unblocked**.
  - **The thread back to you** is a different thing entirely — the path from the viewer's own node through the kin graph to the person on screen, and one of the app's founding promises ("a thread back to you always lights the way home"). It has its own node (*Thread back to You*) and lives in the **Kin** facet. The good idea in the old entry — *walk* that path hop by hop, each connecting relative revealing in turn — belongs to **that**, not to Tangled Thread.
  - Both are wanted. They are not the same thread.

### Idea 1 — Events on the globe, by year
Surface **world events and family events** (anyone/anything in the visible database) on the globe **for the year currently shown** on the year-wheel. Turning the wheel changes not just the family dots but also what was happening in the world and in the family that year.

### Idea 2 — Quest / escape-room game
An **escape-room-style chained quest**: the player hunts for clues and information, unlocks things, and progresses step by step through a chain of challenges — solving the whole task/riddle at the end.

---

## Games still to build (from roadmap)
- **The Missing Voice** — still blocked: needs a "told by person" narrator field on memories. Lives in the **Story** facet.
- **The Tangled Thread** — **unblocked** (see above): places-lived now exists. A hunt for two strangers who shared a city. Lives in the **Places** facet.

## Designed but not yet built
- **Timeline**, **Journal** — mockups exist; port to real data.
- **Story Reel** — referenced by the Person page "Reel" doorway; needs building so that doorway opens something real.
- **Tree, Memory Lane, Themed Threads, Thread-back-to-You, Gaps, Manage Curators** — written design only, no mockup yet.

## Cleanup / retirement (on consolidation)
- Retire `preview-globe.html`, the old Leaflet Places map, and the old 2D Forest home tab.
- Sweep untracked patch scripts from the working tree (`p2–p7.py`, `patch_globe.py`).

## Data prerequisites to add
- "told by person" narrator field on memories → The Missing Voice. **Still outstanding — the last schema gap blocking a game.**
- ~~"places lived" per person~~ — **done**: `person_facts` field=`lived` (ordered, keeper-gated). No longer blocks anything.

---

## Person page — gaps to close later
- **Per-person "Find Them in the Crowd".** The Crowd game builds its own rounds and has no target param. Add a `?id=` so it pre-loads a round featuring this person. **Now blocks the Face facet**, which is supposed to host this game person-scoped.
- **Story Reel.** The **Reel facet** has nothing real to open until the Story Reel page is built (see "Designed but not yet built").
- **i18n on the live "-real" pages.** `home-real`, `globe-real` and `crowd-real` are still English-only. **`person-real` is now done** — it carries the full EN/RU/HE dictionary, name transliteration and RTL as of the 2026-07-15 rebuild. Port i18n onto the remaining real pages as a dedicated pass.
- **Re-home the retired hub's content.** The old five-light hub (portrait, lights, doorways, and its on-page Photos / Places / Kin / Reel sections) was retired on 2026-07-15 — it is recoverable at commit `75defd8`. Its content must come back **inside the 8 facets**, not as a second page. Until the facet design lands, those journeys dead-end.

---

## Timeline — needs a design decision before it earns its place
The current `timeline-real.html` was **engineered, not designed** — it never had a Claude Design pass. Like every page/card/menu, it must be designed in Claude Design first. Three things to settle:

1. **Design concept (in Claude Design).** Do the concept + visual there, then re-engineer the page to match — don't hand-build the look.
2. **Filter / scope.** As shipped it's one global, chronological list of *every* dated photo/story in the whole database, so it grows without bound as contributors add, and largely duplicates what people, places, and the globe year-wheel already surface. It needs a scope.
3. **Purpose.** What is a timeline actually *for* here? Candidate directions:
   - **A life in order** — scoped to one person (this is really the Person page's Story/Reel territory, and the "Put Their Life in Order" game already lives near it).
   - **A filtered slice** — pick a person, place, or decade, then see just that in order.
   - **Resurfacing** — "this week, years ago": a few dated memories surfaced to now, not an infinite list.

Note: the **Journal** port carries the same risk — confirm it has a real Claude Design pass before engineering it, rather than porting the old prototype screen.

---

## The Moment page — engineer here; the Claude Design file is reference only
Claude Design produced a standalone visual for the Moment (photo hub) page (`A_Moment_-_The_Living_Forest__standalone_.html`). **Treat it as a visual + motion reference ONLY — do not trust or port its logic.** It emits React; the app is vanilla HTML/CSS/JS. Re-engineer here as `moment-real.html`, wired to Supabase, reproducing the *look and feel* — magical, precious, colourful drifting lights; breathing/glowing motion; Truth Guardrail (gold = human, cool-blue = facts, never blended); its own distinct character — but building **all** behaviour ourselves.

**All functionality that must be present (lose none):**
- **View one moment** (`?id=`/`?moment=`): photo shown full at natural aspect (portrait shows fully, no crop); year stamp (cool-blue fact); "In this moment" people as tappable face-crops (crop from the tagged photo via `artefact_subjects.detail`, like the Person page → open each person's page); the story in the teller's own words with "told by [name]" (gold); Where + When as cool-blue facts; "Where" jumps to the globe.
- **Edit everything & everyone — through the keeper.** One lean "Suggest an edit" entry (no button-clutter). Editable: story (per language), people (add / remove / rename / name an unnamed face), where, when, and the photo (replace). Every edit is a *suggestion* → keeper approves/declines from the review queue (same pattern as `name_variants`: submitted → in_review → published). Show "Sent to the keeper" / "Waiting for the keeper"; if the viewer is the keeper, a quiet approve/decline queue.
- **Three languages, first-class:** English / Русский / עברית, Hebrew RTL (whole layout mirrors). Language = a single **icon that opens a selector**, not three buttons. Switching changes UI strings, names (per-language `name_variants` + transliteration), and the story. Reuse the existing i18n (translate edge function, caching, `setLang`, `preferred_lang`).
- **Human vs machine story (guardrail):** a human-authored per-language story is gold truth; where only a machine translation exists, show it clearly marked "Auto-translated", visually distinct from human words, with an invite to write a real one. Never present machine text as someone's voice.
- **Quality floor:** mobile-first; responsive; legible over the moving colour; visible keyboard focus; honours `prefers-reduced-motion` (calm/still fallback for the lights); no harmful flashing.

**Schema gap to add first:**
- `artefact_translations(artefact_id, lang, body, status[in_review/published], created_by, reviewed_by, published_at, …)` — human per-language stories (gold), mirroring `name_variants`, superseding the machine translation for that language.
- A lean edit-queue path for the other fields (story / where / when / tags / photo) that lands in the keeper's existing review flow.

**Wiring / links:**
- Replace the interim **lightbox** on the Place page (and any photo elsewhere) with a real link into `moment-real.html`.
- Reuse `faceInto` for face crops; signed URLs from the `family` bucket for the photo; "told by" = contributor (`profiles.display_name` of `contributor_user`).
- Functional skeleton `moment-design.html` (behaviour/structure) is also reference-only.

---

## Requesting designs from Claude Design — handoff format (learned 2026-07-14)
When asking Claude Design for a page, request one of these **exact-match-friendly** formats, in order of preference:
1. **Flat static HTML/CSS export** (self-contained; no build step) — easiest to reproduce faithfully.
2. **Screenshots** of the rendered screens (with any motion described in notes).
3. **A hosted URL** of the live design.

**Avoid the compiled React/Babel "standalone" bundle.** It does not render with our tooling and cannot be ported directly. It only worked for the Moment page because a fully-rendered HTML snapshot happened to be embedded inside it, which had to be extracted resource-by-resource (gzip+base64) — slow and luck-dependent. Don't rely on that again.

Note: the Moment page above is now **built and live** (`moment-real.html`, commit 30ebd89) — reproduced faithfully from the recovered Claude Design render, wired to real data + the keeper edit flow.
