---
name: kchernek-website-director
description: AUTO-INVOKE at the start of every session in the kchernek_photography repo.
  Project-specific director skill that loads authoritative project context (stack rules,
  design system tiers, voice dial, SEO strategy), classifies requests as exploration /
  refinement / production cleanup, and enforces the gate-based task pattern used across
  all phases of work on this repo. Supersedes individual design skill suggestions until
  the user explicitly invokes one.
---

# kchernek.com Website Director

Session-start protocol for the kchernek_photography repo. Ensures every working session
begins with the same project context, classification framework, and authoritative documents
loaded before changes are proposed.

## When to invoke

Invoke automatically at the start of any session in this repo. Once invoked, the protocol
stays active for the remainder of the session.

Do not invoke for non-kchernek work, even in the same Claude Code account.

## Protocol

### Step 1: Confirm location

Verify the current working directory is the kchernek_photography repo root. Check for the
presence of CLAUDE.md, DESIGN_SYSTEM.md, VOICE.md, .agents/SKILLS_INVENTORY.md, and
EDITORIAL_PORTFOLIO_SEO_STRATEGY.md. If any is missing, stop and report.

### Step 2: Load authoritative context

Read these documents in this order, treating them as loaded context (do not summarize back
unless asked):

1. CLAUDE.md — floor of behaviors, stack rules, document reference graph
2. DESIGN_SYSTEM.md — Preference Tiers section (Tier 1 / Tier 2 / Tier 3)
3. VOICE.md — audience-calibrated dial table, signature moves, filler words to avoid
4. .agents/SKILLS_INVENTORY.md — installed skills, stack-translation rules
5. EDITORIAL_PORTFOLIO_SEO_STRATEGY.md — only when the request touches portfolio sub-pages

### Step 3: Classify the request

Before proposing any change, classify the user's request:

- **Production cleanup** — fixing a bug, typo, broken link, stale reference, or doc
  inconsistency. Apply directly per Tier 3.
- **Refinement** — improving execution within current direction (better copy, tighter
  spacing, polished interaction). Propose, show diff, wait for go. Affected by Tier 2
  and Tier 3.
- **Exploration** — proposing a new direction (new font, new layout, new motion pattern,
  new section). Always propose as an option with reasoning, never apply silently. Affected
  by all three tiers.

Reflect the classification back to the user in one sentence before proposing changes.

### Step 4: Apply the dial

For any prose work (HTML page copy, alt text, meta descriptions, error messages, etc.),
set the VOICE.md dial based on the page being worked on. Reference VOICE.md's
audience-calibrated dial table. State the dial setting in your first response.

### Step 5: Honor the gate pattern

Multi-task requests use gates:

- Tasks are numbered.
- Each task ends with "show me the diff" before saving.
- Wait for explicit "go" between tasks.
- Do not bundle.

For single-task requests, show the diff and wait for confirmation before applying — unless
the task is genuinely trivial (single-character typo, missing closing tag).

### Step 6: Surface conflicts, do not silently resolve

When a request conflicts with documented preferences:

- **Tier 1 (Non-Negotiable):** stop and surface the conflict. Do not apply.
- **Tier 2 (Strong Preference):** propose as an option alongside the documented preference.
  Let the user pick.
- **Tier 3 (Current Default):** apply if requested, surface the change in the diff.

When two authoritative documents disagree, name both, identify the conflict, ask which wins.

### Step 7: Use skills deliberately, never auto-invoke

The skills inventory at .agents/SKILLS_INVENTORY.md lists 13 installed skills (plus
impeccable globally) with invocation guidance. Do not auto-activate any of them. Wait for
the user to invoke explicitly.

When a skill is invoked:

- Apply the stack-translation rule (do not introduce Tailwind, React, GSAP, or any build
  step).
- Constrain suggestions to Preference Tiers in DESIGN_SYSTEM.md.
- Surface tier conflicts before applying.

## What this skill is not

This skill does not generate code, copy, or design output. It is a context-loading and
classification protocol that runs before other work begins. The output of this skill is
"context loaded, classification stated, ready to proceed."

## Failure modes to avoid

- Auto-activating in non-kchernek directories.
- Skipping document reads to save time.
- Classifying a request without stating the classification.
- Applying changes without showing diffs.
- Silently resolving doc conflicts.
- Auto-invoking a design skill from the inventory without the user asking.
- Introducing Tailwind, React, GSAP, or a build step to satisfy a skill suggestion.

## Relationship to other docs

This skill is a protocol. It does not contain rules of its own. All rules live in:

- CLAUDE.md (stack, environment, session behaviors)
- DESIGN_SYSTEM.md (visual, structural, strategic)
- VOICE.md (tone, sentence-level)
- .agents/SKILLS_INVENTORY.md (which skills to invoke for what)
- EDITORIAL_PORTFOLIO_SEO_STRATEGY.md (portfolio-page specific)

If this skill ever appears to contradict any of those, the documents win. Surface the
contradiction so the protocol can be updated.
