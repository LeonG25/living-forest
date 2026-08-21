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

## 2 · WHAT TO FIX NEXT (in order, 2026-08-14)

### A. WAITING FOR LEON RIGHT NOW
Two facts in the review queue, both his own, both about where he has lived:
`lived = Tel Aviv` and `country = Israel`. They are **two loose rows with nothing binding
them together and no years at all** - which is exactly the problem item B1 describes.

### B. THE EDITING MODEL - Leon's instructions, 2026-08-14

**B1. Homes must be repeatable and structured.** A person may have lived in many places.
Each home needs **place name, country, start year, end year** - every field optional, each
validated - and a person must be able to add as many as they want. Today `lived` and
`country` are separate flat facts with no years and no link between them, so "Tel Aviv,
Israel, 1998-2004" cannot be expressed at all. This needs a grouped structure (one
`group_id` per home, as `person_facts` already supports) and a repeating editor.

**B2. ONE "send to the keeper" per page, gathering everything.** Done on person-real
(2026-08-13): each facet used to draw its own button, so Leon saw two, pressed both, and one
stayed. **The same consolidation is still needed on every other editing page** - moment,
contribute, place. A contributor should make all their changes and send once.

**B3. Show what is waiting, per field.** After sending, the contributor should see which of
their edits are pending - and *only* those still awaiting approval. This already exists on
some fields (the violet "waiting" treatment); extend it to the rest.

**B4. Everything that can be multiple needs the same treatment.** Audited in
`person_facts`: **`lived` + `country` (homes), `langspoken`, `source`, `occupation`,
`kin`, `face`** are all repeatable. `langspoken` and `source` already use `chipsField` and
work; `occupation` is single today and should not be; homes are the broken case.

### C. A-NEXT (faces beside names) - BLOCKED ON A QUESTION
Done: timeline, curators, contribute-add. **Do not survey the rest blindly** - it is not
true that all the remaining pages show a placeholder circle, and an hour was lost assuming
so. Ask Leon: *which screens do you see a person's name without their face?*

### D. THE STRUCTURAL QUEUE - untouched for a week, and the largest
1. **Responsive rollout: 1 of 15 pages.** Only the tree is off the fake 390px phone frame.
   Leon uses an iPad; every other page shows him a phone-shaped strip. The designer's
   layouts have been ready since 2026-08-06 and `lf-layout.css` holds the token set,
   linked everywhere but deliberately inert. Order: canvas → subject → list → flow → games.
2. **`lf-auth` on the remaining pages.** Gate fields still differ (`#gPw`/`#gGo` on index,
   `#gPass`/`#gBtn` elsewhere) - every QC probe special-cases it, which is the smell of drift.
3. **Cold-open performance.** ~800ms of a person page is the session check before any query
   can run. Service worker; defer the 3D world past the gate.

### E. FINISH THE RETIREMENT
`people.display_name_retired`, `people.called_name_retired` and `name_variants_retired` are
renamed, not dropped, so anything still reaching for them fails loudly. **Drop them once
Leon has used the app for a day with no red "some of this did not load" bar.** A full audit
on 2026-08-14 found and fixed 21 readers; nine pages then swept clean with zero errors.

### F. SMALLER, KNOWN, UNBUILT
- Face tagging exists only on the moment page. Contribute now hands over to it, so this is
  answered - but the **reel** still has no "step into this moment" from its stories.
- The keeper's BUNDLE card: a new person and their tie still arrive as separate queue items.
- Nothing warns that a proposal was previously **declined** (duplicates of *waiting* ones
  are refused).
- `tree-bg-demo.html` is a design preview living in the app directory; delete when Leon says.
- The 18-item verification list from 2026-08-09 was never walked past item 3, though many
  items have since been fixed incidentally.

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

*The orientation table has pointed at "§4 PARKED" since 2026-08-09 and there was no such
section: it was lost in the consolidation. Restored 2026-08-14.*

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
