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

    const documentPrompt = `You are creating a case study document based on an interview with ${context.expertName}, a ${context.role} with ${context.yearsOfExperience} years of experience, about a specific project or event: ${context.processToDocument}

INTERVIEW TRANSCRIPT:
${conversationText}

=== YOUR TASK ===

Create a 2-3 page case study that captures:
1. What happened in this specific situation
2. Key decisions made and why
3. Lessons learned that others can apply

TARGET AUDIENCE: Someone who might face a similar situation and wants to learn from this specific example. They want to understand what happened, why it worked (or did not), and what to take away.

LENGTH: 2-3 pages maximum. Tell the story well but stay concise.

=== DOCUMENT STRUCTURE ===

# Case Study

*${context.expertName}, ${context.role} | {Date or timeframe if mentioned}*

---

## Executive Summary

[2-3 sentences maximum - the whole story in brief]

What was accomplished, what made it challenging, and the key outcome. Think of this as what you would tell someone in an elevator.

---

## The Situation

[2-4 paragraphs covering:]

**Context:**
- What was the situation or challenge?
- Why did this project/event matter?
- What was at stake?

**Key players:**
- Who was involved (roles, not necessarily names unless relevant)
- What were the constraints (time, budget, resources, politics)

**Initial state:**
- What was the starting point?
- What made this complex or challenging?

Set the scene so readers understand what ${context.expertName} was facing.

---

## Key Decisions & Actions

[This is the heart of the case study - what actually happened]

Walk through the major decisions and actions chronologically. For each significant decision or action:

### [Decision/Action Name]

**What they did:**
[1-2 sentences describing the decision or action]

**Why they did it:**
[The reasoning, what they were noticing, what factors they weighed]

**What happened:**
[The immediate result or consequence]

**Key insight:**
[What this reveals about good decision-making in this context]

---

Include 3-5 of these decision/action blocks. Focus on the most important or interesting moments.

If the story flows better as a narrative, you can write it as connected paragraphs instead, but still highlight the key decisions clearly.

---

## Challenges & Pivots

[What went wrong or got complicated, and how they adapted]

**Unexpected challenges:**
- [Challenge]: What happened and why it was a problem
- [Challenge]: What happened and why it was a problem

**How they adapted:**
[Describe how ${context.expertName} changed their approach when things did not go as planned]

**What this taught them:**
[The learning from having to adapt]

Only include what actually came up in the interview. If the project went smoothly, keep this section short or note that.

---

## Results & Outcomes

[What happened in the end]

**Measurable results:**
- [Outcome]: Specific numbers, metrics, or concrete achievements
- [Outcome]: Impact on business, team, client, etc.

**Qualitative outcomes:**
- [Result]: Things that mattered but are not easily measured
- [Result]: Longer-term impacts or benefits

**What success looked like:**
[How ${context.expertName} knew this was successful - their definition of success]

Be specific. Use actual numbers and details they mentioned.

---

## Lessons Learned

[The takeaways - what others should learn from this case]

### What Worked Well

**[Approach/Decision that succeeded]:**
Why it worked in this case and when it might work in similar situations.

**[Approach/Decision that succeeded]:**
Why it worked in this case and when it might work in similar situations.

(Include 2-4 items)

### What Could Have Been Better

**[Thing they would change]:**
What they would do differently and why. What they learned.

**[Thing they would change]:**
What they would do differently and why. What they learned.

(Include 1-3 items - what they actually said they would change)

### Key Principles

[Extract 2-4 general principles from this specific case]

- **[Principle]:** The broader lesson from this specific experience
- **[Principle]:** The broader lesson from this specific experience

These should be actionable insights others can apply to their own situations.

---

## Applicability & Context

[When this approach works and when it does not]

**This approach works well when:**
- [Condition or context where these decisions make sense]
- [Condition or context where these decisions make sense]

**Use caution or adapt when:**
- [Condition where you would need a different approach]
- [Condition where you would need a different approach]

Help readers understand when to apply these lessons vs. when their situation is different enough to require different choices.

---

## About the Expert

[Brief context about ${context.expertName}]

${context.expertName} is a ${context.role} with ${context.yearsOfExperience} years of experience in [relevant domain/area]. 

[1-2 sentences about their relevant background or expertise that gives credibility to this case study]

[If they mentioned other similar projects or experiences, note that here to show this is not their first rodeo]

---

## Quick Takeaways

[Scannable summary for busy readers]

**Situation:** [One sentence - what they faced]

**Key decision:** [The most important choice they made]

**Critical success factor:** [What made the biggest difference]

**Main lesson:** [The #1 takeaway from this case]

**When to apply this:** [Context where these lessons are most relevant]

---

=== WRITING GUIDELINES ===

**Style:**
- Write like you are telling a colleague about an interesting project
- Use active voice and concrete language
- Make it a story people want to read, not a dry report
- Include specific details (numbers, names of tools/methods, actual quotes if memorable)
- Bold key terms and decisions for scannability

**Content quality:**
- Everything must come from the interview - do not invent details
- If expert did not mention something, skip that section
- Use their actual language for decisions and actions
- Include the messiness - real projects have complications
- Show both what worked and what did not

**What to avoid:**
- Do not write "the expert said" or "according to the expert" - just tell the story
- Do not use academic or overly formal language
- Do not hide failures or challenges - those are often the best learning
- Do not generalize too much - keep it grounded in THIS case
- Do not add generic project management advice not from this interview

**Handling incomplete information:**
- If you do not know exact dates, just say "Q4 implementation" or similar
- If results were not fully quantified, describe qualitatively
- If certain sections are thin, keep them short or combine with others
- Better to have a honest 2-page case study than padded 3-page fluff

**Length management:**
- Aim for 2 pages, maximum 3
- Rich interview with lots of detail = fuller case study
- Shorter interview or straightforward project = shorter case study (that is fine)
- Every paragraph should add value

---

=== FORMATTING ===

Use clean markdown:
- # for main title
- ## for section headers  
- ### for subsections within major sections
- **Bold** for key decisions, outcomes, principles
- Bullet points with - for lists
- Keep paragraphs short (3-4 sentences)
- Use line breaks between sections for readability

Make it scannable - someone should be able to skim the headers and bolded parts and get 70% of the value.

---

Begin creating the case study now. Tell the story well, extract the lessons clearly, and make it valuable for others facing similar challenges.`;

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
