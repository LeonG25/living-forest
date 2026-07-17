# The Living Forest — design house rules

> **Revision:** 2026-07-15 20:15 (UTC+2) · authority: `docs/HANDOVER.md`
> **Extracted from the verified Design #1** (`docs/designs/2026-07-15--person--v1.html`, QC passed 2026-07-15), not written from memory. Where this document and that file disagree, **the file wins** — and tell us.

**How to use this:** paste this whole file at the end of every Claude Design brief. The brief above it should describe **only that one page**. This appendix carries everything shared, so briefs stay ~3KB instead of ~11KB.

---

## 1. The soul

A family-history app for an extended family and two children. It preserves and celebrates memories across generations.

**It is not competitive.** No leaderboards, no rankings, no beating anyone. Progress means **lighting a person up** — the more the family tells, the more of them you can see. That is the only score.

Tone: warm, quiet, unhurried, a little reverent. Never chirpy, never corporate, never gamified-for-its-own-sake.

---

## 2. What is yours, and what is not

**You are the designer. We are not.** We want work that does not look like everything else — in layout, in colour, in motion, in dimension. If your answer is stranger than ours, say so and **insist**. We will take a strong opinion over a safe one every time.

There is exactly **one** condition: **it has to work with what the app actually does.** Below is that line, drawn honestly.

### Yours — decide freely, and argue with us
Layout · composition · colour · type at every scale · motion and its character · 2D or 3D · depth, light, space · what a page is even shaped like · what to throw away.
**The globe and the night sky already exist — 3D is native here, not a stretch.**

### Not yours — because these are the app, not its style

1. **Three provenance states, always distinguishable, never blended.**
   The app's whole promise is that a family's memory is never dressed up as a machine's guess. So every value on screen says where it came from: **a human told us** · **the app worked it out** · **waiting for the keeper**. Today those are gold, cool blue, and violet — **the meaning is fixed; the colours are yours.** If you have a better system, propose it and we will re-skin the existing pages to match. What we cannot have is one page diverging alone.
2. **Nothing reaches the family until the keeper approves it** — and **attribution is per-field**. Michael may suggest only a maiden name while Leonid suggests only a patronymic, on the same person, at once. Each is approved alone. Never one button over several fields.
3. **English · Russian · Hebrew, all three, always. Hebrew is RTL** and mirrors completely.
4. **Everything is editable in place.** No edit mode, no edit page.
5. **It is not competitive.** No points, levels, ranks or leaderboards. Progress means **lighting a person up** — the more the family tells, the more of them you can see.
6. **The data is what it is.** Do not design fields we cannot store; if you need one, say so and we will add it.

### The failure we are afraid of
Not weirdness. **Blandness.** Every family-history product on earth looks like a database with a serif font, and every "manage people" screen ever built is an admin panel. If a brief below tempts you toward the familiar version of that page, **that is the brief failing, not you.** Go somewhere else and tell us why.

---

## 3. What is currently true

Useful as ground, not as law. Everything here is **evidence of where the app is**, extracted from the one page that exists and has been verified — `2026-07-15--person--v1.html`. Depart from it deliberately, not accidentally.

### Ground
```css
background:#04070e;
background:radial-gradient(150% 100% at 50% -6%, #12233c 0%, #0a1526 44%, #04070e 100%);
```
A night sky. Everything else is light on it.

### The palette in use today
```css
--cream:#f4ecdb;  --muted:#9db0cc;  --dim:#6f83a3;
--hair:#ffffff18; --panel:#ffffff0b;
--gold:#f3cd84;   --gold-hi:#ffe6ad;    /* a human told us this */
--cool:#7fb4d8;   --cool-hi:#a9d2ee;    /* the app worked this out */
--edit:#c9a2ff;   --edit-hi:#ddc6ff;    /* waiting for the keeper */
--leaf:#8fd6a0;   /* growth, sparingly */
```
Auto-translation indicator: `#9a8bbd`.

### Type in use today
**Newsreader** (serif) — display, names, anything a person said · **Hanken Grotesk** (sans) — UI and body · **Azeret Mono** — eyebrows and small labels, uppercase, `letter-spacing:.24–.28em` · **Frank Ruhl Libre** — **Hebrew / RTL**, substituting for Newsreader.

### Motion in use today
`cubic-bezier(.16,.8,.28,1)`, **.2s–.42s**. Motion settles; it does not bounce.

### Icons
Inline stroke SVG, 24 box, ~1.7 stroke, `currentColor`.

## 4. The truth guardrail — the heart of it

**Every value on screen must declare where it came from.** A human's memory and a machine's inference must never wear the same clothes. This is not decoration; it is the promise the app makes to the family.

| Provenance | Colour | Says |
|---|---|---|
| **A human told us** | `--gold` #f3cd84 | *"Told by the family"* |
| **The app worked it out** | `--cool` #7fb4d8 | *"Assembled by the app"* |
| **Waiting for the keeper** | `--edit` #c9a2ff | *"Waiting for the keeper"* |
| **Machine-translated** | `#9a8bbd` | *"auto-translated"* + an offer: *"tell it properly"* |

**Never blend them.** A gold value with a cool halo is a lie. If something is part-told and part-inferred, show the parts separately.

