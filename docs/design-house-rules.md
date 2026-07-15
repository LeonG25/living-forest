# The Living Forest — design house rules

> **Revision:** 2026-07-15 19:05 (UTC+2) · authority: `docs/HANDOVER.md`
> **Extracted from the verified Design #1** (`docs/designs/2026-07-15--person--v1.html`, QC passed 2026-07-15), not written from memory. Where this document and that file disagree, **the file wins** — and tell us.

**How to use this:** paste this whole file at the end of every Claude Design brief. The brief above it should describe **only that one page**. This appendix carries everything shared, so briefs stay ~3KB instead of ~11KB.

---

## 1. The soul

A family-history app for an extended family and two children. It preserves and celebrates memories across generations.

**It is not competitive.** No leaderboards, no rankings, no beating anyone. Progress means **lighting a person up** — the more the family tells, the more of them you can see. That is the only score.

Tone: warm, quiet, unhurried, a little reverent. Never chirpy, never corporate, never gamified-for-its-own-sake.

---

## 2. Rules that never bend

1. **Nothing reaches the family until the keeper approves it.** Every contribution is a *suggestion* first.
2. **Never blend a human's telling with a machine's guess.** See §4 — this is the heart of the app.
3. **Three languages, always: English · Russian · Hebrew.** Hebrew is RTL. Not an afterthought, not a toggle bolted on.
4. **Everything is editable in place.** No separate edit page — a field is just a field; the portrait has its control on the image.
5. **Resting-open.** Content sits open on the screen. Do not hide things behind accordions or tabs the user must hunt through.
6. **Games are a core joy, not an afterthought.** They must not feel buried.

---

## 3. The visual system — exact values

### Ground
```css
background:#04070e;
background:radial-gradient(150% 100% at 50% -6%, #12233c 0%, #0a1526 44%, #04070e 100%);
```
A night sky. Everything else is light on it.

### Palette — use these, do not invent
```css
--cream:#f4ecdb;  --muted:#9db0cc;  --dim:#6f83a3;
--hair:#ffffff18; --panel:#ffffff0b;
--gold:#f3cd84;   --gold-hi:#ffe6ad;    /* a human told us this */
--cool:#7fb4d8;   --cool-hi:#a9d2ee;    /* the app worked this out */
--edit:#c9a2ff;   --edit-hi:#ddc6ff;  --edit-soft:#efe6ff;   /* waiting for the keeper */
--leaf:#8fd6a0;   /* growth, used sparingly */
```
Auto-translation indicator: `#9a8bbd`.

### Typography
| Face | Role |
|---|---|
| **Newsreader** (serif) | display, names, titles, anything a person said |
| **Hanken Grotesk** (sans) | UI, body, controls |
| **Azeret Mono** (mono) | eyebrows and small labels — uppercase, `letter-spacing:.24–.28em`, 9–11px, `--dim`/`--muted` |
| **Frank Ruhl Libre** | **Hebrew / RTL** — substitutes for Newsreader |

Google Fonts. If a handoff bundles fonts as blobs we substitute these.

### Motion
Signature easing: `cubic-bezier(.16,.8,.28,1)`. Durations **.2s–.42s**. Nothing faster (jarring), nothing slower (sluggish). Motion is a settling, not a bounce.

### Icons
Inline stroke SVG on a 24 box, ~1.7 stroke, `currentColor`. No icon fonts, no emoji as UI.

---

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

**Show every state.** Published, suggested (violet + author + waiting chip), auto-translated, empty, locked. A design that only draws the happy path is not finished — the empty and waiting states are most of the real app's life.

**All three languages**, including RTL Hebrew.

---

## 9. Quality floor

- Mobile first. Thumb-reachable. Real families on real phones.
- Every interactive thing has a visible resting state, a hover/press state, and a focus ring.
- Nothing is conveyed by colour alone — the guardrail colours always carry words too.
- Empty states are **invitations**, not apologies: *"No one has told the story of this afternoon yet."* + *"Ask someone who might remember →"*
- Real-length content: Russian runs ~20% longer than English; Hebrew names are short and RTL. Do not design to lorem.
- **Do not hand-fuse two visual languages.** If a page needs to merge ideas, say so and we will brief it properly. Interpretation is our failure mode; fidelity is the fix.
