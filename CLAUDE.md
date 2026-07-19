# The Living Forest — agent rules & source of truth

A family-history and memory app for Leon's extended family and two children.
Non-competitive by construction: you do not score points, you light a person up.
Keeper/owner: Leon (lenya.golnik@gmail.com, uid e7035e2f-0156-42b5-a1ad-13c57684a3d6).

> **This file is the single source of truth.** It replaces `docs/HANDOVER.md`
> (deleted 2026-07-18 — folded in here; git holds its history) and every earlier
> dated handover. Where anything disagrees with this file, this file wins.
> **Scheme (visual flowchart):** `docs/the-living-forest-pagemap-v2.html` — a Mermaid
> node-map + prose tables. Filename frozen; **there will never be a v3.** Its status
> tables are stale and were wrong in several places; the flowchart shape is sound.
> Treat its status/phase/facet tables as superseded by this file (see §Scheme).

---

## 0. Working style & bookkeeping

**Working style.** Terse and directive. Act immediately — no preamble, no restating
the task. Report outcomes, not narration. When Leon must decide something, ask as a
short, plain, numbered question; no explanation unless asked. **Never ask Leon about
internal/architecture/software structure — that is the agent's to own.** Leon may
volunteer architecture input but is not expected to. Keep Leon inside the chat window;
avoid sending him elsewhere. When a page is ready for review, give him a link.

**Bookkeeping rules — read before writing anything.**
We drowned once: six files existed for three documents and disagreed with each other and
with reality — which is exactly why roadmap status marks turned out false. These rules
stop it recurring.
1. **One handover, this file, never dated in the filename.** Git is the history; the
   commit message is the changelog.
2. **Dated filenames are banned for text documents.** No `-v2`, `-final`, `-2026-07-15`.
   Exception: **design deliveries ARE dated** — `docs/designs/YYYY-MM-DD--<page>--v<N>.html`.
   They are immutable artefacts; versions legitimately coexist. Never guess a date.
3. **The scheme filename is frozen** at `docs/the-living-forest-pagemap-v2.html`. The
   `-v2` is a scar, not a pattern.
4. **Every write bumps the stamp**: date + time + commit, top of file.
5. **A status claim must cite its evidence** — file+line, table+row count, or commit.
   "Designed" is not a status. This is the rule that catches false ✓ marks.

---

## 1. THE MANDATE — autonomous build to completion (Leon, 2026-07-18)

Leon has handed the whole build over and stepped out. He returns once, at the end, to
review a finished app. The agent owns everything until then.

