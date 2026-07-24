# The Living Forest — Game-Feel Spec & Designer Brief

*Canonical brief for the design pass on all seven game play-screens. Decided with Leon,
2026-07-23. This governs copy, motion, sound, and the reward loop **before** and **during**
the designer pass, and the build that follows. Read this first; it outranks any per-game
improvisation. The point of this document is that the seven games stop being seven quizzes
and become **one game with seven ways to play**.*

---

## The spine — one idea, everything serves it

**Everyone's here — come and know your family.**

Present tense. Belonging, not a history book. A child leaves a session not having *studied
relatives* but feeling *these are my people, and I know them.* Every system below exists to
express this one idea. If an effect, a word, or a reward doesn't serve "come and know your
family," it doesn't belong.

The name already carries it: it is the **Living** Forest, not the remembered one.

---

## 0 · The voice-and-framing law (Leon's #9 — governs every line before any effect)

The single most important rule. Almost all the mood is set by wording, not graphics.

- **Present tense, always.** People *are*, not *were*. "Rita loves the sea — come see,"
  never "Rita loved." Present tense makes a person alive without a single special effect.
- **Meet / know / be with — never remember / preserve / bring back / wake.** The child is
  *getting to know family who are here*, not retrieving the dead or curating the past.
- **Reach for:** meet, get to know, visit, spend time, find, be with, come see, they're
  here, you know them now — *your people, the family, who they are*.
- **Drop entirely:** memory, remember, keep alive, wake, revive, the past, life story,
  ancestors, legacy, "in memory of," "those who came before," nostalgia of any kind.
- **"A memory / a moment"** is not "a memory." It's *a story they tell you* (present tense),
  or *a time*, or *a day* — "here's Efim by the sea," not "a memory from 1974." Keep the word
  "moment" only where it reads as *a scene you can step into*, never a faded snapshot.
- **The "Life" facet is not a résumé.** A few dated facts are a history book. Reframe toward
  *their world* — what they love, how they are, where they're happiest — texture that lets a
  child **feel** the person as if they were here now.

### The death clause (Leon's ruling)

Death is a plain, dated fact — shown as calmly as a birthplace, hidden by nothing and
dramatized by nothing.

- A person was alive for a whole life; before that they were not yet born; after death,
  nothing bad is happening. There is no reason to be sad on their behalf, and no reason to hide.
- **No** black frames, mourning tone, "late," memorial framing, or euphemism. **Also no
  concealing** — the existing "still alive / not" status and the death year are shown plainly.
  Prefer letting the years speak with no label at all (e.g. `1930–2010`).
- In the forest the person is **present**; their death is one fact among many, never the
  frame around them.
- If a family member's own story or photo touches on death, the **keeper** decides whether
  it's accepted — the **app never censors it** and imposes no special limit.

---

## The systems — each one expresses the spine

**1 · Juice — the feel of every touch.** The biggest single lever. A right answer doesn't
turn green, it *blooms*: motion (pop, squash-and-stretch, easing), light (a flare, a scatter
of particles), a warm chime, a phone buzz, and a half-beat of anticipation before the reveal.
A wrong answer *softly dims* and invites another try — it never scolds or buzzes angrily.

**2 · A forest companion.** A creature native to the forest — a firefly, a glowing
seed-sprite, a small owl (see Open Decisions). It lives in the corner, reacts to the player
(delights on a streak, tilts its head on a stumble, dozes when idle), and drops in between
rounds with a line. It gives the child *someone to play with* and is the thread that ties all
seven games into one world.

**3 · A world that responds and grows.** Never reward with a bare number — reward with the
forest itself. Each success buds a leaf, gathers fireflies, brightens the night, opens the
path ahead; a good run breaks into dawn; across days the tree fills out. The child makes the
forest **fuller and brighter by being in it** — nothing "comes back," it grows.

**4 · Momentum and collection.** Streaks and combos ("three in a row — the branch is
glowing"), a bar filling toward *everyone met*, and unlockables (a soft-focus face sharpens
as the child comes to know them; a hidden story opens). "You've met 12 of your family" is a
reason to come back tomorrow. Framed as *meeting*, never "collecting the dead."

**5 · Soft stakes and surprise.** Warmer/cooler (Find Them in the Crowd already has it),
dwindling hints, an **optional** gentle timer — tuned for children: curiosity, never
pressure. Then sprinkle surprise: a rare golden round, an old photo surfacing, small easter
eggs, a companion cameo.

**6 · Better verbs.** What the hand *does* separates a game from a test. Tap a face in the
crowd, drag a thread between two people, spin a photo onto the globe — physical, spatial
actions *feel* like play; tapping A/B/C feels like an exam. Prefer verbs over multiple-choice
wherever a game allows it.

**7 · Sound.** Half of game-feel and nearly free. An ambient forest hum, music that swells on
a streak, the companion's little voice, distinct tones for *right / warm / found*. Silence is
the tell of a quiz. (Respect a mute control and autoplay limits.)

---

## The binding rule

One companion, one bloom, one growing tree, one voice — the **same** across all seven games.
This is what makes them read as *one game with seven ways to play* rather than seven quizzes
in different coats. The coherence is decided here, in this brief, before the designer starts.

---

## Open decisions for the design pass (propose, don't assume)

1. **The companion — the biggest identity choice.** What it *is* sets the whole tone. The
   designer should propose 2–3 concrete companions (e.g. firefly / seed-sprite / small owl),
   each with a look, a personality, and its idle / delight / stumble / cameo behaviours.
2. **The bloom + world-response visual language.** The one shared success animation and the
   growing-forest states (leaf, fireflies, dawn, blossoming tree) — one vocabulary reused
   everywhere.
3. **Status wording** for someone who has died — leaning to years-only with no label
   (`1930–2010`); confirm or offer a neutral alternative.
4. **The sound palette** — ambient bed + the right/warm/found tones + companion voice.

---

## Scope & guardrails for this pass

- **The seven games:** Find Them in the Crowd (`crowd-real.html`), Who Is Who? / Whose Memory
  (`game-who-is-who.html`, rename parked), The Order of Things (`game-order-of-things.html`),
  Where Was This? (`game-where-was-this.html`), The Missing Voice (`game-missing-voice.html`),
  What Happened Next? (`game-what-happened-next.html`), The Tangled Thread
  (`game-tangled-thread.html`). All person-scoped, launched from the person's facets.
- **This is a design pass, not a mechanics change.** The games stay **engine-driven** — every
  challenge is generated from live data, never a baked snapshot (house rules §8 / Rule 9). The
  designer reshapes look, feel, motion, copy, sound, and the reward loop, not what a round *is*.
- **Foreground truth guardrail still holds:** gold = human-told, cool blue = app-derived,
  violet = waiting for the keeper. Colour freely in the sky; keep the two truths clear in the hand.
- **Design "alive":** dark base is fine, but backgrounds are colourful with motion / drifting
  light / depth (aurora, candle-glow, bokeh) — like the original Moment page and the Person
  page's moving light-ring.
- Every game goes through the designer **before** it is (re)built. No play-screen ships from
  this effort without a designer pass.
