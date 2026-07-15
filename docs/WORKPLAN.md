# The Living Forest — Work Plan
_Written 2026-07-15. **Supersedes the phase order** in `docs/the-living-forest-pagemap-v2.html`, which is now known to be wrong in places. Proceed in the order below._

---

## Standing rule (learned the hard way, 2026-07-15)
**The roadmap's status columns are not trusted.** `yes reskin` and `✓` in the Design column certify nothing until checked against the repo and Supabase.

- `preview.html` is **not a mockup** — it is `index.html` recoloured. Both 1742 lines; ~104 lines differ, all palette/font.
- Therefore **"yes reskin" means "exists in the recoloured prototype"**, not "designed".
- **Two of five `✓` marks checked. Both false.** (Timeline, Journal.)

A brief is a claim about reality. Verify before commissioning.

---

## Phase 1 has dissolved — do not work from it
Roadmap said: _"No new Claude Design needed — Build 1–4: Timeline → Journal → unify the skin → Where Was This?"_

| # | Build | Status |
|---|---|---|
| 1 | Timeline | **Gone** — merged into Design #9 (decision 2026-07-15: "a life in order" = Reel) |
| 2 | Journal | **Gone** — parked; never designed, never built, `journal_entries` has 0 rows |
| 3 | Unify the skin (+ old games in the new look) | **Throwaway** — repaints 6 games due for redesign; "the new look" is a palette swap; Profile is progression-blocked |
| 4 | Where Was This? | **Suspect + blocked** — unverified `✓`, and it is a game |

Its premise was _"Phase 1 proceeds in parallel since it needs no new design."_ Nothing is left to run in parallel with. **The design queue is now the only pipeline.** Fill it.

---

## Verification ledger — the `yes reskin ✓` rows

| Row | Build | Verified? | Result |
|---|---|---|---|
| Timeline | 1 | ✅ checked | **FALSE** — engineered, never designed |
| My Journal | 2 | ✅ checked | **FALSE** — never designed, never built, localStorage only, 0 rows |
| Where Was This? | **4** | ❌ **unverified** | — |
| Profile | 3 | ❌ **unverified** | — |
| Who Is Who? | 13 | ❌ **unverified** | — |

Also outstanding: **Place has a mockup the roadmap denies exists** (`Tel-Aviv_Jaffo_-_Place_Page__standalone_.html`, extracts to 37KB flat HTML). Downgrade D2 from "fresh brief" to "QC + delta".

---

## Open decisions that retro-invalidate designs
**Precedent:** the 2026-07-15 facet decision retro-invalidated every game's design status — this is why the `~` column is stale. Do not commission a design before its architectural decision is settled.

| Decision | Status | Blocks |
|---|---|---|
| **Progression model** (points / stars / levels / status; non-competitive) | **PARKED** | all 6 game briefs, D12, Profile, Journal, Idea 3 |
| Timeline's purpose | ✅ resolved — Timeline IS Reel (D9) | — |
| Journal's purpose | ✅ resolved (progression, not a log) — but design parked | — |
| Does progression show on the payoffs? | **OPEN** | D9, D5, D11 (borderline) |

---

## The design queue — 15 briefs, split by progression risk

### GO NOW — progression-proof (6 briefs · ~10 screens)
About content and structure. No score system can redraw them.

| D | Brief | Screens | Note |
|---|---|---|---|
| 2 | **Place** | 1 | Mockup exists → QC + delta, not a fresh brief |
| 4 | **Memory / Story page** | 1 | Closes Phase 2 with D2 |
| 6 | **Search** | 1 | |
| 7 | **Tree · kinship + Who they knew** | 2 | One brief |
| 8 | **Contribute hub + Propose + Record a voice + Gaps** | 4 | One brief |
| 10 | **Manage curators** | 1 | |

### HOLD — progression will redraw them (8)
- **6 game briefs** — Who Is Who? (the clue generator is the game, never designed) · Order of Things · Missing Voice (also blocked on the narrator field) · Tangled Thread (marked `~` **in error** — it has no design at all) · Where Was This? · Find Them in the Crowd (scoped `?id=` variant delta only)
- **D12 What Happened Next?** — game #7
- **Profile** (Build 3) — literally "who's playing"; it holds the status

Every game is now **person-scoped, launched from a facet**. Each needs four surfaces nobody has designed: facet entry · the "not enough yet" state · person-scoped play · return (completion → Reel, writes → Journal).

### BORDERLINE — settle "does progression show here?" first (3)
D9 Reel / Memory Lane · D5 Thread back to You · D11 Connection found / Themed thread.
⚠️ **D9 especially**: _"their life assembled; the payoff as the rest fill in"_ **is** progression language. Reel is a progress bar made cinematic.

---

## ORDER OF WORK — proceed in this sequence

1. **Verification sweep** — the three unverified `✓` marks (Where Was This? #4, Profile #3, Who Is Who? #13). Minutes, not days. Build #4 stands on one.
2. **QC the Person design (#1)** against schema. It is the keystone — every other node cross-links to it. Delivered 2026-07-15, extracted clean (92,628 chars flat HTML, 8 facets, correct games per facet).
3. **Write `design-house-rules.md` once** — palette · fonts · truth guardrail (gold=human, cool-blue=fact, violet=in-review, never blended) · EN·RU·HE + Hebrew RTL · suggestion→keeper states · motion · output format · quality floor. The Person brief was 11KB and ~45% boilerplate. Every later brief becomes ~3KB of *this page only* + this appendix.
4. **Batch A → Claude Design: D2 + D4** (the node web). Closes Phase 2.
5. **Batch B → Claude Design: D6 + D7 + D8 + D10.**
6. **QC each design against schema AS IT LANDS** — never at the end. This is what converts "fix it later" into "know the gaps before building". Checklist: every field shown exists in `people` / `person_facts` / `name_variants` / `relationships` / `artefacts` / `artefact_subjects`; every value has its three states; nothing invented the schema cannot store. Log gaps → here.
7. **Consolidated roadmap edit** — one pass on `the-living-forest-pagemap-v2.html`, not five (see below).
8. **Then build**, per design, per schema.

---

## Queued corrections for `the-living-forest-pagemap-v2.html` (one consolidated edit)
1. Design #1 (Person) **delivered** — extracted clean, awaiting QC
2. Design #2 (Place) — **mockup exists**; downgrade to QC + delta
3. Design #3 = Moment — **done** (explains the gap in the column)
4. **Games: the `~` column is stale** — it predates the facet decision. 6 of 7 need a pass. Tangled Thread's `~` is a straight error.
5. **Timeline → Design #9**; retire `timeline-real.html`; ⊕ lenses become **Sky · Globe · Tree**; Moment loses Timeline as a way in (keeps Globe/Person/Place); Person drops 8→6 inbound. **No orphans.**
6. **Phase 1 dissolved** — Builds 1 and 2 gone, 3 throwaway, 4 blocked.
7. Journal **parked** (see `PARKING-LOT.md`).

---

## Known schema gaps
- **`told by person` narrator field** on memories → blocks The Missing Voice. _The last schema gap blocking a game._
- **Progression store** (points/level/status) → blocks Journal, games, Profile.
- **Messages + person↔user identity link** → blocks Idea 3.
- ~~places lived~~ — done (`person_facts` field=`lived`).

---

## Retirement list (on consolidation)
`timeline-real.html` · `preview-globe.html` · `preview.html` · `index.html` (old 2D hub) · old Leaflet Places map · untracked patch scripts (`p2–p7.py`, `patch_globe.py`)
