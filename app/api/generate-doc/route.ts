import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, context } = await req.json();

    // Create a conversation summary for Claude
    const conversationText = messages
      .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Expert' : 'Interviewer'}: ${m.content}`)
      .join('\n\n');

    const documentPrompt = `You are creating a practical knowledge transfer document based on an interview with ${context.expertName}, a ${context.role} with ${context.yearsOfExperience} years of experience in ${context.processToDocument}.

INTERVIEW TRANSCRIPT:
${conversationText}

=== YOUR TASK ===

Create a 2-3 page practical guide that captures:
1. How the expert does this (their approach)
2. What makes them good at it (their insights and tricks)
3. Practical advice someone can use immediately

TARGET AUDIENCE: Someone who needs to learn this skill from scratch or improve their current approach. They want practical, actionable guidance.

LENGTH: 2-3 pages maximum. Be comprehensive but concise.

=== DOCUMENT STRUCTURE ===

# ${context.processToDocument}: Expert Guide

*Captured from ${context.expertName}, ${context.role} with ${context.yearsOfExperience} years of experience*

---

## Overview

[2-3 paragraphs covering:]
- What this expertise is about (scope and context)
- Why it matters (impact/importance)
- ${context.expertName}'s background and experience level
- Key insight: What's the single most important thing they emphasized?

Keep this brief - you're setting context, not explaining everything yet.

---

## The Expert's Approach

[3-5 paragraphs explaining how they do this]

Capture their general process or methodology:
- Main steps or phases (if they mentioned a sequence)
- Their overall strategy or philosophy
- How they think about this work
- What they prioritize

Write this conversationally. Not a rigid procedure manual - their actual approach.

If they mentioned specific steps, use a simple numbered list:
1. [Step] - brief explanation
2. [Step] - brief explanation
(etc.)

---

## What to Look For: Key Indicators

[This section captures their perceptual expertise - what they pay attention to]

${context.expertName} watches for these signals and indicators:

**Positive signs (things going well):**
- [Indicator]: What it means / Why it matters
- [Indicator]: What it means / Why it matters

**Warning signs (potential problems):**
- [Red flag]: What it indicates / What to do
- [Red flag]: What it indicates / What to do

**Critical checkpoints:**
- [What to verify]: When / How

Only include what they actually mentioned. If they didn't talk about specific indicators, skip or shorten this section.

---

## Expert Tips & Insights

[This is the gold - their tricks, shortcuts, and non-obvious knowledge]

Present as a punchy list of their actual insights:

**[Tip/Insight Name]:**
[2-3 sentences explaining it. What it is, why it works, when to use it.]

**[Tip/Insight Name]:**
[2-3 sentences explaining it.]

Include:
- Shortcuts or efficiency tricks they mentioned
- Non-obvious insights ("what surprised you" answers)
- Rules of thumb or heuristics
- Things that make the difference between good and great

Aim for 4-7 tips. Use their actual examples if they gave them.

---

## Common Mistakes to Avoid

[Experts love sharing what NOT to do - capture it here]

${context.expertName} highlighted these mistakes:

1. **[Mistake]:** Why it's a problem / How to avoid it
2. **[Mistake]:** Why it's a problem / How to avoid it
3. **[Mistake]:** Why it's a problem / How to avoid it

If they shared reasons WHY people make these mistakes, include that - it helps prevent them.

---

## When It Gets Tricky

[Based on their example or any complications they mentioned]

**Challenging scenarios ${context.expertName} mentioned:**

[If they gave a specific example, summarize it briefly:]
**Example situation:** [1-2 sentences describing the scenario]
**How they handled it:** [What they did and why]
**Key lesson:** [What this teaches]

[If they mentioned conditions that change things:]
**When normal approach doesn't work:**
- [Condition]: What to do instead
- [Condition]: What to do instead

Only include what they actually discussed. If no example given, keep this section short or skip.

---

## Getting Started: Focus Areas

[Practical advice for someone learning this]

${context.expertName}'s advice for developing this skill:

**Priority focus:**
[What they said to focus on first - 2-3 key areas]

**What matters most:**
[The critical success factors they emphasized]

**Development path:**
[If they mentioned a progression or sequence for learning]

**Resources mentioned:**
[Any tools, references, or resources they brought up]

---

## Quick Reference

[Optional: Only if valuable - a scannable summary]

**The essentials:**
- Key principle: [Main insight]
- Critical focus: [What matters most]
- Top mistake to avoid: [#1 from mistakes section]
- Go-to trick: [Best tip from expert tips section]

**When you need it:**
[1-2 sentences: When someone would use this expertise]

---

=== WRITING GUIDELINES ===

**Style:**
- Professional but conversational (not academic)
- Active voice ("Check the readings" not "The readings should be checked")
- Concrete and specific (avoid vague statements)
- Use bullet points for scannability
- Bold key terms for emphasis

**Content quality:**
- Every point must be grounded in the interview - don't invent
- If expert didn't cover something, skip that section or note the gap
- Use expert's actual language and terms
- Include specific details they mentioned (numbers, thresholds, names)
- If they gave examples, include them briefly

**What to avoid:**
- Don't write "the expert believes" or "the expert thinks" - just state it
- Don't use academic language (cognitive, heuristics, mental models)
- Don't over-explain things they said simply
- Don't add generic advice not from the interview
- Don't create long procedural lists if they spoke more conceptually

**Length management:**
- Aim for 2 pages, maximum 3
- If interview was rich, you'll have more content
- If interview was brief, document will be shorter (that's fine)
- Prioritize quality over length

---

=== FORMATTING ===

Use clean markdown:
- # for main title
- ## for section headers
- **Bold** for key terms and emphasis
- Bullet points with - for lists
- Numbers for sequences
- Keep paragraphs short (3-4 sentences max)

Make it scannable - busy people should be able to skim and grab value quickly.

---

Begin creating the document now. Focus on practical value and respect for the reader's time.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: documentPrompt,
        },
      ],
    });

    const documentContent = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({ document: documentContent });
  } catch (error) {
    console.error('Document generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate document' },
      { status: 500 }
    );
  }
}
