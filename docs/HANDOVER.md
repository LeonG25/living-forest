# The Living Forest — Handover

> **Revision:** 2026-07-15 19:40 (UTC+2)
> **Status:** **single source of truth.** Replaces `docs/WORKPLAN.md`, `docs/PARKING-LOT.md`, and every dated `HANDOVER-the-living-forest*.md`. Those are deleted — git holds their history.
> **Scheme:** `docs/the-living-forest-pagemap-v2.html` · rev **2026-07-15** (stamp in file head)
> **Repo:** `LeonG25/living-forest` · branch `main` · live at https://leong25.github.io/living-forest/

---

## 0. Bookkeeping rules — read before writing anything

We drowned once. Six files existed for three documents: `HANDOVER-the-living-forest.md`, `-2026-07-10.md`, `-2026-07-15.md`, `pagemap.html`, `pagemap-v2.html`, `pagemap-v2-2.html`. They disagreed with each other and with reality, and that is **exactly why two of the roadmap's five status marks turned out to be false**. These rules exist to stop it recurring.

1. **One handover. Never dated in the filename.** This file is always `docs/HANDOVER.md`. A dated filename means someone must guess which copy is current — that guess is the bug. Git is the history; the commit message is the changelog.
2. **Dated filenames are banned for text documents.** No `-v2`, no `-final`, no `-2026-07-15`.
3. **The scheme filename is frozen** at `docs/the-living-forest-pagemap-v2.html`. The `-v2` is a scar, not a pattern. **There will never be a v3.** It carries an internal revision stamp in its `<head>`; this handover cites that stamp.
4. **Design deliveries ARE dated** — they are immutable artefacts and several versions legitimately coexist. Format: `docs/designs/YYYY-MM-DD--<page>--v<N>.html`. Every one is catalogued in `docs/designs/INDEX.md` with its delivery date, source, and QC status.
5. **Every write bumps the stamp**: date + time + commit. Top of the file. No exceptions.
6. **A status claim must cite its evidence** — file + line, table + row count, or commit hash. This is the rule that would have caught the false `✓` marks on day one. "Designed" is not a status; "designed — `docs/designs/2026-07-15--person--v1.html`, QC pending" is.

---

## 1. Where we are — verified 2026-07-15

### Live pages
`home-real.html` (Sky) · `globe-real.html` (year-wheel globe) · `person-real.html` · `crowd-real.html` · `moment-real.html` · `place-real.html`
All carry `lf-nav.js` (floating ⊕ menu + unified hardware-back guard). `lf-nav.js` owns `popstate` exclusively; page-level close handlers route through `window.__lfClose`.

### There is one Person page
`person-real.html` **is** the Person page. No separate edit page — `person-edit-real.html` existed for hours on 2026-07-15 and is gone (404). Everything is editable **in place**; the portrait has a camera control on the image itself.
- Wired to `people`, `name_variants`, `person_facts`, `relationships`, `artefact_subjects`.
- **Full i18n** — EN / RU / HE with RTL, transliteration via the `translate` edge function, language persisted to `localStorage` + `profiles.preferred_lang`.
- Every edit is a **keeper suggestion** → keeper approval writes through to the real columns.
- **i18n still owed** on `home-real`, `globe-real`, `crowd-real`.

### What the hub retirement cost
The old **five-light hub** was retired 2026-07-15. **Recoverable at commit `75defd8`.** Its doorways were *in-page anchors* (`sec-photos`, `sec-places`, `sec-kin`, `sec-reel`), so retiring it took those sections too. **Those journeys currently dead-end.** They come back **inside the facets** — not as a second page. This is what Design #1 re-homes.

