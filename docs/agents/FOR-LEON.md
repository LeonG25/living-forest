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
