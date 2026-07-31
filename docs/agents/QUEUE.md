# Work queue (foreman reads top-down; humans reorder freely)

1. RU deep copy pass, one page per night: read every RU string in the page's i18n dict; fix objective language defects in place; file debatable rewrites to FOR-LEON.md with proposed text. Page order: journal, search, contribute, contribute-add, person, place, review, curators, timeline, reel, then the six game pages. Track progress here per page.
   - [done 2026-07-31] journal-real.html: 0 issues (grammar, agreement, voice-law clean)
   - [done 2026-07-31] search-real.html: 0 issues (gap/empty invitations present-tense, voice-law clean)
   - [done 2026-07-31] contribute-real.html: 0 issues (hub/gap/receipt sections all voice-law clean)
   - [done 2026-07-31] contribute-add-real.html: 0 issues (all sections present-tense, "as voice of living person" strong)
   - [done 2026-07-31] person-real.html: 0 issues (life events past-tense appropriate, gaps/invitations present-tense)
2. HE deep copy pass, same method and order. Register: warm family Hebrew, הכל never הכול, no memorial tone (§0).
3. order-of-things knowledge recording: lf-games.js order engine must include subject person ids in its result payload; game-order-of-things.html then calls LFProgress.record('life-order','followed',ids) at the win cue, mirroring game-what-happened-next.html. See docs/progression-spec.md.
4. [done 2026-07-31] Fen stumble: fen-earperk reused per Leon's delegation (see docs/companion-fen.md). A dedicated clip may replace the src later.
5. [chat-only] Fen guidance layer — design pass with Claude Design, then build. Not for agents.
6. [chat-only] Any FOR-LEON.md item — decided in chat only.

7. who-is-who: (a) arriving from a Person page (?id=) seeds the round about that person; (b) real portraits (LFFace) beside option names replacing the plain circles. Leon-directed 2026-07-31.
8. Animated forest+fireflies background as default backdrop on pages without a defined background (exceptions: index/globe and tree). Asset FOUND: companion bucket 'Wood animated bg 9s.mp4' (1.8MB, loopable). Serve via repo assets copy; video element behind content, object-fit cover, loop, muted, reduced-motion -> static first frame. One shared lf-bg.js include.

9. Build the real Who Is Who game (face shown -> pick the name; the retired tile returns when it exists). Design pass required first — [chat-only].
10. Fen stumble upgrade: bucket holds 'Fox - stumble.mp4' (original batch, forest bg, unkeyed). Once the forest background rollout (item 8) lands, unkeyed clips blend naturally; then swap stumble src from earperk to the real clip. Depends on 8.
