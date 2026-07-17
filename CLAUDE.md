# The Living Forest — agent rules

A family-history and memory app for Leon's extended family and two children.
Non-competitive by construction: you do not score points, you light a person up.
Keeper/owner: Leon (lenya.golnick@gmail.com, uid e7035e2f-0156-42b5-a1ad-13c57684a3d6).

**`docs/HANDOVER.md` is the single source of truth.** Read it before acting.
This file is a pointer to it, not a replacement. Where they disagree, HANDOVER wins.
Companions: `docs/designs/INDEX.md` (design catalogue), `docs/design-house-rules.md`
(the shared appendix for every design brief), `docs/briefs/` (7 briefs, written).

## Working style
Terse and directive. Act immediately. No preamble, no restating the task.
Report outcomes, not narration.

## Bookkeeping — HANDOVER §0
1. One handover, never dated in the filename. Git is the history.
2. Dated filenames are banned for text documents. No `-v2`, `-final`, `-2026-07-15`.
   Exception: **design deliveries ARE dated** — `docs/designs/YYYY-MM-DD--<page>--v<N>.html`.
   They are immutable artefacts; versions legitimately coexist. Never guess a date.
3. Every write bumps the stamp: date + time + commit, top of file.
4. **A status claim must cite its evidence** — file+line, table+row count, or commit.
   "Designed" is not a status. This is the rule that catches false ✓ marks.

## Hard rules — do not violate without asking

1. **Design fidelity first** (§11). Reproduce the handoff verbatim (exact CSS/DOM).
   Graft application logic onto the design shell afterward. Never hand-fuse two
   visual languages — that is the engineered-not-designed trap.
2. **Truth guardrail / provenance** (house rules §4). Every value on screen declares
   where it came from: human told us = `--gold` #f3cd84 · app worked it out =
   `--cool` #7fb4d8 · waiting for the keeper = `--edit` #c9a2ff · machine-translated
   = #9a8bbd + an escape offer. Never blend them. Colour never carries meaning alone.
3. **Keeper gate** (§9). All user-contributed content passes `pub_status` before
   appearing publicly. **Attribution is per-field, not per-form** — never one approve
   button over several fields.
4. **Never seed or mutate production data.** Real people and real memories are in this
   database. Test data goes to a Supabase branch only.
5. **popstate ownership** (§11). lf-nav.js owns popstate exclusively. Page-level
   close handlers route through `window.__lfClose`.
6. **`contributor_id` ≠ `contributor_user`** (§9). `contributor_id` = who *told* it
   (a person). `contributor_user` = who *uploaded* it (an account). Never conflate.
7. **Do not commission a design before its architectural decision is settled** (§3).
   Precedent: the facet decision retro-invalidated every game's design status.
8. **Stop at open decisions.** Ask Leon; do not guess. Currently open (§3, §9b):
   - Progression, PLAYER axis (points/levels/status) — **PARKED**. Blocks Journal,
     Profile, Idea 3, and game completion cards.
   - Does progression show on the payoffs? — **OPEN**. Blocks D9, D5, D11.
   - Whether a given `given` row holds a formal or a familiar name — a data-meaning
     question **per person**. Do not bulk-fix, do not guess.

## The facet model — §2, decided 2026-07-15
One icon per facet of a person. Each holds its content, its editable fields, **and the
game that exercises it**. A game is not its own icon. **Exactly eight — do not add a ninth.**

`Name` · `Face` · `Life` · `Places` · `Story` · `Kin` · `Reel` · `More`

Every game is person-scoped and launched from a facet.

**The two threads are different games** (§2): *The Tangled Thread* is a hunt across
places (Places facet). *The thread back to you* is the path through the kin graph to
the person on screen (Kin facet). Do not merge them.

## Progression — §3, half-settled
- **Per-person axis: SETTLED.** Engine exists (`preview.html`: `fillSegment`,
  `ringCount`); design exists (Design #1: `--k` drives bead brightness,
  `reelBar:'Six of eight facets kindled'`). Games feed this axis.
- **Per-player axis: PARKED.** This is what Journal, Profile and Idea 3 need.

## Roadmap — §5, §6
**Phase 1 has dissolved. Do not work from it.** The design queue is the only pipeline.

Order of work is **§7**. Follow it.

- **Timeline is built but never designed** (§4) — `timeline-real.html`, 15KB, no design
  pass. **Timeline IS Reel** (§3) → merged into Design #9; `timeline-real.html` goes to
  retirement. The reskin in `preview.html` is D9's *reference*, not a port target.
- **Journal is parked** (§3, §10) — blocked on the player-axis progression model. It was
  never a page: a `<button data-w="journal">` tab, 7 lines (`preview.html:1141–1148`),
  localStorage data, `journal_entries` 0 rows.
- **D4 dissolved into Moment** (§6b) — a photoless memory changes exactly one thing:
  the hero. One page, one variant hero.
