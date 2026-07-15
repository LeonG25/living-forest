# Brief — Manage curators

> **Rev 2026-07-15 19:40** · Batch B · **a new page** · *(Design #10)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## The job
The keeper decides who else can tend the forest.

## What a curator is
Every contribution passes a keeper before the family sees it. Today there is **one keeper** and he does all of it. That does not survive contact with an extended family — and more importantly, **the keeper is a single point of failure for a thing meant to outlive him.** This page is where that begins to be solved.

## The tone problem, which is the whole problem
Every screen ever built for this is **an admin panel**: roles, permissions, a table of users, checkboxes. That is the wrong instrument entirely. Nothing about this family app is administrative — and **"who may look after our family's memories" is one of the most personal questions in it.** It sits far closer to trust than to access control.

Language matters more than layout here. This app has *keepers*, *curators*, *the family* — not admins, users, or roles. The right screen probably feels like **asking someone to help**, not granting a privilege.

## What it must do
- Show who tends the forest now, and what each looks after
- **Invite** someone to help
- Let a keeper step back — gracefully, and without the forest going untended
- Show what is waiting for approval, and who it is waiting on

## The question underneath
Does a curator look after **everything**, or after **something**? A person who knew the Odessa branch is the right reader for Odessa memories and the wrong one for Haifa. Scoped curatorship is more true to how families actually hold their knowledge — but it is more machinery, and machinery is what this page must not feel like. **We do not know the answer.**

## The one that must not be forgotten
**What happens when the keeper is gone?** The app exists so that memory outlives people; the keeper role must outlive the keeper. Nobody wants to design that screen and it is the reason the page exists. It does not need solving here, but it should not be designed *against*.

## States to draw
1. One keeper, nobody else — **today's real state**
2. Several curators, with things waiting
3. An invitation **sent, not yet accepted**
4. All three languages, RTL Hebrew
