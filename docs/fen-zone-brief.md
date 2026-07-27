# Design brief — The Fen Zone (companion strip)

Status: brief, awaiting designer pass. Owner decision locked below; open questions for the designer at the end.

## The problem it solves
Fen must always be *present* on game screens, but must never cover content ("he should only help, not hide things"). A companion placed over a scrolling, content-full screen always overlaps something. The fix is not dodging — it is **reserved space**.

## The model — two frames (locked)
Every game screen with Fen is split into two frames:
1. **Page frame** (top): the game's content, in its own scroll area. It **ends at the top of the Fen strip** and never enters it.
2. **Fen strip** (bottom): a **fixed** band that does not scroll. It is Fen's ground and home. Content can never pass under him because the scroll area simply stops where his strip begins.

As you scroll, content slides in the top frame; Fen stays put in his strip, idling/reacting.

## The strip's world (locked)
- The strip's background **is the forest** — animated (the firefly loop) by default, with a **static forest still as a lighter/perf fallback**. This is Fen's world; he sits *in* the forest.
- Fen's transparent clip sits on the **left** of the strip, on the forest. (This is why it composites cleanly now — transparent Fen over a forest that lives only in the fixed strip: continuous, no scroll, no seam. It quietly resolves the long "one world" problem.)
- The strip's **open (right) side** is not wasted — it is (a) Fen's **movement lane** (he can walk in / shift along it; the "entrance" clip lives here), and/or (b) a home for **persistent game controls** (streak ×N, a "next"/"skip" affordance). Designer to balance.

## Constraints (hold these)
- **Fen's size stays exactly as-is** — do not resize him.
- Strip height ≈ Fen's size + a little breathing room (~a slim strip, not a half-screen).
- Colour law still governs the **page** frame: gold = human-told, cool blue = fact. The strip is Fen's warm forest.
- Present-tense voice (§0): this is "where Fen is," now.
- **One pattern across all seven games** — consistent, not per-page.

## Open questions for the designer
1. Exact strip height relative to Fen; behaviour on very small viewports.
2. The **horizon** between the two frames — hard edge, soft gradient, or the forest fading up into the page's dark sky? (Prefer it reads intentional, like ground meeting air.)
3. Animated vs static forest as the default, and how motion in the strip coexists with reading above it (not distracting).
4. What lives in the strip's open side — movement only, or movement + persistent controls — and how that looks.
5. Empty / short-content states: when the page frame isn't full, how do the two frames sit together.
6. How the page's bottom edge meets the strip (a shelf/shadow so content doesn't feel cut off).

## Current interim state (to replace)
Right now `lf-fen.js` reserves bottom padding so tappable answers clear him, and he's a fixed transparent video bottom-left. That's a stopgap; this brief is the real pattern to design and then build.
