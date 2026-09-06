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

*Last full handover: 2026-08-14, end of session. §2 is the live list; everything above the
Consolidated Documents line is current. Nightly-agent canon and the older session archive
were removed the same day - they described a system stopped on 2026-08-07 and git keeps them.*

*Rewritten 2026-08-09 after the consolidation. This file is now the ONLY text document:
handover, plan, parking lot, specs and agent canon all live here, in sections below.
Everything above the Archive line is current; the Archive is history kept for provenance.*

## 0 · ORIENTATION — where to look for what (start here, every session)

| You need… | Section |
|---|---|
| **what to build next, and what waits for Leon** | **§2 — start here** |
| what is true right now | §1 |
| the lessons that cost the most | §3 |
| what Leon has decided and parked | §4 PARKED / §E DECISIONS |
| the walk / levels spec | §A PROGRESSION |
| Fen's clips and moods | §B FEN |
| design deliveries and the responsive brief | §C DESIGN |

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

## 2 · WHAT TO FIX NEXT — the handover (2026-09-03, live at `12dd3f6`)

### SESSION CLOSE 2026-09-03 — state and the very next work

**DONE this arc (2026-08-29 → 09-03), all live and probe-verified:**
- Contribution flow mechanically finished (picker names/faces, cross-language search,
  places 3→57, country-for-new-place, teller recovery+gender, story-box fallback,
  errand-keeping sign-in, chooser fixed and deduplicated).
- Gate overhauled: lean register (email+password only), device language + small chip
  on every gate screen, sheet can never peek, knock screen legible and framed, limbo
  loop dead (funnelGate guards boot and every reload), review shows "At the gate" on
  open. Email confirmation OFF (keeper wall = membership knock).
- Onboarding REAL: Rita registered, was welcomed by Leon from Review, is a member.
- ONE MEMORY PAGE: Stage A APPROVED; Stage B LIVE DARK at `12dd3f6` (lf-create.js?v=3),
  moment-real.html?create=1. The who is real: "Name the faces" arms a create-mode
  tagger on the LOCAL photo (draw / move / resize, min 5% each way; boxes kept as
  {x,y,w,h} fractions in M.people — the exact shape Stage C hands to
  artefact_subjects.detail). With no photo, "Choose from the forest" picks from the
  published people (LFName labels in reader language, cross-language search, search
  box built once so the keyboard survives, already-used people excluded). Numbered
  gold chips under WHO with remove; tapping a box's number re-names or removes it;
  changing/removing the photo clears boxes but keeps the people as picked. No
  new-person door — a plain pointer to the hub's "Propose a person" (opens in a new
  tab so the local draft survives). Voice dead code from Stage A removed (was never
  rendered). Probe evidence (2026-09-03, ~/qc/create-a.js extended, all 17 checks
  green, zero page errors): picker lists 47 people; searching Rita in Russian
  filters to exactly 1; the drawn box lands at 0.30×0.30 of the stage (GEOMETRY
  asserted, not class names); the missing-list drops the who-line after tagging;
  DB row counts identical before and after the whole walk (artefacts 26, subjects
  82, people 47, place_geo 21, person_facts 443). Zero writes before Send holds.

**STAGE C SHIPPED (2026-09-05, `e022a59`, lf-create.js?v=5) — the Send is real.**
sendReal() ported from the contribution engine: lfDown downscale + upload to the
family bucket, artefact inserted as in_review (kind photo/text, original_language =
UI language, certainty remembered, contributor_id null — the create page has no
teller question), artefact_subjects rows carry M.people boxes straight into detail
as {x,y,w,h} fractions, the story crosses into the other two languages at first
telling (cleanOut alphabet guard ported verbatim; refused translations skipped),
then location.replace to moment-real.html?id=<new>. Double-submit guarded; failure
restores the button and shows L.sendFail in the refuse box; nothing touches the DB
before the upload line. End-to-end probe evidence (~/qc/qc-c.js): keeper filled
photo+story+when+where, tagged Rita at 0.30/0.30, pressed Send → landed on
moment-real.html?id=5f94965c…, page showed "Waiting for the keeper", the 1999 chip,
tag counter 1, the story text, zero page errors. SQL verified the rows exactly
(artefact in_review with metadata {when,where}, subject detail box as drawn,
he+ru translations in_review machine:true), then the probe moment was fully
removed: rows deleted by SQL, the photo via the Storage API as the signed-in
keeper (direct SQL delete from storage.objects is BLOCKED by a protect trigger —
always use the Storage API). Also this session (`d060db0`, `94ae1e8`): the whole
app renamed memory→moment in EN/RU/HE (moment/момент/רגע), search's story group
now Stories/Истории/סיפורים, provenance labels "По памяти/מהזיכרון" deliberately
kept (facts, not nostalgia), HE keeper titles normalized to שומר.

