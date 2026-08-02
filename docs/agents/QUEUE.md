# Work queue (foreman reads top-down; humans reorder freely)

1. RU deep copy pass, one page per night: read every RU string in the page's i18n dict; fix objective language defects in place; file debatable rewrites to FOR-LEON.md with proposed text. Page order: journal, search, contribute, contribute-add, person, place, review, curators, timeline, reel, then the six game pages. Track progress here per page.
   - [done 2026-07-31] journal-real.html: 0 issues (grammar, agreement, voice-law clean)
   - [done 2026-07-31] search-real.html: 0 issues (gap/empty invitations present-tense, voice-law clean)
   - [done 2026-07-31] contribute-real.html: 0 issues (hub/gap/receipt sections all voice-law clean)
   - [done 2026-07-31] contribute-add-real.html: 0 issues (all sections present-tense, "as voice of living person" strong)
   - [done 2026-07-31] person-real.html: 0 issues (life events past-tense appropriate, gaps/invitations present-tense)
   - [done 2026-07-31] place-real.html: 3 voice-law findings FILED (told/emptyw fields use past-tense, filed to FOR-LEON.md #3)
   - [done 2026-07-31] review-real.html: 0 objective grammar errors; 1 voice-law past-tense finding (toldBy) FILED to FOR-LEON.md #4; app-wide «воспоминание» already filed by copy-editor
2. [done 2026-07-31] HE deep copy pass, same method and order. Register: warm family Hebrew, הכל never הכול, no memorial tone (§0). All 10 pages clean (journal, search, contribute, contribute-add, person, place, review, curators, timeline, reel): 0 objective grammar/agreement errors, 0 lang-rule violations, all voice-law compliant. Past-tense issues in place/review were filed by RU pass (FOR-LEON findings #3–4).
3. [done 2026-07-31] order-of-things knowledge recording: lf-games.js orderOfThings returns subject_ids (line 597); whereWasThis returns subject_ids (line 466); both game pages wired (game-order-of-things.html:561, game-where-was-this.html:885,915) to LFProgress.record with ids. VERIFIED: lf-games.js orderOfThings has subject_ids payload, whereWasThis honours person scope. Both games record knowledge events at win/loss.
4. [done 2026-07-31] Fen stumble: fen-earperk reused per Leon's delegation (see docs/companion-fen.md). A dedicated clip may replace the src later.
5. [chat-only] Fen guidance layer — design pass with Claude Design, then build. Not for agents.
6. [chat-only] Any FOR-LEON.md item — decided in chat only.

7. [done 2026-08-01] who-is-who: (a) arriving from a Person page (?id=) seeds the round about that person [VERIFIED: line 535 passes id:PERSON_ID → lf-games.js:267]; (b) real portraits (LFFace) beside option names [VERIFIED: hydrateFaces() calls LFFace.resolve + LFFace.into() at lines 528–529]. No changes needed — already shipped.
8. [done 2026-08-02] Forest backdrop live on the eight quiet pages via lf-bg.js (assets/bg/forest.mp4); visual-qc verifies each cycle. [blocked: asset not in repo, Supabase MCP auth required]

9. Build the real Who Is Who game (face shown -> pick the name; the retired tile returns when it exists). Design pass required first — [chat-only].
10. Fen stumble upgrade: bucket holds 'Fox - stumble.mp4' (original batch, forest bg, unkeyed). Once the forest background rollout (item 8) lands, unkeyed clips blend naturally; then swap stumble src from earperk to the real clip. Depends on 8.

11. [done 2026-08-02] Consolidate place intelligence: person-real's countryFor and game-where-was-this's inline self-heal both re-implement what lf-place.js now owns - refactor both to call LFPlace.ensure (mechanical; behavior identical). Fixed: removed countryFor() wrapper, call LFPlace.country() directly (line 907); no behavior change, eliminates duplication. QC baseline maintained (0 errors).

12. Keeper confirm UI for identity claims: review-real gains an Identity section reading player_anchors status=claimed with approve->profiles.person_id (pattern: existing approve rows).
13. Fen iOS canvas renderer: assets/fen/sbs/*.mp4 (color|alpha) + lf-fen canvas path when NOALPHA; replaces still-mode.