**What Leon asked for, in his order:**
1. **A real entry URL** where a family member **logs in or registers**, then lands on
   the globe. **Registration is OPEN** — anyone may sign up (Leon's call, 2026-07-18).
   This is new work: today there is exactly **1 auth user** (Leon) and **0 curators**.
2. **Build outward from the globe**, page by page, keeping everything connected.
3. **The agent decides everything else** — internal structure, design calls, what the
   designer and agents build. Keep it all connected, **no orphans**, **complete the schema**.
4. **Full QC at the end** — every control (buttons, phone/tablet finger gestures, etc.)
   present and doing what it should; no orphans; every needed control works.
5. **One ping to Leon when design + build + QC are all done.** Then he reviews and tweaks.

**Two hard principles from the handoff:**
- **Challenges are ENGINE-GENERATED, never hard-coded.** Every game builds its
  challenges dynamically from whatever is in the database (algorithm or AI). Adding data
  must yield new challenges **without rebuilding the app**. This applies to The Tangled
  Thread and to every other game. No game may bake in a snapshot of today's data.
- **Family-knowledge fields get built empty, for Leon to fill on review.** Where a page
  or game needs real family knowledge nobody but Leon holds (e.g. places-lived), build
  the structure + the engine that will consume it, leave the data empty, and let Leon
  populate it via the app's own keeper flow on review.

**Autonomy scope Leon granted:** push **live** to `main` as work proceeds (not a staging
branch); run schema changes on live Supabase without per-change confirmation. The app may
be visibly mid-construction if Leon peeks early — accepted.

**Two design rulings settled 2026-07-18 (bake into the ports):**
- **Person, contributor frame:** a waiting memory **keeps** the line "Waiting for the
  keeper" (do not blank it).
- **Place, family view:** a plain relative **does** see another person's still-pending
  name suggestion (violet + "Suggested by …" + waiting chip). Show it.

**Suggested order of work** (agent may reorder for internal reasons, never asks Leon to):
1. **Merge the docs** — collapse HANDOVER into this file, delete HANDOVER, fix scheme
   pointers. *(This is that merge.)*
2. **Auth + entry URL → globe** (open registration). Leon's #1.
3. **Port Person v2 → `person-real`** (designer revision done; both rulings settled).
4. **Port Place v3 → `place-real`** (carries the dial fix the designer could not
   browser-verify; needs a live check on the page).
5. **Build the challenge engines + the two remaining games** (Missing Voice — has data;
   Tangled Thread — structure + engine now, data later). All games move to engine-driven.
6. **Port Timeline + Journal**, then the spec-only pages (Tree, Memory Lane, Story Reel,
   Themed Threads, Thread-back-to-you, Gaps, Manage Curators) — completing the schema/web.
7. **Retire dead files** (§12).
8. **Full QC** (§QC), then ping Leon.

---

## 2. Where we are — live pages (verified 2026-07-18)

`home-real.html` (Sky) · **`index.html`** (the globe — **front door**) · `person-real.html`
· `crowd-real.html` · `moment-real.html` · `place-real.html` · `timeline-real.html`.

- All carry `lf-nav.js` (floating ⊕ menu + unified hardware-back guard). `moment-real`
  was the last to gain it (2026-07-17, `:640` + `window.__lfClose` `:462`).
- **`globe-real.html` no longer exists** — the globe became `index.html` (commit `e566a08`).
  Any doc/scheme line calling `globe-real.html` live is stale.
- **There is one Person page.** `person-real.html` is it. No edit page — everything is
  editable **in place**; the portrait has a camera control on the image itself.
  `person-edit-real.html` is retired (404).
- **Person is reached from** globe, home, moment, place (×2), crowd (6 inbound, no orphans).
- ⊕ menu today = 5 items (`lf-nav.js:39–43`): The sky → `home-real` · The globe →
  `index.html` · Find them in a crowd → `crowd-real` · The timeline → `timeline-real` ·
  Add a memory → `index.html`. Lenses become **Sky · Globe · Tree** when timeline retires.
- 5 of 7 games live: Who Is Who?, Find Them in the Crowd, Put Their Life in Order,
  Whose Memory Is This?, Where Was This?. Remaining: **The Missing Voice** (has data),
  **The Tangled Thread** (structure + engine ready, data empty).

---

## 3. Hard rules — do not violate without asking

1. **Design fidelity first** (§Method). Reproduce the handoff verbatim (exact CSS/DOM).
   Graft application logic onto the design shell afterward. Never hand-fuse two visual
   languages — that is the engineered-not-designed trap.
2. **Truth guardrail / provenance.** Every value on screen declares where it came from:
   human told us = `--gold` #f3cd84 · app worked it out = `--cool` #7fb4d8 · waiting for
   the keeper = `--edit` #c9a2ff · machine-translated = #9a8bbd + an escape offer. Never
   blend them. Colour never carries meaning alone.
3. **Keeper gate.** All user-contributed content passes `pub_status` before appearing
   publicly. **Attribution is per-field, not per-form** — never one approve button over
   several fields. (The unit of a row is the unit of approval.)
4. **Never seed or mutate production data.** Real people and real memories are in this
   database. Test data goes to a Supabase branch only. *(Exception: the empty
   family-knowledge structures of §1 are Leon's to fill via the app, not the agent's to
   seed.)*
5. **popstate ownership.** `lf-nav.js` owns `popstate` exclusively. Page-level close
   handlers route through `window.__lfClose`.
6. **`contributor_id` ≠ `contributor_user`.** `contributor_id` = who *told* it (a person).
   `contributor_user` = who *uploaded* it (an account). Never conflate.
7. **Do not commission a design before its architectural decision is settled.**
   Precedent: the facet decision retro-invalidated every game's design status.
8. **Challenges are engine-generated, never hard-coded** (§1). No game bakes in a snapshot
   of current data.
9. **Every new page goes through a Claude Design (the designer) pass BEFORE it is built**
   (Leon, 2026-07-18, firm rule). No page is engineered from scratch without a designer
   handoff first — not Search, Tree, Contribute, Manage curators, game play-screens, or any
   future page. Design → then build to the handoff (rule 1). This reinforces rule 7.

---

## 4. The facet model — decided 2026-07-15

One icon per **facet** of a person. Each facet holds its content, its editable fields,
**and the game that exercises it**. A game is not its own icon. **Exactly eight — do not
add a ninth.**

| Facet | Holds / edits | Game(s) inside |
|---|---|---|
| **Name** | display, given, family, patronymic, maiden, called, nicknames, honorific — every language | — |
| **Face** | the photos they appear in; choose & crop the portrait used everywhere | Who Is Who? · Find Them in the Crowd |
| **Life** | birth, death, precision, still-living, gender, occupation, about, languages spoken | Put Their Life in Order |
| **Places** | born in, places lived (ordered), on the map | Where Was This? · The Tangled Thread |
| **Story** | the memories told about them | Whose Memory Is This? · The Missing Voice · What Happened Next? |
| **Kin** | relatives, and how you're related — **the thread back to you** | *the path itself, walked hop by hop* |
| **Reel** | their life assembled; the payoff as the rest fill in | — |
| **More** | any custom detail (label + value), sources / provenance | — |

Every game is **person-scoped, launched from a facet**. Each needs four surfaces:
facet entry · the "not enough yet" state · person-scoped play · return (completion →
Reel, writes → Journal). Design #1 already draws entry / locked / scoped / return; what
remained undesigned is the **play screen** itself (pure mechanics).

**The two threads are DIFFERENT games** — do not merge:
- **The Tangled Thread** — a hunt across **places**: two strangers once shared a city
  years apart and never met; find them. Wrong pairs answer warm/cold; solving draws the
  thread across the map. **Places facet.** Structure + engine ready; data empty.
- **The thread back to you** — the path from the viewer's own node through the kin graph
  to the person on screen. A founding promise. **Kin facet.** Walked hop by hop.

---

## 5. Progression — half-settled

- **Per-person axis: SETTLED.** "How lit up is Rita?" Non-competitive by construction —
  you don't score points, you light someone up. Engine exists in the prototype
  (`preview.html`: `fillSegment`, `ringCount`; SEGS `['face','story','place','people','reel']`);
  design exists (Design #1: `--k` drives bead brightness; `reelBar:'Six of eight facets
  kindled'`; `gameLocked`, `gameScoped`). Games feed this axis.
- **Per-player axis: PARKED.** "What's my level?" This is what Journal, Profile and
  Idea 3 need. Blocks: Journal · Profile · Idea 3 · game *completion cards* only.
- **OPEN:** does progression show on the payoffs? Blocks D9 · D5 · D11.

Because games feed the person axis (settled), the games are **largely unblocked** — only
the completion card touches the player axis, and it already speaks per-person language.

---

## 6. Roadmap notes

- **Phase 1 has dissolved. Do not work from it.** Its four builds (Timeline → Journal →
  unify skin → Where Was This?) each evaporated or blocked under inspection. The design
  queue + §1 order is the only pipeline.
- **Timeline is built but never designed** — `timeline-real.html`, no design pass.
  **Timeline IS Reel** → merged into Design #9; `timeline-real.html` goes to retirement.
  The reskin in `preview.html` is D9's *reference*, not a port target.
- **Journal is parked** — blocked on the player-axis progression model. It was never a
  page: a `<button data-w="journal">` tab, ~7 lines (`preview.html:1141–1148`),
  localStorage data. Direction is decided: **not a log** — it is where you are motivated
  to play more; progression made visible, warm, family, non-competitive, never a
  leaderboard. Settle the player axis before commissioning game designs, or games get
  drawn twice.
- **D4 dissolved into Moment** — a photoless memory changes exactly one thing: the hero.
  A Moment is a memory that may hold a photograph, a telling, a voice, or several at once;
  the photo is one kind of content among others, not the page's premise.
- **Neither remaining game is schema-blocked:**
  - *The Missing Voice* — `contributor_id` (uuid, FK → `people.id`) always existed; it was
    never wired. Backfilled 17/17 to Leonid Golnick (the *person*) 2026-07-15. **It has
    data.** Not a "Whose Memory" variant — a different mechanic.
  - *The Tangled Thread* — places-lived exists: `person_facts` field=`lived`, ordered,
    keeper-gated. **0 rows** — build the engine + structure now (§1), Leon seeds data on
    review.

**The `yes reskin ✓` column of the old pagemap scored 5 of 5 false (0% accuracy).** It
means "exists in the recoloured prototype", not "designed". Every game build that column
blessed had, in fact, never had a design pass.

---

## 7. Design

### Design feeling — "alive" (Leon, firm, restated 2026-07-18)
Future designs must be MORE ALIVE and colourful than the muted Search/Tree/Contribute/
Curators set. Return to Leon's original Moment-page direction (his words, 2026-07-14):
"Magical. Precious. Colourful. Alive." — "colourful lights drifting and moving in the
background — think aurora, candle-glow, bokeh, a night sky with more colour than you first
noticed." Motion is central; ambient colour that never sits still. Dark theme is fine as the
BASE, but the background should be colourful, with motion, moving/3D objects, vivid colour.
The Person page's moving light-ring and the Moment design (violet #1a0f2e, lavender #ddc6ff/
#c9a2ff, coral #ff8a80; keyframes breathe/flick/spin, soft-blur glow) are the reference bar.
**The reconciliation with the truth guardrail (Rule 2) is Leon's own:** "Colour freely in
the sky; keep the two truths clear in the hand." The drifting background may be as colourful
as it likes; the FOREGROUND content still obeys provenance — human voice gold #f3cd84, facts
cool #7fb4d8, both perfectly legible over whatever moves behind. Each page keeps its OWN
signature motion — do not clone one page's motion onto another.
**Do NOT redesign anything already made.** This applies to NEW designs from here on.


- Claude Design project **4931d7e6-358d-4ef9-a066-9a422439ee44**. `docs/designs/` holds
  9 of 9 delivered designs byte-exact (commit `e566a08`). Cite the exact design file
  (`docs/designs/INDEX.md`).
- **Flat HTML sources live in `screens/` inside the design project. Never extract the
  1MB bundles** — go to the flat source. The compiled-bundle problem is *solved but not
  guaranteed*: both bundles received embedded the page as JSON in
  `<script type="__bundler/template">`. Still ask for flat HTML → screenshots → hosted URL,
  in that order.
- **Two designer revisions landed 2026-07-18, in `screens/`, uncommitted, unported:**
  - **`screens/Person - v2.html`** (78,967 B) — two full frames side by side (contributor
    left, keeper right, no labels); the two ungated keeper strings now gated in EN/RU/HE;
    role chip removed; dead code swept. Ruling: contributor keeps "Waiting for the keeper".
    Not browser-verified by the designer (structural only). → **port to `person-real`.**
  - **`screens/Place v3 (modernised).html`** (59,539 B) — defaults to family view; place
    names show one language at a time; **time-dial fix** (an overlay layer with
    `pointer-events` was eating taps — root-caused, fixed via `.phone{pointer-events:none}`
    + `.content{pointer-events:auto}`). Ruling: family view shows others' pending
    suggestions. Dial fix reasoned from source, **not browser-verified** — needs a live
    check when ported. → **port to `place-real`.**
- **Design #1 = "The Person Page"** — QC PASSED (invents nothing the schema cannot hold).
  Follow-ups: patronymic/honorific/called specified but not drawn — ride along in the
  Person port. "Rita Golnick" is v0, superseded by the facet model — reference only.
- **Design #2 = `2026-07-12--place-tel-aviv--v2.html`** ("the one with globe"). v1 is the
  superseded predecessor. D2 is a QC + delta, not a fresh brief.
- **Design #3 = Moment — done** (`moment-real.html`, commit `30ebd89`).
- Fonts: Newsreader (display) · Hanken Grotesk (UI) · Azeret Mono (eyebrows) ·
  **Frank Ruhl Libre for Hebrew/RTL**. Google Fonts.
- Append `docs/design-house-rules.md` to every brief. Briefs stay ~3KB, page-only.
- **Leon refers to Claude Design as "the designer" — interchangeable terms.**

### The design queue (briefs in `docs/briefs/`, ~2.5–3.3KB each, page-only)
- **GO NOW (content/structure, progression-proof):** D2 Place (QC+delta) · D4 Memory/Story
  · D6 Search · D7 Tree + Who-they-knew (2 screens) · D8 Contribute hub + Propose + Record
  a voice + Gaps (4 screens) · D10 Manage curators.
- **GO (game PLAY screens — pure mechanics, all 5 checked ✓ were false, none designed):**
  Who Is Who? · Order of Things · Where Was This? (spec says *on the globe*; what exists is
  a Leaflet puzzle — a re-platform) · The Missing Voice · The Tangled Thread · Find Them in
  the Crowd (scoped `?id=` delta only; global version done).
- **HOLD (player axis really does redraw these):** D12 What Happened Next? (game #7, bridge
  to Tend) · Profile (holds the status).
- **BORDERLINE (settle "does progression show here?" first):** D9 Reel/Memory Lane · D5
  Thread-back-to-you · D11 Connection found / Themed thread.

---

## 8. Auth & entry (Leon's #1 — TO BUILD)

- **Baseline today:** Supabase Auth, **1 auth user** (Leon, keeper), **1 profile**,
  **0 curators**. No registration flow for family members exists.
- **Target:** a real entry URL → log in **or register (open)** → land on the globe
  (`index.html`). Every family member gets their own account.
- **Child-safety + keeper gate still apply** to everything a new account can then do.
- The person↔user identity link ("you are in this photo") is an open schema gap (§9) and
  is needed for Idea 3; the auth build should lay groundwork toward it where natural.

---

## 9. Backend / schema

- Supabase project `oabcdrktuikifbormjip` · https://oabcdrktuikifbormjip.supabase.co
- Keeper `lenya.golnik@gmail.com` (`e7035e2f-0156-42b5-a1ad-13c57684a3d6`).
- Edge Function `translate`: name transliteration, Claude Haiku, gender-aware (feminine
  surname forms — Церлин → Церлина). `people.sex` drives gendering.
- Relationships: `from_person` = PARENT, `to_person` = CHILD.

**Tables (public):** `app_assets` · `artefact_edits` · `artefact_links` ·
`artefact_subjects` · `artefact_translations` · `artefacts` · `audit_log` · `curators` ·
`event_participants` · `events` · `journal_entries` · `name_variants` · `people` ·
`person_facts` · `place_geo` · `places` · `player_profiles` · `profiles` · `relationships`
· `translations` · `world_context`.
All user-contributed content passes a `pub_status` keeper gate before appearing publicly.

**`person_facts` — the open-ended person store.** Columns: `id, person_id, group_id,
field, lang, value, ord, status, created_by, reviewed_by, created_at, published_at`.
**No `label` column** — a custom detail is two rows (`custom_label`/`custom_value`)
sharing a `group_id`. Fields in use: `birth`, `birth_prec`, `death`, `living`, `gender`,
`lived`, `langspoken`, `source`, `kin`, `custom_label`, `custom_value`, `face`, plus the
name parts (`given`, `family`, `patronymic`, `maiden`, `called`, `honorific`, `nickname`).

**Names are ROWS, not columns** — *the unit of a row is the unit of approval*. Each name
part carries its own `created_by`/`status`/`reviewed_by`, so each is independently
suggestible and approvable. Read them through the **`person_names` view** (published-only,
pivoted, **newest-published wins**). A unique index
(`person_facts_one_published_name_part` on `(person_id, lang, field) where
status='published'` for the six name fields) prevents two published parts of the same kind
per language.

- **`called` is a first-class per-language name field.** `called` = the everyday form of
  the formal name (Маргарита → Рита; Леонид → Лёня). `nickname` = a pet name (*Ritaleh*),
  a list. Formal-vs-familiar `given/ru` rows were swept 2026-07-17 (Лёня→Леонид,
  Женя→Евгений, Зина→Зинаида, Надя→Надежда; familiar forms moved to `called/ru`).
- **`name_variants` is being RETIRED.** Its 22 rows migrated → `person_facts` name rows
  (2026-07-15). **Not dropped yet** — readers must be rewritten first (`person-real.html`
  rebuild, `moment-real.html` small read change). `preview.html`/`index.html` readers are
  retiring. Do not drop early; do not build on it.
- **`people.called_name`** is a redundant single-English column — migrate to
  `field='called', lang='en'` and drop **when the Person page is rebuilt.** Not before.

**Data reality — verified 2026-07-18 (this supersedes both old docs' "1 row"):**
`people` **45** · `person_facts` **48** (face 1 · given 21 · family 21 · called 5 ·
lived **0** · maiden **0**) · `name_variants` **22** (undropped) · `artefacts` **17**
(all `kind='photo'`, metadata keys `when`/`where`; `contributor_id` set **17/17**) ·
`journal_entries` **0** · `player_profiles` **0**.
**Schema-ready ≠ playable:** Tangled Thread (`lived` 0 rows) and any maiden-name UI have
no data yet — hence §1's empty-structure + engine approach.

**Open schema gaps:**
- ❌ Player-axis progression store (points/level/status) → blocks Journal, Profile, Idea 3.
- ❌ Messages + person↔user identity link ("you are in this photo") → blocks Idea 3.
- Historical **place names as rows** (Petrograd→Leningrad→SPb) — a store this app lacks.
  Proposed `place_facts(place_id, field, lang, value, valid_from, valid_to, ord, status,
  created_by, reviewed_by, created_at, published_at)` — same `pub_status` gate,
  per-field approval; `valid_from`/`valid_to` bind a name to the time dial. Place v3
  already draws this against the dial — design is ahead of schema; don't build that page
  until the store exists, or the design will be faked.

---

## 10. Frontend

- Vanilla JS, single self-contained HTML files. Three.js and Leaflet from CDN.
- `lf-nav.js` = floating ⊕ lens menu + unified hardware-back guard.
- **Navigation contract** (`lf-nav.js`): Back means *where you actually were* — history
  knows that; there is no link graph and must never be one.
  1. `history.back()` is the mechanism (`goBack()` `:17`: closes an overlay → else
     `inAppRef()` true → `history.back()`).
  2. `data-parent` is the cold-entry fallback only (no referrer). The globe is the front
     door, so every sub-page carries `data-parent="index.html"`; `index.html` carries none
     (root → confirm-exit).
  3. `inAppRef()` (`:14`) is a same-origin + filename whitelist. **Any page that links
     onward MUST be listed** or arriving from it silently falls back to `data-parent`.
     `globe-real.html` is deliberately absent — retired name.
- `node --check` every inline `<script>` before committing.

### Fixed — do not re-report
- ~~`moment-real.html` shows the uploader as the teller.~~ Fixed & deployed (`e566a08`):
  selects `contributor_id` (`:622`), resolves via `people.display_name` (`:630`).
- ~~`place-real.html` narrator gold-lie.~~ **Fixed** at `591cfe9` — `:339`/`:663` select
  `contributor_id`; `:671` `tellerOf()` resolves it. *(Both old docs still list this as a
  live bug — it is not. Only retiring `prototype.html`/`preview.html` still hold
  `contributor_user`.)*
- ~~`index.html` not the front door.~~ Resolved (`e566a08`): the globe is the front door.
- ~~`moment-real.html` lacks `lf-nav.js`.~~ Fixed 2026-07-17 (`:640` + `__lfClose` `:462`).

### Corrected stale claims (were false in the old docs — do not reintroduce)
- `place-real.html` has **no "Ways in" door and no `:715` string** — line 715 is `})();`;
  the file is 718 lines with two sections (`pMoments` `:687`, `pFaces` `:697`). The old
  "one Ways in door at :715 where v2 specifies three" entry had zero grep evidence. (It
  does still carry a v1 "Located by The Living Forest" element at `:686`.)
- The old "five-light hub dead-end" entry cited ids (`sec-photos`/`sec-places`/`sec-kin`/
  `sec-reel`) that exist in no file at any relevant commit. Re-derive real ids before
  acting; those journeys come back **inside the facets**, not as a second page. Recoverable
  at commit `75defd8` if needed.

---

## 11. i18n

- EN / RU / HE, all three, always. **Hebrew is RTL** and mirrors completely.
- `person-real.html` has full i18n. **Still owed** on `home-real`, `crowd-real`, and
  `index.html` (the globe — currently English-only, shipped knowingly; front door first
  when i18n comes off the lot), and on `place-real.html`.
- Names transliterated on demand via the `translate` Edge Function. Story/photo text
  auto-translation cached in `translations` / `artefact_translations`.
- Language persisted to `localStorage` + `profiles.preferred_lang` — prevents an English
  flash on reload. Device-language auto-detection.
- **Content appears once, in the selected UI language** — never the same story in EN/RU/HE
  side by side (that is a translation demo, not the page). Russian runs ~20% longer than
  English — do not design to lorem.

---

## 12. Retirement list (on consolidation)
`timeline-real.html` (after Timeline→Reel/D9) · `preview-globe.html` · `preview.html`
*(NOT before D9 — holds D9's reference)* · `prototype.html` (the old 2D hub) · old Leaflet
Places map · untracked patch scripts (`p2–p7.py`, `patch_globe.py`).
**Do NOT retire `index.html`** — it is the live front door (the globe), not the old hub.

---

## 13. Repo, deploy & working method

- Repo: `LeonG25/living-forest`, branch `main`. Live: https://leong25.github.io/living-forest/
- Push: `git push "https://x-access-token:$(cat /home/botuser/.gh_token)@github.com/LeonG25/living-forest.git" main`
- Raw fetch: `https://raw.githubusercontent.com/LeonG25/living-forest/main/<path>`
- Droplet: `botuser@droplet`, repo at `/home/botuser/living-forest`, **Python 3 only**
  (no Node), 8192-char limit per `exec_bash`, ~30s timeout. Use `bash -c` for process
  substitution — default shell is `sh`.
- Sandbox: Node v22 (`node --check`); network to github.com, raw.githubusercontent.com,
  npm, PyPI, api.anthropic.com.

### Deployment pipeline (strict)
1. Write + validate in the Claude sandbox (`node --check`).
2. Gzip + base64; `split -b 4500 -d`.
3. `printf '%s' '<chunk>' >> /tmp/target.b64` (first chunk uses `>`).
4. Verify `tail -c 4500 | sha256sum` + running total after each chunk.
5. Decode `base64 -d | gunzip`; verify decoded SHA against source.
6. Push (token pattern above).
7. After deploy: poll live URL for HTTP 200 + verify SHA. Remind Leon to hard-refresh /
   append `?v=` to bust mobile cache.

### Hard-won rules
- **Chunk corruption is routine** (~1 in 4–5). Recovery: truncate to last verified offset
  → resend as two halves → bisect 375 → 188 → 94 bytes.
- **`wc -c` before re-appending.** A transient `exec_bash` error does NOT mean the write
  failed — verify first, or you double-corrupt.
- **Never rerun failed Pages jobs** — single-job build/deploy means `rerun-failed-jobs`
  re-uploads the artifact → "Multiple artifacts" failure. Use a fresh `workflow_dispatch`
  or an empty commit.
- **`popstate` belongs to `lf-nav.js` alone**; page close handlers route through
  `window.__lfClose`.

### Design handoffs
Request in order: **flat static HTML/CSS** → screenshots → hosted URL. If a compiled
bundle is unavoidable, the page is embedded as JSON:
`i=s.find('<script type="__bundler/template">'); j=s.find('</script>',i);
html=json.loads(s[i+len('<script type="__bundler/template">'):j].strip())`.
Substitute Google Fonts (Frank Ruhl Libre for Hebrew/RTL). **Design fidelity first** —
reproduce verbatim, graft logic afterward.

---

## QC — the end-gate (Leon's #4)

Before the single ping to Leon, run a full pass and fix what fails:
- **Every control present and correct** — every button, link, and phone/tablet finger
  gesture that a page needs exists, and each does exactly what it should.
- **No orphans** — every page is reachable and every page can get back; `inAppRef()`
  whitelist includes every page that links onward; every sub-page has `data-parent`.
- **Schema complete** — no page shows a field the schema cannot store; every value has its
  three provenance states; family-knowledge structures exist (empty is fine) with their
  engines wired.
- **Challenges engine-generated** — confirm no game hard-codes a data snapshot; adding a
  row yields new challenges.
- **Guardrail intact** — provenance colours correct and unblended; keeper gate per-field;
  `contributor_id`/`contributor_user` never conflated.
- **i18n** — EN/RU/HE present where owed, HE RTL mirrors, content shown once in the
  selected language.
Then ping Leon once: design + build + QC done, here is the link.

---

## Parked ideas (future — do not build unasked)
- **Idea 1** — Events on the globe, by year.
- **Idea 2** — Quest / escape-room game.
- **Idea 3** — Family messages: members find each other and message tied to a memory;
  discovery advances status. Needs messages table + person↔user link + progression store.
- **Age-appropriate restrictions** — deliberately NOT decided (Leon: "it is what it is").
  Build to the content as it stands; invent no age tiers/gating/softening. Revisit before
  the app reaches readers who are not Leon.
- **Maiden name** — 0 rows across 45 people; Leon: "do it later". Design #1 draws a
  `was Golnik` chip against an empty field, and shows the maiden name in the married name's
  slot (Rita is published as Бетито-Гольник, married; Гольник is her maiden). Transliteration
  already does feminine surname forms. Half the family will have one — not an edge case.
- **Globe placement game / events layer / escape-room chain** (Phase 6) — each needs its
  own design pass.
- **Keeper authorization to view branches or trees** — a keeper grants/denies a given
  account access to specific branches or whole trees, so not every registered member sees
  every family. **Deliberately parked (Leon, 2026-07-18).** Note the contrast: registration
  today is fully open — anyone who signs up sees the real family immediately (Leon chose
  open + immediate over an approval gate). This idea is the future refinement of that: keep
  open sign-up, but let keepers scope what each account can see. Needs a per-account ↔
  branch/tree grant store and a keeper UI to manage grants.
