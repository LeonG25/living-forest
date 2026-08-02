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