**Auto-translation is always marked and always escapable** — the little `autotr` line offers the family the chance to tell it in their own words instead. That offer is the point: a machine translation is a placeholder for a human's voice, never a replacement.

---

## 5. The keeper flow — every field, every time

Any value can be in one of three states:

1. **Published** — gold or cool, per §4. This is what the family sees.
2. **Suggested** — violet `--edit`. Carries **who suggested it**: *"Suggested by Michael"*, plus a *"waiting"* chip.
3. **Declined** — gone from view.

**Attribution is per-field, not per-form.** Michael can suggest only a maiden name; Leonid can suggest only a patronymic; each carries its own author and its own approve/decline. **Never design a single approve button that swallows several unrelated fields.**

The keeper sees `Approve` / `Decline` on each. The contributor sees their own suggestion in violet with the waiting chip.

---

## 6. Three languages — EN · RU · HE

- **Every** label, value, and piece of copy exists in all three. Write all three in the handoff; do not stub RU/HE.
- **Hebrew is RTL** — `dir='rtl'`, mirrored layout, **Frank Ruhl Libre** for display type.
- Names in particular are **per-language** and have parts: `given · called · family · patronymic · maiden · honorific · nicknames[]`. All optional except what the person actually has.
  - **`called` ≠ `nickname`.** `called` is the everyday form of the formal name (Маргарита → **Рита**; Леонид → **Лёня**). `nickname` is a pet name (*Ritaleh*) and is a **list**.
- Transliteration is gender-aware (feminine surname forms: Церлин → **Церлина**).

---

## 7. Games live inside facets

A game is **not** its own icon and **not** its own destination. It sits inside the facet it exercises, scoped to the person on screen. Every game needs:

- **Entry** — a play marker on the facet, plus a card: icon · name · one-line sub · `Play`
- **Locked** — when there is not enough yet, say so warmly and say what would open it: *"Add a story and this opens"* — with a lock glyph, never a dead button
- **Scoped** — the game is about **this person**: *"Scoped to Rita"*
- **Return** — finishing lights the person up a little more

**Kindling is the progress model.** A facet's fill drives its glow directly:
```css
box-shadow: 0 0 calc(4px + var(--k)*18px) calc(var(--k)*3px) …
```
`--k` is 0→1. The payoff line is *"Six of eight facets kindled"* — never points, never a level, never a rank.

---

## 8. What to deliver — read this twice

**Deliver flat, static, self-contained HTML + CSS.** One file. Inline the CSS and any JS.

**Do not deliver a compiled React bundle.** We can currently rescue one — both we have received happened to embed the rendered page as a JSON string in `<script type="__bundler/template">` — but that is a lucky property of the export tool, **not a guarantee**, and it has cost us real time twice.

If flat HTML is impossible: **screenshots** are the next best thing, then a **hosted URL**.

**Deliver the page, never a piece of it.** The unit of delivery is a whole screen exactly as it will look in the app — not a facet, not a component board, not a specimen sheet. If a brief says *"a delta, not a redraw"*, that limits **what you change**, not **what you draw**: redraw the whole page with the change in it, and leave everything else byte-identical. We reproduce handoffs verbatim; we never hand-fuse a fragment into an existing page, because that is how two visual languages get welded together badly (§2, the failure we are afraid of).

**Nothing on the canvas that will not ship.** No titles naming the deliverable, no annotation, no rationale, no "design decisions" panel, no open-questions list. Those go in the accompanying message, not painted onto the artboard. **A person who has never read the brief should be unable to tell the design from a screenshot of the running app.**

**The page is a template; the person in it is data.** There is no "Rita Golnick page" and no "Tel-Aviv page" — there is a **Person page** and a **Place page**. Rita and Tel-Aviv are example content standing inside them. Every person gets the same page with their own information. Design the page, not the example.

**Several states may sit side by side as separate whole phone frames** (see `2026-07-13--moment-directions--v1.html`). Each frame must still be a complete page. A board of fragments is not a delivery.

**Show every state.** Published, suggested (violet + author + waiting chip), auto-translated, empty, locked. A design that only draws the happy path is not finished — the empty and waiting states are most of the real app's life.

**All three languages — through the switch, not by triplication.** The app shows a given piece of content **once**, in the reader's selected language. So does the design: one page, one language on screen, a working language control that flips it (EN · RU · HE, Hebrew mirroring to RTL). Do **not** draw the same story three times side by side — that is a translation demo, not the app. The point of RU and HE is to prove the layout survives them (Russian runs ~20% longer; Hebrew mirrors completely), and the switch proves that better than three copies do.

---

## 9. Quality floor

- Mobile first. Thumb-reachable. Real families on real phones.
- Every interactive thing has a visible resting state, a hover/press state, and a focus ring.
- Nothing is conveyed by colour alone — the guardrail colours always carry words too.
- Empty states are **invitations**, not apologies: *"No one has told the story of this afternoon yet."* + *"Ask someone who might remember →"*
- Real-length content: Russian runs ~20% longer than English; Hebrew names are short and RTL. Do not design to lorem.
- **If a brief is wrong, say so.** Three pages have already dissolved under inspection because we named a concept and assumed a page. If a brief below describes something that should not exist, or should be part of something else, **that is the most valuable thing you can tell us.**
