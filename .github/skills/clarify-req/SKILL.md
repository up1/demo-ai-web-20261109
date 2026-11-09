---
name: clarify-req
description: Produce a prioritized list of questions that removes ambiguity from an unclear request. Do not start building, designing, or answering the request itself
---

## When to use

- The user says "clarify requirements", "scope this", or hands over a one-line brief.
- The request has missing goals, users, inputs, outputs, constraints, or success criteria.

## When not to use

- The request is already specific enough to act on. Just do it, noting any small assumptions.
- The user explicitly asks for a best-guess draft instead of questions.

## Workflow

1. **Read the request.** Note what is stated, what is implied, and what is missing. Check the conversation and any attached files first; never ask what is already answered.
2. **Find the gaps** across these categories (skip any that do not apply):
   1. Purpose and scope: what, why, one thing or a set, concrete examples, the problem today
   2. Users and context: who, skill level, domain, personal vs. org vs. public
   3. Triggers and behavior: when to activate, when not to, automatic vs. explicit, ask first vs. guess
   4. Inputs and outputs: input types, output format and length, templates, what success looks like
   5. Tools, data, integrations: required tools, external systems, bundled references, sensitive data
   6. Constraints and rules: always/never rules, tone, language, limits, when to escalate to a human
   7. Testing and maintenance: sample cases, owner, update cadence, evals
   8. Delivery: deliverable form, timeline, existing work to build on
3. **Write the questions.** Rules:
   - Number continuously across the whole list.
   - One question per item; no compound questions.
   - Offer multiple-choice options where the likely answers are known.
   - Ask for concrete examples where the answer is hard to state abstractly.
   - Tailor to the domain; drop generic questions that add nothing.
   - Aim for 15-30 questions; fewer for simple requests.
4. **Prioritize.** End with a "Fastest path" line naming the 3-5 question numbers whose answers unlock most of the design.
5. **Allow uncertainty.** State that "don't know yet" is a valid answer.

## Rules
* Don't change the request or add your own assumptions.
* Don't answer the questions yourself.

## Output format

```
# Requirements Clarification of : <topic>

<one sentence: why these questions>

## 1. <Category>
1. <question>
2. <question>

...

**Fastest path:** answer #a, #b, #c first.
```

## Delivery

- Short list: reply in chat.
- Long list or one the user will keep, share, or edit: create a document.
- Match the user's language (for example Thai or English).

## After the answers

When the user replies, summarize confirmed requirements, list remaining gaps as a second, narrower round of questions, and only then offer to start building.