### Every person route is wired
Pages reaching `person-real.html?id=`: globe, home, moment, place (×2), crowd. *(Was eight; timeline's ×2 go when it retires — see §3. Person keeps 6 inbound. No orphans.)*

---

## 2. The facet model — decided 2026-07-15

One icon per **facet** of a person. Each facet holds its content, its editable fields, **and the game that exercises it**. A game is not its own icon. **Exactly eight — do not add a ninth.**

| Facet | Holds / edits | Game(s) inside |
|---|---|---|
| **Name** | display, given, family, patronymic, maiden, nicknames, honorific — every language | — |
| **Face** | the photos they appear in; choose & crop the portrait used everywhere | Who Is Who? · Find Them in the Crowd |
| **Life** | birth, death, precision, still-living, gender, occupation, about, languages spoken | Put Their Life in Order |
| **Places** | born in, places lived (ordered), on the map | Where Was This? · The Tangled Thread |
| **Story** | the memories told about them | Whose Memory Is This? · The Missing Voice · What Happened Next? |
| **Kin** | relatives, and how you're related — **the thread back to you** | *the path itself, walked hop by hop* |
| **Reel** | their life assembled; the payoff as the rest fill in | — |
| **More** | any custom detail (label + value), sources / provenance | — |

**How the count held at eight:** dates + gender + life → **Life**; custom + sources → **More**; place fields + Places section → one **Places**; kin fields + Who-they-knew + Thread-back-to-You → one **Kin**. That freed three slots and **Face**, **Story**, **Reel** walked back in.

**Consequence nobody has absorbed yet:** every game is now **person-scoped, launched from a facet**. Each therefore needs four surfaces that have never been designed — facet entry · the "not enough yet" state · person-scoped play · return (completion → Reel, writes → Journal). See §5.

### The two threads are different games
An earlier note merged them. Framework, gameplay supplement §2, and the original handover all agree they are separate:
- **The Tangled Thread** — a hunt across **places**: two strangers once shared a city years apart and never met; find them. Wrong pairs answer warm/cold; solving draws the thread across the map. **Places facet. Unblocked** (places-lived now exists).
- **The thread back to you** — the path from the viewer's own node through the kin graph to the person on screen. A founding promise ("a thread back to you always lights the way home"). Its own node. **Kin facet.** Walking it hop by hop belongs here.

---

## 3. Decision log

| Date | Decision | Consequence |
|---|---|---|
| 2026-07-15 | **Facet model** — 8 facets, games live inside them | Retro-invalidated every game's design status; the `~` column in the scheme is stale |
| 2026-07-15 | **One Person page**, editable in place | `person-edit-real.html` retired (404) |
| 2026-07-15 | **Timeline is "a life in order"** → **Timeline IS Reel** | Merged into **Design #9**. `timeline-real.html` → retirement. ⊕ lenses become **Sky · Globe · Tree**. Moment loses Timeline as a way in (keeps Globe/Person/Place). Person 8→6 inbound. **No orphans.** The Timeline reskin in `preview.html` becomes *reference* for D9, not a port target. |
| 2026-07-15 | **Journal is not a log** — it is where you are motivated to play more: progression made visible (points / stars / levels / status), warm and **non-competitive**, never a leaderboard | **Parked** pending a progression model. See §6. |
| 2026-07-15 | **Phase 1 is dissolved** | See §4. |

### Open decisions — these retro-invalidate designs if left unsettled
**Precedent:** the facet decision retro-invalidated every game's design status. **Do not commission a design before its architectural decision is settled.**

| Decision | Status | Blocks |
|---|---|---|
| **Progression — PLAYER axis** (points / levels / status) | **PARKED** | Journal · Profile · Idea 3 · game *completion cards* only |
| ~~Progression — PERSON axis~~ | ✅ **already settled — engine + design both exist** (see below) | — |
| **Does progression show on the payoffs?** | **OPEN** | D9 · D5 · D11 |

### Progression already exists — corrected 2026-07-15 17:04
An earlier reading of this file claimed "a progression model" was parked wholesale, and that every game needed four undesigned surfaces. **Both claims were wrong.** Evidence:

**The engine is in the prototype** (`preview.html`):
```js
const SEGS = ['face','story','place','people','reel'];
function fillSegment(personId, seg, note){...}   // every game already calls this
function ringCount(personId){...}                // "You've lit 3 of 5 lights for Rita."
```
**The design is in Design #1** (`2026-07-15--person--v1.html`):
```js
{ id:'face', kind:'gold', k:1.0, games:['whoiswho','crowd'] }  // --k drives bead brightness
<div class="bar"><i style="width:75%"></i></div>
reelBar:'Six of eight facets kindled'      // + RU + HE
gameLocked:'Add a story and this opens'    // the "not enough yet" state
gameScoped:'Scoped to Rita'                // person-scoping
```

**There are two axes, not one:**
| Axis | Question | Status |
|---|---|---|
| **Per-person** | "How lit up is Rita?" | ✅ **Settled.** Non-competitive by construction — you don't score points, you light someone up. Prototype's 5 segments map onto the 8 facets. `fillSegment` writes; the ring displays. |
| **Per-player** | "What's my level?" | ❌ **Parked.** This is what the Journal and Idea 3 need. |

**Games feed the per-person axis, not the player axis.** Therefore the games are **largely unblocked** — Design #1 already draws facet entry, the locked state, scoping, and return-to-Reel. What remains undesigned is **the play screen itself** (the clue board, the sequencing board) — pure mechanics, which no score system touches. Only the **completion card** is exposed to the player axis, and today it already speaks per-person language ("You found where Rita's photo was taken").
| Timeline's purpose | ✅ resolved 2026-07-15 | — |
| Journal's purpose | ✅ resolved 2026-07-15 (design still parked) | — |

---

## 4. Verification ledger — the `yes reskin ✓` rows

**The finding that forced this section:** `preview.html` is **not a mockup — it is `index.html` recoloured.** Both are 1742 lines; ~104 differ, all palette/font. So **"yes reskin" means "exists in the recoloured prototype", not "designed".** Every row carrying that mark is suspect until checked.

| Row | Build | Checked? | Result | Evidence |
|---|---|---|---|---|
| Timeline | 1 | ✅ | **FALSE** | engineered, never designed; `timeline-real.html` 15KB, no design pass |
| My Journal | 2 | ✅ | **FALSE** | a *tab* (`<button data-w="journal">`), not a page; whole "design" = 7 lines (`viewJournal()`, `preview.html:1141–1148`); no `journal-real.html`; data is localStorage (`S.prog[pid].journal`); `journal_entries` **0 rows**; `player_profiles` **0 rows** |
| **Where Was This?** | **4** | ✅ | **FALSE** | only in `preview.html`/`index.html`; entry = stock `btn secondary` (`preview.html:1181`); render = `.findtop` + inline styles + **Leaflet/CARTO dark tiles** — i.e. the old Leaflet map already on the retirement list |
| Profile | 3 | ✅ | **FALSE** | `paintWho()` (`preview.html:1121–1140`) = 18 lines of stock `.card`/`.eyebrow`/`.lede` + 2 inputs. A panel, not a page. `S.players` in localStorage. Its own copy: *"it isn't a login."* `player_profiles` **0 rows** |
| Who Is Who? | 13 | ✅ | **FALSE** | the clue generator — the game's core — renders as `clueTexts.map(t=>'<div class="clue">• '+t+'</div>')`. A bulleted list in a stock div. |

### Result: **5 of 5 checked. 5 of 5 false.** The `yes reskin ✓` column has a 0% accuracy rate. Treat every remaining claim in the scheme as unverified until evidenced.

**Build #4 is worse than "unverified".** It is specified as *"Where Was This? **on the globe**"*, but what exists is a **Leaflet map puzzle** — a re-platform onto the globe, not a port, built on a file scheduled for deletion.

**Also corrected:** the scheme says Place has no design. **It has one** — `Tel-Aviv_Jaffo_-_Place_Page__standalone_.html`, extracts to 37KB flat HTML (Newsreader/Hanken, gold + `#7fb4d8`; sections *A place we stood · Seen here · Moments here · Ways in · See it on the globe*). Predates the keeper/i18n/in-place-edit decisions. **D2 is a QC + delta, not a fresh brief.**

**Also corrected:** Design **#3 = Moment** — done (`moment-real.html`, commit `30ebd89`). That is why #3 is missing from the scheme's Design column.

---

## 5. Phase 1 has dissolved — do not work from it

The scheme says: *"No new Claude Design needed — Build 1–4: Timeline → Journal → unify the skin → Where Was This?"*

| # | Build | Status |
|---|---|---|
| 1 | Timeline | **Gone** — merged into Design #9 |
| 2 | Journal | **Gone** — parked; never designed, never built |
| 3 | Unify the skin (+ old games in the new look) | **Throwaway** — repaints 6 games due for redesign; "the new look" is a palette swap; Profile is progression-blocked |
| 4 | Where Was This? | **Suspect + blocked** — unverified `✓`, and it is a game |

Its premise was *"Phase 1 proceeds in parallel since it needs no new design."* Nothing remains to run in parallel with. **The design queue is now the only pipeline.** Fill it.

---

## 6. The design queue — 15 briefs, split by progression risk

> **Corrected 2026-07-15 17:04.** The earlier split over-blocked the games. The person axis of progression is already settled (§3), and only the *player* axis is parked. Six game briefs moved HOLD → GO.

### GO NOW — progression-proof (6 briefs · ~10 screens)
About content and structure. No score system can redraw them.

| D | Brief | Screens | Note |
|---|---|---|---|
| 2 | **Place** | 1 | Mockup exists → QC + delta |
| 4 | **Memory / Story page** | 1 | With D2, closes Phase 2 |
| 6 | **Search** | 1 | |
| 7 | **Tree · kinship + Who they knew** | 2 | One brief |
| 8 | **Contribute hub + Propose + Record a voice + Gaps** | 4 | One brief |
| 10 | **Manage curators** | 1 | |

### GO — the game PLAY SCREENS (6 briefs) — *unblocked, corrected 2026-07-15 17:04*
Design #1 already draws the entry, locked, scoped and return surfaces. What these briefs cover is **the play screen itself** — pure mechanics, which the parked player-axis does not touch. All 5 of 5 checked `✓` marks were false, so **none of these has ever had a design pass**:
- **Who Is Who?** — *the clue generator IS the game*; it currently renders as a bulleted list of strings
- **Order of Things** — "partial" = not designed
- **Where Was This?** — spec says *on the globe*; what exists is a Leaflet puzzle. **A re-platform, not a port.**
- **The Missing Voice** — **not** a "Whose Memory" variant; a different mechanic. *Also blocked on the narrator field.*
- **The Tangled Thread** — marked `~` **in error**; it has no design at all. Unblocked (places-lived exists).
- **Find Them in the Crowd** — scoped `?id=` variant **delta only**; the global version is genuinely done.

### HOLD — the player axis really does redraw these (2)
- **D12 What Happened Next?** — game #7, and the bridge to Tend
- **Profile** (Build 3) — literally "who's playing"; it holds the status. Verified FALSE; from-scratch.
- *(Journal — parked, §10)*

### BORDERLINE — settle "does progression show here?" first (3)
D9 Reel / Memory Lane · D5 Thread back to You · D11 Connection found / Themed thread.
⚠️ **D9 especially:** *"their life assembled; the payoff as the rest fill in"* **is** progression language. Reel is a progress bar made cinematic.

---

## 6b. Batches — WRITTEN 2026-07-15 19:40, ready to send

Briefs live in `docs/briefs/`. **Each is ~2.5–3.3KB and covers only its own page.** Append `docs/design-house-rules.md` to every one before sending. *(The old Person brief was 11KB at ~45% boilerplate — this is the payoff.)*

### Batch A — deltas to things that already exist (no new page)
| Brief | Was | What changed |
|---|---|---|
| `person-name-delta.md` | — | Add **patronymic · honorific · called** to the Name facet. Schema ready. |
| `moment-photoless.md` | **D4** | **D4 DISSOLVED into Moment 2026-07-15.** *(see below)* |
| `place-modernise.md` | D2 | Not a redesign — the Tel-Aviv design predates i18n, keeper flow, and in-place edit. |

### Batch B — genuinely new pages
`search.md` (D6) · `tree-and-kin.md` (D7, 2 screens) · `contribute.md` (D8, 4 screens) · `manage-curators.md` (D10)

### D4 dissolved into Moment — decided 2026-07-15 19:40
The third page to evaporate under inspection, after Timeline (→ Reel) and Journal (never existed). **Same cause every time: the pagemap named a *concept* and assumed a *page*.**

`moment-real.html` already does the whole job — hero → story (`human`/`machine`/`empty`, per-language, gold/cool, with teller) → where → when → people tagged → ways out, plus the full keeper queue (`artefact_translations` + `artefact_edits`). All 17 artefacts are `kind='photo'`; no story/voice/video/object exists yet.

A photoless memory changes **exactly one thing: the hero.** Story leads with words, voice with a recording, object with a photograph (= a photo again). Same routes, same story block, same guardrail, same keeper, same tagging. **One page, one variant hero.**

### ✅ Narrator backfilled 2026-07-15 19:40
Leon confirmed he alone uploaded **and** told all 17. So `contributor_id` → **Leonid Golnick** (`bff9e2b7-…`, the *person*) on all 17; `contributor_user` stays the *account*. **17/17 both set, and now distinct.** The Missing Voice has data.

⚠️ **Live conflation, not yet fixed:** `moment-real.html:626` reads `contributor_user` → `profiles.display_name` and renders it as **`toldBy`** — i.e. it shows the **uploader** as the teller, **in gold**. Harmless today only because Leon is both. It lies the moment anyone else uploads a story someone else told. Folded into `moment-photoless.md` as a correction; **the build must repoint it to `contributor_id`.**

---

## 7. ORDER OF WORK — proceed in this sequence

1. **Verification sweep** — the three unchecked `✓` marks (Where Was This? #4, Profile #3, Who Is Who? #13). Minutes, not days. Build #4 stands on one.
2. **QC the Person design (#1)** against schema. The keystone — every other node cross-links to it.
3. **Write `docs/design-house-rules.md` once** — palette · fonts · truth guardrail · EN·RU·HE + RTL · suggestion→keeper states · motion · output format · quality floor. The Person brief was 11KB and **~45% boilerplate**. Every later brief then = ~3KB of *this page only* + this appendix.
4. **Batch A → Claude Design: D2 + D4** (the node web). Closes Phase 2.
5. **Batch B → Claude Design: D6 + D7 + D8 + D10.**
6. **QC each design against schema AS IT LANDS** — never at the end. This converts "fix it later" into "know the gaps before building". Checklist: every field shown exists in `people` / `person_facts` / `name_variants` / `relationships` / `artefacts` / `artefact_subjects`; every value has its three states; nothing invented that the schema cannot store. Log gaps → §9.
7. **Consolidated scheme edit** — one pass on the pagemap, not seven (§8).
8. **Then build**, per design, per schema.

---

## 8. Queued corrections for the scheme (one consolidated edit)
`docs/the-living-forest-pagemap-v2.html` — currently stamped 2026-07-10 and **wrong in seven places**:
1. Design #1 (Person) **delivered** 2026-07-15 — extracted clean, QC pending
2. Design #2 (Place) — **mockup exists**; downgrade to QC + delta
3. Design #3 = **Moment — done**
4. **Games: the `~` column is stale** — it predates the facet decision. 6 of 7 need a pass. Tangled Thread's `~` is a straight error.
5. **Timeline → Design #9**; retire `timeline-real.html`; lenses become Sky · Globe · Tree; route counts
6. **Phase 1 dissolved**
7. **Journal parked** (§6)

---

## 9. Schema

### Gaps still open
- ❌ **Progression store — PLAYER axis only** (points / level / status) → blocks Journal, Profile, Idea 3. *(The person axis needs no store beyond what exists — see §3.)*
- ❌ **Messages + person↔user identity link** → blocks Idea 3
- ✅ ~~places lived~~ — **done**: `person_facts` field=`lived`, ordered, keeper-gated. *Schema only — **0 rows**; nothing to play with until seeded.*
- ✅ ~~narrator field~~ — **NOT A GAP. Corrected 2026-07-15 17:41.**

### The narrator was never missing — it was never wired
`artefacts.contributor_id` **exists**, typed `uuid`, **FK → `people.id`**. It is **0 of 17 used**, while `contributor_user` (the auth account that *uploaded*) is **17 of 17**. Someone built the narrator and never connected it. The prototype even carries the input string: *"Its story — in whose words?"* / *"The memory — in their words"*.
- **The Missing Voice is schema-unblocked.** It needs **wiring + a 17-row backfill**, not a migration.
- Design #1's `mem1by:'Michael Golnick'` maps straight onto `contributor_id → people.display_name`.
- ⚠️ Until backfilled, Design #1's **Story facet renders without a narrator**.
- **`contributor_id` = who told it (a person). `contributor_user` = who uploaded it (an account). Never conflate them.**

---

## 9b. Person page QC — Design #1 vs schema (2026-07-15 17:41)

**Verdict: Design #1 PASSES. It invents nothing the schema cannot hold.** Every gap found is wiring or data, not structure.

**Passes cleanly:** `display_name` · `given`/`family` · `birth_date` · `birth_certainty` · `is_living` · `sex` · `lived` · `langspoken` · memories (`artefacts` + `artefact_subjects`) · relatives (`relationships`) · custom detail (`custom_label`/`custom_value`) · `source` · auto-translated (`translations`/`artefact_translations`) · `taggedIn` · `face`

**Passes via `person_facts` — needs only a new field string, no migration:** `about` · `occupation` · place of birth · nicknames (list, via `ord`) · former surname (*"was Golnik"*)

### RESOLVED 2026-07-15 18:22 — name parts are ROWS, not columns. `name_variants` is being retired.

**Decision (Leon):** each name part is a separate field, because they are separate though related attributes. Keeper effort is negligible; **query-ability is what matters.**

**Why rows win — the argument that settled it:** *the unit of a row is the unit of approval.* A row carries `created_by` / `status` / `reviewed_by`, so whoever owns the row owns everything in it. With parts as columns, Michael cannot suggest only a maiden name, and Michael + Leonid cannot suggest different parts of the same name — one `created_by`. **Design #1 already requires per-part provenance** (`suggesting:'Suggested by Michael'`, `pendingChip:'waiting'` against a single field). Columns cannot express it.

**On query-ability — rows are better, not worse, and the objection is answered by a view:**
- **Write as rows, read as columns.** `person_names` (below) pivots them back. Queries stay as simple as today.
- **Search (D6)** is one indexable query over `(field, value)` across every part and every language. With columns it is an `OR` across five columns *and* still misses `person_facts`, where half the person already lives.
- **`person_facts` already holds** birth, gender, lived, langspoken, occupation, about, source, custom. Names were the only holdout. One store = one query shape.

#### Applied 2026-07-15 18:22
1. ✅ **Migrated** — 22 `name_variants` rows → **44 `person_facts` rows** (`field='given'|'family'`), preserving `status`, `created_by`, `reviewed_by`, `created_at`, `published_at`. Idempotent (`not exists` guard). Counts verified: given he=8/ru=14, family he=8/ru=14.
2. ✅ **View `person_names` created** — published-only, pivoted, deterministic (**newest published wins**, not `max(value)` which would pick alphabetically by accident):
```sql
select person_id, lang,
  (array_agg(value order by published_at desc nulls last, created_at desc)
     filter (where field='given'))[1] as given,
  ... family, patronymic, maiden, honorific ...,
  coalesce(array_agg(value order by ord, created_at) filter (where field='nickname'), '{}') as nicknames,
  count(*) filter (where field in ('given','family','patronymic','maiden','honorific')) as parts_published
from person_facts where status='published' and field in (...) group by person_id, lang;
```
3. ⏳ **Readers not yet rewritten** — `person-real.html` (free: it is being rebuilt from Design #1), `moment-real.html` (small read change). `preview.html`/`index.html` are retiring.
4. ⛔ **`name_variants` NOT dropped.** Only after step 3. Do not drop early.
5. ⛔ **No unique index yet** — `(person_id, lang, field) where status='published'` would be correct, but **it fails on live data today** (see below). Add it once resolved.

#### RESOLVED 2026-07-15 18:47 — "Рита" is a per-language CALLED-NAME
**Rita Golnick has two published Russian given names**, 8 minutes apart, both `published`:
| given | family | published_at |
|---|---|---|
| **Маргарита** | Бетито-Гольник | 2026-07-06 17:22:27 |
| **Рита** | Бетито-Гольник | 2026-07-06 17:29:52 |

`name_variants` had **no slot for "the Russian familiar form"**, so it stored a second `given` row, and nothing enforced uniqueness — so nobody noticed. **This is the column-collapse in the wild, and it is the design's own example person.**

- The view resolves to **Рита** (newest published). **Маргарита is not lost** — still in `person_facts`.
- **`parts_published > 2` is the permanent conflict detector.** Today it flags exactly one person: Rita.
- **Decision needed:** is Рита a `nickname`, a *called name* in Russian, or a second `given`? `people.called_name` exists but is a single English column, and the facet model has no "called name, per language" slot. **Do not guess — this is a meaning question.**
**Decision (Leon, 2026-07-15):** Рита is the **Russian called-name**. `called` is now a first-class name field, per language.

**`called` ≠ `nickname`.** `called` is the everyday form of the formal name (Маргарита → Рита; Леонид → Лёня). `nickname` is a pet name (*Ritaleh*) — the design already has `nicks` for those, as a list.

**Applied 2026-07-15 18:47:**
1. ✅ Рита's row → `field='called'`. Rita `ru` now reads **given=Маргарита · called=Рита · family=Бетито-Гольник**.
2. ✅ Deleted an exact-duplicate `family` row (Бетито-Гольник ×2, value-identical). **Lesson: the migration's `not exists` guard evaluates against the pre-insert snapshot — it prevents *re-running*, not duplicates *within* one `insert…select`.**
3. ✅ `called` added to the `person_names` view. *(Needed `drop view` + `create` — `create or replace` cannot insert a column mid-list.)*
4. ✅ **Unique index created — the guard that could not exist before:**
```sql
create unique index person_facts_one_published_name_part
on person_facts (person_id, lang, field)
where status='published'
  and field in ('given','called','family','patronymic','maiden','honorific');
```
It created **without error**, so no conflicts remain. **The database now prevents this class of bug permanently.** `parts_published` is obsolete as a detector (given+called+family = 3 is legitimate) — keep it as a convenience count only.

#### ⚠️ OPEN — transliteration wrote called-names into the `given` slot
The `given` field across the data may hold **familiar** forms, because transliteration ran from the **English display name**:
- **Rita, `he`**: `given=ריטה` — that is *"Rita"*, the called form. The formal **מרגריטה** is recorded nowhere.
- **Leonid, `ru`**: `given=Лёня` — the familiar form. The formal **Леонид** is recorded nowhere.

**Only Rita's Russian surfaced**, and only because someone happened to enter *both* Маргарита and Рита. Everyone else has a single `given` row, so nothing flags them.

**This is a data-meaning question per person — do not bulk-fix, and do not guess.** Options when addressed: (a) leave as-is and let the family correct names in place via the Name facet — the keeper flow already supports exactly this; (b) audit the 21 name rows by hand. **(a) is likely right**: the Person page makes every name editable in place, so the family fixes their own names as they meet them. That is the app working as intended, not a migration.

**Also open:** `people.called_name` is a single **English** column (1 person populated). Now that `called` exists per language, `called_name` is redundant — migrate to `field='called', lang='en'` and drop, **when the Person page is rebuilt**. Not before.

### Superseded 2026-07-15 18:22: the earlier "columns" decision
**This was an internal question only — the UI is fixed by the design; no one sees which table.** It decided two things: how many tables the Name facet touches, and **what the keeper approves**. Five `person_facts` rows would make one Russian name into *five separate approvals* — but it is **one name**.

**The design drew the line itself:** every part is a single field *except* `nicks` + `addnick` — an open list. So:
- **`name_variants`** = the formal name per language: `given, family, patronymic, maiden, honorific`. One row, one keeper approval.
- **`person_facts`** = nicknames — a list needs rows, not columns.

**REVERTED 2026-07-15 18:22.** The columns were added at 17:41 and dropped unused (0 rows touched). The reasoning behind them — *"one name, one keeper approval"* — was wrong: it is not one name, it is several separately-attributed attributes, and Design #1 already draws them that way.

### ⚠️ Design-vs-spec drift — open
The facet model (§2) says **Name** holds **patronymic** and **honorific**. **The delivered Design #1 shows neither** — its Name facet renders display, given, family, maiden, nicknames, former surname. Leon confirmed 2026-07-15: **both are wanted, both optional** — and **`called` (per language) joins them** (see above). The schema holds all three; **Design #1 draws none of them.**
→ **DECIDED 2026-07-15: the Person delta rides along in Batch A.** Its scope: add **patronymic**, **honorific**, and **called** to the Name facet — all optional, all per-language, each independently suggestible and approvable (they are separate rows, so each carries its own "Suggested by X" / "waiting" chip).

### Data reality (not schema)
`person_facts`: **1 row** (`field='face'`). `lived`: **0 rows**. `artefacts`: 17, metadata keys in use = `when`, `where` only.
**Schema-ready ≠ playable.** The Tangled Thread and The Missing Voice both need seeded data before they are worth playing.

### `person_facts` — the open-ended person store
`id, person_id, group_id, field, lang, value, ord, status, created_by, reviewed_by, created_at, published_at`. RLS mirrors `name_variants`. **No `label` column** — a custom detail is two rows (`custom_label` / `custom_value`) sharing a `group_id`.
Fields in use: `birth`, `birth_prec`, `death`, `living`, `gender`, `lived`, `langspoken`, `source`, `kin`, `custom_label`, `custom_value`, `face`.
*(A redundant `person_details` table was created and dropped the same day — use `person_facts`.)*

### Tables (public, 2026-07-15)
`app_assets` · `artefact_edits` · `artefact_links` · `artefact_subjects` · `artefact_translations` · `artefacts` · `audit_log` · `curators` · `event_participants` · `events` · `journal_entries` *(0 rows, never wired)* · `name_variants` · `people` · `person_facts` · `place_geo` · `places` · `player_profiles` *(0 rows)* · `profiles` · `relationships` · `translations` · `world_context`

All user-contributed content passes a `pub_status` keeper gate before appearing publicly.

---

## 10. Ideas — parked (future)

### Idea 1 — Events on the globe, by year
### Idea 2 — Quest / escape-room game
### Idea 3 — Family messages: discover, connect, advance *(added 2026-07-15)*
Members find each other and send messages tied to a memory — e.g. *"Hey, remember this…"* about a photo they are tagged in. Discovery is part of the play: the more of the family you reach and connect with, the further your status advances (points / level). Feeds the Journal progression model — messages and connections are among the things progression counts. Keeper gate and child-safety rules apply.
**Schema gaps:** no messages table; no person↔user identity link ("you are in this photo"); no progression/score store.

### Journal — parked 2026-07-15, blocked on a progression model
Direction is decided (§3): **not a log** — a log is boring and has no relation to play. It is where you go to be **motivated to play more**: progression made visible, warm, family, non-competitive, never a leaderboard. Creative work still to do. **Settle the progression model before commissioning any game design, or the games get drawn twice.**

### Phase 6 — parked big ideas
The globe placement game (a year + names → drop them on the map); the world & family events layer on the globe; the escape-room quest chain. Each needs its own design pass.

---

## 11. Working method

### Design handoffs from Claude Design
Request, in order of preference: **flat static HTML/CSS export** → **screenshots** → **hosted URL**.
**The compiled React bundle problem is now solved.** Both bundles received so far embed the rendered page as a JSON string in `<script type="__bundler/template">`; extracting it is one line:
```python
i = s.find('<script type="__bundler/template">'); j = s.find('</script>', i)
html = json.loads(s[i+len('<script type="__bundler/template">'):j].strip())
```
Fonts arrive as woff2 blobs in `__bundler/manifest` — substitute Google Fonts (Frank Ruhl Libre for Hebrew/RTL). **Still ask for flat HTML** — the embedded template is not guaranteed.

**Design fidelity first:** reproduce the handoff verbatim (exact CSS/DOM). Graft application logic onto the design shell afterward. Never hand-fuse two visual languages — that is the engineered-not-designed trap.

### Deployment pipeline (strict)
1. Write + validate in the Claude sandbox (Node v22; `node --check`)
2. Gzip + base64; `split -b 4500 -d`
3. `printf '%s' '<chunk>' >> /tmp/target.b64` (first chunk uses `>`)
4. Verify `tail -c 4500 | sha256sum` + running total after each chunk
5. Decode `base64 -d | gunzip`; verify decoded SHA against source
6. Push: `git push "https://x-access-token:$(cat /home/botuser/.gh_token)@github.com/LeonG25/living-forest.git" main`

### Hard-won rules
- **Chunk corruption is routine** (~1 in 4–5). Recovery: truncate to last verified offset → resend as two halves → bisect 375 → 188 → 94 bytes.
- **`wc -c` before re-appending.** A transient `exec_bash` error does **not** mean the write failed — verify first, or you double-corrupt. *(Hit twice on 2026-07-15; both writes had succeeded.)*
- **Never rerun failed Pages jobs** — single-job build/deploy means `rerun-failed-jobs` re-uploads the artifact → "Multiple artifacts" failure. Use a fresh `workflow_dispatch` or an empty commit.
- **`popstate` belongs to `lf-nav.js` alone**; page close handlers route through `window.__lfClose`.
- Droplet: `botuser@droplet`, repo at `/home/botuser/living-forest`, **Python 3 only** (no Node), 8192-char limit per `exec_bash`, ~30s timeout. Use `bash -c` for process substitution — default shell is `sh`.

### Environment
Supabase project `oabcdrktuikifbormjip` · keeper `lenya.golnik@gmail.com` (`e7035e2f-0156-42b5-a1ad-13c57684a3d6`) · edge function `translate` (Claude Haiku, gender-aware, feminine surname forms) · raw fetch `https://raw.githubusercontent.com/LeonG25/living-forest/main/<path>`

---

## 12. Retirement list (on consolidation)
`timeline-real.html` · `preview-globe.html` · `preview.html` · `index.html` (old 2D hub) · old Leaflet Places map · untracked patch scripts (`p2–p7.py`, `patch_globe.py`)
**Do not retire `preview.html` before D9** — it holds the Timeline reskin that is D9's reference.

---

## 13. Commit history — 2026-07-15
`30ebd89` Moment page · `dc57ea7` handoff-format rule · `c9916cc` pagemap PEDIT node · `a56e6f5` person-edit built · `ee2646f` drifting lights + pre-filled names · `75defd8` **last commit containing the five-light hub** · `7898c59` one Person page; edit page retired; crowd links · `99acc358`\* face control fix · `16ff45f` facet model + work plan · `118b884` two-threads reconciliation · `1b1e6f6` Journal parked; Timeline=Reel; Idea 3 · `a81d5fa` WORKPLAN.md *(now folded into this file)*

\* deployed sha; see `git log` for the commit hash.
