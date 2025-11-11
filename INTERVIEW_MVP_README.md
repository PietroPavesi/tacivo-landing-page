# Knowledge Transfer Interview MVP

## Overview
AI-powered chatbot that interviews experts to extract tacit knowledge and generates structured documentation.

## Setup

1. **Install dependencies** (already done):
```bash
npm install @anthropic-ai/sdk react-markdown jspdf
```

2. **Configure API Key**:
Create a `.env.local` file based on the template:
```bash
cp .env.local.template .env.local
```

Edit `.env.local` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

Get your API key from: https://console.anthropic.com/

3. **Run the development server**:
```bash
npm run dev
```

4. **Access the interview tool**:
Navigate to: http://localhost:3000/interview

## Features

### Step 1: Context Form
- Expert name
- Role/domain
- Years of experience
- Process/skill to document

### Step 2: Interview Chat
- AI conducts 15-25 adaptive questions
- Streaming responses for natural conversation
- Extracts tacit knowledge (the "why" behind decisions)
- Expert can end interview at any time or AI concludes naturally

### Step 3: Document Generation
- Executive Summary
- Key Processes Documented
- Decision-Making Frameworks
- Tacit Knowledge Captured
- Critical Insights & Exceptions
- Recommendations for Knowledge Transfer
- Download as PDF
- Start new interview option

## Interview Methodology

The AI follows enterprise knowledge transfer best practices:
- Starts with open-ended questions about overall process
- Progressively digs deeper into specifics
- Focuses on tacit knowledge extraction
- Explores decision-making criteria, edge cases, and judgment calls
- Maintains natural conversation flow
- Probes for intuitive patterns and contextual factors

## File Structure

```
/app
  /interview
    page.tsx              # Main interview component
  /api
    /chat
      route.ts            # Streaming chat API
    /generate-doc
      route.ts            # Document generation API
```

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API (claude-sonnet-4-20250514)
- **Markdown**: react-markdown
- **PDF**: jsPDF

## Branding (Tacivo)

- Primary: #5B21B6 (deep purple)
- Secondary: #A855F7 (vibrant purple)
- Accent: #F97316 (warm orange)

## Notes

- No database required - conversation stored in component state
- Streaming responses for natural feel
- Professional, clean UI
- Focus on functionality over polish