- Games (§6): none has ever had a design pass. *Find Them in the Crowd* global version
  is genuinely done (`crowd-real.html`); its scoped `?id=` variant is a delta only.
  Everything else exists only inside the retiring `preview.html` / `index.html` prototype.
- **Neither game is schema-blocked any more:**
  - *The Missing Voice* — `contributor_id` always existed (uuid, FK → `people.id`); it was
    never wired (§9). Backfilled 17/17 to Leonid Golnick 2026-07-15 (§6b). It has data.
  - *The Tangled Thread* — places-lived exists: `person_facts` field=`lived`, ordered,
    keeper-gated (§9). Schema only, **0 rows** — schema-ready ≠ playable.

**`docs/the-living-forest-pagemap-v2.html` is NOT the tracker.** Its `yes reskin ✓`
column scored **5 of 5 false — 0% accuracy** (§4); it is stamped 2026-07-10 and wrong in
seven places (§8). Treat every claim in it as unverified. It gets one consolidated
correction pass (§7 step 7). Filename is frozen; **there will never be a v3.**

## Design
- Claude Design project **4931d7e6-358d-4ef9-a066-9a422439ee44** holds **29 files**
  (INDEX.md, `list_files` 2026-07-17; the old "26" predates three deliveries). `docs/designs/` holds
  **9 of 9, byte-exact** (commit `e566a08`) — **the "no build may claim to be per design"
  blocker is cleared.** Cite the exact design file (INDEX.md).
- **Design #2 = `2026-07-12--place-tel-aviv--v2.html`** — Leon, 2026-07-17: *"the one with
  globe."* The v1 file is the superseded predecessor; do not build from it.
- **Flat HTML sources live in `screens/` inside the design project. Never extract the
  1MB bundles** — go to the flat source.
- **Design #1 = "The Person Page"** (project root, 78,814 bytes). **"Rita Golnick" is v0,
  superseded** by the facet model — reference only.
- File etags from the design MCP are **epoch microseconds**; they evidence delivery dates.
- Design #1 **QC PASSED** (§9b) — invents nothing the schema cannot hold. Two follow-ups:
  patronymic/honorific/called are specified but **not drawn**; rides along in Batch A.
- Request handoffs in this order (§11): **flat static HTML** → screenshots → hosted URL.
  The compiled-bundle problem is *solved but not guaranteed*: both bundles received
  embedded the page as JSON in `<script type="__bundler/template">`. Still ask for flat.
- Fonts: Newsreader (display) · Hanken Grotesk (UI) · Azeret Mono (eyebrows) ·
  **Frank Ruhl Libre for Hebrew/RTL**. Google Fonts.
- Append `docs/design-house-rules.md` to every brief. Briefs stay ~3KB, page-only.

## Frontend
- Vanilla JS, single self-contained HTML files. Three.js and Leaflet from CDN.
- Live pages (§1): `home-real.html` (Sky) · **`index.html`** (the globe — **front door**;
  `globe-real.html` no longer exists, commit `e566a08`) · `person-real.html` ·
  `crowd-real.html` · `moment-real.html` · `place-real.html`.
  The old 2D hub is now `prototype.html` (retirement list, §12).
- `lf-nav.js` = floating ⊕ lens menu + unified hardware-back guard. Its five items today:
  The sky · The globe · Find them in a crowd · The timeline · Add a memory (→ index.html).
  Lenses become **Sky · Globe · Tree** when timeline retires (§3).
- **There is one Person page.** `person-real.html` is it. No edit page — everything is
  editable **in place**. `person-edit-real.html` is retired (404).
- `node --check` every inline `<script>` before committing.

### Known live bugs
- **`place-real.html` tells the narrator gold-lie — the same bug moment-real just shed.**
  `:662` selects `contributor_user`; `:688`/`:690` resolve it through `profiles.display_name`
  and render it as **`told by` in gold** (`.told{color:#f3cd84}`, `:127`). It names the
  **uploader**, not the teller. `:535` repeats it on the globe card. **It must read
  `contributor_id` → `people.display_name`**, as `moment-real.html:622`/`:630` now does.
  Harmless only while Leon is both. **Not folded into any brief yet.**
- `place-real.html` also **carries a v1 element Design #2 (v2) dropped** — *"Located by
  The Living Forest"* (`:684`); and has **one** *Ways in* door (`:715`) where v2 specifies
  three. See `docs/designs/INDEX.md` → "Design #2 (Place v2) vs `place-real.html`".
- The old five-light hub's journeys **dead-end** (§1). ⚠️ **The four ids this entry used to
  cite (`sec-photos`, `sec-places`, `sec-kin`, `sec-reel`) exist in no file — not in
  `prototype.html`, not in `preview.html`, and not at commit `75defd8`** (`grep -c` → 0 in
  all three). The *claim* may hold; **its evidence does not.** Re-derive the real ids before
  acting on it. They come back inside the facets — not as a second page.

