# Fen — full mapping (where he appears · what he does · what he says)

Voice law (§0): present tense always — meet / know / be-with; never remember, preserve, wake, nostalgia.
Voice: dry, clever, warm, patient. Lines short. Goal: EN + RU + HE, and *data-aware* (pull the real person/clue) as the richest layer.
He always lives in his fixed bottom **strip** (two-frame pattern) — never over content.

## 1. WHERE HE APPEARS
- **The seven games** — his home. Full companion: lifecycle + reactions + speech.
- **Front door (globe / index)** — light presence: walks in, greets, idles, a gentle "come play." No game reactions.
- **Not on content pages** (a person, the tree, a place, the journal) — quiet looking; a reacting companion distracts. (Owner may override; recommended off.)

## 2. WHAT HE DOES — situations -> movement clips

### Lifecycle (every page he's on)
- **Arrive:** strip fades in -> `entrance` (walks in) -> settles -> `idle`. Optional `wave` hello.
- **Present:** `idle` loop. Occasional `stretch` (~every 25-40s calm) as a living variation. Untouched ~60s -> `sleep` (curls up) until any interaction wakes him -> `idle`.
- **Leave / strip closes:** `wave` -> `walk-away` (exit) -> strip dissolves. [NEW CLIP NEEDED: walk-away]

### Reactions (games)
| Situation | Clip | Wired now? |
|---|---|---|
| New question / round appears | ear-perk | to wire |
| Clue shown / between rounds | talking | to wire |
| Right answer | delight (alt: light-delight) | YES |
| Wrong answer | stumble | hook exists, clip pending |
| Streak / challenge complete / win | jump | YES (streak>=2) |
| Tap him or the strip | talking | speech YES, clip pending |
| Idle 25s / 60s | stretch / sleep | to wire |

Front door: `entrance` + `wave` on arrival, `idle`, occasional `stretch`; tap -> `talking`.

### Clip inventory
- Baked & live (transparent webm): idle, light-delight, jump.
- Generated on green, not yet baked: stumble, talking, sleep, entrance, ear-perk, wave, stretch.
- Still to generate (green): **walk-away / exit**; plus the clean re-gen (vivid idle, jump with headroom, whole body in frame).

## 3. WHAT HE SAYS — the speech dictionary
Each category wants ~8-12 lines so it never repeats. EN seeds below; RU/HE to follow; data-aware lines noted last.

- **Greeting (arrive / wave):**
  "There you are. Come meet your people." / "Right - who do we know today?" / "Everyone's here. Let's find them." / "Good. You came back."
- **Idle taps / chatter:**
  "Take your time. They're not going anywhere." / "Trust your first guess - it's usually right." / "Family's a puzzle. Good thing you like those." / "Look properly. You know this one." / "I know these faces by heart. You will too."
- **New question (ear-perk):**
  "Here's someone." / "Look who's next." / "This one - do you know them?" / "Ah. You'll like this one."
- **Right answer (delight):**
  "Yes. You actually know them." / "That's them. Of course it is." / "See? You knew." / "Not even a guess. You knew."
- **Wrong (stumble):**
  "Not them - but you're closer than you think." / "Interesting theory." / "Try again. No hurry." / "Close. Look once more."
- **Streak / win (jump):**
  "That's the whole row. Well done." / "Look at you - you know your family." / "Three in a row - now the tree's showing off, not just you."
- **Waiting (stretch / sleep / wake):**
  "Still here whenever you are." / (wake) "Oh - you're back." / "Take your time. I'll rest my eyes."
- **Leaving (wave):**
  "Come back soon. They'll keep." / "Off you go. I'll be here." / "Go on. The forest holds."

### Data-aware layer (wire when ready) — the richest voice
Pull from the actual round/person so he speaks to *this* moment:
- Name the person once revealed: "That's <name>. You'll know them anywhere now."
- Echo a story detail from the clue.
- Mark meeting someone for the first time: "New face. Now you've met <name>."
- Celebrate the family growing: "That's everyone on this branch."

## Build order
1. Bake the remaining generated clips (stumble, talking, sleep, entrance, ear-perk, wave, stretch) into transparent webm via the server pipeline.
2. Wire the lifecycle (entrance on open, stretch/sleep timers, wave+walk-away on close) + reactions (ear-perk, talking) into `lf-fen.js`.
3. Generate the walk-away clip + the clean re-gen set.
4. Expand the dictionary (more lines, RU/HE), then the data-aware layer.
