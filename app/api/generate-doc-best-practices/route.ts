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

    const documentPrompt = `You are creating a practical best practices guide based on an interview with ${context.expertName}, a ${context.role} with ${context.yearsOfExperience} years of experience on the topic: ${context.processToDocument}

INTERVIEW TRANSCRIPT:
${conversationText}

=== YOUR TASK ===

Create a 2-3 page practical guide that captures:
1. How ${context.expertName} approaches this (their methodology)
2. What makes them effective at it (their insights and patterns)
3. Actionable advice someone can use immediately

TARGET AUDIENCE: Someone who needs to learn this skill from scratch or significantly improve their current approach. They want practical, proven guidance they can apply.

LENGTH: 2-3 pages maximum. Be comprehensive but concise.

=== DOCUMENT STRUCTURE ===

# Best Practices Guide

*Based on expertise from ${context.expertName}, ${context.role} with ${context.yearsOfExperience} years of experience*

---

## Overview

[2-3 paragraphs covering:]

**What this guide covers:**
- Scope of this expertise (what it includes and what it does not)
- Why this matters (business impact, importance)
- Who needs this skill

**About the expert:**
- ${context.expertName} background and experience level
- Their credibility in this area (what makes them qualified to teach this)

**Core philosophy:**
- The single most important principle they emphasized
- Their overall approach or mindset

Keep this brief - you are setting context, not explaining the full methodology yet.

---

## The General Approach

[3-5 paragraphs explaining their overall methodology]

Describe how ${context.expertName} typically approaches this work:

**Main framework or process:**
If they described steps or phases, present them clearly:

1. **[Phase/Step name]:** What this involves and why it matters
2. **[Phase/Step name]:** What this involves and why it matters
3. **[Phase/Step name]:** What this involves and why it matters

**Strategic philosophy:**
- How they think about this work
- What they prioritize
- Their overall strategy

**Core principles:**
- [Principle]: Why this guides their approach
- [Principle]: Why this guides their approach

Write conversationally, not like a rigid procedure manual. This is their actual approach based on years of experience.

---

## What to Pay Attention To

[Captures their perceptual expertise - what they watch for]

${context.expertName} has learned to watch for these indicators and signals:

### Positive Indicators (Things Going Well)

- **[Indicator]:** What it means / Why it matters / What to do
- **[Indicator]:** What it means / Why it matters / What to do
- **[Indicator]:** What it means / Why it matters / What to do

### Warning Signs (Potential Problems)

- **[Red flag]:** What it indicates / Why it is a problem / How to address it
- **[Red flag]:** What it indicates / Why it is a problem / How to address it
- **[Red flag]:** What it indicates / Why it is a problem / How to address it

### Critical Checkpoints

- **[What to verify]:** When to check / How to verify / Why it matters

Only include what they actually mentioned. If they did not discuss specific indicators, keep this section focused on what they did say.

---

## Proven Techniques & Insights

[The gold - their tricks, patterns, and non-obvious knowledge]

These are the techniques and insights that consistently work for ${context.expertName}:

### [Technique/Insight Name]

[2-4 sentences explaining:]
- What it is
- Why it works
- When to use it
- How to apply it

(Include specific details or examples they mentioned)

### [Technique/Insight Name]

[2-4 sentences explaining it]

### [Technique/Insight Name]

[2-4 sentences explaining it]

---

Aim for 4-8 techniques/insights. These should be:
- Actionable (someone can actually do this)
- Specific (not vague advice)
- Proven (based on their experience)
- Non-obvious (things others might miss)

---

## Common Mistakes to Avoid

[What NOT to do - experts love sharing this]

Based on years of experience, ${context.expertName} highlighted these common mistakes:

### [Mistake Category]

**The mistake:** [What people do wrong]

**Why it is a problem:** [The consequences or why it fails]

**How to avoid it:** [Specific guidance on the right approach]

**Why people make this mistake:** [If they explained the root cause]

---

(Include 3-5 mistakes. Use subsections for each if they gave detailed explanations, or use a simpler list format if they were brief)

---

## When to Adapt the Standard Approach

[Context matters - when the normal way does not work]

${context.expertName} emphasized that this approach needs adaptation in certain situations:

### Conditions That Change Things

**When [condition exists]:**
- Normal approach: [What you would typically do]
- Better approach: [What to do instead and why]

**When [condition exists]:**
- Normal approach: [What you would typically do]
- Better approach: [What to do instead and why]

### Decision Framework

[If they explained how to know when to adapt]

**Questions to ask yourself:**
- [Question that helps determine approach]
- [Question that helps determine approach]

**Factors to consider:**
- [Factor]: How it influences your approach
- [Factor]: How it influences your approach

Only include what they actually discussed. If they did not talk much about adaptation, keep this section short.

---

## Real-World Application

[Ground the guide in reality with examples they mentioned]

### Example Scenario

[If they gave a specific example, include it here:]

**Situation:** [Brief description of the scenario]

**How the approach was applied:** [What they did, using the techniques from this guide]

**Outcome:** [What happened and why it worked]

**Key lesson:** [What this example teaches about applying the approach]

---

(Include 1-2 examples if they shared them. If no specific examples, you can skip this section or include hypothetical applications based on their guidance)

---

## Getting Started: A Learning Path

[Practical advice for someone learning this skill]

### First Steps

${context.expertName} recommends focusing on these areas first:

1. **[Priority area]:** Why this comes first / What to focus on
2. **[Priority area]:** Why this comes first / What to focus on  
3. **[Priority area]:** Why this comes first / What to focus on

### What Matters Most

[The critical success factors they emphasized]

- **[Factor]:** Why this is essential
- **[Factor]:** Why this is essential

### Development Progression

[If they mentioned how skills build or a learning sequence]

**Beginner level:** [What to focus on / What good looks like]

**Intermediate level:** [What to develop next / What good looks like]

**Advanced level:** [What separates great from good / What to aspire to]

### Resources & Tools

[Any specific tools, methods, or resources they mentioned]

- **[Resource]:** What it is / How it helps
- **[Resource]:** What it is / How it helps

---

## Quick Reference Guide

[Scannable summary for when someone needs a reminder]

### The Essentials

**Core principle:** [The main philosophy or approach]

**Critical focus areas:** [Top 2-3 things that matter most]

**Top technique:** [The #1 proven technique from the guide]

**Biggest mistake to avoid:** [The most important pitfall]

**When it gets tricky:** [Key situation that requires adaptation]

### At-a-Glance Checklist

[If applicable - a quick checklist they could use]

Before/during/after this work:
- [ ] [Key checkpoint]
- [ ] [Key checkpoint]
- [ ] [Key checkpoint]
- [ ] [Key checkpoint]

---

## About the Expert

[Brief credibility section]

${context.expertName} is a ${context.role} with ${context.yearsOfExperience} years of experience in [domain/area].

[1-2 sentences about their relevant background, major accomplishments, or specific expertise that establishes credibility]

[If they mentioned how they developed this expertise or patterns they have seen across many situations, note that here]

---

=== WRITING GUIDELINES ===

**Style:**
- Professional but conversational (not academic or overly formal)
- Active voice ("Focus on X" not "X should be focused on")
- Concrete and specific (avoid vague statements like "be strategic")
- Use formatting for scannability (bold, bullets, headers)
- Write like you are teaching a colleague, not writing a textbook

**Content quality:**
- Everything must be grounded in the interview - do not invent
- If expert did not cover something, skip that section or note the gap
- Use their actual language, terms, and examples
- Include specific details they mentioned (thresholds, numbers, specific methods)
- Distinguish between "always do this" and "usually do this"

**What to avoid:**
- Do not write "the expert believes" or "according to the expert" - just state it authoritatively
- Do not use academic language (cognitive load, heuristics, mental models, paradigms)
- Do not over-explain things they said simply and clearly
- Do not add generic advice that was not in the interview
- Do not create long procedural lists if they spoke more conceptually

**Handling variations:**
- Rich interview = more detailed guide with lots of techniques
- Shorter interview = focused guide on core essentials (still valuable)
- Missing sections = skip them or combine with others
- Better to have honest 2-page guide than padded 3-page fluff

**Length management:**
- Target 2 pages, maximum 3
- Prioritize actionable content over comprehensiveness
- Every section should teach something useful
- Cut anything that is just filler or too general

---

=== FORMATTING ===

Use clean markdown:
- # for main title
- ## for major section headers
- ### for subsections
- **Bold** for key terms, techniques, principles
- Bullet points with - for lists
- Numbered lists for sequences or priorities
- Keep paragraphs short (3-4 sentences maximum)
- Use line breaks generously for visual breathing room

Make it scannable - busy people should be able to skim headers and bolded content and grab 60-70% of the value in 2 minutes.

---

Begin creating the guide now. Focus on practical value, proven techniques, and respect for the reader's time. Make this something someone would actually reference and use.`;

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