### Fixed — do not re-report
- ~~`moment-real.html` shows the uploader as the teller.~~ **Fixed and deployed, commit
  `e566a08`.** It now selects `contributor_id` (`:622`) and resolves it through
  `people.display_name` (`:630`). Verified 2026-07-17. **The identical bug is still live in
  `place-real.html` — see above.**
- ~~`index.html` is the front door with no lf-nav and zero outbound links.~~ **Resolved,
  commit `e566a08`:** the globe became the front door. `globe-real.html` → `index.html`
  (title *"the Living Globe"*, `:7`); the old 2D hub → `prototype.html`.
- ~~`moment-real.html` carries no `lf-nav.js`.~~ **Fixed — but uncommitted.** The working
  tree adds `<script src="lf-nav.js" …>` (`:640`) and a `window.__lfClose` handler (`:462`),
  satisfying the popstate rule (§11). `git log -S'lf-nav.js' -- moment-real.html` returns
  **nothing**: this is not in history yet. **It is a working-tree change, not a shipped fix.**

## Backend
- Supabase project `oabcdrktuikifbormjip` · https://oabcdrktuikifbormjip.supabase.co
- Edge Function `translate`: name transliteration, Claude Haiku, gender-aware
  (feminine surname forms — Церлин → Церлина). `people.sex` drives gendering.
- Relationships: `from_person` = PARENT, `to_person` = CHILD.
- **`person_facts` is the open-ended person store** (§9): `id, person_id, group_id, field,
  lang, value, ord, status, created_by, reviewed_by, created_at, published_at`. **No
  `label` column** — a custom detail is two rows (`custom_label`/`custom_value`) sharing
  a `group_id`. Fields in use: `birth`, `birth_prec`, `death`, `living`, `gender`,
  `lived`, `langspoken`, `source`, `kin`, `custom_label`, `custom_value`, `face`,
  plus the name parts.
- **`name_variants` is being RETIRED** (§9b). Its 22 rows migrated → 44 `person_facts`
  rows 2026-07-15. **Not dropped yet** — readers must be rewritten first
  (`person-real.html`, `moment-real.html:625`). Do not drop early. Do not build on it.
- **Name parts are ROWS, not columns** (§9b) — *the unit of a row is the unit of approval*.
  Read them through the **`person_names` view** (published-only, pivoted, newest-published
  wins). A unique index now prevents two published parts of the same kind per language.
- **`called` is a first-class per-language name field.** `called` ≠ `nickname`:
  `called` is the everyday form of the formal name (Маргарита → Рита); `nickname` is a
  pet name (*Ritaleh*) and is a list.
- `people.called_name` is a redundant single-English column — migrate to
  `field='called', lang='en'` and drop **when the Person page is rebuilt.** Not before.
- Data reality (§9): `artefacts` **17**, all `kind='photo'`, metadata keys `when`/`where`
  only. `person_facts` **1 row**. `lived` **0 rows**. `journal_entries`, `player_profiles`
  **0 rows**.
- Open schema gaps (§9): player-axis progression store; messages + person↔user identity link.

## i18n
- EN / RU / HE, all three, always. **Hebrew is RTL** and mirrors completely.
- `person-real.html` has full i18n. **Still owed on `home-real`, `globe-real`, `crowd-real`**
  (§1) and on `place-real.html` (INDEX.md: `preferred_lang` 0×).
- Names transliterated on demand via the `translate` Edge Function. Story/photo text
  auto-translation cached in `translations` / `artefact_translations`.
- Language persisted to `localStorage` + `profiles.preferred_lang` — prevents an English
  flash on reload.
- Russian runs ~20% longer than English. Do not design to lorem.

## Repo & deploy
- Repo: `LeonG25/living-forest`, branch `main`. Live: https://leong25.github.io/living-forest/
- Push: `git push "https://x-access-token:$(cat /home/botuser/.gh_token)@github.com/LeonG25/living-forest.git" main`
- **Never rerun failed Pages jobs** (§11). Single-job build/deploy: `rerun-failed-jobs`
  re-uploads the artifact → "Multiple artifacts". Use a fresh `workflow_dispatch` or an
  empty commit.
- After deploy: poll the live URL for HTTP 200 and verify the SHA. Remind Leon to
  hard-refresh / append `?v=` to bust mobile cache.
- **Chunk corruption is routine** (~1 in 4–5) on the chunked pipeline (§11). `wc -c`
  before re-appending — a transient error does **not** mean the write failed.

## Retirement list — §12
`timeline-real.html` · `preview-globe.html` · `preview.html` · `index.html` (old 2D hub) ·
old Leaflet Places map · untracked patch scripts (`p2–p7.py`, `patch_globe.py`).
**Do not retire `preview.html` before D9** — it holds D9's reference.

## Scope discipline
One page per run. Report and stop. Do not chain into the next page unasked.
