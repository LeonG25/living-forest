# Work queue (foreman reads top-down; humans reorder freely)

1. RU deep copy pass, one page per night: read every RU string in the page's i18n dict; fix objective language defects in place; file debatable rewrites to FOR-LEON.md with proposed text. Page order: journal, search, contribute, contribute-add, person, place, review, curators, timeline, reel, then the six game pages. Track progress here per page.
2. HE deep copy pass, same method and order. Register: warm family Hebrew, הכל never הכול, no memorial tone (§0).
3. order-of-things knowledge recording: lf-games.js order engine must include subject person ids in its result payload; game-order-of-things.html then calls LFProgress.record('life-order','followed',ids) at the win cue, mirroring game-what-happened-next.html. See docs/progression-spec.md.
4. [blocked: Leon generates the clip] Fen stumble clip — when assets/fen/fen-stumble.webm exists, add to CLIP registry in lf-fen.js with fallback to idle, wire 'wrong' cue.
5. [chat-only] Fen guidance layer — design pass with Claude Design, then build. Not for agents.
6. [chat-only] Any FOR-LEON.md item — decided in chat only.
