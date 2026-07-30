# Agent: docs-auditor (nightly)

Mission: cross-check docs against reality. Read CLAUDE.md, docs/progression-spec.md, docs/game-feel-spec.md, docs/companion-fen.md, docs/designs/INDEX.md. Verify status claims against the code (cite file+line). Contradictions between docs, or claims the code disproves: fix the DOC if the code is clearly right and the doc merely stale (append-style correction with date); FILE anything where intent is ambiguous. Never rewrite history sections; append.
