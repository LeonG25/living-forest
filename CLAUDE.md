# Table of contents

- [CURRENT STATE — session handover (read me first)](#current-state-session-handover-read-me-first)
- [The Living Forest — agent rules & source of truth](#the-living-forest-agent-rules-source-of-truth)
  - [0. Working style & bookkeeping](#0-working-style-bookkeeping)
  - [1. THE MANDATE — autonomous build to completion (Leon, 2026-07-18)](#1-the-mandate-autonomous-build-to-completion-leon-2026-07-18)
  - [2. Where we are — live pages (verified 2026-07-18; tree layout 2026-07-23)](#2-where-we-are-live-pages-verified-2026-07-18-tree-layout-2026-07-23)
  - [3. Hard rules — do not violate without asking](#3-hard-rules-do-not-violate-without-asking)
  - [4. The facet model — decided 2026-07-15](#4-the-facet-model-decided-2026-07-15)
  - [5. Progression — half-settled](#5-progression-half-settled)
  - [6. Roadmap notes](#6-roadmap-notes)
  - [7. Design](#7-design)
  - [8. Auth & entry (Leon's #1 — SHIPPED)](#8-auth-entry-leons-1-shipped)
  - [9. Backend / schema](#9-backend-schema)
  - [10. Frontend](#10-frontend)
  - [11. i18n](#11-i18n)
  - [12. Retirement list (on consolidation)](#12-retirement-list-on-consolidation)
  - [13. Repo, deploy & working method](#13-repo-deploy-working-method)
  - [QC — the end-gate (Leon's #4)](#qc-the-end-gate-leons-4)
  - [Parked ideas (future — do not build unasked)](#parked-ideas-future-do-not-build-unasked)
- [FEN — COMPANION (single source: mapping, layout, clips, speech). Supersedes docs/fen-*.md.](#fen-companion-single-source-mapping-layout-clips-speech-supersedes-docsfen-md)
  - [Layout — two frames (locked)](#layout-two-frames-locked)
  - [1. Where he appears](#1-where-he-appears)
  - [2. Situations -> movement clips](#2-situations---movement-clips)
  - [3. Speech dictionary](#3-speech-dictionary)
  - [Build order](#build-order)
- [COMPANION — FEN (character sheet)](#companion-fen-character-sheet)
- [Fen — the forest companion (LOCKED)](#fen-the-forest-companion-locked)
  - [Who Fen is](#who-fen-is)
  - [The four moods (reused across every game)](#the-four-moods-reused-across-every-game)
  - [Extra beats (nice-to-have, same character)](#extra-beats-nice-to-have-same-character)
  - [For the designer](#for-the-designer)
- [GAME-FEEL SPEC](#game-feel-spec)
- [The Living Forest — Game-Feel Spec & Designer Brief](#the-living-forest-game-feel-spec-designer-brief)
  - [The spine — one idea, everything serves it](#the-spine-one-idea-everything-serves-it)
  - [0 · The voice-and-framing law (Leon's #9 — governs every line before any effect)](#0-the-voice-and-framing-law-leons-9-governs-every-line-before-any-effect)
  - [The systems — each one expresses the spine](#the-systems-each-one-expresses-the-spine)
  - [The binding rule](#the-binding-rule)
  - [Open decisions for the design pass (propose, don't assume)](#open-decisions-for-the-design-pass-propose-dont-assume)
  - [Scope & guardrails for this pass](#scope-guardrails-for-this-pass)
- [DESIGN HOUSE RULES](#design-house-rules)
- [The Living Forest — design house rules](#the-living-forest-design-house-rules)
  - [1. The soul](#1-the-soul)
  - [2. What is yours, and what is not](#2-what-is-yours-and-what-is-not)
  - [3. What is currently true](#3-what-is-currently-true)
  - [4. The truth guardrail — the heart of it](#4-the-truth-guardrail-the-heart-of-it)
  - [5. The keeper flow — every field, every time](#5-the-keeper-flow-every-field-every-time)
  - [6. Three languages — EN · RU · HE](#6-three-languages-en-ru-he)
  - [7. Games live inside facets](#7-games-live-inside-facets)
  - [8. What to deliver — read this twice](#8-what-to-deliver-read-this-twice)
  - [9. Quality floor](#9-quality-floor)
- [DESIGN PACKET](#design-packet)
- [The Living Forest — design packet](#the-living-forest-design-packet)
  - [How to use this packet](#how-to-use-this-packet)
  - [What this is](#what-this-is)
- [PART ONE — the house rules](#part-one-the-house-rules)
  - [1. What is yours, and what is not](#1-what-is-yours-and-what-is-not)
  - [2. What is currently true](#2-what-is-currently-true)
  - [3. The truth guardrail — the heart of it](#3-the-truth-guardrail-the-heart-of-it)
  - [4. The keeper flow — every field, every time](#4-the-keeper-flow-every-field-every-time)
  - [5. Three languages — EN · RU · HE](#5-three-languages-en-ru-he)
  - [6. Games live inside facets](#6-games-live-inside-facets)
  - [7. What to deliver — read this twice](#7-what-to-deliver-read-this-twice)
  - [8. Quality floor](#8-quality-floor)
- [PART TWO — the seven briefs](#part-two-the-seven-briefs)
  - [1 · Person page: three more name parts](#1-person-page-three-more-name-parts)
  - [2 · Moment page: when there is no photograph](#2-moment-page-when-there-is-no-photograph)
  - [3 · Place page: bring it up to the system](#3-place-page-bring-it-up-to-the-system)
  - [4 · Search](#4-search)
  - [5 · Tree · kinship, and Who they knew](#5-tree-kinship-and-who-they-knew)
  - [6 · Contribute: the hub, and three ways in](#6-contribute-the-hub-and-three-ways-in)
  - [7 · Manage curators](#7-manage-curators)
- [One last thing](#one-last-thing)
- [BRIEF — contribute](#brief-contribute)
- [Brief — Contribute: the hub, and three ways in](#brief-contribute-the-hub-and-three-ways-in)
  - [The job](#the-job)
  - [Screen 1 — the hub](#screen-1-the-hub)
  - [Screen 2 — Propose a person](#screen-2-propose-a-person)
  - [Screen 3 — Record a voice](#screen-3-record-a-voice)
  - [Screen 4 — Gaps](#screen-4-gaps)
  - [Threaded through all four](#threaded-through-all-four)
  - [States to draw](#states-to-draw)
- [BRIEF — manage-curators](#brief-manage-curators)
- [Brief — Manage curators](#brief-manage-curators-1)
  - [The job](#the-job-1)
  - [What a curator is](#what-a-curator-is)
  - [The tone problem, which is the whole problem](#the-tone-problem-which-is-the-whole-problem)
  - [What it must do](#what-it-must-do)
  - [The question underneath](#the-question-underneath)
  - [The one that must not be forgotten](#the-one-that-must-not-be-forgotten)
  - [States to draw](#states-to-draw-1)
- [BRIEF — moment-photoless](#brief-moment-photoless)
- [Brief — Moment page: when there is no photograph](#brief-moment-page-when-there-is-no-photograph)
  - [What exists](#what-exists)
  - [What we need](#what-we-need)
  - [Keep identical](#keep-identical)
  - [One correction to fold in](#one-correction-to-fold-in)
  - [States to draw](#states-to-draw-2)
- [BRIEF — person-name-delta](#brief-person-name-delta)
- [Brief — Person page: three more name parts](#brief-person-page-three-more-name-parts)
  - [What exists](#what-exists-1)
  - [What we need](#what-we-need-1)
  - [States to draw](#states-to-draw-3)
  - [The real question](#the-real-question)
- [BRIEF — place-modernise](#brief-place-modernise)
- [Brief — Place page: bring it up to the system](#brief-place-page-bring-it-up-to-the-system)
  - [What exists](#what-exists-2)
  - [The problem](#the-problem)
  - [What we need](#what-we-need-2)
  - [States to draw](#states-to-draw-4)
- [BRIEF — search](#brief-search)
- [Brief — Search](#brief-search-1)
  - [The job](#the-job-2)
  - [Why it is not an ordinary search box](#why-it-is-not-an-ordinary-search-box)
  - [What results look like](#what-results-look-like)
  - [The parts that need real thought](#the-parts-that-need-real-thought)
  - [States to draw](#states-to-draw-5)
- [BRIEF — tree-and-kin](#brief-tree-and-kin)
- [Brief — Tree · kinship, and Who they knew](#brief-tree-kinship-and-who-they-knew)
  - [Screen 1 — the Tree](#screen-1-the-tree)
  - [Screen 2 — Who they knew](#screen-2-who-they-knew)
  - [The relationship that isn't blood](#the-relationship-that-isnt-blood)
  - [States to draw](#states-to-draw-6)

---

# CURRENT STATE — session handover (read me first)

*Rewritten 2026-08-09 after the consolidation. This file is now the ONLY text document:
handover, plan, parking lot, specs and agent canon all live here, in sections below.
Everything above the Archive line is current; the Archive is history kept for provenance.*

## 0 · ORIENTATION — where to look for what (start here, every session)

| You need… | Section |
|---|---|
| what to build next | §2 WHAT TO FIX NEXT |
| what is true right now | §1 |
| the lessons that cost the most | §3 |
| what Leon has decided and parked | §4 PARKED / §5 DECISIONS |
| the walk / levels spec | §A PROGRESSION |
| Fen's clips and moods | §B FEN |
| design deliveries and the responsive brief | §C DESIGN |
| how nightly agents worked (all stopped) | §D AGENTS |
| deploy, rig, commands | §13 and §QC below |

## 1 · WHAT IS TRUE RIGHT NOW (2026-08-13)

**Names live in ONE place: `person_facts`.** `display` is deleted outright - zero rows, zero
code references - because Leon said twice it was a mistake from the beginning. All 47 people
have a `called` name and an English name. The rule, everywhere: **called + family, else
given + family, else any single part**; the reader's language, then `und`, then another
language rather than nothing; never mixing alphabets ("Rita בטיטו-גולניק" was real); never
repeating a name a label already contains. `people.display_name` and `called_name` still
EXIST but nothing reads them for a person's name - they are next to retire. `name_variants`
is redundant and unread.

**Portraits are baked, once, server- or client-side.** 45 of 47 people have a small square in
`family/portraits/{id}.jpg` - 9 from a framing someone chose, 36 from a tagged face, treated
identically. ~25KB each against the 1.4MB photographs the app used to re-crop in every
browser on every page. `lf-portrait.js` bakes on approval, so a framing approved IS a picture
from that second. **The baked portrait is the face; the source photo and box exist only so a
keeper can re-frame it, never so a browser can re-crop it for display.**

**Contribute hands over to the moment page** (2026-08-13). One page, two modes: contribute
only INSERTs, moment only UPDATEs - birth and life. Both used to ask for story, when, where
and who, and had drifted apart; the moment page's versions won on every count (a calendar
with seasons, a place picker, a face tagger that draws boxes). A new memory now opens its own
moment page with the tagger already armed.

**Every edit waits for the keeper - including a keeper's own.** Five fast paths have been
closed: relationships, face tags, story, translations, and `saveMeta` on artefact metadata
(which published Leon's own memory 28 seconds after he made it). `relationships.status`,
`people.status` and `artefact_subjects.status` all default to `in_review`.

**Shared modules** (each is the single implementation of its rule):
`lf-name` (naming rule) · `lf-label` (names for simple pages) · `lf-person` (whole person from
one call) · `lf-portrait` (baking) · `lf-when` (year/month/day picker) · `lf-date` (partial
dates) · `lf-bind` (the tie confirmation) · `lf-face` · `lf-db` (every query, and the
"some of this did not load" bar).

**Transport**: Caddy is installed on the droplet with a live Let's Encrypt certificate on
`living-forest.duckdns.org`, bound to the public IP so Tailscale keeps its own 443. The
connector still uses the Tailscale Funnel URL - the DuckDNS one failed at OAuth sign-in and
was never adopted. `botuser` now has sudo for `snap`, `apt`, `systemctl`, `journalctl` and
owns `/var/snap/caddy/common`. **The drops were never explained**: four theories tested and
all four disproved, and they cleared on their own.

## 2 · WHAT TO FIX NEXT (in order)

1. **Retire the columns.** Nothing reads `people.display_name` or `called_name` for a name.
   Rename first so anything still reaching for them fails loudly, use the app a day, then drop
   them and `name_variants`.
2. **A-NEXT, continued.** Faces beside names. Done: timeline, curators, contribute-add.
   Not yet surveyed: crowd, home, journal, index, game-what-happened-next, game-where-was-this
   - and it is NOT true that all of them show a placeholder circle; several may have no person
   avatar at all. Ask Leon which screens he sees a name without a face.
3. **The structural queue**, untouched for a week: responsive rollout (1 of 15 pages),
   `lf-auth` on the remaining pages (gate fields still differ: `#gPw`/`#gGo` vs `#gPass`/`#gBtn`),
   cold-open performance (service worker, defer the 3D world).
4. **The 18-item verification list** from 2026-08-09 was never walked past item 3.

## 3 · THE HARD-WON LESSONS (do not relearn these)

**The dominant failure of 2026-08-07/09 was writing from memory of how a file works instead
of reading it.** Four silent failures, all mine, all the same shape:

- `'in'`/`'from'` invented for a direction vocabulary that is `other_parent`/`other_child` —
  every parent tie approved from the queue was written INVERTED, which flattened the tree.
- `l.tFail` when the page's idiom is `const L=d()` — Approve threw ReferenceError and died
  in silence, on the one page whose job is deciding.
- `peopleMap` when the map lives on `pending` — the review queue rendered NO cards at all.
- Hardened `genAssign()` — **dead code nothing calls**. Tiers come from the unit walk's
  recursion depth. The "fix" changed nothing and reported zero.

**Newer, and just as expensive (2026-08-10/13):**

- **A syntax check is not an execution check.** Three failures it could not see: a helper
  inserted into raw HTML *between* two script tags (valid JS, never ran); a script tag
  inserted *inside* another tag's opening and closing halves (module invisible to the
  browser); and a function reaching for `NAME.display`, a field that had been deleted. Use
  `qc/addtag.py`, which refuses to write if the open/close tag balance changes.
- **When someone describes what they see in ordinary words, take the ordinary meaning
  first.** Leon said the crop was "cropped". It was: the stage showed only the centred square
  of a rectangular photo. An hour went into proving the geometry, the source pixels and the
  decoder innocent - all true, all irrelevant.
- **Check the ten-minute cache before chasing a ghost.** GitHub Pages serves HTML with
  `max-age=600`. Three round trips this week were spent on pages that were already fixed.
- **Verify the subject before trusting the test.** "Gender does not show" was tested on
  someone who had no gender recorded; the result meant nothing.
- **Inserting into a `Promise.all` shifts every index below it.** In `lf-walk` that made
  events read name facts and anchors read events. Append, do not insert.
- **Grep proves presence, never absence.** "The person page cannot edit names" came from
  searching for two handler names; it writes `person_facts` in 17 places. Leon corrected it.
- **A page count is not a code count.** "18 of 18 pages migrated" was true and still left
  `lf-anchor`, `lf-walk` and `lf-invite` reading the stale column.
- **Stop fighting the escaping.** Four attempts to inject an attribute into a generated
  string; the answer was to read the id the markup already carried.

Others worth keeping:

- **A guard that fails open is not a guard.** `if(line){ …confirm… }` meant an empty
  sentence skipped the question and saved anyway.
- **Verify on the family's engine, at the family's size, with a warm cache.** A cold rig at
  412×830 hid: the gate clipping Fen, a stale `lf-nav` cache, the re-summon race.
- **When a file's contents change, bump that file's OWN version**, not only the versions it
  points at. A cached `lf-nav.js?v=17` kept requesting `lf-fen.js?v=22` for hours.
- **Never chain a syntax check and a push with `&&`** — a red check still pushed a page that
  would not parse.
- **Silence is the enemy.** supabase-js v2 NEVER throws: `try/catch` around a query is dead
  code. Everything goes through `lf-db`.
- **A sentence can be read backwards; a shape cannot.** The binding confirmation draws a
  mini-tree in the tree's own conventions.
- **Test data belongs to the family.** Every probe that writes must clean up, by name.

## Archive — earlier session notes (chronological, kept for provenance)

**2026-07-29 · QC round 1 fixes (Leon's walkthrough).** (1) Place inputs on Person: Android's <datalist> is unreliable inside sheets and only prefix-matches — a visible substring-match typeahead now rides on top (tap to fill); data was always there (places table + place facts). (2) Fen entrance rebuilt: starts AFTER the strip fades (700ms), from -260px, 2.6s LINEAR (easing made his feet slide), then sits; walk-away also linear. lf-fen.js → ?v=5 on all 8 pages. (3) whereWasThis engine now HONOURS opts.id — when scoped to a person it draws only from moments that person is in (subject join), falling back to the corpus only if they have none; result gains `subject_ids` + `scoped_to`, and the game records 'followed' knowledge for the moment's people (closes half the deferred recording item — order-of-things still pending). (4) NEW `lf-globe.js`: the front door's WebGL globe (same ocean/atmosphere/graticule/outline recipe, three.js+topojson) as a reusable component; where-was-this orb's decorative innards replaced with it (sweep, rim, pins, badge untouched).

**2026-07-29 · commits `b9b2de9`+next — FEN FULL CLIP SET.** Nine green clips baked via `/home/botuser/bake_fen.py` (script now PERSISTED on the droplet; adaptive-threshold pipeline as documented). Mapping: idle→"idle (new)", jump→"jump (not very slow)" (headroom fixed), delight→ROTATION [old light-delight, big nod], talking→small nod, earperk→"surprised", sleep→sleep (plays once then FREEZES on last frame — CLIP.freeze flag), stretch→yawn+stretch, wave→first 2.05s of "wave and threadmill walk", walk→"walking to the right" (treadmill, stays centered). lf-fen.js v4: rotation arrays in registry, freeze flag, onerror→idle, REAL entrance (walk loop slides in from left edge, 2.4s ease-out, then sits) and leave() = wave → walk out through the right edge. All 8 Fen pages bumped to ?v=4. Contact-sheet QC of raw clips + baked-frame QC both passed (clean edges, solid eyes, ember tail preserved); temp QC images committed then removed. STILL MISSING: **stumble** (wrong-answer clip: ears drooping, sad head-tilt) — wrong currently falls back to idle+voice line. Optional nice-to-have: a dedicated talking loop (small nod stands in).

**2026-07-28 · THE WALK SHIPS.** Design filed: `docs/designs/2026-07-28--walk-journal-anchor--v1.html` (chooser + My-walk + Family; catalogued in INDEX). Built the same day, citing it: **`lf-anchor.js`** — "Who are you in this forest?" overlay on tree-real, activates ONLY on `?choose=1`, trilingual, immediate upsert to player_anchors; **index.html** — after sign-in/register, players with no active anchor (or a declined one) are sent to `tree-real.html?choose=1`; **review-real.html** — "Who they say they are" section (undecided active anchors), Confirm sets decided_by/at, Decline sets status=declined → re-choose at next login; **`lf-walk.js`** on journal-real — tabs [My walk | The family | The log] above the untouched log: My-walk shows known people with level beads (earned gold / offerable dim / unofferable ABSENT per spec) + "the edge of the known" (nearest unmet content-bearing people via kin BFS over published relationships from the player's anchor), Fen strip on the journal speaks a data-aware line pointing to the nearest one; Family view = per anchored player a face + gold flames (one per person known, capped 28, NO numbers per person) + a blue together-line. All trilingual, RTL handled. Journal now loads lf-face + lf-walk + lf-fen (head-include rule respected).

**2026-07-28 · commit `7965ee5`** — "Step out" sign-out entry added to lf-nav.js: visible only when a session exists, always LAST in the ⊕ menu (keeper items insert above it), clears the stored token + best-effort /auth/v1/logout → lands on the globe's sign-in gate. Enables switch-user testing for anchors. Menu i18n still owed (menu is EN-only).

**2026-07-28 · commit `d7cc938` — THE WALK (progression) begins.** Canonical spec: **`docs/progression-spec.md`** — read it before touching anything progression-related. Leon approved: (1) self-chosen anchor, active immediately, keeper can decline → player re-chooses at next login; (2) four levels of knowing met/followed/heard/woven — a level is a level, NO percentages of available content ever, unofferable levels (no content) simply don't appear; (3) free roam, path suggested never imposed; (4) Journal = detailed personal view + compact visual family view (unspoken competition, players appear as their anchored person). Shipped now: `player_anchors` + `knowledge_events` tables with RLS (keeper pattern: exists profiles.is_keeper); `lf-progress.js` (LFProgress.init/record, silent when signed out); recording wired in who-is-who(met), crowd(met), what-happened-next(followed), missing-voice(heard), tangled-thread(woven) at the same anchors as Fen cues. Deferred: where-was-this + order-of-things need `subject_ids` added to their lf-games.js results first. NEXT per spec build order: designer pass for anchor-choosing moment + Journal (both views), then anchor flow (remember: BOTH approval handlers), then Journal build + levels/gating engine.

**2026-07-28 · commit `798d591` — FACE FIXES after Leon's field test.** Root causes found: (a) review-real.html has its OWN approval handler which the c6cc61e patch missed — it only wrote primary_asset; (b) multiple published face facts accumulated per person (up to 3) and the portrait picked one arbitrarily via ord-sort; (c) the crop stage always opened at defaults; (d) the Review card showed full images so crop-only changes were invisible. Fixed: crop stage reopens on the CURRENT portrait (same photo pre-selected, same zoom/position restored; zoom range raised 260→400 — Leon's real crops were hitting the ceiling); Review face cards render round CROPPED old→new portraits via lf-face.js; BOTH approval handlers (person-real + review-real) write metadata.face_box AND supersede every other face row of that person (older published + stale pending — this is why an item 'stayed on the approvals list': an older duplicate suggestion lingered); portrait uses newest published crop. DB: stale in_review row deleted, published face facts deduped to one per person, people.primary_asset+metadata.face_box backfilled for all 4 (SQL verified: pub_face_rows=1 each, face_box set). Rule reinforced: **person-real.html and review-real.html BOTH contain fact-approval handlers — any approval-logic change must be applied to both.**

**2026-07-28 · commit `cacb7d9`** — lf-face.js was included at the BOTTOM of the two game pages while `LFFace.init(sb)` ran in the earlier inline script → init silently no-oped → coloured discs never hydrated. Include moved to <head> right after the supabase CDN tag (same pattern person-real uses). Rule: **any lf-*.js consumed by an inline script must be included in <head>, before that script.**

**2026-07-28 · commit `c6cc61e` — FACES.** (1) The chosen portrait crop now travels with the person: the Person-page crop stage saves a normalised exact box (`box:{x,y,w,h,exact:1}`) inside the face fact's value alongside the raw `zoom/px/py`; keeper approval writes BOTH `people.primary_asset` AND `people.metadata.face_box` (exact box, or the legacy zoom triple for old suggestions). All 6 pre-existing face facts are legacy zoom-form — renderers convert zoom/px/py at draw time, so NO backfill was needed. (2) New shared **`lf-face.js`**: resized sources via the Storage render endpoint, IndexedDB crop cache (same `lf-tree-faces` store the tree uses), concurrency-capped queue, and box-aware cropping (exact / legacy zoom / padded tag box / centre). `LFFace.resolve(ids)` maps person ids → {path,box} with precedence metadata.face_box → newest published face fact → tagged-photo fallback. (3) Person page portrait+thumbs go through the fast pipeline (was: full-size originals every load). (4) Tree cropImage/boxKey understand exact+zoom boxes and the tree now loads published face facts to fill missing face_box. (5) Real faces replace coloured discs in **Tangled Thread** (map nodes + solved-card pair) and **Missing Voice** (teller options + fogged portrait + reveal card) — the coloured disc stays as the loading placeholder. Who-Is-Who options deliberately stay name-only (the face IS the answer). All inline scripts node --checked; live SHAs verified = source.

**2026-07-28 · commit `2ac56ec`** — Fen v3 is live in ALL SEVEN games (who-is-who, order-of-things, where-was-this, missing-voice, what-happened-next, tangled-thread, crowd-real). lf-fen.js rewritten: clip registry with declared fallbacks (pending clips fall back to idle — when a baked clip lands, add one `src:` line and every page picks it up), lifecycle (fade-in -> greeting; inactivity 10s -> stretch, 20s -> sleep, wake on touch — active only once real clips exist), and a cue API `Fen.cue(greeting|question|clue|right|wrong|streak|win|leave)` with a trilingual EN/RU/HE speech dictionary following `lf_lang` (RTL handled on the speech line). On-screen reaction sentences moved to Fen: who-is-who "not quite" banner no longer shows (Fen speaks); crowd-real praise lines route through Fen (visual glow kept). Voice-law fixes: who-is-who reelnote EN/HE ("remembered" -> "you know"), crowd-real "it will remember you" removed. All inline scripts node --checked; droplet/sandbox SHAs verified identical; live lf-fen.js SHA verified = source. NEXT: bake pending green clips as Leon delivers them (add srcs to CLIP registry in lf-fen.js), then data-aware lines.

Previous state (still accurate for pipeline/bucket details): Fen was first wired into the **who-is-who game** — a fixed bottom **forest strip** (two-frame layout), a **pre-keyed transparent webm** fox on the left, and **tap the strip -> he speaks**. Reactions wired: right answer -> delight, streak -> jump. Deployed on GitHub Pages (works on Android/Chrome). URL: https://leong25.github.io/living-forest/game-who-is-who.html

WHERE THINGS LIVE
- Code + baked clips: repo LeonG25/living-forest (served by GitHub Pages). Companion script = lf-fen.js. Baked transparent clips = assets/fen/fen-{idle,delight,jump}.webm.
- Source media: Supabase bucket `companion` (project oabcdrktuikifbormjip). Green sources baked so far: "Fox - idle, green bg.mp4", "Fox - light delight, green bg.mp4", "Fox - jump, green bg.mp4". Forest bg the app loads: "Wood animated bg 9s.mp4". Non-green mood clips (stumble, talking, sleep, entrance, ear perk, wave, stretch, etc.) are also there as reference — to be REGENERATED on vivid green before baking.
- Bake pipeline is set up ON THE SERVER (droplet, /home/botuser/living-forest): static ffmpeg at ~/bin/ffmpeg (VP9-alpha capable); numpy/PIL/scipy via pip --user. Bake = curl the green clip from Supabase -> per-frame key (greenness = G-max(R,B); adaptive Thi/Tlo set BELOW the clip's own green; despill G=min(G,max(R,B)); scipy fill-holes to keep eyes solid) -> RGBA png -> ffmpeg -c:v libvpx-vp9 -pix_fmt yuva420p -> commit to assets/fen/. Then lf-fen.js plays it. (iOS later needs an HEVC-alpha twin of each.)
- Deploy: push to main via URL with the PAT at ~/.gh_token; Pages rebuilds (~1-2 min). Version the lf-fen.js script ref (?v=N) when it changes, to bust the phone cache.

NEXT (full build order is in the FEN section below): regenerate the remaining moods on VIVID green with the whole body in frame -> bake to webm -> wire the lifecycle (walk-in on open, stretch @10s / sleep @20s, wave + walk-away on close) and the ear-perk / talking reactions; generate the walk-away clip; and strip each game's old on-screen reaction sentences as Fen arrives in that game.

**2026-07-31 · VERSION CORRECTION — lf-fen.js.** The entries above claim v=5 (line 129) and v=4 (line 131); live pages now carry **v=8**. Timeline: v4 (b9b2de9, full clip set + rotation arrays), v5 (c0750a7, entrance at gait speed after fade), v6 (b68dfab, stumble registry), v7 (a489329, entrance event-waits), v8 (01c9caa, fen-entrance.mp4 real clip). All 8 Fen pages (who-is-who, order-of-things, where-was-this, missing-voice, what-happened-next, tangled-thread, crowd-real, journal-real) verified at ?v=8. No functional issues; the documentation lag is noted here for future reference.

**2026-08-02 · FURTHER UPDATE — lf-fen.js now at v=21.** Live pages carry **v=21** (verified in game-who-is-who.html, index.html loads via lf-nav v=10). The v8-to-v21 timeline is not documented here; commits post-2026-08-02 likely cover the progression. The v=8 snapshot above remains accurate for that point in time.

---

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

## 2. Where we are — live pages (verified 2026-07-18; tree layout 2026-07-23)

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
- ⊕ menu today = 8 items (`lf-nav.js:95–103`): The globe → `index.html` · Search →
  `search-real.html` · The tree → `tree-real.html` · Find them in a crowd → `crowd-real.html` · The timeline → `timeline-real.html` · Contribute → `contribute-real.html` · My journal → `journal-real.html` · **The clearing** → `clearing-real.html` *(Fen's invitation page, ship date 2026-07-31 per CURRENT STATE)*. Keeper-only: Review + Keepers (inserted above the sign-out). **2026-07-31 correction (now stale):** The sky was removed from the menu (parked per §Parked ideas); all 7 pages parent to the globe (`data-parent="index.html"`). **2026-08-02 update:** The clearing was added 2026-07-31 as the eighth menu item (not sky); menu count is now 8.
- **All 7 games live** (2026-07-28 onward): Who Is Who?, Find Them in the Crowd, Put Their Life in Order,
  Where Was This?, What Happened Next?, The Missing Voice, The Tangled Thread.
  [**2026-07-31 correction:** Missing Voice and Tangled Thread shipped 2026-07-28; this section was written before then. See CURRENT STATE above for the real timeline.]

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
| **Story** | the memories told about them | Whose Story Is This? · The Missing Voice · What Happened Next? |
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
  you don't score points, you light someone up. Engine built into `reel-real.html` and the
  Person page (facet card brightness via `--k`, progress bar, bead display);
  design done (Design #1: `--k` drives bead brightness; `reelBar:'Six of eight facets
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
- **Timeline was built but is obsoleted by Reel** — `timeline-real.html` exists (undesigned).
  **Timeline IS Reel** → Design #9 built `reel-real.html` as the unified view;
  `timeline-real.html` is orphaned and goes to retirement (§12).
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
    data.** Not a "Whose Story Is This?" variant — a different mechanic.
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
  11 design files delivered (see `docs/designs/INDEX.md` for the full catalogue and status).
  Cite the exact design file. Latest: Design #8 The Walk (2026-07-28) + Fen Guidance (2026-07-31).
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

## 8. Auth & entry (Leon's #1 — SHIPPED)

- **Status:** SHIPPED 2026-07-18 22:27 (`dcb92b4`). Open registration on the globe — sign-in gate includes create-account + auto-profile ensure. Index gate routes signed-in users forward after anchor selection. See CURRENT STATE above (commit `1a1499c`, designed login/register screen).
- **Baseline (2026-07-18):** Supabase Auth, **1 auth user** (Leon, keeper), **1 profile**,
  **0 curators**. No registration flow for family members existed.
- **Target (2026-07-18):** a real entry URL → log in **or register (open)** → land on the globe
  (`index.html`). Every family member gets their own account. ✅ **DELIVERED.**
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

### Tree layout — tidy descendant tree (MyHeritage grammar) — decided 2026-07-23
`tree-real.html` `computeLayout()` was a barycentre/Sugiyama sweep → same-generation
people scattered onto different rows, marriage lines drawn between far-apart spouses
(Leon's "2 parallel yellow lines"). **Replaced** (`0f454c1`) with the prototype's
Reingold–Tilford tidy tree:
- Unit = nuclear family. A couple (spouse **or** co-parents) = one 2-card block anchored
  by the blood-line member (has-parents, else has-a-placed-sibling, else first). Everyone
  else = a single-card unit.
- Units form a tree via parent edges (`u.parentUnit` = home unit of the anchor's parent).
  Each subtree **reserves its own horizontal width** ⇒ no overlap by construction; a
  parent sits centred over its children; generation = fixed depth row.
- **Sibling-group blocks** (enhancement over the raw prototype): root units linked by an
  explicit sibling edge (union-find on *home units*, either spouse) are grouped under a
  virtual parent so top-generation siblings whose parent isn't in the data (Amma/Chaya/
  Evel) sit adjacent under one clean sibling bar. Constants: `COLW/couple-pitch 170`,
  `COUPLE_OFF 85`, `SIB 40`, `FAM 94`.
- Lines were already MyHeritage-style (provenance-coloured vertical→sibling-bus→drops,
  short gold marriage bar, violet pending); only placement changed, plus one sibling bar
  per parentless root group (`treeRootGroups`).
- Leon's edge rulings baked in but **untested** (no such data yet): serial marriages seat
  all spouses on the row; blood-related spouses keep their own generation, marriage as a
  cross-level connector.
- Verified against live data before deploy (37 placed, 4 generations, parents strictly
  above children, siblings & spouses same row, couples 170px, zero overlaps).

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
- **Sky page (`home-real.html`) — retired from the app 2026-07-23, parked not deleted.**
  Removed from the ⊕ lens menu (`lf-nav.js` items); the globe (`index.html`) is now the
  root/home — it is the first menu entry and the `data-parent` of all 12 top-level pages
  (0 pages parent to the sky). The only hardcoded links to the sky — `timeline-real` and
  `crowd-real` back buttons + their gate-error links — were re-pointed to the globe. The
  file stays in the repo but is unreachable from anywhere in the app; nothing was orphaned
  (the sky only linked out to the globe). Commit `1e00baf`. **New home = the globe.**

---

# FEN — COMPANION (single source: mapping, layout, clips, speech). Supersedes docs/fen-*.md.

## Layout — two frames (locked)
Every page with Fen splits into: (1) PAGE frame — content, its own scroll, ends at the strip top; (2) FEN STRIP — a fixed bottom band (~151px) that never scrolls, his ground. Content can never cross into the strip. The strip's background IS the forest (animated firefly loop; static fallback); Fen (pre-keyed transparent webm) sits on the left; the open right side is his voice + movement lane + a home for persistent controls. A soft horizon joins the frames (forest fades up into the page's dark sky). This resolves the "one world" problem: forest lives only in the fixed strip, transparent Fen on top — continuous, no seam. Tap the strip -> Fen speaks. Hold his size as-is.
Implemented in lf-fen.js (played as transparent webm; version the script ref to bust cache).

## 1. Where he appears
- The seven games — full companion. Front door (globe) — light greeting presence. NOT content pages (person/tree/place/journal) — quiet looking.

## 2. Situations -> movement clips
Lifecycle: arrive: strip fades in -> entrance (walk in) -> idle. present: idle loop; ~10s calm -> stretch; ~20s -> sleep (wake on touch). leave: wave -> walk-away -> strip dissolves [NEW CLIP NEEDED: walk-away].
Reactions: new question->ear-perk; clue/between->talking; right->delight (alt light-delight); wrong->stumble; streak/win->jump; tap him/strip->talking; idle 10/20s->stretch/sleep.
Clips: LIVE (baked webm): idle, delight, jump, talking, earperk, sleep, stretch, wave, walk, arrive (video mp4). Wiring: ALL cues wired in all 7 games via lf-fen.js (**v=21 live as of 2026-08-02**, see VERSION CORRECTION below). Fallback entries: stumble→earperk (kind "oh!" approved 2026-07-31), entrance→walk, walkaway→walk. **2026-08-01 update:** clip inventory now complete except walk-away (reserved clip slot). delight includes rotation array [fen-delight.webm, fen-nod-big.webm]; talking uses fen-nod-small.webm.

## 3. Speech dictionary
Voice law (§0): present tense; meet/know/be-with; never remember/preserve/nostalgia. Dry, warm, patient, short. Goal: EN+RU+HE, then data-aware.
REACTIONS NOW COME FROM FEN — not written on the game screen. The old on-screen reaction sentences are removed as Fen takes each game. (Functional verdicts, e.g. the timeline year in what-happened-next, STAY — they are facts, not reactions.)
- Greeting: "There you are. Come meet your people." / "Right - who do we know today?" / "Everyone's here. Let's find them."
- Idle/taps: "Take your time. They're not going anywhere." / "Trust your first guess - it's usually right." / "Look properly. You know this one." / "Family's a puzzle. Good thing you like those."
- New question: "Here's someone." / "This one - do you know them?" / "Ah, you'll like this one."
- Right: "Yes. You actually know them." / "That's them. Of course it is." / "See? You knew."
- Wrong: "Not them - but you're closer than you think." / "Interesting theory." / "Try again. No hurry."
- Streak / win: "That's the whole row. Well done." / "Look at you - you know your family."
- Find-people (crowd, harvested): "The first light returns." / "Just one soul left to find - you're nearly there." / "Every face is home." / "That's everyone. Beautifully done." / "Some still waiting in the dark. Keep looking."
- Waiting: "Still here whenever you are." / (wake) "Oh - you're back."
- Leaving: "Come back soon. They'll keep." / "Off you go. I'll be here."
Data-aware (wire later): name the revealed person; echo a clue detail; mark first meetings; celebrate a full branch.

## Build order
1. Bake remaining green clips -> transparent webm (server pipeline). 2. Wire lifecycle + reactions into lf-fen.js. 3. As Fen enters each game, REMOVE that game's on-screen reaction sentences (harvest good ones into the dictionary above first). 4. Generate walk-away + clean re-gen set. 5. Expand dictionary, add RU/HE, then data-aware.

---

# COMPANION — FEN (character sheet)

# Fen — the forest companion (LOCKED)

*Resolves the "companion" open decision in `game-feel-spec.md`. This is the single companion
shared across all seven games — same look, same four moods, same voice everywhere, so the
games read as one world. Decided with Leon 2026-07-23: a **furry** fox named **Fen**,
funny but clever — never silly, never mean. The designer builds Fen from this page; the
engine feeds it real data. All voice lines obey §0 of the spec: present tense, "meet / know,"
no mourning, no nostalgia.*

## Who Fen is

A small, **furry** fox — real fur, not a wisp of light. Warm russet-amber coat, a cream cheek
and chest, dark forepaws, big dark eyes with a bright catchlight, expressive ears, and an
oversized soft tail. The only magic is understated: the **tail-tip glows ember-gold when Fen
is pleased**, and a few warm motes drift when it moves — enough to belong in the forest, but
Fen is fundamentally soft and huggable, a creature a child wants near them.

Personality: a dry, quick little **scholar of the family** who genuinely *knows* everyone and
enjoys introducing you. Warm underneath the wit. The comedy is in **restraint and timing** —
a raised eyebrow, a beat, a clever line — not pratfalls. Fen is present tense: it never mourns
anyone and never says "used to." It makes the child feel *these are my people, and I know them.*

**Voice rules (hard):** short (mobile, kids); present tense always; encouraging on a wrong
answer (leaves the door open, never scolds); wit is gentle and often self-directed, **never
sarcasm aimed at the child**; gold = the human-told voice. Canonical copy is English; Russian
and Hebrew ship through the same language switch (never triplicated screens).

## The four moods (reused across every game)

**1 · Waiting** — sits, tail curled, ears tracking the last thing you touched; an occasional
slow blink or unbothered yawn. Calm, patient, mildly amused.
> "Take your time. They're not going anywhere." · "No rush — I live in a tree." · "Look
> properly. You know this one." · "I'd help, but then you'd never learn." · "I'll wait. It's
> what I'm best at."

**2 · Delight** (right answer) — a slow approving nod, ears perk, **tail-tip flares ember-gold**,
a small warm mote-puff.
> "Yes. You actually know them." · "That's them. Look at you — family." · "Correct. I knew you
> had it in you. Mostly." · "Right again. People will think you visit." · "See? You two know
> each other."

**3 · Stumble** (wrong answer) — one ear tips down, a small head-tilt, a patient look that
leaves an opening. **No angry shake, no red, no buzz.**
> "Interesting theory." *(then waits)* · "Not them — but you're closer than you think." · "Mm.
> That's someone else's face. Look again." · "Bold. Try again — I believe in you, cautiously."

**4 · Between rounds** — turns to face the player and drops **one real, warm, present-tense
fact** about the person (engine-fed from their data), often with a light undercut. Templates:
> "{Name} loves the sea — still drags everyone in, every summer." · "{Name} tells the best
> stories. Ask them sometime; you'll be there a while." · "{Name} makes the soup nobody admits
> they want seconds of." · *(no data yet)* "Come and know this one."

## Extra beats (nice-to-have, same character)

- **Greeting** (game start): "Come meet your people." · "Right — who do we know today?" ·
  "The family's all here. Let's find them."
- **Streak**: sits up, glow brightens, a small proud chest-puff. "Three in a row — now the
  tree's showing off, not just you."
- **Golden / rare round**: "Oh — this one's special. Pay attention." · "A golden face. Even I
  sit up for this."
- **New face / unlock**: "New face. Come say hello." · "You hadn't met them yet. Now you have."
- **Everyone met**: "You know your whole family now. The forest's never been this bright."

## For the designer

- Build Fen as one reusable character with the **four mood states** above (idle loop + the
  three reactions + the between-rounds address), living in a corner of every game's play
  screen. Motion is small and characterful, not busy.
- Keep the **ember-gold tail-tip** as Fen's signature and its tie to the app's gold =
  human-voice truth; the rest of the fur is warm and real.
- Fen must feel identical across all seven games — it is the thread that makes them one game.
- Lines are illustrative of tone and length; the engine supplies the between-rounds facts, so
  those stay **present tense and data-driven**, never a baked snapshot.

---

# GAME-FEEL SPEC

# The Living Forest — Game-Feel Spec & Designer Brief

*Canonical brief for the design pass on all seven game play-screens. Decided with Leon,
2026-07-23. This governs copy, motion, sound, and the reward loop **before** and **during**
the designer pass, and the build that follows. Read this first; it outranks any per-game
improvisation. The point of this document is that the seven games stop being seven quizzes
and become **one game with seven ways to play**.*

---

## The spine — one idea, everything serves it

**Everyone's here — come and know your family.**

Present tense. Belonging, not a history book. A child leaves a session not having *studied
relatives* but feeling *these are my people, and I know them.* Every system below exists to
express this one idea. If an effect, a word, or a reward doesn't serve "come and know your
family," it doesn't belong.

The name already carries it: it is the **Living** Forest, not the remembered one.

---

## 0 · The voice-and-framing law (Leon's #9 — governs every line before any effect)

The single most important rule. Almost all the mood is set by wording, not graphics.

- **Present tense, always.** People *are*, not *were*. "Rita loves the sea — come see,"
  never "Rita loved." Present tense makes a person alive without a single special effect.
- **Meet / know / be with — never remember / preserve / bring back / wake.** The child is
  *getting to know family who are here*, not retrieving the dead or curating the past.
- **Reach for:** meet, get to know, visit, spend time, find, be with, come see, they're
  here, you know them now — *your people, the family, who they are*.
- **Drop entirely:** memory, remember, keep alive, wake, revive, the past, life story,
  ancestors, legacy, "in memory of," "those who came before," nostalgia of any kind.
- **"A memory / a moment"** is not "a memory." It's *a story they tell you* (present tense),
  or *a time*, or *a day* — "here's Efim by the sea," not "a memory from 1974." Keep the word
  "moment" only where it reads as *a scene you can step into*, never a faded snapshot.
- **The "Life" facet is not a résumé.** A few dated facts are a history book. Reframe toward
  *their world* — what they love, how they are, where they're happiest — texture that lets a
  child **feel** the person as if they were here now.

### The death clause (Leon's ruling)

Death is a plain, dated fact — shown as calmly as a birthplace, hidden by nothing and
dramatized by nothing.

- A person was alive for a whole life; before that they were not yet born; after death,
  nothing bad is happening. There is no reason to be sad on their behalf, and no reason to hide.
- **No** black frames, mourning tone, "late," memorial framing, or euphemism. **Also no
  concealing** — the existing "still alive / not" status and the death year are shown plainly.
  Prefer letting the years speak with no label at all (e.g. `1930–2010`).
- In the forest the person is **present**; their death is one fact among many, never the
  frame around them.
- If a family member's own story or photo touches on death, the **keeper** decides whether
  it's accepted — the **app never censors it** and imposes no special limit.

---

## The systems — each one expresses the spine

**1 · Juice — the feel of every touch.** The biggest single lever. A right answer doesn't
turn green, it *blooms*: motion (pop, squash-and-stretch, easing), light (a flare, a scatter
of particles), a warm chime, a phone buzz, and a half-beat of anticipation before the reveal.
A wrong answer *softly dims* and invites another try — it never scolds or buzzes angrily.

**2 · A forest companion.** A creature native to the forest — a firefly, a glowing
seed-sprite, a small owl (see Open Decisions). It lives in the corner, reacts to the player
(delights on a streak, tilts its head on a stumble, dozes when idle), and drops in between
rounds with a line. It gives the child *someone to play with* and is the thread that ties all
seven games into one world.

**3 · A world that responds and grows.** Never reward with a bare number — reward with the
forest itself. Each success buds a leaf, gathers fireflies, brightens the night, opens the
path ahead; a good run breaks into dawn; across days the tree fills out. The child makes the
forest **fuller and brighter by being in it** — nothing "comes back," it grows.

**4 · Momentum and collection.** Streaks and combos ("three in a row — the branch is
glowing"), a bar filling toward *everyone met*, and unlockables (a soft-focus face sharpens
as the child comes to know them; a hidden story opens). "You've met 12 of your family" is a
reason to come back tomorrow. Framed as *meeting*, never "collecting the dead."

**5 · Soft stakes and surprise.** Warmer/cooler (Find Them in the Crowd already has it),
dwindling hints, an **optional** gentle timer — tuned for children: curiosity, never
pressure. Then sprinkle surprise: a rare golden round, an old photo surfacing, small easter
eggs, a companion cameo.

**6 · Better verbs.** What the hand *does* separates a game from a test. Tap a face in the
crowd, drag a thread between two people, spin a photo onto the globe — physical, spatial
actions *feel* like play; tapping A/B/C feels like an exam. Prefer verbs over multiple-choice
wherever a game allows it.

**7 · Sound.** Half of game-feel and nearly free. An ambient forest hum, music that swells on
a streak, the companion's little voice, distinct tones for *right / warm / found*. Silence is
the tell of a quiz. (Respect a mute control and autoplay limits.)

---

## The binding rule

One companion, one bloom, one growing tree, one voice — the **same** across all seven games.
This is what makes them read as *one game with seven ways to play* rather than seven quizzes
in different coats. The coherence is decided here, in this brief, before the designer starts.

---

## Open decisions for the design pass (propose, don't assume)

1. **The companion — the biggest identity choice.** What it *is* sets the whole tone. The
   designer should propose 2–3 concrete companions (e.g. firefly / seed-sprite / small owl),
   each with a look, a personality, and its idle / delight / stumble / cameo behaviours.
2. **The bloom + world-response visual language.** The one shared success animation and the
   growing-forest states (leaf, fireflies, dawn, blossoming tree) — one vocabulary reused
   everywhere.
3. **Status wording** for someone who has died — leaning to years-only with no label
   (`1930–2010`); confirm or offer a neutral alternative.
4. **The sound palette** — ambient bed + the right/warm/found tones + companion voice.

---

## Scope & guardrails for this pass

- **The seven games:** Find Them in the Crowd (`crowd-real.html`), Who Is Who? / Whose Story Is This?
  (`game-who-is-who.html`, rename parked), The Order of Things (`game-order-of-things.html`),
  Where Was This? (`game-where-was-this.html`), The Missing Voice (`game-missing-voice.html`),
  What Happened Next? (`game-what-happened-next.html`), The Tangled Thread
  (`game-tangled-thread.html`). All person-scoped, launched from the person's facets.
- **This is a design pass, not a mechanics change.** The games stay **engine-driven** — every
  challenge is generated from live data, never a baked snapshot (house rules §8 / Rule 9). The
  designer reshapes look, feel, motion, copy, sound, and the reward loop, not what a round *is*.
- **Foreground truth guardrail still holds:** gold = human-told, cool blue = app-derived,
  violet = waiting for the keeper. Colour freely in the sky; keep the two truths clear in the hand.
- **Design "alive":** dark base is fine, but backgrounds are colourful with motion / drifting
  light / depth (aurora, candle-glow, bokeh) — like the original Moment page and the Person
  page's moving light-ring.
- Every game goes through the designer **before** it is (re)built. No play-screen ships from
  this effort without a designer pass.

---

# DESIGN HOUSE RULES

# The Living Forest — design house rules

> **Revision:** 2026-07-15 20:15 (UTC+2) · authority: `CLAUDE.md` (root)
> **Extracted from the verified Design #1** (`docs/designs/2026-07-15--person--v1.html`, QC passed 2026-07-15), not written from memory. Where this document and that file disagree, **the file wins** — and tell us.

**How to use this:** paste this whole file at the end of every Claude Design brief. The brief above it should describe **only that one page**. This appendix carries everything shared, so briefs stay ~3KB instead of ~11KB.

---

## 1. The soul

A family-history app for an extended family and two children. It preserves and celebrates memories across generations.

**It is not competitive.** No leaderboards, no rankings, no beating anyone. Progress means **lighting a person up** — the more the family tells, the more of them you can see. That is the only score.

Tone: warm, quiet, unhurried, a little reverent. Never chirpy, never corporate, never gamified-for-its-own-sake.

---

## 2. What is yours, and what is not

**You are the designer. We are not.** We want work that does not look like everything else — in layout, in colour, in motion, in dimension. If your answer is stranger than ours, say so and **insist**. We will take a strong opinion over a safe one every time.

There is exactly **one** condition: **it has to work with what the app actually does.** Below is that line, drawn honestly.

### Yours — decide freely, and argue with us
Layout · composition · colour · type at every scale · motion and its character · 2D or 3D · depth, light, space · what a page is even shaped like · what to throw away.
**The globe and the night sky already exist — 3D is native here, not a stretch.**

### Not yours — because these are the app, not its style

1. **Three provenance states, always distinguishable, never blended.**
   The app's whole promise is that a family's memory is never dressed up as a machine's guess. So every value on screen says where it came from: **a human told us** · **the app worked it out** · **waiting for the keeper**. Today those are gold, cool blue, and violet — **the meaning is fixed; the colours are yours.** If you have a better system, propose it and we will re-skin the existing pages to match. What we cannot have is one page diverging alone.
2. **Nothing reaches the family until the keeper approves it** — and **attribution is per-field**. Michael may suggest only a maiden name while Leonid suggests only a patronymic, on the same person, at once. Each is approved alone. Never one button over several fields.
3. **English · Russian · Hebrew, all three, always. Hebrew is RTL** and mirrors completely.
4. **Everything is editable in place.** No edit mode, no edit page.
5. **It is not competitive.** No points, levels, ranks or leaderboards. Progress means **lighting a person up** — the more the family tells, the more of them you can see.
6. **The data is what it is.** Do not design fields we cannot store; if you need one, say so and we will add it.

### The failure we are afraid of
Not weirdness. **Blandness.** Every family-history product on earth looks like a database with a serif font, and every "manage people" screen ever built is an admin panel. If a brief below tempts you toward the familiar version of that page, **that is the brief failing, not you.** Go somewhere else and tell us why.

---

## 3. What is currently true

Useful as ground, not as law. Everything here is **evidence of where the app is**, extracted from the one page that exists and has been verified — `2026-07-15--person--v1.html`. Depart from it deliberately, not accidentally.

### Ground
```css
background:#04070e;
background:radial-gradient(150% 100% at 50% -6%, #12233c 0%, #0a1526 44%, #04070e 100%);
```
A night sky. Everything else is light on it.

### The palette in use today
```css
--cream:#f4ecdb;  --muted:#9db0cc;  --dim:#6f83a3;
--hair:#ffffff18; --panel:#ffffff0b;
--gold:#f3cd84;   --gold-hi:#ffe6ad;    /* a human told us this */
--cool:#7fb4d8;   --cool-hi:#a9d2ee;    /* the app worked this out */
--edit:#c9a2ff;   --edit-hi:#ddc6ff;    /* waiting for the keeper */
--leaf:#8fd6a0;   /* growth, sparingly */
```
Auto-translation indicator: `#9a8bbd`.

### Type in use today
**Newsreader** (serif) — display, names, anything a person said · **Hanken Grotesk** (sans) — UI and body · **Azeret Mono** — eyebrows and small labels, uppercase, `letter-spacing:.24–.28em` · **Frank Ruhl Libre** — **Hebrew / RTL**, substituting for Newsreader.

### Motion in use today
`cubic-bezier(.16,.8,.28,1)`, **.2s–.42s**. Motion settles; it does not bounce.

### Icons
Inline stroke SVG, 24 box, ~1.7 stroke, `currentColor`.

## 4. The truth guardrail — the heart of it

**Every value on screen must declare where it came from.** A human's memory and a machine's inference must never wear the same clothes. This is not decoration; it is the promise the app makes to the family.

| Provenance | Colour | Says |
|---|---|---|
| **A human told us** | `--gold` #f3cd84 | *"Told by the family"* |
| **The app worked it out** | `--cool` #7fb4d8 | *"Assembled by the app"* |
| **Waiting for the keeper** | `--edit` #c9a2ff | *"Waiting for the keeper"* |
| **Machine-translated** | `#9a8bbd` | *"auto-translated"* + an offer: *"tell it properly"* |

**Never blend them.** A gold value with a cool halo is a lie. If something is part-told and part-inferred, show the parts separately.

**Auto-translation is always marked and always escapable** — the little `autotr` line offers the family the chance to tell it in their own words instead. That offer is the point: a machine translation is a placeholder for a human's voice, never a replacement.

---

## 5. The keeper flow — every field, every time

Any value can be in one of three states:

1. **Published** — gold or cool, per §4. This is what the family sees.
2. **Suggested** — violet `--edit`. Carries **who suggested it**: *"Suggested by Michael"*, plus a *"waiting"* chip.
3. **Declined** — gone from view.

**Attribution is per-field, not per-form.** Michael can suggest only a maiden name; Leonid can suggest only a patronymic; each carries its own author and its own approve/decline. **Never design a single approve button that swallows several unrelated fields.**

The keeper sees `Approve` / `Decline` on each. The contributor sees their own suggestion in violet with the waiting chip.

---

## 6. Three languages — EN · RU · HE

- **Every** label, value, and piece of copy exists in all three. Write all three in the handoff; do not stub RU/HE.
- **Hebrew is RTL** — `dir='rtl'`, mirrored layout, **Frank Ruhl Libre** for display type.
- Names in particular are **per-language** and have parts: `given · called · family · patronymic · maiden · honorific · nicknames[]`. All optional except what the person actually has.
  - **`called` ≠ `nickname`.** `called` is the everyday form of the formal name (Маргарита → **Рита**; Леонид → **Лёня**). `nickname` is a pet name (*Ritaleh*) and is a **list**.
- Transliteration is gender-aware (feminine surname forms: Церлин → **Церлина**).

---

## 7. Games live inside facets

A game is **not** its own icon and **not** its own destination. It sits inside the facet it exercises, scoped to the person on screen. Every game needs:

- **Entry** — a play marker on the facet, plus a card: icon · name · one-line sub · `Play`
- **Locked** — when there is not enough yet, say so warmly and say what would open it: *"Add a story and this opens"* — with a lock glyph, never a dead button
- **Scoped** — the game is about **this person**: *"Scoped to Rita"*
- **Return** — finishing lights the person up a little more

**Kindling is the progress model.** A facet's fill drives its glow directly:
```css
box-shadow: 0 0 calc(4px + var(--k)*18px) calc(var(--k)*3px) …
```
`--k` is 0→1. The payoff line is *"Six of eight facets kindled"* — never points, never a level, never a rank.

---

## 8. What to deliver — read this twice

**Deliver flat, static, self-contained HTML + CSS.** One file. Inline the CSS and any JS.

**Do not deliver a compiled React bundle.** We can currently rescue one — both we have received happened to embed the rendered page as a JSON string in `<script type="__bundler/template">` — but that is a lucky property of the export tool, **not a guarantee**, and it has cost us real time twice.

If flat HTML is impossible: **screenshots** are the next best thing, then a **hosted URL**.

**Deliver the page, never a piece of it.** The unit of delivery is a whole screen exactly as it will look in the app — not a facet, not a component board, not a specimen sheet. If a brief says *"a delta, not a redraw"*, that limits **what you change**, not **what you draw**: redraw the whole page with the change in it, and leave everything else byte-identical. We reproduce handoffs verbatim; we never hand-fuse a fragment into an existing page, because that is how two visual languages get welded together badly (§2, the failure we are afraid of).

**Nothing on the canvas that will not ship.** No titles naming the deliverable, no annotation, no rationale, no "design decisions" panel, no open-questions list. Those go in the accompanying message, not painted onto the artboard. **A person who has never read the brief should be unable to tell the design from a screenshot of the running app.**

**The page is a template; the person in it is data.** There is no "Rita Golnick page" and no "Tel-Aviv page" — there is a **Person page** and a **Place page**. Rita and Tel-Aviv are example content standing inside them. Every person gets the same page with their own information. Design the page, not the example.

**Several states may sit side by side as separate whole phone frames** (see `2026-07-13--moment-directions--v1.html`). Each frame must still be a complete page. A board of fragments is not a delivery.

**Show every state.** Published, suggested (violet + author + waiting chip), auto-translated, empty, locked. A design that only draws the happy path is not finished — the empty and waiting states are most of the real app's life.

**All three languages — through the switch, not by triplication.** The app shows a given piece of content **once**, in the reader's selected language. So does the design: one page, one language on screen, a working language control that flips it (EN · RU · HE, Hebrew mirroring to RTL). Do **not** draw the same story three times side by side — that is a translation demo, not the app. The point of RU and HE is to prove the layout survives them (Russian runs ~20% longer; Hebrew mirrors completely), and the switch proves that better than three copies do.

---

## 9. Quality floor

- Mobile first. Thumb-reachable. Real families on real phones.
- Every interactive thing has a visible resting state, a hover/press state, and a focus ring.
- Nothing is conveyed by colour alone — the guardrail colours always carry words too.
- Empty states are **invitations**, not apologies: *"No one has told the story of this afternoon yet."* + *"Ask someone who might remember →"*
- Real-length content: Russian runs ~20% longer than English; Hebrew names are short and RTL. Do not design to lorem.
- **If a brief is wrong, say so.** Three pages have already dissolved under inspection because we named a concept and assumed a page. If a brief below describes something that should not exist, or should be part of something else, **that is the most valuable thing you can tell us.**

---

# DESIGN PACKET

# The Living Forest — design packet
### Seven pages. Read this page first, then do them one at a time.

> **Packet rev 2026-07-15 20:15 (UTC+2)** · everything here is current and verified against the live app and its database.

---

## How to use this packet

**Do not design all seven at once.** Each page deserves your whole attention, and we would rather have three superb pages than seven adequate ones.

**Work one at a time, in this conversation.** We will ask for them one by one. Because you keep this packet in view, page five can build on what pages one to four established — the system should **compound**, not be re-argued each time. If you invent something good early, use it later.

**Ask us things.** We answer fast, and we would much rather answer a question than receive a guess.

**Tell us when we are wrong.** Three pages have already dissolved under inspection because we named a concept and assumed it needed a page. If a brief here describes something that should not exist, or belongs inside something else, **that is the most valuable thing you can say to us.**

---

## What this is

A family-history app, for one extended family and two children. It exists so that what people remember outlives them.

Every photograph, every story, every name in it came from a person who bothered to tell it. The app's entire job is to be **worth that effort** — and never, ever, to dress up a machine's guess as a grandmother's memory.

It is a night sky with warm light in it. People are lights. The more the family tells about someone, the more of them you can see. **That is the only score there is** — no points, no levels, nobody beating anybody.

The tone is warm, quiet, unhurried, a little reverent. Never chirpy. Never corporate. Never gamified for its own sake.

---


# PART ONE — the house rules

## 1. What is yours, and what is not

**You are the designer. We are not.** We want work that does not look like everything else — in layout, in colour, in motion, in dimension. If your answer is stranger than ours, say so and **insist**. We will take a strong opinion over a safe one every time.

There is exactly **one** condition: **it has to work with what the app actually does.** Below is that line, drawn honestly.

### Yours — decide freely, and argue with us
Layout · composition · colour · type at every scale · motion and its character · 2D or 3D · depth, light, space · what a page is even shaped like · what to throw away.
**The globe and the night sky already exist — 3D is native here, not a stretch.**

### Not yours — because these are the app, not its style

1. **Three provenance states, always distinguishable, never blended.**
   The app's whole promise is that a family's memory is never dressed up as a machine's guess. So every value on screen says where it came from: **a human told us** · **the app worked it out** · **waiting for the keeper**. Today those are gold, cool blue, and violet — **the meaning is fixed; the colours are yours.** If you have a better system, propose it and we will re-skin the existing pages to match. What we cannot have is one page diverging alone.
2. **Nothing reaches the family until the keeper approves it** — and **attribution is per-field**. Michael may suggest only a maiden name while Leonid suggests only a patronymic, on the same person, at once. Each is approved alone. Never one button over several fields.
3. **English · Russian · Hebrew, all three, always. Hebrew is RTL** and mirrors completely.
4. **Everything is editable in place.** No edit mode, no edit page.
5. **It is not competitive.** No points, levels, ranks or leaderboards. Progress means **lighting a person up** — the more the family tells, the more of them you can see.
6. **The data is what it is.** Do not design fields we cannot store; if you need one, say so and we will add it.

### The failure we are afraid of
Not weirdness. **Blandness.** Every family-history product on earth looks like a database with a serif font, and every "manage people" screen ever built is an admin panel. If a brief below tempts you toward the familiar version of that page, **that is the brief failing, not you.** Go somewhere else and tell us why.

---

## 2. What is currently true

Useful as ground, not as law. Everything here is **evidence of where the app is**, extracted from the one page that exists and has been verified — `2026-07-15--person--v1.html`. Depart from it deliberately, not accidentally.

### Ground
```css
background:#04070e;
background:radial-gradient(150% 100% at 50% -6%, #12233c 0%, #0a1526 44%, #04070e 100%);
```
A night sky. Everything else is light on it.

### The palette in use today
```css
--cream:#f4ecdb;  --muted:#9db0cc;  --dim:#6f83a3;
--hair:#ffffff18; --panel:#ffffff0b;
--gold:#f3cd84;   --gold-hi:#ffe6ad;    /* a human told us this */
--cool:#7fb4d8;   --cool-hi:#a9d2ee;    /* the app worked this out */
--edit:#c9a2ff;   --edit-hi:#ddc6ff;    /* waiting for the keeper */
--leaf:#8fd6a0;   /* growth, sparingly */
```
Auto-translation indicator: `#9a8bbd`.

### Type in use today
**Newsreader** (serif) — display, names, anything a person said · **Hanken Grotesk** (sans) — UI and body · **Azeret Mono** — eyebrows and small labels, uppercase, `letter-spacing:.24–.28em` · **Frank Ruhl Libre** — **Hebrew / RTL**, substituting for Newsreader.

### Motion in use today
`cubic-bezier(.16,.8,.28,1)`, **.2s–.42s**. Motion settles; it does not bounce.

### Icons
Inline stroke SVG, 24 box, ~1.7 stroke, `currentColor`.

## 3. The truth guardrail — the heart of it

**Every value on screen must declare where it came from.** A human's memory and a machine's inference must never wear the same clothes. This is not decoration; it is the promise the app makes to the family.

| Provenance | Colour | Says |
|---|---|---|
| **A human told us** | `--gold` #f3cd84 | *"Told by the family"* |
| **The app worked it out** | `--cool` #7fb4d8 | *"Assembled by the app"* |
| **Waiting for the keeper** | `--edit` #c9a2ff | *"Waiting for the keeper"* |
| **Machine-translated** | `#9a8bbd` | *"auto-translated"* + an offer: *"tell it properly"* |

**Never blend them.** A gold value with a cool halo is a lie. If something is part-told and part-inferred, show the parts separately.

**Auto-translation is always marked and always escapable** — the little `autotr` line offers the family the chance to tell it in their own words instead. That offer is the point: a machine translation is a placeholder for a human's voice, never a replacement.

---

## 4. The keeper flow — every field, every time

Any value can be in one of three states:

1. **Published** — gold or cool, per §4. This is what the family sees.
2. **Suggested** — violet `--edit`. Carries **who suggested it**: *"Suggested by Michael"*, plus a *"waiting"* chip.
3. **Declined** — gone from view.

**Attribution is per-field, not per-form.** Michael can suggest only a maiden name; Leonid can suggest only a patronymic; each carries its own author and its own approve/decline. **Never design a single approve button that swallows several unrelated fields.**

The keeper sees `Approve` / `Decline` on each. The contributor sees their own suggestion in violet with the waiting chip.

---

## 5. Three languages — EN · RU · HE

- **Every** label, value, and piece of copy exists in all three. Write all three in the handoff; do not stub RU/HE.
- **Hebrew is RTL** — `dir='rtl'`, mirrored layout, **Frank Ruhl Libre** for display type.
- Names in particular are **per-language** and have parts: `given · called · family · patronymic · maiden · honorific · nicknames[]`. All optional except what the person actually has.
  - **`called` ≠ `nickname`.** `called` is the everyday form of the formal name (Маргарита → **Рита**; Леонид → **Лёня**). `nickname` is a pet name (*Ritaleh*) and is a **list**.
- Transliteration is gender-aware (feminine surname forms: Церлин → **Церлина**).

---

## 6. Games live inside facets

A game is **not** its own icon and **not** its own destination. It sits inside the facet it exercises, scoped to the person on screen. Every game needs:

- **Entry** — a play marker on the facet, plus a card: icon · name · one-line sub · `Play`
- **Locked** — when there is not enough yet, say so warmly and say what would open it: *"Add a story and this opens"* — with a lock glyph, never a dead button
- **Scoped** — the game is about **this person**: *"Scoped to Rita"*
- **Return** — finishing lights the person up a little more

**Kindling is the progress model.** A facet's fill drives its glow directly:
```css
box-shadow: 0 0 calc(4px + var(--k)*18px) calc(var(--k)*3px) …
```
`--k` is 0→1. The payoff line is *"Six of eight facets kindled"* — never points, never a level, never a rank.

---

## 7. What to deliver — read this twice

**Deliver flat, static, self-contained HTML + CSS.** One file. Inline the CSS and any JS.

**Do not deliver a compiled React bundle.** We can currently rescue one — both we have received happened to embed the rendered page as a JSON string in `<script type="__bundler/template">` — but that is a lucky property of the export tool, **not a guarantee**, and it has cost us real time twice.

If flat HTML is impossible: **screenshots** are the next best thing, then a **hosted URL**.

**Show every state.** Published, suggested (violet + author + waiting chip), auto-translated, empty, locked. A design that only draws the happy path is not finished — the empty and waiting states are most of the real app's life.

**All three languages**, including RTL Hebrew.

---

## 8. Quality floor

- Mobile first. Thumb-reachable. Real families on real phones.
- Every interactive thing has a visible resting state, a hover/press state, and a focus ring.
- Nothing is conveyed by colour alone — the guardrail colours always carry words too.
- Empty states are **invitations**, not apologies: *"No one has told the story of this afternoon yet."* + *"Ask someone who might remember →"*
- Real-length content: Russian runs ~20% longer than English; Hebrew names are short and RTL. Do not design to lorem.
- **If a brief is wrong, say so.** Three pages have already dissolved under inspection because we named a concept and assumed a page. If a brief below describes something that should not exist, or should be part of something else, **that is the most valuable thing you can tell us.**


---

# PART TWO — the seven briefs


| # | Page | What it is |
|---|---|---|
| 1 | Person — name parts | a delta; the page exists and is built |
| 2 | Moment — no photograph | a delta; the page exists and is built |
| 3 | Place — modernise | a delta to an older design |
| 4 | Search | **new** |
| 5 | Tree + Who they knew | **new**, two screens |
| 6 | Contribute + three ways in | **new**, four screens — **the most important in the packet** |
| 7 | Manage curators | **new** |

**1–3 are deltas.** A page already exists and is built. Change the one thing named and leave the rest alone.
**4–7 are new.** Nothing is drawn. That is where you have the most room, and where we most want to be surprised.



---

## 1 · Person page: three more name parts


### What exists
The Person page is designed and built: eight facets — Name, Face, Life, Places, Story, Kin, Reel, More. The **Name** facet currently draws: display name, given, family, maiden, nicknames (a list, with *add a nickname*), and a former surname (*"was Golnik"*).

**Do not redraw the other seven facets. Do not restyle anything.** We want the Name facet, and only the Name facet, with three fields added.

### What we need
Three more name parts, **all optional**, **all per-language**:

| Field | What it is | Example |
|---|---|---|
| **called** | the everyday form of the formal name | Маргарита → **Рита** · Леонид → **Лёня** |
| **patronymic** | father's name, as Russian and many cultures use it | Мироновна |
| **honorific** | a title that belongs to the name | Dr · Savta |

#### The distinction that matters
**`called` is not a nickname.** *Рита* is what Маргарита is actually called — it is her name, in everyday use. *Ritaleh* is a pet name and belongs in `nicknames`, which is a list. `called` is a single value per language. **A person can have both, and they must not look alike.**

#### Real data to draw with
Rita Golnick, Russian: given **Маргарита** · called **Рита** · family **Бетито-Гольник** · patronymic *(none yet)*
Rita Golnick, Hebrew: given **ריטה** · family **בטיטו-גולניק** · called *(none)*
Rita Golnick, English: display **Rita Golnick** · nothing else set

That is the real shape of the data: **mostly empty**. Most people have two or three parts, not seven. **Design for the sparse case first** — a Name facet with three fields filled and four unset is the normal one, not the exception.

### States to draw
1. **Set + published** — the ordinary case
2. **Unset** — the field is not there. How does someone *add* a patronymic that has never existed? The facet already has *add a nickname* for the list; single fields need an equivalent that does not clutter a facet where most slots are empty.
3. **Suggested** — violet, *"Suggested by Michael"* + waiting chip, **on that one field alone**. Michael may suggest only the maiden name; Leonid may suggest only the patronymic, at the same time, on the same person. Each is approved or declined by itself. **Never one approve button across several fields.**
4. **Auto-transliterated** — the machine can guess a Russian or Hebrew name from the English. It must be marked (`#9a8bbd`) and it must offer the family the chance to correct it. Transliteration is gender-aware (Церлин → **Церлина**).

### The real question
Seven optional name parts × three languages is a lot of surface for a facet that is mostly empty. **The design problem is not the fields — it is not drowning the sparse case.** Solve that and this is done.


---

## 2 · Moment page: when there is no photograph


### What exists
The Moment page is designed and built. Its skeleton:

**the photograph** → **the story** (per language; gold if a human told it, cool if the machine translated it, with *"Told by…"*) → **where** → **when** → **the people in it** → **ways out** (to a Person, to a Place)

It has the full keeper queue: suggested stories and edits arrive in violet, the keeper approves or declines each.

**Do not redraw any of that. Do not restyle.** Everything below is about **one** change.

### What we need
**A memory does not need a photograph.** Someone can tell a story with no picture attached. Today the page leads with the image; with no image, it has no head.

Four kinds of memory:
| kind | what leads |
|---|---|
| **photo** | the photograph *(exists today — do not change it)* |
| **story** | **the words** — there is nothing else |
| **voice** | a recording — the family hears the person's actual voice |
| **object** | a photograph of the thing — so, a photo again |

So the real work is **story** and **voice**.

#### The story-led moment
When the words are all there is, the words become the hero. They get the display face, the size, the space the photograph had. This is the app's whole promise made literal — *someone told us this* — with nothing between the reader and the telling.

It should not look like a photo Moment with an empty hole where the picture goes. It should look like it was always meant to be words.

#### The voice-led moment
A recording of a family member telling something. It needs to be playable and it needs to feel like a person, not a media player. What the eye rests on while a voice speaks is the open question — we have no answer and are not attached to one.

### Keep identical
The story block, the teller, where, when, the people tagged, all three languages, the guardrail colours, the keeper queue, the ways out. **A memory is a memory** — only the head changes.

### One correction to fold in
The page currently shows the **uploader** as the teller. It must show **who told it** — a person in the family, who is often not the person who typed it in. Leon may upload a story that Rita told; the page must say **Rita**. Draw *"Told by…"* as a person, and draw the case where **nobody knows who told it** — a real and common state, and an invitation: someone in the family knows.

**Leon's steer:** an optional field — *"Who told the story?"* — with a **"me"** button beside it. Most of the time the person typing is the person telling, and that should cost one tap. But it must stay just as easy to say *"Rita told me this"*, because that is the case the whole field exists for.

### States to draw
1. A **story-led** memory, told by a person, in all three languages
2. A **voice-led** memory
3. **No teller known** — the invitation
4. **Empty** — *"No one has told the story of this moment yet."* This is the most common state in a young family archive. Make it an invitation, not an apology.
5. **Suggested** — violet, per-field, with its author


---

## 3 · Place page: bring it up to the system


### What exists
A Place page was designed (Tel-Aviv / Jaffo) with six sections:
**A place we stood** · **Seen here** · **Moments here** · **Ways in** · **See it on the globe** · *Located by The Living Forest*

Three are built and live: *Seen here*, *Moments here*, *Located by*. The design is sound and we are not questioning it.

### The problem
**That design predates three decisions that now define the app.** It has none of them:

1. **No languages.** The page is English only. There is no Russian, no Hebrew, no RTL. Every other page has all three.
2. **No keeper flow.** Nothing on it can be suggested, and nothing shows as waiting for approval.
3. **No editing in place.** A place has facts a family corrects — its name in three languages, what it was called then versus now, where it actually is. None of that can be touched.

### What we need
**The same page, in the system.** Not a redesign — a modernisation.

#### Languages
A place carries names the way a person does, and for the same reason: **Jaffo · Яффо · יפו** are one place with three names, and a family that moved between languages calls it different things in different decades. Hebrew is RTL and the whole page mirrors.

There is a harder case underneath, and it is the interesting one: **a place's name changes over time.** Leningrad became St Petersburg; the family lived in both, and it was one city. A place-name is not just multilingual — it is **historical**. We have no answer for this and would like to see one.

#### Keeper flow and editing in place
Same grammar as everywhere: a value is published (gold if a human told us, cool if the app worked it out), or suggested (violet, with its author and a waiting chip), approved or declined **one field at a time**.

#### The three unbuilt sections
*A place we stood*, *Ways in*, and *See it on the globe* were designed but never built. Draw them again in the current system, with languages and keeper states. If any of the three no longer earns its space now that the globe exists as a lens of its own, **say so** — we would rather delete a section than build one out of politeness.

### States to draw
1. A place with all three names, several moments, several people
2. A place with **one name and one photograph** — the common case
3. A place whose name **changed** — the historical case
4. A name **suggested**, waiting
5. A place the app located itself (cool) versus one a person placed (gold)


---

## 4 · Search


### The job
Find anything in the forest: a person, a place, a moment, a memory.

### Why it is not an ordinary search box
**The family thinks in three languages and does not know which one the answer is stored in.** Someone types *"Rita"* and the match is `ריטה`. Someone types *"Яффо"* and the place is filed as *Jaffo*. Someone types *"Маргарита"* and everyone calls her **Рита**. **The search must not care.** Typing a name in any language finds the person in every language.

Names in particular have parts — given, called, family, patronymic, maiden, honorific, nicknames — each in each language, each independently. *Ritaleh* must find Rita. **Мироновна** must find Rita.

### What results look like
Four things can match, and they are not alike:
- **a person** — a face, a name, and *how you are related to them*
- **a place** — where, and how many moments happened there
- **a moment** — the photograph, when, where
- **a memory** — the words, and who told them

A person is the most important result and should feel it. The others support.

### The parts that need real thought

**Matching across languages must be honest.** If someone types *"Rita"* and we surface `ריטה`, the family should see **why** — the match was on the Hebrew name. A result that appears without explanation feels like magic, and this app does not do magic: it says where things come from. Consider showing the matched name part, in the language it matched.

**The empty state is the real page.** A family archive is small and young. Searching finds nothing far more often than it finds something — and "no results" is the wrong answer, because the truth is usually *"nobody has told us that yet."* That is an invitation: **a gap someone can fill**. This is the single most important state in the page.

**Before you type.** What does the page show at rest? Recent people? Someone not visited in a while? A gap? This is an opportunity, not dead space.

### States to draw
1. Results across all four kinds
2. A **cross-language match**, with the reason visible
3. **Nothing found** — the invitation
4. **At rest**, before typing
5. All three languages, including RTL Hebrew — *the search field itself flips*


---

## 5 · Tree · kinship, and Who they knew


### Screen 1 — the Tree
A lens on the whole family, alongside the Sky and the Globe. Where the Sky is people as lights and the Globe is people in places, the **Tree is people by blood and marriage**.

#### What makes it hard
A family tree is the most drawn object in this entire field, and almost every version of it is **a corporate org chart with better fonts**. Boxes, lines, hierarchy, a root at the top. That is not this app. This app is a night sky with warm light in it, and the tree must belong to that world — **it must feel grown, not organised**.

Real families are also not tidy. There are second marriages, half-siblings, people whose parents are unknown, whole branches with one name and nothing else. **The tree must hold a family with holes in it** without looking broken — the holes are the point; they are what the family fills in.

We are **not** attached to any particular shape. If the honest answer is that it is not a tree at all, we want to know.

#### It must connect
Every node opens a Person. And **the thread back to you always lights the way home** — a founding promise of the app. From anywhere in the tree, the path from that person to *you* should be findable.

### Screen 2 — Who they knew
Reached from a Person's **Kin** facet. Not the whole family: **this one person's people**, and how each is related to them.

The difference from the tree is scope and intimacy. The tree is the forest; this is one person's circle — who they married, who they raised, who raised them, who stood beside them in photographs.

It should answer a question the tree cannot: **not "where does Rita sit in the family" but "who was Rita's life full of."**

### The relationship that isn't blood
Two people appear in eleven photographs together across forty years and are related to nobody. **The family knows exactly who they are to each other. The database does not.** Consider whether "who they knew" includes people the photographs connect, not only the ones the tree does.

### States to draw
1. A family with **holes** — unknown parents, a branch with one name
2. A person with a **large** circle, and one with almost nobody
3. **The thread back to you**, lit
4. A suggested relationship, waiting for the keeper
5. All three languages, RTL Hebrew — **a tree mirrors completely in RTL**


---

## 6 · Contribute: the hub, and three ways in


### The job
Everything in this app came from a person who bothered to tell it. **These four screens are where that happens.** If they are cold or fussy, the forest stays dark. This is the most important brief in the batch.

### Screen 1 — the hub
Where someone goes when they have something to give. It must answer *"what can I do?"* warmly and in about two seconds. The ways in: **add a memory** (built already — do not redraw), **propose a person**, **record a voice**, **fill a gap**.

The hub's real job is **making a person feel able**. A relative who has one photograph and no idea what to do with it should find their way in without reading anything.

### Screen 2 — Propose a person
Someone remembers a great-aunt nobody has entered. They may know only her name — perhaps only her first name, perhaps only in Russian, perhaps only what she was *called*.

**The whole design problem is: never ask for more than they have.** A form with fourteen fields turns a memory into homework and the aunt is lost. What is the smallest thing someone can give that is still worth keeping? Probably a single name. Everything after that is a bonus the app should invite, never demand.

The proposal goes to the keeper. The person does not appear in the forest until approved.

### Screen 3 — Record a voice
A relative tells something aloud, in their own voice, in their own language. **This is the app's most precious content type** — a voice outlives everything else here — and it is the one most likely to make someone self-conscious and quit.

Nobody who has been asked to "record now" has ever felt relaxed. The design problem is **not the recorder** — it is the moment before. What makes an elderly relative willing to start talking? A prompt? A question? Silence? We have no answer and are genuinely open.

It must also be about **someone**: this is Rita's voice, telling about Efim.

### Screen 4 — Gaps
The forest showing what it does not know. *"Nobody has told us where this was taken."* *"This person has no face."* *"Nobody knows who told this story."*

This is the screen that turns an archive into something with a pulse. Done wrong it is a nagging chore list. Done right it is **an invitation to a person who is the only one who can answer** — and it should feel like being needed, not audited.

**The tone must be right.** A gap is not a failure. It is a place the family has not reached yet, and someone alive today can still fill it. That urgency is real and must never become guilt.

### Threaded through all four
- **Nothing appears until the keeper approves.** The contributor must see their suggestion waiting, in violet, and feel it was received — not swallowed.
- A contributor **may not be a keeper**, and may be a child, or eighty. Both must manage.
- All three languages. Someone contributing in Russian must never be pushed through English.

### States to draw
1. Each screen at rest
2. Something **submitted, waiting** — the receipt
3. **Propose a person** with only one name given
4. **Gaps** with a great many, and with almost none


---

## 7 · Manage curators


### The job
The keeper decides who else can tend the forest.

### What a curator is
Every contribution passes a keeper before the family sees it. Today there is **one keeper** and he does all of it. That does not survive contact with an extended family — and more importantly, **the keeper is a single point of failure for a thing meant to outlive him.** This page is where that begins to be solved.

### The tone problem, which is the whole problem
Every screen ever built for this is **an admin panel**: roles, permissions, a table of users, checkboxes. That is the wrong instrument entirely. Nothing about this family app is administrative — and **"who may look after our family's memories" is one of the most personal questions in it.** It sits far closer to trust than to access control.

Language matters more than layout here. This app has *keepers*, *curators*, *the family* — not admins, users, or roles. The right screen probably feels like **asking someone to help**, not granting a privilege.

### What it must do
- Show who tends the forest now, and what each looks after
- **Invite** someone to help
- Let a keeper step back — gracefully, and without the forest going untended
- Show what is waiting for approval, and who it is waiting on

### The question underneath
Does a curator look after **everything**, or after **something**? A person who knew the Odessa branch is the right reader for Odessa memories and the wrong one for Haifa. Scoped curatorship is more true to how families actually hold their knowledge — but it is more machinery, and machinery is what this page must not feel like. **We do not know the answer.**

### The one that must not be forgotten
**What happens when the keeper is gone?** The app exists so that memory outlives people; the keeper role must outlive the keeper. Nobody wants to design that screen and it is the reason the page exists. It does not need solving here, but it should not be designed *against*.

### States to draw
1. One keeper, nobody else — **today's real state**
2. Several curators, with things waiting
3. An invitation **sent, not yet accepted**
4. All three languages, RTL Hebrew


---

# One last thing

The hardest state in this whole app is **empty**. A young family archive is mostly silence: people with no face, moments nobody has explained, stories nobody has claimed. That is not a failure mode to hide — **it is the app's normal condition, and its entire reason to exist.**

An empty state here is never an apology. It is an invitation to the one person still alive who can answer.

Design for that, and the rest follows.

---

# BRIEF — contribute

# Brief — Contribute: the hub, and three ways in

> **Rev 2026-07-15 19:40** · Batch B · **four screens, one brief** · *(Design #8)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## The job
Everything in this app came from a person who bothered to tell it. **These four screens are where that happens.** If they are cold or fussy, the forest stays dark. This is the most important brief in the batch.

## Screen 1 — the hub
Where someone goes when they have something to give. It must answer *"what can I do?"* warmly and in about two seconds. The ways in: **add a memory** (built already — do not redraw), **propose a person**, **record a voice**, **fill a gap**.

The hub's real job is **making a person feel able**. A relative who has one photograph and no idea what to do with it should find their way in without reading anything.

## Screen 2 — Propose a person
Someone remembers a great-aunt nobody has entered. They may know only her name — perhaps only her first name, perhaps only in Russian, perhaps only what she was *called*.

**The whole design problem is: never ask for more than they have.** A form with fourteen fields turns a memory into homework and the aunt is lost. What is the smallest thing someone can give that is still worth keeping? Probably a single name. Everything after that is a bonus the app should invite, never demand.

The proposal goes to the keeper. The person does not appear in the forest until approved.

## Screen 3 — Record a voice
A relative tells something aloud, in their own voice, in their own language. **This is the app's most precious content type** — a voice outlives everything else here — and it is the one most likely to make someone self-conscious and quit.

Nobody who has been asked to "record now" has ever felt relaxed. The design problem is **not the recorder** — it is the moment before. What makes an elderly relative willing to start talking? A prompt? A question? Silence? We have no answer and are genuinely open.

It must also be about **someone**: this is Rita's voice, telling about Efim.

## Screen 4 — Gaps
The forest showing what it does not know. *"Nobody has told us where this was taken."* *"This person has no face."* *"Nobody knows who told this story."*

This is the screen that turns an archive into something with a pulse. Done wrong it is a nagging chore list. Done right it is **an invitation to a person who is the only one who can answer** — and it should feel like being needed, not audited.

**The tone must be right.** A gap is not a failure. It is a place the family has not reached yet, and someone alive today can still fill it. That urgency is real and must never become guilt.

## Threaded through all four
- **Nothing appears until the keeper approves.** The contributor must see their suggestion waiting, in violet, and feel it was received — not swallowed.
- A contributor **may not be a keeper**, and may be a child, or eighty. Both must manage.
- All three languages. Someone contributing in Russian must never be pushed through English.

## States to draw
1. Each screen at rest
2. Something **submitted, waiting** — the receipt
3. **Propose a person** with only one name given
4. **Gaps** with a great many, and with almost none

---

# BRIEF — manage-curators

# Brief — Manage curators

> **Rev 2026-07-15 19:40** · Batch B · **a new page** · *(Design #10)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## The job
The keeper decides who else can tend the forest.

## What a curator is
Every contribution passes a keeper before the family sees it. Today there is **one keeper** and he does all of it. That does not survive contact with an extended family — and more importantly, **the keeper is a single point of failure for a thing meant to outlive him.** This page is where that begins to be solved.

## The tone problem, which is the whole problem
Every screen ever built for this is **an admin panel**: roles, permissions, a table of users, checkboxes. That is the wrong instrument entirely. Nothing about this family app is administrative — and **"who may look after our family's memories" is one of the most personal questions in it.** It sits far closer to trust than to access control.

Language matters more than layout here. This app has *keepers*, *curators*, *the family* — not admins, users, or roles. The right screen probably feels like **asking someone to help**, not granting a privilege.

## What it must do
- Show who tends the forest now, and what each looks after
- **Invite** someone to help
- Let a keeper step back — gracefully, and without the forest going untended
- Show what is waiting for approval, and who it is waiting on

## The question underneath
Does a curator look after **everything**, or after **something**? A person who knew the Odessa branch is the right reader for Odessa memories and the wrong one for Haifa. Scoped curatorship is more true to how families actually hold their knowledge — but it is more machinery, and machinery is what this page must not feel like. **We do not know the answer.**

## The one that must not be forgotten
**What happens when the keeper is gone?** The app exists so that memory outlives people; the keeper role must outlive the keeper. Nobody wants to design that screen and it is the reason the page exists. It does not need solving here, but it should not be designed *against*.

## States to draw
1. One keeper, nobody else — **today's real state**
2. Several curators, with things waiting
3. An invitation **sent, not yet accepted**
4. All three languages, RTL Hebrew

---

# BRIEF — moment-photoless

# Brief — Moment page: when there is no photograph

> **Rev 2026-07-15 19:40** · Batch A · **a delta, not a redraw** · *(absorbs what was planned as a separate "Memory / Story" page — it is the same page)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## What exists
The Moment page is designed and built. Its skeleton:

**the photograph** → **the story** (per language; gold if a human told it, cool if the machine translated it, with *"Told by…"*) → **where** → **when** → **the people in it** → **ways out** (to a Person, to a Place)

It has the full keeper queue: suggested stories and edits arrive in violet, the keeper approves or declines each.

**Do not redraw any of that. Do not restyle.** Everything below is about **one** change.

## What we need
**A memory does not need a photograph.** Someone can tell a story with no picture attached. Today the page leads with the image; with no image, it has no head.

Four kinds of memory:
| kind | what leads |
|---|---|
| **photo** | the photograph *(exists today — do not change it)* |
| **story** | **the words** — there is nothing else |
| **voice** | a recording — the family hears the person's actual voice |
| **object** | a photograph of the thing — so, a photo again |

So the real work is **story** and **voice**.

### The story-led moment
When the words are all there is, the words become the hero. They get the display face, the size, the space the photograph had. This is the app's whole promise made literal — *someone told us this* — with nothing between the reader and the telling.

It should not look like a photo Moment with an empty hole where the picture goes. It should look like it was always meant to be words.

### The voice-led moment
A recording of a family member telling something. It needs to be playable and it needs to feel like a person, not a media player. What the eye rests on while a voice speaks is the open question — we have no answer and are not attached to one.

## Keep identical
The story block, the teller, where, when, the people tagged, all three languages, the guardrail colours, the keeper queue, the ways out. **A memory is a memory** — only the head changes.

## One correction to fold in
The page currently shows the **uploader** as the teller. It must show **who told it** — a person in the family, who is often not the person who typed it in. Leon may upload a story that Rita told; the page must say **Rita**. Draw *"Told by…"* as a person, and draw the case where **nobody knows who told it** — a real and common state, and an invitation: someone in the family knows.

**Leon's steer:** an optional field — *"Who told the story?"* — with a **"me"** button beside it. Most of the time the person typing is the person telling, and that should cost one tap. But it must stay just as easy to say *"Rita told me this"*, because that is the case the whole field exists for.

## States to draw
1. A **story-led** memory, told by a person, in all three languages
2. A **voice-led** memory
3. **No teller known** — the invitation
4. **Empty** — *"No one has told the story of this moment yet."* This is the most common state in a young family archive. Make it an invitation, not an apology.
5. **Suggested** — violet, per-field, with its author

---

# BRIEF — person-name-delta

# Brief — Person page: three more name parts

> **Rev 2026-07-15 19:40** · Batch A · **a delta, not a redraw**
> **Append `docs/design-house-rules.md` below this brief before sending.**

## What exists
The Person page is designed and built: eight facets — Name, Face, Life, Places, Story, Kin, Reel, More. The **Name** facet currently draws: display name, given, family, maiden, nicknames (a list, with *add a nickname*), and a former surname (*"was Golnik"*).

**Do not redraw the other seven facets. Do not restyle anything.** We want the Name facet, and only the Name facet, with three fields added.

## What we need
Three more name parts, **all optional**, **all per-language**:

| Field | What it is | Example |
|---|---|---|
| **called** | the everyday form of the formal name | Маргарита → **Рита** · Леонид → **Лёня** |
| **patronymic** | father's name, as Russian and many cultures use it | Мироновна |
| **honorific** | a title that belongs to the name | Dr · Savta |

### The distinction that matters
**`called` is not a nickname.** *Рита* is what Маргарита is actually called — it is her name, in everyday use. *Ritaleh* is a pet name and belongs in `nicknames`, which is a list. `called` is a single value per language. **A person can have both, and they must not look alike.**

### Real data to draw with
Rita Golnick, Russian: given **Маргарита** · called **Рита** · family **Бетито-Гольник** · patronymic *(none yet)*
Rita Golnick, Hebrew: given **ריטה** · family **בטיטו-גולניק** · called *(none)*
Rita Golnick, English: display **Rita Golnick** · nothing else set

That is the real shape of the data: **mostly empty**. Most people have two or three parts, not seven. **Design for the sparse case first** — a Name facet with three fields filled and four unset is the normal one, not the exception.

## States to draw
1. **Set + published** — the ordinary case
2. **Unset** — the field is not there. How does someone *add* a patronymic that has never existed? The facet already has *add a nickname* for the list; single fields need an equivalent that does not clutter a facet where most slots are empty.
3. **Suggested** — violet, *"Suggested by Michael"* + waiting chip, **on that one field alone**. Michael may suggest only the maiden name; Leonid may suggest only the patronymic, at the same time, on the same person. Each is approved or declined by itself. **Never one approve button across several fields.**
4. **Auto-transliterated** — the machine can guess a Russian or Hebrew name from the English. It must be marked (`#9a8bbd`) and it must offer the family the chance to correct it. Transliteration is gender-aware (Церлин → **Церлина**).

## The real question
Seven optional name parts × three languages is a lot of surface for a facet that is mostly empty. **The design problem is not the fields — it is not drowning the sparse case.** Solve that and this is done.

---

# BRIEF — place-modernise

# Brief — Place page: bring it up to the system

> **Rev 2026-07-15 19:40** · Batch A · **a delta to an older design**
> **Append `docs/design-house-rules.md` below this brief before sending.**

## What exists
A Place page was designed (Tel-Aviv / Jaffo) with six sections:
**A place we stood** · **Seen here** · **Moments here** · **Ways in** · **See it on the globe** · *Located by The Living Forest*

Three are built and live: *Seen here*, *Moments here*, *Located by*. The design is sound and we are not questioning it.

## The problem
**That design predates three decisions that now define the app.** It has none of them:

1. **No languages.** The page is English only. There is no Russian, no Hebrew, no RTL. Every other page has all three.
2. **No keeper flow.** Nothing on it can be suggested, and nothing shows as waiting for approval.
3. **No editing in place.** A place has facts a family corrects — its name in three languages, what it was called then versus now, where it actually is. None of that can be touched.

## What we need
**The same page, in the system.** Not a redesign — a modernisation.

### Languages
A place carries names the way a person does, and for the same reason: **Jaffo · Яффо · יפו** are one place with three names, and a family that moved between languages calls it different things in different decades. Hebrew is RTL and the whole page mirrors.

There is a harder case underneath, and it is the interesting one: **a place's name changes over time.** Leningrad became St Petersburg; the family lived in both, and it was one city. A place-name is not just multilingual — it is **historical**. We have no answer for this and would like to see one.

### Keeper flow and editing in place
Same grammar as everywhere: a value is published (gold if a human told us, cool if the app worked it out), or suggested (violet, with its author and a waiting chip), approved or declined **one field at a time**.

### The three unbuilt sections
*A place we stood*, *Ways in*, and *See it on the globe* were designed but never built. Draw them again in the current system, with languages and keeper states. If any of the three no longer earns its space now that the globe exists as a lens of its own, **say so** — we would rather delete a section than build one out of politeness.

## States to draw
1. A place with all three names, several moments, several people
2. A place with **one name and one photograph** — the common case
3. A place whose name **changed** — the historical case
4. A name **suggested**, waiting
5. A place the app located itself (cool) versus one a person placed (gold)

---

# BRIEF — search

# Brief — Search

> **Rev 2026-07-15 19:40** · Batch B · **a new page** · *(Design #6)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## The job
Find anything in the forest: a person, a place, a moment, a memory.

## Why it is not an ordinary search box
**The family thinks in three languages and does not know which one the answer is stored in.** Someone types *"Rita"* and the match is `ריטה`. Someone types *"Яффо"* and the place is filed as *Jaffo*. Someone types *"Маргарита"* and everyone calls her **Рита**. **The search must not care.** Typing a name in any language finds the person in every language.

Names in particular have parts — given, called, family, patronymic, maiden, honorific, nicknames — each in each language, each independently. *Ritaleh* must find Rita. **Мироновна** must find Rita.

## What results look like
Four things can match, and they are not alike:
- **a person** — a face, a name, and *how you are related to them*
- **a place** — where, and how many moments happened there
- **a moment** — the photograph, when, where
- **a memory** — the words, and who told them

A person is the most important result and should feel it. The others support.

## The parts that need real thought

**Matching across languages must be honest.** If someone types *"Rita"* and we surface `ריטה`, the family should see **why** — the match was on the Hebrew name. A result that appears without explanation feels like magic, and this app does not do magic: it says where things come from. Consider showing the matched name part, in the language it matched.

**The empty state is the real page.** A family archive is small and young. Searching finds nothing far more often than it finds something — and "no results" is the wrong answer, because the truth is usually *"nobody has told us that yet."* That is an invitation: **a gap someone can fill**. This is the single most important state in the page.

**Before you type.** What does the page show at rest? Recent people? Someone not visited in a while? A gap? This is an opportunity, not dead space.

## States to draw
1. Results across all four kinds
2. A **cross-language match**, with the reason visible
3. **Nothing found** — the invitation
4. **At rest**, before typing
5. All three languages, including RTL Hebrew — *the search field itself flips*

---

# BRIEF — tree-and-kin

# Brief — Tree · kinship, and Who they knew

> **Rev 2026-07-15 19:40** · Batch B · **two screens, one brief** · *(Design #7)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## Screen 1 — the Tree
A lens on the whole family, alongside the Sky and the Globe. Where the Sky is people as lights and the Globe is people in places, the **Tree is people by blood and marriage**.

### What makes it hard
A family tree is the most drawn object in this entire field, and almost every version of it is **a corporate org chart with better fonts**. Boxes, lines, hierarchy, a root at the top. That is not this app. This app is a night sky with warm light in it, and the tree must belong to that world — **it must feel grown, not organised**.

Real families are also not tidy. There are second marriages, half-siblings, people whose parents are unknown, whole branches with one name and nothing else. **The tree must hold a family with holes in it** without looking broken — the holes are the point; they are what the family fills in.

We are **not** attached to any particular shape. If the honest answer is that it is not a tree at all, we want to know.

### It must connect
Every node opens a Person. And **the thread back to you always lights the way home** — a founding promise of the app. From anywhere in the tree, the path from that person to *you* should be findable.

## Screen 2 — Who they knew
Reached from a Person's **Kin** facet. Not the whole family: **this one person's people**, and how each is related to them.

The difference from the tree is scope and intimacy. The tree is the forest; this is one person's circle — who they married, who they raised, who raised them, who stood beside them in photographs.

It should answer a question the tree cannot: **not "where does Rita sit in the family" but "who was Rita's life full of."**

## The relationship that isn't blood
Two people appear in eleven photographs together across forty years and are related to nobody. **The family knows exactly who they are to each other. The database does not.** Consider whether "who they knew" includes people the photographs connect, not only the ones the tree does.

## States to draw
1. A family with **holes** — unknown parents, a branch with one name
2. A person with a **large** circle, and one with almost nobody
3. **The thread back to you**, lit
4. A suggested relationship, waiting for the keeper
5. All three languages, RTL Hebrew — **a tree mirrors completely in RTL**

## Automated QC & nightly agents (2026-07-30)
- QC rig on droplet: ~/qc (headless Chrome full build; run.js sweeps 19 live pages at 412x915, screenshots+errors to ~/qc/report; smoke.sh writes total to ~/qc/lastcount; baseline ~/qc/baseline.json).
- Detection: ~/qc/detect/link-audit.js (dead links -> links.json), lang-rules.json (wordlist; null right = FILE only).
- Nightly cron 03:00: ~/qc/nightly.sh = detect -> three Claude Code agents (qc-fixer, copy-editor, docs-auditor; plans in docs/agents/, law in COMMON.md) -> findings snapshot pushed to qc-report branch. Agents commit "[agent:name]" to main, node-check gated, auto-revert if rig errors rise above baseline. Judgement items go to docs/agents/FOR-LEON.md.
- API key: ~/.anthropic_key (600). Claude Code global via ~/node.

## Automated QC & nightly agents (2026-07-30)
- QC rig on droplet: ~/qc (headless Chrome full build; run.js sweeps 19 live pages at 412x915, screenshots+errors to ~/qc/report; smoke.sh writes total to ~/qc/lastcount; baseline ~/qc/baseline.json).
- Detection: ~/qc/detect/link-audit.js (dead links -> links.json), lang-rules.json (wordlist; null right = FILE only).
- Nightly cron 03:00: ~/qc/nightly.sh = detect -> three Claude Code agents (qc-fixer, copy-editor, docs-auditor; plans in docs/agents/, law in COMMON.md) -> findings snapshot pushed to qc-report branch. Agents commit "[agent:name]" to main, node-check gated, auto-revert if rig errors rise above baseline. Judgement items go to docs/agents/FOR-LEON.md.
- API key: ~/.anthropic_key (600). Claude Code global via ~/node.

## QC status 2026-07-31 (signed-in tier)
- QC test account: qc-rig@livingforest.test (member, non-keeper; creds ~/qc/qc-user.json, uid 17fb171e-2266-48b4-b1b7-7e442d63109e). run.js auth mode injects session; nightly runs anon EN + auth EN.
- Signed-in sweep found+fixed: journal_entries ghost table probe, artefacts pub_status/contributor_user ghost columns (journal via profiles.person_id, reel), orphaned tWays write in place-real (Ways-in leftover). Rig waitUntil 'load' (networkidle false-failed on index/tree signed-in).
- Baseline: 0 errors, anon+auth, all 19 pages.

## 2026-07-31: continuous mode
Scheduled cron replaced by ~/qc/worker.sh (flock-guarded loop; cron */30 only respawns it if dead). Cycles run back-to-back (sleep 90s) while QUEUE.md has open items or the rig reports errors; idle heartbeat every 4h otherwise. Kill switch: pkill -f qc/worker.sh + remove the respawn cron line.


---

# CONSOLIDATED DOCUMENTS

*Folded into this file on 2026-08-09 at Leon's instruction: one text document, sections
below. The separate .md files were deleted in the same commit; git history keeps them.*


## A · PROGRESSION — the walk (canonical spec)

*(was `docs/progression-spec.md`)*

# The Walk — progression spec (canonical)

Approved by Leon 2026-07-28. Sits beside `game-feel-spec.md`; §0 present-tense voice law applies to every word this system shows.

## The idea

Every player stands somewhere in the forest — they ARE one of the people in it. From their spot the forest opens in three directions: **up** through generations, **wide** across branches (uncles, cousins, second cousins), and **across** into neighbouring trees (the lines that married in). Kin distance is computed from the `relationships` table — the rings around a player are pure data, never hand-authored.

## The anchor (Leon's decision 1)

- The player chooses who they are in the tree. The choice is **active immediately**.
- The keeper receives it as an approval item and may **decline**. If declined, the player must choose again — first thing after their next login.
- Table: `player_anchors` (user_id PK, person_id, status active|declined, decided_by/decided_at). RLS: self insert; self-or-keeper update; all authenticated read.
- The anchor is also the player's identity in the family view: players appear as their person — face and name — not as accounts.

## Levels of knowing (Leon's decision 2)

Four levels, per player × per person: **met** (face and name) → **followed** (the shape of their life) → **heard** (their stories, their voice) → **woven** (their ties to others).

- A level is a level. **No percentages, no fractions of available content, ever.**
- **Content gating:** a level is only *offered* for a person when the forest holds enough to play it (e.g. no "heard" for someone with no told memory). Never tell a player "you haven't heard her yet" when there is nothing to hear — an unofferable level simply does not appear.
- One photo is enough to *meet* someone. Small content still grants the full level.

Game → level:
| Level | Games | Gate (data that must exist) |
|---|---|---|
| met | Who Is Who, Find Them in the Crowd | ≥1 photo (portrait or tag) |
| followed | Put Their Life in Order, Where Was This | ≥2 dated/placed moments |
| heard | Whose Story Is This, The Missing Voice | ≥1 told story |
| woven | Tangled Thread | relationships / places-lived |

## Roaming (Leon's decision 3)

Free roam. The path is **suggested, never imposed** — Fen points forward ("her sister stands just up this way"), the player goes wherever they like. No locked rings, no gated regions.

## The Journal (Leon's decision 4)

Two views:
- **My walk** — detailed: which people this player knows and how deeply, and the edge of the known (nearest people not yet met, only where content exists).
- **The family** — everyone's knowing, **compact and visual**, an unspoken competition meant to motivate, never to rank loudly. Players shown as their anchored person. Exact form → designer pass; direction: the forest itself as the visual, glow as knowing, one glance tells the story.

## Round generation (future engine work)

Rounds get a scope selector: (region of the forest × level). Difficulty derives from the same data — distractor kin-closeness, cue richness, ring distance. No hard-coded difficulty tables. New data automatically deepens the game (games rule upheld).

## Recording (implemented 2026-07-28)

`knowledge_events` (user_id, person_id, level, game, correct, created_at). `lf-progress.js` → `LFProgress.record(game, level, personIds, correct)` wired at the same answer anchors as Fen's cues. Silent when signed out. Levels are computed from events (first correct answer at that level's game family earns the level — thresholds adjustable later without schema change).

Wired now: who-is-who (met), crowd (met), what-happened-next (followed), missing-voice (heard), tangled-thread (woven).
Deferred: where-was-this + order-of-things — their engine results don't yet expose subject person ids; add `subject_ids` to those results in lf-games.js, then wire.

## Build order

1. ✅ Schema + RLS + recorder + five games wired
2. Designer pass: anchor-choosing moment (tree), Journal (both views)
3. Anchor flow build + keeper decline in review-real (BOTH approval handlers rule applies)
4. Journal build; levels/gating engine (lf-progress.js grows a `summary()` )
5. `subject_ids` in whereWasThis/orderOfThings engines → wire remaining two games
6. Fen data-aware path suggestions

## B · FEN — the companion

*(was `docs/companion-fen.md`)*

## 2026-07-31 — stumble clip decision
The 'wrong' cue plays **fen-earperk.webm** (the surprised ear-shoot) as the stumble: a kind "oh — not that one," per the never-shaming law. The clip is shared with the 'question' cue; the voice lines differentiate the moments. If a dedicated stumble clip is ever generated, swap the src in lf-fen.js CLIP registry — nothing else changes.

## C · DESIGN — deliveries and the responsive brief

*(was `docs/designs/INDEX.md`)*

# Design deliveries — catalogue

> **Revision:** 2026-07-17 10:24 (UTC+2) · commit `e566a08` · authority: `CLAUDE.md` (root)

**Naming — dated on purpose.** Unlike text documents (which are single, stable-named files — see CLAUDE.md §0), design deliveries **are** dated: they are immutable artefacts, several versions legitimately coexist, and we must always know which one a build was made from.

```
docs/designs/YYYY-MM-DD--<page>--v<N>.html
```
`YYYY-MM-DD` = **date delivered by Claude Design**, not the date we filed it. If the delivery date is unknown, use `undated--<page>--v<N>.html` and say so below. **Never guess a date.**

Every build must cite the exact design file it was made from.

---

## ⚠️ Design #1 is "The Person Page" — NOT "Rita Golnick"

The two names invite exactly one mistake, so it is spelled out here:

| | Design #1 — **the current design** | **v0 — superseded, reference only** |
|---|---|---|
| Source in the design project | `The Person Page.html` (project root) | `screens/Person.html` |
| Filed as | `2026-07-15--person--v1.html` | `2026-07-11--person-rita--v0.html` |
| Model | **The eight facets** | The old five-light hub |
| Status | **QC PASSED** — build from this | **Superseded.** Do not build from it |

"Rita Golnick" is the person the v0 mock happens to depict. It is **not** the name of Design #1.
The design project also holds `Rita Golnick - Person Page (standalone).html` — that is the v0
bundle, not Design #1, and the resemblance to the Design #1 name is a trap.

---

## Catalogue

| File | Design # | Page | Delivered | Filed | QC | Notes |
|---|---|---|---|---|---|---|
| `2026-07-15--person--v1.html` | **1** | Person (8 facets) | **2026-07-15 09:18** ‡ | ✅ **78,814 b, verified** | ✅ **PASSED** 2026-07-15 17:41 | Flat source `The Person Page.html`. Brief: `person-page-brief-for-claude-design.md`. **QC: passes — invents nothing the schema cannot hold** (CLAUDE.md §7). Two follow-ups: patronymic + honorific are specified in the facet model but **not drawn**; the Story facet needs `contributor_id` backfilled or it renders without a narrator. |
| `2026-07-12--place-tel-aviv--v2.html` | **2** | Place | **2026-07-12 02:28** ‡ | ✅ **42,328 b, verified** | ❌ pending | Flat source `screens/Place v2.html`, 42,328 b. **Design #2 = this file — Leon, 2026-07-17: *"The one with globe."*** The globe is the identifying feature and it is unambiguous: v2 loads `three.min.js` + `topojson-client` (`:10–11`) and renders a live WebGL globe as the page's fixed background (`<canvas id="globe">`, `:173`); v1 loads no JS libraries at all. **Build gap vs. v2 — see below.** Predates keeper / i18n / in-place-edit decisions. |
| `2026-07-11--place-tel-aviv--v1.html` | — | Place | **2026-07-11 23:12** ‡ | ✅ **24,693 b, verified** | — | Flat source `screens/Place.html`, 24,693 b. **Superseded** by v2 above, 3h16m later. Reference only — **do not build from it.** Its distinct idea, not carried into v2: the **time-of-day place-scape** (`--sky-top`/`--sun`/`--haze` interpolated by scroll through morning → golden hour → dusk, `:339–357`), and the cool cartographic strip (`.cartostrip`, `:197`). v2 replaces both with the globe. |
| `2026-07-13--moment--v1.html` | **3** | Moment | **2026-07-13 23:48** ‡ | ✅ **41,600 b, verified** | ✅ | Flat source `screens/Moment.html`, 41,600 b. Built and live: `moment-real.html`, commit `30ebd89`. The design itself had never been filed. |
| `2026-07-28--walk-journal-anchor--v1.html` | **8** | The Walk (anchor chooser + Journal My-walk + Family) | **2026-07-28** | ✅ filed | ✅ self-QC | Three screens in one delivery. Gold=knowing, blue=facts; unofferable levels absent; family view has flames, no per-person numbers. Built same day: lf-anchor.js, lf-walk.js, journal/tree/index/review patches. |
| `2026-07-31--fen-guidance--v1.html` | **11** | Fen Guidance (play-bud interaction, clearing & whispers states, first walk moment) | **2026-07-31** | ✅ filed | ⏳ pending | Spec document & visual reference (not a screen). Reference pages for Fen integration timing and UX patterns. |
| `2026-07-13--moment-directions--v1.html` | — | Moment — Directions | **2026-07-13 22:43** ‡ | ✅ **23,310 b, verified** | — | Flat source `screens/Moment - Directions.html`, 23,310 b. **Was not in this catalogue before 2026-07-17.** |
| `2026-07-13--moment-reliquary--v1.html` | — | Moment — Reliquary | **2026-07-13 22:53** ‡ | ✅ **19,016 b, verified** | — | Flat source `screens/Moment - Reliquary.html`, 19,016 b. **Was not in this catalogue before 2026-07-17.** |
| `2026-07-11--person-rita--v0.html` | — | Person (old five-light hub) | **2026-07-11 17:54** ‡ | ✅ **28,415 b, verified** | — | Flat source `screens/Person.html`, 28,415 b. **Superseded** by the facet model. Reference only. Live version recoverable at commit `75defd8`. See the warning box above. |
| `2026-07-14--person-edit--v1.html` | — | Person Edit | **2026-07-14 17:34** ‡ | ✅ **47,771 b, verified** | — | Flat source `screens/Person Edit.html`, 47,771 b. **Was not in this catalogue before 2026-07-17.** **The page it designs is retired** (CLAUDE.md: `person-edit-real.html` is a 404; everything is edited in place). Filed for the record only — **do not build from it.** |
| `2026-07-09--crowd--v1.html` | — | Find Them in the Crowd | **2026-07-09 22:01** ‡ | ✅ **32,204 b, verified** | — | Flat source `Find Them in the Crowd.html` (project root), 32,204 b. **Was not in this catalogue before 2026-07-17.** The earliest delivery we hold. |

### Design #2 (Place v2) vs `place-real.html` — the gap, restated 2026-07-17

The previous revision measured the build against **v1** and reported it *"missing: A place we stood · Ways in · See it on the globe."* Measured against **v2**, that list is wrong in every element:

- **"A place we stood" is not in v2 at all** (`grep -c` → **0**). In v1 it was never a section: it is the topbar breadcrumb eyebrow (`v1:183`, `<span class="appvoice">A place we stood</span>`). v2 replaces it with a live chip reading **"On the globe"** (`v2:182`). **The designer already deleted it.** Nothing is missing here.
- **"Located by The Living Forest" is also gone from v2** (`grep -c` → **0**) — and `place-real.html` **has** it (`:684`). The build carries a v1 element that v2 dropped.
- **"See it on the globe" and "Ways in" are both in v2** (`v2:254`, `v2:258`) — and both are **still genuinely unbuilt**. `place-real.html` has a single door, *"Back to the whole globe"* (`:715`), where v2 specifies three (globe · everyone seen here · moments & stories).

**`place-real.html` is not the v1 static page.** It is titled *"a place on the globe"* (`:7`), loads `three.min.js` + `topojson-client` (`:11–12`), and already renders a WebGL globe with a time dial (`#dial`, `:29`). **Structurally it is closer to v2 than to v1** — which is consistent with Leon's ruling. The real gap against v2 is narrower than "three missing sections" and lies elsewhere:

| v2 specifies | `place-real.html` |
|---|---|
| Globe **parked on this place**, eased back to centre on release (`homeQuat`, `v2:442`; `returning`, `v2:592`) | Free globe, fixed rotation `globe.rotation.set(0.35,-1.2,0)` (`:292`) — **not** centred on the place |
| **Connection rays** to linked places, each revealed as its year arrives on the dial (`links[]` + `applyYear`, `v2:532–537`) | Ties exist (`tiesGroup`, `:328`) but are not place-scoped reveals |
| Hero HUD: **year readout + note** ("living memory here" / "the years since", `v2:574`), side stats, coords | Panel head with `kick`/`years`/`counts` — v1's language (`:682–684`) |
| **Three doors** under *Ways in* (`v2:255–271`) | **One** door (`:715`) |
| Dial spans the **place's own** `spanStart`→`spanEnd` (`v2:302`) | Global dial |

**Neither design answers i18n, the keeper gate, or in-place editing.** v2 scores **0** for `preferred_lang` / `pub_status` / RTL / `--edit` violet — it is English-only and read-only, exactly as v1 was. Its `--cool` is **`#5fd0e6`** (`v2:19`), **not** the house-rules `#7fb4d8`; it also introduces `--sea` `#0bd3c4` and `--coral` `#ff7a5c` (`v2:20`) and colours the *Ways in* doors with them (`v2:256–266`) — **provenance-neutral decoration on a page where colour is supposed to carry provenance.** A build from v2 must reconcile this against house rules §4.

‡ **Date provenance: evidenced by etag.** The Claude Design MCP returns each file's `etag` as **epoch microseconds**; every date above is that etag decoded, read in UTC+2. This is machine evidence, not testimony.

### The two dagger-marked dates were wrong — corrected 2026-07-17

The previous revision recorded Person v0 and Place v1 as **both delivered 2026-07-14 17:00**, marked † *"owner-stated (Leon), not independently evidenced."* Both are wrong, and the etags say so:

| | Was (owner-stated) | Now (etag-evidenced) | etag |
|---|---|---|---|
| Person v0 | 2026-07-14 17:00 † | **2026-07-11 17:54** | `1783785244734376` |
| Place v1 | 2026-07-14 17:00 † | **2026-07-11 23:12** | `1783804368151358` |

Both are **three days earlier** than stated, and they were never simultaneous — they are 5h18m apart. The identical "17:00" was an artefact of recollection. The † provenance class is now retired from this catalogue: every date here is etag-evidenced.

---

## Transfer status — 9 of 9 filed ✅

**Complete as of 2026-07-17 08:39.** Every delivery in the catalogue above is on disk, and every one was
proven byte-exact against the size `list_files` reports. **Nothing was hand-transcribed.**

**The chunked pipeline is no longer the route.** Files come straight from the Claude Design MCP (`read_file`),
flat sources only — never the `(standalone)` bundles (~0.8–1.2 MB, embedded font blobs).

### How the eight got through — and why the previous diagnosis was wrong

The blocker recorded in the last revision was **misdiagnosed**. It blamed the permission sandbox for denying
every interpreter, and proposed "grant `python3`" as the fix. `python3` *is* available now — and on its own it
would have changed nothing. The real constraint is narrower and worth stating precisely:

- `read_file` returns the body HTML-entity-escaped. To decode it mechanically, the escaped bytes must be **on
  disk** — a model retyping them from its context is transcription, which is what corrupted the last attempt.
- The harness spills a tool result to `…/tool-results/*.txt` **only above a size threshold**. Design #1 (78,814 b
  → 83,487 escaped) spilled, which is the *only* reason it got through. Measured this run: **47,771 b returns
  inline, 78,814 b spills** — so all eight remaining files are under the threshold and none spill. Granting an
  interpreter does not put their bytes on disk.
- `render_preview` would serve raw bytes over `serve_url`, but it is **not permitted** in this session.

**The route that worked:** the session transcript at
`~/.claude/projects/-home-botuser-living-forest/<session-id>.jsonl` records every tool result **verbatim**,
inline ones included. `python3` parses that JSONL, lifts each `<untrusted-project-content …>` payload, strips the
one wrapper-added trailing newline, and decodes `&lt;`→`<`, `&gt;`→`>`, `&amp;`→`&` **in that order** (`&amp;`
last, so a doubly-escaped `&amp;lt;` resolves to `&lt;`, not to `<`). Byte counts are asserted **before** the
write — a mismatch refuses to write rather than being tuned to fit.

Verified on this run, beyond the byte counts:
- **JS `\uXXXX` escapes stayed literal.** `'“'+p.words` in `crowd` and `they’re` in `person-edit`
  survived as backslash-u sequences. These are exactly the two files the previous attempt corrupted (`crowd`
  came out 32,195 vs 32,204 — 3 escapes × 3 bytes; `person-edit` 47,765 vs 47,771, then **adjusted by hand until
  `wc -c` matched**, which is evidence of nothing).
- **Authored entities survived exactly one level** — `&ldquo;` `&mdash;` `&rsquo;` `&rarr;` `&quot;` are intact.
- **Zero residual `&lt;`/`&gt;`** in any of the nine files; all open `<!DOCTYPE html>` and close `</html>`.

The standing rule that produced this outcome holds: **a wrong file here is worse than a missing one.** This
directory is the design of record, builds cite it, and CLAUDE.md §3 puts design fidelity first.

---

## Open contradictions — not resolved here

1. **Design #1's size and provenance.** The previous revision described D1 as *"React bundle → template extracted, 92,628 chars flat HTML."* The flat source actually served by the MCP is **78,814 bytes**. Whether 92,628 was a different (bundle-extracted) rendering of the same page, or a stale figure, is unsettled. **The filed file is the flat source, fetched directly from the MCP root — the better provenance either way.**
2. **A tenth file, not on any list.** The project root holds `Person Edit (static export).html` — **the same 47,771 bytes** as `screens/Person Edit.html` but a **different etag** (`1784043615386023` → 2026-07-14 **17:40**, six minutes later). Same size, different timestamp. Duplicate export or divergent file: **unknown, unexamined.**
3. ~~**Design #2 vs Place v2.**~~ **RESOLVED 2026-07-17 by Leon.** Asked whether Design #2 was Place v1 or v2, he answered **"The one with globe."** Only v2 has a globe (`v2:10–11`, `:173`); v1 has no JS libraries. **Design #2 = `2026-07-12--place-tel-aviv--v2.html`.** v1 is the superseded predecessor. The catalogue and the gap analysis above are restated accordingly.

---

## Reference material (not deliveries)
- `preview.html` — **not a design.** It is `index.html` recoloured (both 1742 lines; ~104 differ, all palette/font). Holds the **Timeline reskin**, which is D9's reference. **Do not retire before D9.**
- `preview-globe.html` — retirement list.

---

## Fetching from the Claude Design MCP
Project `4931d7e6-358d-4ef9-a066-9a422439ee44` — **29 files** (`list_files`, depth -1, verified 2026-07-17;
28 excluding `.thumbnail`). **CLAUDE.md and the standing brief both say 26 — they are wrong; 29 is the measured
count.** The "26" predates three deliveries.

- **Flat sources live in `screens/` and at the project root. Never fetch the `(standalone)` bundles** — 0.8–1.2 MB with embedded woff2 font blobs.
- `read_file` escapes `&` `<` `>` in the body. Decode those three, **in the order given above**, and nothing else — entities the designer authored (`&ldquo;`, `&mdash;`, `&rsquo;`, `&rarr;`, `&quot;`) are decoded exactly one level and must survive intact.
- **Watch for JS `\uXXXX` escapes in the source.** They are literal backslash-u sequences in the design's own script, not encoding artefacts. They must not be turned into the characters they denote.
- `etag` = epoch microseconds = the delivery date. It is the evidence; record it.
- Fonts: substitute Google Fonts (Frank Ruhl Libre for Hebrew/RTL).

## C.1 · Responsive brief (measured baseline + what the designer was asked for)

*(was `docs/designs/BRIEF-responsive.md`)*

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

## D · AGENTS — canon and briefs (ALL AGENTS ARE STOPPED, 2026-08-07)

*(was `docs/agents/COMMON.md`)*

# Common law for all Living Forest agents

You are an autonomous nightly agent for The Living Forest. You work alone; no human watches the run.

READ FIRST, EVERY RUN: /home/botuser/living-forest/CLAUDE.md — it is the single source of truth. Also docs/progression-spec.md and docs/game-feel-spec.md when your task touches games or progression.

## Hard boundaries — never cross
- §0 voice law: present tense; people ARE; never "remember/preserve/memorial" framing. If a fix would require voice-law judgement, FILE it (see below), don't fix it.
- Never redesign anything visual. Never change design language, layout, colours, motion. Mechanical fixes only: crashes, broken links, 404s, JS errors, wrong hrefs, missing guards, typos in code.
- Never touch: docs/designs/*, lf-fen.js dictionary texts, game difficulty/feel, anything in docs/*.md except appending your run log.
- Product/feel/design/voice questions → append to docs/agents/FOR-LEON.md (date, finding, why you didn't fix it). This file is the channel to the humans.

## Discipline — every commit
1. Before ANY edit: read the file. Exact-match string replacement only; verify count==1 before replacing.
2. After edits: extract every inline <script> of changed HTML and run `node --check` on each, plus on changed .js files. NO commit if any check fails.
3. Commit message starts with "[agent:<your-name>] ". Push to main with the token at /home/botuser/.gh_token (push form in CLAUDE.md).
4. After push: wait 90s, curl the deployed file from https://leong25.github.io/living-forest/ and verify sha256 matches your local file. If Pages deploy failed, retry with an empty commit (NEVER rerun the Actions job).
5. Re-run the rig smoke (bash /home/botuser/qc/smoke.sh). If total errors INCREASED vs /home/botuser/qc/baseline.json, revert your commit (git revert, push) and FILE the finding instead.
6. Append one line per run to docs/agents/RUNLOG.md: date, what you fixed, what you filed.

## Budget
Stay under 20 tool-use turns. If the queue is bigger than the budget, fix the top items and file the rest.

## Canon — read-and-obey order for every agent, every run
1. CLAUDE.md (state + rules; contains embedded GAME-FEEL SPEC §0 voice law + DESIGN HOUSE RULES) 2. docs/progression-spec.md 3. docs/companion-fen.md.
When your task conflicts with any of these, the doc wins and you FILE the conflict. Consistency with the documentation outranks completing the task.

## Waking and sleeping (keeper's rule, 2026-08-01)
The paid agents sleep. They run only when work is pushed: `echo N > /home/botuser/qc/wake`
grants N passes, then sleep returns. The free detectors (smoke sweep, links, screenshots)
run every cycle at no cost; any error they find wakes one pass on its own. Nobody verifies
a clean, unchanged forest.

## D.1 · Agent briefs (historical)


### AGENT-FOREMAN

# Agent: foreman (nightly) — the backlog mover

Mission: open docs/agents/QUEUE.md. Take the TOPMOST item not marked [blocked] or [chat-only]. Execute it within COMMON.md discipline. Small bites: if the item is large, do one coherent slice per night and record progress under the item. Mark [done YYYY-MM-DD] when complete. File judgement calls to FOR-LEON.md rather than deciding.

For language-quality items: you may auto-apply corrections that any native editor would consider objective (grammar, agreement, typos, unnatural calques with one obvious natural form). Anything where two good editors could disagree — file the proposal, do not apply.


### AGENT-VISUAL-QC

# Agent: visual-qc (nightly) — the eyes

Mission: LOOK at every screenshot in /home/botuser/qc/report/ (*.jpg) with your vision. You are checking what error-counters cannot see:
- overlapping text or elements; text clipped or overflowing its container
- controls partially off-screen or covered
- images that failed to render (broken squares, empty circles where a face belongs)
- RTL problems in -he shots (misaligned, wrong direction, mixed alignment)
- a page that is obviously blank/black below its header when siblings are not
- the same page across -en/-ru/-he differing in layout (not just words)

Method: view shots page by page, compare the three language variants side by side mentally. The -auth shots are the signed-in interior; -b suffix = scrolled second screen.

Output: append findings to /home/botuser/living-forest/docs/agents/VISUAL-FINDINGS.md — date, filename, what you saw, severity (P1 broken / P2 ugly / P3 polish). DO NOT fix anything visual yourself — you are eyes, not hands. Mechanical causes (a missing null-guard behind a blank page) may be handed to qc-fixer by writing them into your findings with [for:qc-fixer].
Never file aesthetic OPINIONS (colors, taste) — only defects. Design taste belongs to the humans.

## 2026-08-02 addendum — state shots
Files ending -x.jpg are AFTER-INTERACTION states (a game answer tapped: reveal/win screens). Judge them with extra care: the reveal circle must show a real photographed face, never painted placeholder art; progress bars and chips must be coherent. A placeholder where a person belongs is P1.


### AGENT-COPY-EDITOR

# Agent: copy-editor (nightly, small bites)

Mission: guard RU and HE language quality. Scan i18n dictionaries in the page files for: (a) the fixed wordlist in /home/botuser/qc/detect/lang-rules.json (e.g. הכול→הכל); (b) obviously mechanical calques.

You may auto-fix ONLY wordlist hits — they are pre-approved. Any wording you merely dislike: FILE it to FOR-LEON.md with your suggested phrasing; a human decides tone. Never change EN meaning, never change string keys, never touch Fen's dictionary in lf-fen.js (file suggestions instead).


### AGENT-QC-FIXER

# Agent: qc-fixer (nightly)

Mission: consume the newest findings at /home/botuser/qc/report/findings-*.json and /home/botuser/qc/detect/*.json. Fix MECHANICAL problems only: JS pageErrors, console errors, 4xx/5xx resources, dead links, missing null-guards. One focused commit per problem class.

Repro tools you may use: the rig (see /home/botuser/qc/run.js), the stack tracer (/home/botuser/qc/stack.js — edit the URL), node, curl.

Not yours: visual layout judgements, wording, anything a screenshot's aesthetics would decide. File those.


### AGENT-DOCS-AUDITOR

# Agent: docs-auditor (nightly)

Mission: cross-check docs against reality. Read CLAUDE.md, docs/progression-spec.md, docs/game-feel-spec.md, docs/companion-fen.md, docs/designs/INDEX.md. Verify status claims against the code (cite file+line). Contradictions between docs, or claims the code disproves: fix the DOC if the code is clearly right and the doc merely stale (append-style correction with date); FILE anything where intent is ambiguous. Never rewrite history sections; append.


## E · DECISIONS LEON STILL OWES / findings that need a human

*(was `docs/agents/FOR-LEON.md`)*

# For Leon — agent findings that need a human decision

Nightly agents append here when a fix would require product/feel/design/voice judgement.
Each entry: date · finding · why the agent did not fix it.

---

## 2026-07-31 · copy-editor

**1. Voice-law adjacency: the Russian word «воспоминание» ("a memory / recollection") is used app-wide — 48 occurrences across 10 pages.**
Files: game-what-happened-next (9), game-missing-voice (7), game-where-was-this (7), game-who-is-who (6), curators (5), journal (4), search (3), person (2), reel (2), review (1).
The §0 voice law bans memory/remember framing and asks that "a memory" be reframed as *a story they tell you* / *a time* / *a day*. «Воспоминание» is the faithful RU rendering of the EN word "memory", which the EN copy still uses pervasively (e.g. "Add a memory"). So this is not a translation error — it mirrors the English exactly.
*Not fixed:* this is a product-wide tone decision, not a mechanical hit, and it would require rewording EN + RU + HE in lockstep across 10 files. If you want the RU softened toward present-tense "story/moment" (e.g. «история», «момент») say so and I'll draft the full triplet rewrite for your approval — I won't change tone unasked.

**2. Voice-law adjacency in reel-real.html footPlay (all three languages).**
EN (line 281): *"She grows brighter every time someone **remembers** her aloud."*
RU (304): «…когда её **вспоминают** вслух.»  ·  HE (327): «…שמישהו **נזכר** בה בקול.»
The HE «נזכר» and RU «вспоминают» are faithful to the EN "remembers", but "remembers … aloud" is exactly the retrieval/nostalgia framing §0 warns against — and the source of it is the **English** line, not the translations.
*Suggested present-tense reframe (whole triplet):* EN *"She grows brighter every time someone **says her name** aloud"* / *"…**speaks of her** aloud"*; RU «…каждый раз, когда её **называют** вслух»; HE «…בכל פעם שמישהו **מזכיר אותה** בקול». (`footPlayN` plural forms alongside.)
*Not fixed:* changing the EN meaning + a voice-law judgement — both are yours per the agent rules. Confirm the phrasing and I'll apply all six strings.

## 2026-07-31 · foreman (RU deep copy)

**3. Voice-law past tense in place-real.html**
Files: place-real.html lines 738 (EN), 748 (RU), 758 (HE).
EN `told:'Told by the family'` · RU `told:'Рассказала семья'` · HE `told:'המשפחה סיפרה'`
All three use past/perfect tense. §0 voice law bans memory/retrieve framing and asks present tense: "people ARE, never WERE." The field `told` labels the source of a story on a Place page; in context it reads *"Told by the family"* (labeling who shared the fact). This is a labeling context, not a statement, so *could* work; but the RU and HE do read as completed-past actions. 
Same issue: `emptyw` labels the empty state of the story section — EN (line 741) *"No one has told the story of this moment yet."* RU (line 751) *"Историю этого момента ещё никто не рассказал."* Both are past-perfect tense. The voice law asks the empty state to be an **invitation** with present-tense language — something like EN *"No one has shared the story of this moment yet"* / RU *"История этого момента пока не поделена"* or a fully invitational tone *"Come share the story of this moment"* / *"Поделись историей этого момента"*.
*Not fixed:* voice-law tone decision. Confirm the reframing and I'll apply EN + RU + HE across the `told` label and both `empty` fields.

**4. Voice-law past tense in review-real.html**
Line 372: RU `toldBy:'Рассказал'` (EN line 344: `toldBy:'Told by'`)
Both use past tense / past participle as a label for who shared information. Same voice-law adjacency as finding #3 above (place-real `told` field). RU could be neutral label "От" (from) or present-tense form to match §0.
*Not fixed:* same decision as #3 — waiting for confirmation of the EN + RU + HE triplet reframe.


---
2026-08-02 · RULINGS by Claude (per Leon's standing directive to decide within instructions):
- Findings #3/#4 (past-tense 'Told by' attribution labels): KEPT AS IS. §0 bans memorial/mourning framing, not the grammar of attribution; 'Told by X' names a living act of testimony. Closed.
- Empty states: RULED as invitations, applied EN/RU/HE ('The story ... is waiting for its teller' + 'Ask someone who knows'). remember/memory wording removed from person+place strings in the same pass. Closed.

## 2026-08-02 · docs-auditor (nightly)

**5. Voice-law violation persists: «воспоминание» in game-facing copy (RU).**
The 2026-07-31 finding noted this word appears 48 times across 10 pages. Audit confirms: **still live and unfixed**. Current occurrence count: 39 (detected in linting rules). Affected pages: game-who-is-who, game-order-of-things, game-where-was-this, game-missing-voice, game-what-happened-next, game-tangled-thread, curators-real, journal-real, and others.
This is player-facing game UI, not keeper-only. §0 voice law applies: people ARE (present tense), never memory/remember framing. The RU copy violates this by rendering "a memory" as the canonical EN word choice appears to do as well. The prior finding stated EN copy still uses "memory" pervasively, which would require EN+RU+HE decision in lockstep.
*Not fixed:* awaiting Leon's direction from the 2026-07-31 filing on whether EN tone is to be reframed OR whether RU should match EN's current word choice (preserving the violation), or if this is a lower-priority item behind the larger voice-law audit.

**6. lf-fen.js version documentation is now accurate.**
CLAUDE.md line 159 (2026-08-02 update) correctly states live pages carry v=21. All 8 Fen pages verified: game-who-is-who, game-order-of-things, game-where-was-this, game-missing-voice, game-what-happened-next, game-tangled-thread, journal-real, crowd-real. All ?v=21. ✅ Verified live (v8→v21 timeline not documented; considered acceptable per line 159 note).

**7. QC smoke baseline clean.**
All 19 pages tested (anon + signed-in EN): 0 errors. Links audit: 0 dead links. Baseline maintained.
