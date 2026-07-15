# Brief — Person page: three more name parts

> **Rev 2026-07-15 19:40** · Batch A · **a delta, not a redraw**
> **Append `docs/design-house-rules.md` below this brief before sending.**

## What exists
The Person page is designed and built: eight facets — Name, Face, Life, Places, Story, Kin, Reel, More. The **Name** facet currently draws: display name, given, family, maiden, nicknames (a list, with *add a nickname*), and a former surname (*"was Golnik"*).

**Do not redraw the other seven facets. Do not restyle anything.** We want the Name facet, and only the Name facet, with three fields added.

## What we need
Three more name parts, **all optional**, **all per-language**:

| Field | What it is | Example |
|---|---|---|
| **called** | the everyday form of the formal name | Маргарита → **Рита** · Леонид → **Лёня** |
| **patronymic** | father's name, as Russian and many cultures use it | Мироновна |
| **honorific** | a title that belongs to the name | Dr · Savta |

### The distinction that matters
**`called` is not a nickname.** *Рита* is what Маргарита is actually called — it is her name, in everyday use. *Ritaleh* is a pet name and belongs in `nicknames`, which is a list. `called` is a single value per language. **A person can have both, and they must not look alike.**

### Real data to draw with
Rita Golnick, Russian: given **Маргарита** · called **Рита** · family **Бетито-Гольник** · patronymic *(none yet)*
Rita Golnick, Hebrew: given **ריטה** · family **בטיטו-גולניק** · called *(none)*
Rita Golnick, English: display **Rita Golnick** · nothing else set

That is the real shape of the data: **mostly empty**. Most people have two or three parts, not seven. **Design for the sparse case first** — a Name facet with three fields filled and four unset is the normal one, not the exception.

## States to draw
1. **Set + published** — the ordinary case
2. **Unset** — the field is not there. How does someone *add* a patronymic that has never existed? The facet already has *add a nickname* for the list; single fields need an equivalent that does not clutter a facet where most slots are empty.
3. **Suggested** — violet, *"Suggested by Michael"* + waiting chip, **on that one field alone**. Michael may suggest only the maiden name; Leonid may suggest only the patronymic, at the same time, on the same person. Each is approved or declined by itself. **Never one approve button across several fields.**
4. **Auto-transliterated** — the machine can guess a Russian or Hebrew name from the English. It must be marked (`#9a8bbd`) and it must offer the family the chance to correct it. Transliteration is gender-aware (Церлин → **Церлина**).

## The real question
Seven optional name parts × three languages is a lot of surface for a facet that is mostly empty. **The design problem is not the fields — it is not drowning the sparse case.** Solve that and this is done.
