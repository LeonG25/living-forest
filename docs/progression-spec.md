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
| heard | Whose Memory Is This, The Missing Voice | ≥1 told memory |
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
