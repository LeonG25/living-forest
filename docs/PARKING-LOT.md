# The Living Forest — Parking Lot

Living list of things to build later. Add freely; nothing here is committed to a date.

---

## Ideas & features (future)

### The Tangled Thread — game, hooks into the Person page
The lightweight **"how are you related"** path on the Person page is the seed for this game.
- That path runs from the **viewing player's own person-node** (via `profiles.id = auth.uid()` → `profiles.person_id`) → shortest path over `relationships` → the person being viewed. "A path not yet traced" when there is no path. Players can only be people already in the system (a profile with a non-null `person_id`).
- **The Tangled Thread game grows exactly here:** turn that static shortest-path into a *played* journey — trace the thread hop by hop, revealing each connecting relative in turn, until it lands on you.
- Open question to reconcile: an earlier note had Tangled Thread needing a "places lived" structure per person. The authoritative hook is now the Person-page relationship path; revisit whether places-lived is still wanted as a second thread.

### Idea 1 — Events on the globe, by year
Surface **world events and family events** (anyone/anything in the visible database) on the globe **for the year currently shown** on the year-wheel. Turning the wheel changes not just the family dots but also what was happening in the world and in the family that year.

### Idea 2 — Quest / escape-room game
An **escape-room-style chained quest**: the player hunts for clues and information, unlocks things, and progresses step by step through a chain of challenges — solving the whole task/riddle at the end.

---

## Games still to build (from roadmap)
- **The Missing Voice** — needs a "told by person" narrator field on memories.
- **The Tangled Thread** — see above; hooks into the Person page.

## Designed but not yet built
- **Timeline**, **Journal** — mockups exist; port to real data.
- **Story Reel** — referenced by the Person page "Reel" doorway; needs building so that doorway opens something real.
- **Tree, Memory Lane, Themed Threads, Thread-back-to-You, Gaps, Manage Curators** — written design only, no mockup yet.

## Cleanup / retirement (on consolidation)
- Retire `preview-globe.html`, the old Leaflet Places map, and the old 2D Forest home tab.
- Sweep untracked patch scripts from the working tree (`p2–p7.py`, `patch_globe.py`).

## Data prerequisites to add
- "told by person" narrator field on memories → The Missing Voice.
- "places lived" per person → possible second Tangled Thread; reconcile with the relationship-path hook.

---

## Person page v2 — gaps to close later
- **Per-person "Find Them in the Crowd".** The Crowd game builds its own rounds and has no target param, so the Person page Play button enters the game generally. Add a `?id=` (or similar) so Play pre-loads a round featuring this person; then the "Uncover {name}" copy becomes literally true.
- **Story Reel.** The Person page shows a Reel doorway + a Story-Reel card, both currently coming-soon. They light up once the Story Reel page is built (see "Designed but not yet built").
- **i18n on the live "-real" pages.** `home-real`, `globe-real`, `crowd-real`, and `person-real` are English-only; the MutationObserver i18n system, per-person name variants, and story/photo translation aren't wired into them yet. Port i18n onto the real pages as a dedicated pass.

---

## Timeline — needs a design decision before it earns its place
The current `timeline-real.html` was **engineered, not designed** — it never had a Claude Design pass. Like every page/card/menu, it must be designed in Claude Design first. Three things to settle:

1. **Design concept (in Claude Design).** Do the concept + visual there, then re-engineer the page to match — don't hand-build the look.
2. **Filter / scope.** As shipped it's one global, chronological list of *every* dated photo/story in the whole database, so it grows without bound as contributors add, and largely duplicates what people, places, and the globe year-wheel already surface. It needs a scope.
3. **Purpose.** What is a timeline actually *for* here? Candidate directions:
   - **A life in order** — scoped to one person (this is really the Person page's Story/Reel territory, and the "Put Their Life in Order" game already lives near it).
   - **A filtered slice** — pick a person, place, or decade, then see just that in order.
   - **Resurfacing** — "this week, years ago": a few dated memories surfaced to now, not an infinite list.

Note: the **Journal** port carries the same risk — confirm it has a real Claude Design pass before engineering it, rather than porting the old prototype screen.