**STAGE D SHIPPED (2026-09-05, `4a9b774`) — every door opens onto the one page.**
Repointed to moment-real.html?create=1: the hub Add card (contribute-real), the
person page's add-a-story action, the journal's empty-state CTA, and both invite
links in game-what-happened-next (their old ?id=<person> param was DEAD — the old
add page never read it, so nothing was lost dropping it; passing it on would have
been read as a MOMENT id and broken the page). The identify-first lock's ALLOWED
list dropped contribute-add-real and now admits moment-real ONLY with ?create=1
(never the whole moment page); lf-nav.js bumped v=32→v=33 across all 23 pages.
The view-mode tagger's new-person door is closed: the "Someone new" button is gone
from the picker sheet (the pid==='__new' guards remain as unreachable dead code;
ensurePerson stays — the review-apply path still needs it when the keeper approves
a contributor's new-name tag). contribute-add-real.html stays in the repo, dark,
until Leon confirms deletion. Probe evidence (~/qc/qc-d.js): keeper tapped the hub
Add card → landed on moment-real.html?create=1 titled "A new moment", zero page
errors. Live greps: zero contribute-add-real links remain outside the page itself
and lf-nav's page-recognition regex (deliberately kept — the page still exists).

**STAGE E AUDIT DONE (2026-09-05, `2c926b7`+`d9242ae`).** contribute-add-real.html
DELETED (Leon confirmed; nav regex cleaned, lf-nav v33→v34 on all 22 pages, zero
references remain). Static link audit: ZERO dead links (every internal .html
reference resolves). Rendered RU crawl of all 22 pages signed in as keeper:
zero page errors after fixes; ⊕ menu (#lfnav) present on all 22; Fen's bud
(#lfBud) on tree/person/index ONLY — BY DESIGN (approved 2026-07-31), not a gap.
FIXED during audit: (1) game-tangled-thread was CRASHING at renderPlay —
_util.shuffle was handed a SEED where it needs an RNG FUNCTION (rng is not a
function); wrapped with makeRng; the game reaches its play map for the first
time, verified rendered. (2) vocabulary residue the sweep missed because
crowd-real stores RU/HE as \uXXXX escapes INSIDE the html (scan html decoded
too, not only js!): crowd kickers a remembering/воспоминание/זכירה → a moment/
момент/רגע; curators HE keeperOnlySub בזכרונות→ברגעי; journal HE cMem
זכרונות נוספו→רגעים נוספו; where-was-this EN chipOnly; globe tagline in 3
langs → "the more moments, the brighter". OPEN FINDINGS for Leon: (a) two
orphan pages nothing links to — home-real (the star-sky home, EN-only) and
optimize-photos (keeper photo-cleanup utility, EN-only): wire in, translate, or
retire? (b) place-real shows ENGLISH in RU mode (THE YEAR / PLACE / COORDINATES
— the page has no i18n dictionary): needs a translation pass.

**PLACE PAGE SPEAKS THREE TONGUES (2026-09-05, `3926eaa`+`e693212`).** Leon ruled:
orphans wait in §4 PARKED until the build is done; place-real translated NOW.
Done: place-real's T dict extended (globe HUD, year note, photo card, gate,
error box, scroll cue, lightbox link) and wired via window.PLACE_T + a PT()
helper in the globe scope + an early labeler + relabel-on-switch; the same card
and legend statics on index.html got ids + GB keys (legend: a moment/many/the
eldest/waiting; card: photo/meet/place/coordinates) painted in paintGlobeWords;
HE keeper title on place normalized מנהל→שומר. Verified rendered in RU and HE on
both pages, zero errors. FULL HEBREW CRAWL of all 20 flow pages: zero page
errors, all chrome Hebrew; remaining Latin words on games/crowd/timeline are
FAMILY-ENTERED CONTENT (stories/labels stored in English), which by rule shows
as stored — not a chrome gap.

**TREE STAYS LTR IN HEBREW (Leon's ruling 2026-09-05, `5e073d9`).** The family
tree keeps the identical left-to-right layout in every language: the RTL canvas
mirror was removed (node positions no longer flip) and the three card-pin CSS
flips (.conn/.opic/.pendpin) deleted; page chrome (back arrow, popovers, search
padding, dock framing) still flips under RTL. Geometry-verified: 39 cards in the
same left-to-right order in EN and HE, dir=rtl on the HE page, zero errors.

**NEXT WORKSTREAM — THE PERSON REEL REBUILT (agreed with Leon 2026-09-05).**
The reel celebrates the person: warm, a little fun, never dry. Core principle:
THE PHOTOS ARE THE FILM — one continuous stream from earliest photo to latest,
small text riding on top, Instagram-reel feel, no sound. No sections. Agreed
content (each element appears ONLY if data exists — no placeholders, no mention
of what's missing):
1. OPENING: earliest photo, all the person's names written on it, plus the
   meaning and origin of the given name — written once per person by the AI
   engine IN ALL THREE LANGUAGES, entering through Review for Leon's approval
   (never hard-coded; skipped for placeholder names like "[Wife of Shay]").
2. KIN: the drawn tree-path from this person to the current user + the
   relationship named. Proper terms for close relations (двоюродная бабушка);
   DESCRIPTIVE CHAINS for distant ones (брат прадеда твоей мамы) — Leon's
   ruling. All three languages. For the user themself: "Это ты!" + sparkle.
   If a photo exists with both of them: the earliest such photo on this slide.
3. PLACES: mini-map in the night-globe style, CONFINED to this person's places
   (Minsk-only life shows Minsk + a little around, never the world), thin gold
   lines connecting places in life order, years and place names small.
4. THEIR OWN WORDS: a line from a story told BY this person, gold, over their
   photo (and voice recordings if any exist) — ONLY for people who have any in
   the database; no placeholders and no mention otherwise (Leon's ruling).
5. AGE STAMPS on dated photos ("Рите здесь 9"), small.
6. CAPTIONS: professions, life facts, story fragments as small text at the
   right years. Gold = human-told, cool blue = facts (the two-truths guardrail).
7. LIVING ENDING: latest photo (or animated forest) + "И это ещё не всё —
   добавь момент" → moment-real.html?create=1.
8. Sparse archives: one photo may repeat with different captions and a slow
   breathing drift (gentle zoom); zero photos → animated forest background.
PROCESS: Leon ruled NO redesign — the existing page design stays; the agreed
content was implemented inside it, reusing existing visual pieces.

**REEL SHIPPED (2026-09-05, `cf9ffd4`+`caef47e`+`33de366`).** The photos are the
film: all of a person's photos flow earliest→latest through the whole reel with
a slow breathing drift; the Face chapter is gone (spine now SEVEN lights);
age stamps «Ей здесь 9» ride dated photos; stories told BY the person show
their own-words flame line instead of told-by; the opening carries all names +
(when present) a published person_facts `name_meaning` in the UI language; kin
shows the computed relationship to the signed-in viewer (KCLOSE proper terms
close, descriptive chains distant, BFS over the full published graph with
up+down→sib compression) over the earliest both-tagged photo; places shows a
night-style mini-map CONFINED to the person's geo-matched places (gold dashed
life-order line, small localized names+years; falls back to the old pin tile if
nothing matches geo); the ending is the latest photo + «И это ещё не всё —
Добавить момент» → create page; forestSVG background for photo-less ends.
Leon's phone found two bugs, both fixed in `33de366`: (1) relationship kinds are
parent/spouse/sibling — the graph had mapped every non-parent as partner, so
Leon's sister read «Твоя жена»; siblings now walk their own lane (verified:
Leon↔Rita is a direct sibling edge → «Твоя сестра»). (2) long story bodies
walled the photo — story captions clamp at 140 chars word-safe + … (probe:
longest now exactly 140), full story one tap away via step-in. Probe evidence
(~/qc/qc-reel*.js, RU, zero errors): 11 scenes in order Имя→Жизнь→Места→
Рассказы(by year 1991→2026, each with age stamp + told-by + step-in)→Родня→
дальше(CTA to create=1); lfBreathe animating on every photo; kin chain for the
QC account (anchored to Надежда) correctly reads «Дочь сестры твоего мужа».
NOTE: the QC test account is anchored to Nadezhda — kin captions in probes speak
from her seat, not Leon's.
INSTAGRAM CAPTIONS (Leon's ruling 2026-09-05, `325288e`): text does NOT sit on
the photograph. The caption block (.rcapx: story text 17px, told-by pill, links)
lives UNDER the hero frame; ON the glass only a few small words remain — the
when-and-where chip (.wwchip, 11px pill bottom-left: «Ей здесь 8 · 1992 · ...»)
and the top scene chip. Geometry-verified: rcapx.top(468) > hero.bottom(456),
chip inside the frame, zero errors.
MAP GETS ITS REGION (Leon 2026-09-06, `4426b64`): a lone town no longer floats
on black — the mini-map window opens to at least 8° of latitude (aspect-corrected
for the frame), and country shapes are drawn beneath (fill #142639, thin cool
borders) from the SAME world-atlas countries-110m topojson the globes fetch
(topojson-client script added to reel-real head; BORDERS loaded in loadData,
graceful fallback to the plain dark map if the fetch fails). Probe: Bobruisk's
places scene renders 9 country shapes under the gold dot, label localized
STORIES IN THE READER'S TONGUE, GENERICALLY (Leon 2026-09-06, `1d6f79a`+`2d910b0`).
Leon edited a story in EN, switched to RU, still saw EN. THREE fixes: (1) the
moment page's storyForLang now ranks: original in its own language > newest
published HUMAN retelling > newest published machine > newest machine still
in_review (loads now include in_review machine rows) > live autotranslate >
original — recency-ranked, so a stale row can never outshout a correction.
(2) carryStory REPLACES the app's old machine rows (delete machine per lang
before insert) and updates the page's local list at once — no more stacking
duplicates. (3) THE ACTUAL BUG LEON HIT: an UNSENT staged story draft overrode
the display in EVERY language (staged.story had no lang) — the draft now
remembers its language and only speaks in it. lf-db.js stories() (used by
person/place/reel/search/timeline) got the same published>machine-in_review
recency ranking; lf-db v10→v11 on all 22 pages. Probe: default moment in RU now
shows «АВТОПЕРЕВОД · Тетя Надя на парковке...» (was English), zero errors.
MENU IN ONE CORNER (Leon 2026-09-06, `5b2242d`+`c42935e`, lf-nav v34→v36):
the ⊕ menu now sits bottom-right 14px on EVERY page and language — the
151px Fen-page lift (body.lf-fen-on rule) was removed. All 22 pages scanned in
RU+HE with elementFromPoint under the hidden button: BOTH GLOBES CLEAN (year and
counters untouched — Leon's specific worry). Remaining hits were in-flow
scrolling content passing the corner, cured generically: lf-nav now adds
body{padding-bottom:92px+safe-area} so page ends always scroll clear. Probe rig
note: the overlap scanner is ~/qc/qc-navspot.js.
FOLLOW-UP (Leon 2026-09-06, `99b5b24`): the button was STILL floating because it
was DRAGGABLE with a remembered dock (localStorage lf-nav-pos, applyPos) - the
hand-dock is retired, applyPos now only FORGETS any stored position; lf-nav
v36->v37. AND games showed stories in the wrong language: lf-games engines never
asked for retellings - q() now passes every artefacts batch through
LFDB.stories() (sb handed via window.__lfGamesSb at the five call sites);
lf-games v9->v10 on all six games. Deployed + node-checked; Leon's phone is the
rendered check.
(Бобруйск in RU), zero errors.

**NAME MEANINGS PIPELINE SHIPPED (2026-09-05, `ace5691`).** 21 people with
published given names now have AI-written name meanings in ALL THREE languages
sitting in Review as in_review person_facts (field='name_meaning'): 63 rows, one
group per person, primary lang ord=0 (ru>en>he first-non-empty), the other two
ord=1 — so Review's existing translation-folding shows ONE card per person and
approve/decline moves all three together. Each language line speaks of the name
AS SPELLED in that language (Sofia/Софья/שולמית each described as itself);
honest about unknowns («Амма — редкое семейное имя...»); people without any
given name were skipped — no placeholders. Review's fld label dicts gained
name_meaning ('name meaning'/'значение имени'/'משמעות השם'). Probe: Review in
RU renders Rita's card «Маргарита — от греч. «margarites», «жемчужина»...»
для Рита Бетито-Гольник, zero errors. Once Leon approves a card, the line
appears on that person's reel opening (display side shipped earlier).
RE-RUN FOR NEW PEOPLE (documented pipeline): (1) roster SQL in the transcript /
by shape: published people lacking any name_meaning fact, with their published
given values per lang → /tmp/nm-roster.json on the droplet; (2) run
`ANTHROPIC_API_KEY=$(cat ~/.anthropic_key) python3 ~/qc/gen-name-meanings.py`
(script persists; reads roster, writes /tmp/nm-out.json); (3) copy to
~/qc/nm-out.json and run `node ~/qc/qc-nmins.js` from ~/qc (signs in as the QC
keeper and inserts through the app's own RLS door — in_review only). Insertion
via direct SQL was deliberately avoided (12KB retyping = drift risk; the
browser path is the same door the person page uses daily).

**ALSO NEXT:** Leon's own phone walk in RU and HE (the probe cannot replace his eyes);
then whatever he rules next. Journal-as-simple-log via the designer remains
parked on the horizon.

**Standing:** designer parked items (none open for this build — Leon waived);
anomaly (anon tree names screenshot) still unexplained; two language buttons on the
contribute hub header (Leon saw, low priority); qc probes must assert GEOMETRY, not
class names.

This section IS the handover. There is no separate handover file: Leon asked on 2026-08-24
that CLAUDE.md be the only document, and a `docs/HANDOVER.md` written that day was deleted
rather than left to disagree with this one.

### Finished and verified in the stretch to 2026-08-24
- **Three languages everywhere.** Every page, and every field a family writes: names, About,
  occupations, countries, custom details, stories, place names. The front door too.
- **Gender reaches every translation.** The translate function honours it (it tested for
  'male'/'female' while every caller sent 'm'/'f', so no gender instruction had EVER been
  sent); the person page passes the subject's, the story pages the teller's. Contribution
  now REQUIRES it for a new person and will not send while anyone is unanswered.
- **Places translate without moving a row.** `place_geo` maps every typed spelling to three
  names; a DB trigger keeps one spelling per language; a place learns its names on approval.
- **A whole moment can be removed**, through the keeper.
- **One language button per page**, showing EN/RU/HE.
- **One Send on the person page.** Chips, occupations, homes and names all stage and go
  together. No "ask to remove" anywhere.

### 1. The contribution flow — WALKED 2026-08-29; first fixes shipped
The end-to-end walk Leon asked for was done: as qc-rig (member, not keeper), Russian,
phone profile, live site. Full log + screenshots: droplet `~/qc/walk-out/`. Probes:
`~/qc/walk-contrib.js` (NOSEND=1 reruns without writing), `walk5.js` (gate errand).
Test data was written and FULLY CLEANED (rows via execute_sql; storage via Storage API
with the rig's own token — execute_sql cannot delete storage objects, confirmed again).

**Shipped and verified live (`d73c23f`, `4259212`, `ef3844c`):**
- People picker draws names again (it displayed a column never fetched — the retired
  display column; now the shared label) and small faces in the suggestion row.
- Picker search matches every language a person has a name in, not just the reader's.
- Known-places list reads place_geo (name + three language names, deduped): 3 → 57
  entries. Same fix applied to the moment page's place list.
- Sign-in keeps the errand: contribute pages bounce to `index.html?next=<page>`; the
  gate honours a validated `next` after sign-in; the anchor-chooser detour carries it
  too (captured at load, because tree-real strips the query the moment its own chooser
  opens). Verified: with an anchor, sign-in lands on contribute-add in ~1s. Without an
  anchor, the errand survives into the chooser; the post-choose hop is code-reviewed
  but not machine-walked (completing it would write a player_anchor for the rig).
- Teller wording: RU now gender-neutral («Рассказано своими словами»); HE has a
  feminine form chosen by the teller's recorded gender; existing people picked from the
  forest now carry their recorded gender into the flow.

**Second batch, shipped and verified live (`db74b6f`):**
- lf-anchor chooser was BROKEN for first-time members: `var lang` (ui language) shadowed
  `function lang()` in the same scope — every name lookup threw, the list drew empty,
  and the page error Leon's walk flagged was this. Renamed the variable; probe now
  draws 47 names, no page errors. This also explains why the duplicate chooser
  "worked": tree-real's own `whoami` sheet was silently covering for the broken one.
- The duplicate chooser is retired: tree-real's auto-open on `?choose=1` stands down
  (lf-anchor owns it); `openWhoAmI` stays for the "find me" button. Probe: exactly one
  sheet opens.
- Teller "__other" search: already-tagged people are no longer filtered out (choosing
  one reuses their entry — DB shows exactly 1 subject row, no duplicate); the back
  button returns from teller-search to the teller step; walked end to end.
- Country for a brand-new place: a second field appears under "where" only when the
  typed place matches nothing known (all three languages); the country travels into
  `metadata.where` as "Place, Country". Walked: «Биробиджан» + «Россия» stored as
  «Биробиджан, Россия»; field hides for known «Хабаровск». Test record cleaned, rows
  and storage, verified empty.
- Story box (finding 7): when the reader's language has no published translation and no
  machine text, the ORIGINAL body now stands in gold instead of an empty box. Live and
  code-reviewed; NOT probe-walked — no published artefact currently lacks a published
  translation, and manufacturing the state means briefly publishing test content.
  Applies to future submissions whose translations wait in review.

**Gate slimming (Leon, 2026-08-29 evening; live `642ab71`):** registration is email +
password only (name field, TOLD BY YOU chip, open-registration note, register footer
line all removed; doRegister no longer sends display_name — profiles show the email
until anchored). The taking-long watchdog speaks only over a genuinely loading screen
and is cleared when a form renders (the orphan "Try again" over the register form is
gone). The gate hides the world's floating chrome while up (body.lf-gateup hides
#lfBud/#lfnav via MutationObserver; gate z-index raised, which also covers the EN pill).
All verified by lean-gate.js probe: two fields only, nothing leaks, no watchdog.

**DISCOVERED, matters for onboarding:** the built-in Supabase email service rate-limits
confirmation letters to a few per hour — signup then fails with English
"email rate limit exceeded" and NO user row is created. This plausibly explains Rita's
failed registration. RESOLVED 2026-08-29: Leon disabled "Confirm email" in the dashboard. Verified by
probe: signup returns an instant session, no letter; test user deleted, read-back 0.
Registration is now instant for everyone — no email quota in the path. If confirmation
is ever re-enabled, custom SMTP must come with it.

**Onboarding funnel (Leon, 2026-08-29 evening; live `e198609`):**
- Gate language (revised same evening, live `bfd41e6`): the SMALL round language chip
  (.ibtn, same as everywhere) sits in the gate's top corner on all gate screens —
  sign-in, register, error, and the knock — opening the normal language sheet on tap
  only; choosing redraws the current screen (renderWaiting handles the knock). Default
  still follows the device. During the repair the funnel's anchor-detour branch was
  briefly stranded outside its function (caught by inline_check + probe, fixed same
  commit-chain, regression-verified: unanchored member still lands on the chooser).
- NO language choice step at the gate: language follows the device (ru/he/iw mapped, else
  en), persisted to lf_lang on first visit (index + lf-nav for direct entries), so
  inner pages agree with the gate. The gate's language pill removed from all gate
  screens; the language sheet is CSS-hidden while the gate is up (it was leaking over
  the knock screen). In-app language switching elsewhere untouched.
- IDENTIFY-FIRST LOCK in lf-nav (v32, all 23 pages): a signed-in MEMBER with no
  person_id and no living anchor gets only tree-real?choose=1 and the contribute pages;
  any other page redirects to the chooser; #lfBud/#lfnav hidden via body.lf-lock.
  Non-members are sent back to index (the knock). Fail-open on token refresh.
- The knock (membership approval) KEPT deliberately: with email confirmation off it is
  the only wall between a stranger with the URL and the family. New registrants wait at
  "You are at the gate" until the keeper welcomes them (Review).
- Verified by funnel probe (ru-RU locale): device language ru stored, Russian gate, no
  pill, instant registration, Russian knock screen, no sheet; after membership granted:
  sign-in lands on the chooser (47 names), person-real bounces to the chooser, bud and
  nav hidden. Test account deleted, read-back 0.
- MISSING piece of Leon's spec (designer first): the chooser has no "I am not in the
  tree yet" path — a new member who cannot find themselves must be led into a
  contribution flow that creates THEIR OWN Person (in_review) and anchors them to it.
  New flow; Claude Design pass required before engineering.

**Limbo loop at the gate (Leon hit it live 2026-08-29 ~22:00; fixed, live `a628f34`):**
Root cause: index boot (line ~1062 `load()`) and every reload ("Try again"/"Knock
again" both call location.reload) checked only for a session and NEVER consulted
funnelGate — an unwelcomed member (or a ghost session of a deleted account) went
straight to reading the forest, got a CORRECT empty answer (RLS), and the EMPTY-200
guard threw "The forest answered empty" forever. Probes had missed it because they
always entered via doRegister/doSignIn, which do call anchorGate. Fix: one line in
load() — `if(await funnelGate()) return;` before any forest read. Safety-checked all
four existing accounts first (Leon + qc-keeper have person_id, la.lutine has an active
anchor — none detoured). Verified by limbo-test.js: register→knock, Knock-again→knock,
plain re-open→knock, empty-error never shown. Lesson for probes: every gate state must
be exercised through RELOAD and PLAIN OPEN, not only through the buttons that set it.

**The peeking language sheet — SOLVED for real (live `d08e293`):** every "huge language
tool" sighting tonight (17:36 register form, 19:24 + 22:15 + 22:20 knock) was ONE bug:
#gateSheet hides only by translateY(103%), and on the knock screen the geometry comes
up ~90px short — the sheet's grip+title strip peeks, uninvited. Empirically pinned by
sheet-xray.js (rectTop 542-551 vs viewport 639, transform applied yet visible; at the
sign-in form the same math clears fully — screen-dependent, which is why probes
checking only the .show class called it "closed"). Fix: :not(.show) is
visibility:hidden + pointer-events:none with a delayed visibility transition so the
close animation still plays. Verified on the knock: computed visibility hidden; chip
open/close still works (pill-test green). ALSO: sign-in footer "New here? Create an
account" removed (Leon; the segmented control above already offers it) — footer keeps
only "Forgot password?". Probe lesson recorded: verify hidden-ness by GEOMETRY and
computed style, never by a class name.

**The invisible knock text (Leon's "weird empty page", 2026-08-30; fixed live
`11a44cc`):** the waiting screen's title/body have ALWAYS rendered off the top of the
viewport (measured: title top -46px) — only the buttons row poked into view. Cause:
renderWaiting (and the older inline waiting render before it) skipped the `.gate`
wrapper frame every other gate screen wears; without it .gmid drifts above the screen.
Fix: same wrapper + gtop for the chip + justify-content:center; verified by geometry
(title now top:134 on a 639px viewport). Probe rule now firm: text presence in
innerText proves NOTHING — assert visible geometry.

**DECIDED (Leon, 2026-09-01): ONE MEMORY PAGE — the unified contribution rebuild.**
No designer pass (Leon's explicit call, option 2): built in the page's existing design
language. The Memory page serves both lives: empty at birth (creation mode), the same
page forever after. The step-by-step journey (contribute-add) retires when parity lands.

Rules, complete and final:
- REQUIRED: when (approx or precise), who (>=1 person — from face tags, else picked
  from EXISTING people; an empty-street memory is incomplete by definition), where
  (choose-or-create with country — existing mechanism reused).
- SUBSTANCE: at least one of photo, story, voice (voice already exists in the flow).
- Teller optional (defaults to contributor). No new-person creation inside a memory —
  the "Someone new" side-doors (add-flow who-step AND the memory tagger) are replaced
  by a plain pointer to the hub's existing "Propose a person" path. The person-page
  relative door STAYS (tree-building, not memory-making; Leon confirmed).
- Send refuses with an honest list of what is missing. Exit before Send = nothing saved
  anywhere (creation state is client-side only; no draft rows).

DECIDED by Claude at Leon's instruction (2026-09-02): the empty memory lives on the
phone only — the database holds nothing until Send (no draft rows, no husks, no sweep
jobs; the whole class of ghost-state bugs stays impossible). The page is the same
Memory page; its tools keep boxes and fields local until Send in creation mode.

STAGE A APPROVED by Leon on his phone, 2026-09-02 ("Ok, looks good"). Voice removed
from creation same day (live `5a2022e`, module v2): voice keeps its own door on the
contribution page; substance rule is now photo OR story. Next: STAGE B (the who —
tagger ported onto the local photo, existing-people fallback, Propose-a-person
pointer), then C (real Send), then D (the hub's "Add" card switches here).

STAGE A SHIPPED DARK (2026-09-01, live `1964439`): `lf-create.js?v=1` + a two-line
branch in moment-real boot — `moment-real.html?create=1` renders the empty memory:
photo slot with local preview/change/remove, voice recorder (record/redo/discard,
local blob), story, when, where with the 57-place list and the country question for
unknown places, three required chips, and a Send that refuses with an honest missing
list (verified in RU by create-a.js probe: refusal listed exactly the two truly
missing items; zero page errors; zero DB writes — the module contains no insert code).
STAGE B SHIPPED (2026-09-03, `12dd3f6`): the who is in — local face tagger + pick-from-forest.
STAGE C SHIPPED (2026-09-05, `e022a59`): the Send is real — see the handover above.
No entry links point at it; the family flow is untouched.

Build stages (each dark-launched behind ?create=1 until verified; entry links switch
only at the end):
- A: creation shell in moment-real — empty slots; photo (upload/rotate, reuse existing
  machinery locally), story/when/where editors writing LOCAL state, voice recorder
  ported; required marks visible.
- B: the tagger on a local, unsent photo (boxes in local state); fallback existing-
  people list; side-doors → hub pointer (view mode too).
- C: Send — port the proven submit engine (storage upload, artefact + voice rows,
  subjects carrying box details), required-check refusal; after Send the page becomes
  its own view mode.
- D: switch entries (hub "Add a memory" → moment-real?create=1; identify-first lock's
  allowed list follows), retire contribute-add.
- E: full contributor re-walk (RU, phone profile) + connectedness checks + CLAUDE.md.

**Keeper-side welcome — bug found and fixed, then USED FOR REAL (2026-09-01, live
`74a3ab0`):** review-real never called loadGate() at boot (only after an approve/
decline), so "At the gate" was invisible on a quiet day; also drew display_name it never
selected. Fixed both; probe (gate-review.js as qc-keeper) shows the section with names.
The probe revealed RITA had self-registered at 16:03 UTC and was waiting. Leon welcomed
Rita AND the test knocker from Review on his own phone; DB confirms both is_member=true.
Knocker erased. Accounts now: Leon, Zoya, Rita, qc-keeper, qc-rig. Rita's next step:
open the forest → chooser → "That's me" (Rita's person is unlinked and free).

**Onboarding WALKED BY LEON 2026-09-01, on his phone, end to end: register (instant) →
knock screen (legible) → welcomed (via DB this once; Rita's will be from Review) →
chooser → "That's me" on Rita → app unlocked. Leon: "It worked well now." Test account
and its Rita anchor erased afterwards, verified: no test accounts, nobody linked to
Rita. Still unwalked by Leon: the keeper-side welcome from Review.

**Flow DECIDED (Leon, 2026-09-01): Option 1 — keep knock → keeper welcomes → chooser.**
The wall stays. Name-typing at the knock and the self-Person path remain designer
material for later. All Leon's +test accounts erased 2026-09-01 (three of them:
+test2, +test3, +test); accounts table back to the four known: Leon, Zoya, qc-keeper,
qc-rig. Leon restarts registration from scratch.

**Flow question (for history, 2026-08-30):** Leon expects the choose-yourself /
make-a-new-Person step at the knock stage. Current order is knock → keeper welcomes →
chooser, because RLS hides all names from unwelcomed accounts (the only wall since
email confirmation went off; choosing pre-welcome would expose the family list to any
registrant). Options sketched for Leon: keep order with the now-legible knock; or ask
the knocker to TYPE their name free-text (keeper sees who knocks, no list leak) and
fold it into the designer pass for the "I'm not in the tree yet" self-Person flow.

**Findings still open (walk evidence):**
- Findings 4 (tagger UX) and 10/11 (tagging is only choosing pre-send) remain: these
  are design-level changes to a shipped surface — Claude Design pass FIRST, then build.
- «Наум» unfindable in RU is DATA, not search: he has only an English note-name — one
  of the six notes-not-names in item 4 below.
- UNEXPLAINED, evidence kept: one anonymous load of contribute-real rendered the tree
  with real names and no gate (`~/qc/walk-out/00-hub.png`). Three deliberate reruns:
  gate holds; anon REST reads on people/person_facts/relationships/artefacts all `[]`.
  Not reproduced, not understood, not closed.

Original twelve findings, in Leon's words, remain in §4 under *REVIEW THE WHOLE
CONTRIBUTION FLOW* — items above cross-reference them.

#### (superseded heading) 1. The contribution flow — twelve findings, ONE review
The largest real work outstanding and the part the family actually touches. Leon asked that
it be **walked end to end** rather than patched finding by finding. The twelve are recorded
in §4 under *REVIEW THE WHOLE CONTRIBUTION FLOW*, in his words.
Walk it as a contributor who is **not** the keeper, in Russian, on a phone.

### 2. Removal has no path left (Leon's decision, 2026-08-24)
The ask-to-remove buttons are gone at his instruction — six of them, from six different
builders. Nothing replaced them: emptying a field and sending does nothing, because a blank
write is skipped. So a published occupation, home, kin tie or About text can be **edited but
not taken away**. Everything behind the buttons still works. The shape Leon preferred when it
came up: **a cleared field means removal.** His call.

### 3. Queues nobody can reach — a pattern, not a bug
Four times something was written correctly and shown to no one: machine translations of
facts; story retellings; `artefact_edits`; and name transliterations that could never fold
into their human row. Every one was found by Leon noticing something did not arrive.
**Nothing checks that everything written as "waiting" is reachable and clearable.** One pass
— for each waiting kind: fetched? shown? approvable? declinable? — closes the whole class.

### 4. Names still English-only for ~30 people
47 have names; 18 have Russian, 17 have Hebrew. Leon's rule: **anything manually entered is
auto-translated once into the others; if someone edits any part in any language, that stays.**
Genders are correct now, which he wanted settled first.
Six of the thirty are **notes, not names** — `Masha mom of Naum`, `Boris [Kustanovich?]`,
`[Wife of Shay] Ruah`. Transliterating those produces nonsense. His preference: do the 24
clean ones, list the six for him to rewrite.

### 5. Two people have no gender
**Sasha Dymarsky** and **Sasha Tserlin** — Alexander or Alexandra, genuinely either. Left
unset rather than guessed. Two taps from Leon.

### 6. Unsent work is lost silently
The person page holds changes until Send, and nothing warns before leaving. On a phone the
back gesture is easy to hit. Small to build, and it is what makes the one-Send model safe.

### 7. Gendered wording outside the person page
The person page is swept (21 strings). The **reel** still says *"She grows brighter every
time someone says her name"* — but the reel is parked for redesign, so its words are about to
be rewritten anyway. Roughly 50 other matches are **false positives**: Russian `её` about a
photograph, Hebrew `שלהם` which is already plural, `אותה שנה` meaning "the same year". Do not
break correct grammar to satisfy a search.

### 8. Responsive: `person-real`
The last page still boxed into a narrow column on the iPad. Every other page is done.

### 9. Declined facts leave no trace
Declining a fact DELETES the row, so nothing can warn that a proposal was already refused.
Fixing it means 23 places across five files that read "not published" as "waiting" would start
showing declined suggestions as pending. A schema change with a sweep behind it.

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

## 3b · THE SHELL ON THE DROPLET

Leon switched the server connector to **LG Maker MCP v2** on 2026-08-21. Use v2. The older
"LG Maker MCP" still answers and reaches the same machine as the same user, so both appear
to work - which is exactly why this is written down rather than left to be noticed.

Verified on the day of the switch: same droplet (leons-droplet), same user (botuser), same
checkout at /home/botuser/living-forest, same GitHub token. Nothing about the work changes;
only which tool to call.

The connector drops now and then, on either version. Re-find it with tool_search rather than
assuming the shell is gone.

## 4 · PARKED — decided, not now (do not build unasked)

### Person page — three analysis features (Leon, 2026-09-05) — PARKED, do not build unasked

**1. Who is this person similar to?** The user picks one image of THIS person
(from the Person page) and one other image from their visible tree in which
other people appear. The app analyzes the similarity of this person's face (from
the first image) to EACH person tagged in the second photo, and shows the scores
as a columns Pareto chart: x-axis = the people in the second photo, y-axis =
similarity score 0–100%. The app instructs the user to choose images where the
whole face is shown well from the front, and analyzes ONLY faces that are fully
shown from the front. If no good face is found, the app says so and does NOT run
the analysis. Similarity is based on face features only — never hairstyle or
hair colour.

**2. Who is the most similar to this person?** The app analyzes ALL images of
this person and ALL images of all other people in the database visible to the
user, and finds the 2 photos in which this person is most similar to somebody
else. It shows both persons' faces from those 2 photos, with their similarity
score 0–100%.

**3. Emotional analysis.** The app analyzes all the stories written by this
person and the emotions in them, and shows a columns Pareto chart: x-axis =
emotions (between 3 and 10 different emotions), y-axis = percentage across all
the stories told by this person.

(House rules apply when built: dynamic from live data, never hard-coded; designer
pass before any page work; face rules above are hard constraints.)

### Two orphan pages — wait until the work is finished (Leon, 2026-09-05)
Nothing links to these two pages; both are English-only. Leon ruled: leave them
as they are until the build is done, then decide (wire in / translate / retire).
- home-real — the star-sky home: https://leong25.github.io/living-forest/home-real.html
- optimize-photos — keeper photo-cleanup utility: https://leong25.github.io/living-forest/optimize-photos.html

*The orientation table has pointed at "§4 PARKED" since 2026-08-09 and there was no such
section: it was lost in the consolidation. Restored 2026-08-14.*

### The Family Trip — a game on the globe (Leon, 2026-08-29) — PARKED, do not build unasked

A guided journey across the globe, visiting your family. Fen guides it, as all games,
telling you what to do at each step. Two alternating steps, repeated until you stop:

**Choose where to go from here.** On the globe page. You start at your own home — the
latest, ideally current, home on your Person page. Fen offers a list of destinations:
places where family members live (their current-or-latest homes, the same ones their
Person pages show). Choosing a destination opens that Place page (every place in the
tree should have one). You may also tap a lit point on the globe directly — Fen names
the point (location including country) and asks you to confirm; refuse and you are back
to choosing from the globe or the list.

**Choose who to visit at this place.** Fen tells you who lived here and in which years,
and who lives here now, then asks whom you would like to visit and lists the people of
this place. Choosing one opens their Person page. Then Fen iterates the two steps again.
Fen always offers a way to stop the game at any moment.

**A second, related idea — "Time Machine":** background of what happened at this place
in different years — general (a war) and specific to the people who lived there. Leon:
"I don't know how to do it" — the shape is open. Check whether something like it is
already in this parking lot before designing; review together later.

Standing rules apply: designer pass before engineering; rounds generated from live data.

### Automatic translation of every text field (Leon, 2026-08-14) — PARKED

The idea: a contributor types into one box, in whatever language the app is in. On first
entry the app translates it into the other two and stores all three. On a later edit, the
app asks whether to carry the change into the other languages; yes translates only the
edited part, no leaves the edit visible in its own language alone.

Why it is parked, and it is NOT the translating that is heavy:

- **Cheap:** translating on first entry. The `translate` Edge Function already exists and
  is already used for names. Two extra calls and two extra rows.
- **Hard:** "translate only the edited part". A fragment cannot be spliced into a Russian or
  Hebrew sentence and stay grammatical - case, agreement and word order all move. Doing it
  properly means sending the old text, the new text and the existing translation and asking
  for a revised whole. That works, but it is a judgement call with a quality ceiling, not a
  deterministic edit.
- **The actual weight - the truth model.** The app's spine is gold = a person said this,
  cool blue = the app worked it out. A machine translation is a third thing: human-authored,
  machine-restated, and it needs its own mark and its own rules:
  - Does a translated row enter the keeper's queue? If yes, a keeper approves prose in a
    language they may not read. If no, machine text publishes itself - and five fast paths
    that did exactly that were closed deliberately.
  - Provenance per row: which language it came from, and a fingerprint of the source text.
  - **Staleness.** Edit the English and the Russian is now a translation of a sentence that
    no longer exists. That has to be detectable and visible.
  - **Ownership flips once.** The moment a human edits the Russian, the Russian is theirs
    and must never be overwritten by a machine again.
  - Every text field gains two model calls before it can save.

**The cheap 80%, if it is ever wanted without the weight:** translate on first entry only,
mark the row as machine-made, and let any human edit in any language lock that language
permanently. No diffing, no splicing, no staleness tracking. Most of the value, a fraction
of the cost.

### home-real.html is an orphan ON PURPOSE — do not "fix" it

A connectedness audit will report `home-real.html` ("The whole sky") as unreachable: nothing
links to it. That is correct and intended. The sky was retired on 2026-07-23 when the globe
became home — removed from the ⊕ menu, its inbound links re-pointed to `index.html`, the file
kept in the repo rather than deleted. It orphaned nothing on its way out, because the sky only
ever linked outward.

Written here because the QC agent flagged it on 2026-08-17 as a fault and I nearly wired a
way back into a page Leon had deliberately closed. An audit cannot tell a retirement from a
mistake; only the record can. If the sky is ever wanted again it needs Leon's word, not an
agent's report.

### Translating PLACE NAMES needs places-as-rows first (2026-08-20) — BLOCKED, not deferred

Automatic translation reached every text field on the person page except two: `lived` and
`pbirth`. They are not harder to translate. They are the only text stored as ONE value for
all languages (`lang='und'`), and four other pages group people by that value as a STRING:

- `place-real` gathers everyone who lived somewhere by matching the text
- `search-real` builds its list of places the same way
- `lf-games.js` feeds Tangled Thread and Where Was This from it
- `reel-real` reads `pubList('lived','und')` and would simply MISS a row written with a language

So translating Tel Aviv would not give one place with three names. It would give three
places, each holding a third of the family, and a reel that shows none of them. The place
page's whole premise - here is everyone who lived here - quietly breaks.

The fix is the schema decision already deferred in this file: a place becomes a ROW with an
id and per-language labels, and a person's home points at the id. Then translation is
trivial and grouping gets BETTER than it is today, because "Tel Aviv" and "תל אביב" become
the same place rather than two strings that happen to differ.

Do not translate place names before that. Measured, not assumed: the four readers above were
read on 2026-08-20 and every one of them matches on the value.

### Kin notes: nothing to translate (2026-08-20)

Checked before building: 46 relationships exist and NONE has a note. The note is also a
single column on `relationships`, not a per-language row, so translating it means a schema
change for a field no one has ever used. Skipped deliberately. If notes start being written,
store them as person_facts rows keyed by the relationship id and the existing machinery
works unchanged.

### REVIEW THE WHOLE CONTRIBUTION FLOW (Leon, 2026-08-20) — NEXT UP, not parked

Leon added one photograph with one sentence and hit five separate problems. He asked for the
whole flow to be reviewed rather than patched finding by finding. His words, kept as he said
them:

1. **There was no "country" field.** A home on the person page has one; adding a photograph
   from a place does not.
2. **I couldn't find the person in Russian.** The people picker did not match when he typed
   a name in Russian - almost certainly searching one language's rows only.
3. **I couldn't choose myself as the storyteller.** The teller picker would not let him name
   himself, though he is in the family and is telling the story.
4. **Tagging the face was confusing.** The drag-to-draw tagger needs looking at with fresh
   eyes; the logic was ported from the old prototype and never re-examined.
5. Two translation faults, FIXED 2026-08-20 - but found the same way, by using it.
6. **A photograph was left behind by every failed send.** Three copies of the same picture of
   his mother reached the archive because the picture is saved before the step that failed.
   Leon caught and declined them; nobody else would.
7. **The story area showed an empty box inviting a telling in English while a translation was
   already waiting underneath it.** Two true things said at once, reading as a failure.

### More, added by Leon after a second sitting, 2026-08-20

8. **The list of people to choose from shows empty boxes.** The names are not drawn - he could
   only see who was who by tapping each blank box in turn.
9. **That list should show each person's small face**, as the rest of the app does.
10. **Choosing people and tagging faces must be ONE act.** No choosing without tagging first.
11. **Tagging was only possible AFTER sending the whole contribution to the keeper.** It has to
    happen inside the flow, while the photograph is in front of you.
12. **EVERYTHING except the media must be optional.** Tagging, the story, where, when, any
    detail - all optional. A person must be able to finish having added only a photograph, or
    only a voice recording, or only whatever they have. The forest takes what it is given.

That is twelve findings from two ordinary sittings by one person. The flow has never been
walked end to end by anyone who was not building it.

Do not fix these one at a time. Walk the flow end to end as a contributor who is not the
keeper, in Russian, on a phone, and write down what happens. The bugs above were found in a
single sitting by one person doing one ordinary thing, which says the flow has never been
walked whole.

### Gender in translation: what is solved and what is not (2026-08-20)

SOLVED. The teller's gender travels with a story, because the story is told in the first
person and Hebrew and Russian inflect the verb on the speaker. Leon, who is male, was made to
say חושבת. The translate function tested for 'male'/'female' while every caller sent 'm'/'f',
so no gender instruction had EVER been sent - not for stories and not for names. Both
spellings are accepted now and the cache key carries gender for every kind.

NOT SOLVED, and Leon named it before it bit us: the gender of the people IN the story matters
too. 'Sofia cannot have male verbs and adjectives, in any language, because she is female.'
Today that rests entirely on the model inferring it from the name and the context, which is
usually right for a Sofia and unreliable for an Adi, a Yuval or a Sasha.

Two things make this genuinely hard rather than merely unfinished:
- Gender is not recorded for everyone in the archive.
- A story may name people who are NOT IN the archive at all. Leon: 'gender grammatics
  decision should not only rely on what's in the system.'

So a fix cannot simply look up the subjects. The realistic shape is to pass what IS known -
the tagged people and their genders - as a hint alongside the text, and accept that anyone
unknown falls back to the model's judgement. Do not pretend it is exact.

Also recorded: a one-off pass re-translated the stored machine retellings as male. Four were
improved, one was already right, and one came back mangled - the model answered with broken
text and then argued with itself in the output - and was REJECTED rather than stored. That
script had no cleaner; the app does, which is exactly why.

### Places: learn a new one WHEN THE MOMENT IS APPROVED (Leon, 2026-08-20) — TO BUILD

A place learns its three names the first time anything asks for it, which today means when
somebody opens that place's page. Leon: "The translation should be triggered when the moment
with a new place is approved."

He is right and the reason is not tidiness. Хабаровск sits on his father's army photograph
and has no names in place_geo, because nobody has ever opened Khabarovsk as a place - so a
Hebrew reader sees Cyrillic on an otherwise Hebrew page, and will keep seeing it until
someone happens to wander there. Approval is the moment the place enters the forest, and the
right moment to learn it.

Where: review-real, alongside publishing an artefact - read metadata.where, and if place_geo
has no row for that spelling, run the same lookup lf-place already does. It is slow and
polite (over a second between languages, ~3.5s a place) but nobody is waiting on it there.

Do NOT warm the table in bulk. Leon declined that: the archive should fill as the family
fills it.

### Places: one spelling per language — CHECKED, and it holds

Leon asked that a place have only one spelling per language. Verified 2026-08-20: three rows
point at Tel Aviv (Tel Aviv, Tel-Aviv Jaffo Israel, תל אביב) and two each at Holon and Yavne,
but every row for a place carries the SAME name_en, name_ru and name_he. Zero places have two
spellings in one language. 18 spellings, 14 actual places.

Several rows per place is the mechanism, not a fault: a row is one SPELLING SOMEBODY TYPED,
and they all point at the same answer. A unique index on `name` now stops the same typed
spelling being learned twice with different answers.

### Journal redesign (Leon, 2026-08-15) — PARKED

The journal was always meant to be built as a simple LOG first, through a designer pass, with
the fuller progression-driven version left for later. It has never had that pass. It reads as
a list of events because that is exactly what it is, and Leon has now looked at it and asked
for a redesign rather than more patching.

Fixed today so the parked work starts from a page that at least tells the truth: an entry for
a photograph with neither date nor place used to read "added a photo of" and then stop. It
falls back to the photograph's own words now.

Do NOT tinker further before the designer pass. It needs a shape, not another fix.

### Reel redesign (Leon, 2026-08-15) — PARKED

Same call, the same evening. The reel now shows real stories, a caption of when and where, the
teller's name, and a way into each moment - all repaired today - but Leon wants it redesigned
rather than extended. Three things it gained today are load-bearing and should survive in some
form whatever the designer decides: the story is the story and not a date standing in for one,
a story with no photograph still needs a way in, and the teller has a name.

Note for whoever picks these up: BOTH are excluded from the responsive rollout on purpose.
Reflowing a page that is about to be redesigned is work thrown away twice.

### "Who Is Who?" has no page (found 2026-08-14) — PARKED

Leon found it: he could not reach the game. It is not merely an orphan.

`GAME_PAGES` in person-real maps `whosememory` -> `game-who-is-who.html`. The FILE is the
"Whose Story Is This?" game; the filename is a legacy misnomer from before that game was
renamed. There is no `whoiswho` key in the map at all, so `openGame('whoiswho')` falls
through to the placeholder sheet - the game is advertised on every person page, gated only
by `tagged.length<1`, and leads nowhere.

CLAUDE.md has listed Who Is Who among the live games and that has been wrong. Live games
are: Find Them in the Crowd, Put Their Life in Order, Whose Story Is This, Where Was This,
What Happened Next. Not built: Who Is Who, The Missing Voice, The Tangled Thread.

Two jobs when it is picked up, and they are separable: build the game, and rename the file
so it says what it is. The rename touches lf-nav, lf-invite and person-real, which all point
at the current filename.

### The consequence live today

Country in a home is a single box in the reader's own language. `pick()` reads the reader's
language, then en, then und, then any - so nothing is ever blank, but a country typed in
English shows as "USSR" to a Russian reader, not "СССР". The old per-language Country box
(`mlEdit`, with an "add a language" toggle) was removed when country moved inside a home.
The read side handles three languages; the write side can only produce one.


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
