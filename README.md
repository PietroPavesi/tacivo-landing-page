# Tacivo Landing Page

A modern B2B SaaS landing page and AI-powered interview platform for Tacivo - helping organizations capture, preserve, and leverage critical tacit knowledge before it walks out the door.

## Overview

Tacivo transforms organizational tacit knowledge into structured, searchable documentation through AI-powered interviews. This repository contains:

- **Landing Page**: Modern, conversion-focused design showcasing the platform's value proposition
- **Interview Platform**: Interactive AI interviewer that transforms expert knowledge into professional documentation

## Tech Stack

- **Framework**: Next.js 15.5.6 (App Router) with React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1 with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.344.0
- **AI**: Anthropic Claude API for intelligent interviews
- **Voice**: ElevenLabs for text-to-speech and speech-to-text
- **Fonts**: Playfair Display (serif) & Inter (sans-serif) via next/font/google

## Design System

### Colors (HSL-based)

```css
/* Primary Palette */
--book-cloth: hsl(15 52% 58%)    /* #CC785C - Primary accent */
--kraft: hsl(36 27% 56%)          /* Warm secondary */
--manilla: hsl(60 30% 97%)        /* Light background */

/* Neutrals */
--slate-dark: hsl(60 2% 10%)      /* Dark backgrounds */
--ivory-light: hsl(60 30% 97%)    /* Light backgrounds */
--cloud-medium: hsl(0 0% 60%)     /* Medium text */

/* Semantic Tokens */
--foreground: hsl(60 2% 10%)
--background: hsl(60 30% 97%)
--muted-foreground: hsl(0 0% 45%)
```

### Typography

- **Display/Headlines**: Playfair Display (400, 500, 600, 700, italic)
  - Large headlines: 48-72px
  - Serif for elegance and authority
- **Body Text**: Inter (400, 500, 600, 700)
  - Body: 16-20px
  - Clean, modern sans-serif
- Both fonts optimized via next/font/google with `display: 'swap'`

### Design Principles

- **Professional elegance**: Book-cloth color palette inspired by traditional knowledge preservation
- **Smooth animations**: Framer Motion for scroll-triggered and micro-interactions
- **Responsive-first**: Mobile to desktop optimization
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Project Structure

```
tacivo-landing-page/
├── app/
│   ├── api/                    # API routes for AI functionality
│   │   ├── chat-best-practices/
│   │   ├── chat-case-study/
│   │   ├── generate-doc-*/
│   │   ├── speech-to-text/
│   │   └── text-to-speech/
│   ├── interview/              # Interview platform page
│   │   └── page.tsx
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles & animations
├── components/
│   ├── landing/                # Landing page components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── PlatformSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── ui/                     # shadcn/ui components
│   │   └── button.tsx
│   └── VoiceControls.tsx       # Voice input component
├── hooks/
│   └── useVoiceControls.ts     # Voice functionality hook
├── public/
│   └── assets/
│       └── logo/svg/           # Logo variations (13.svg, 15.svg)
├── tailwind.config.js          # Custom design tokens
└── package.json
```

## Features

### Landing Page

- **Responsive Navbar**: Logo switches on scroll (13.svg → 15.svg), smooth height transitions
- **Hero Section**: Rotating word animation ("Capture", "Preserve", "Leverage")
- **Stats Section**: Data-driven trust builders with hover effects
- **Interactive Sections**: Problem, Platform, How It Works
- **CTA Buttons**: All use mailto: links to hello@tacivo.com with pre-filled subjects

### Interview Platform (`/interview`)

1. **Initial Form**: Collect expert details & select document type (Case Study vs Best Practices)
2. **Context & Upload**: Describe topic, optional file uploads (PDF, DOCX, PPTX, TXT, MD)
3. **AI Interview**:
   - Interactive chat with Claude AI
   - Voice controls (record, transcribe, text-to-speech)
   - Progress tracking (12 questions)
   - Auto-play option for accessibility
4. **Document Generation**: Professional markdown document with PDF export

### Technical Features

- **Server-Side Rendering**: Optimized SEO & performance
- **Static Generation**: Landing page pre-rendered at build time
- **API Routes**: Serverless functions for AI & voice processing
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first with breakpoint optimization
- **Smooth Animations**:
  - fadeIn, fadeInUp keyframes
  - Framer Motion for complex transitions
  - Scroll-triggered reveals

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn
- API Keys:
  - Anthropic API key (for AI interviews)
  - ElevenLabs API key (for voice features)

### Installation

```bash
# Clone the repository
git clone https://github.com/PietroPavesi/tacivo-landing-page.git

# Navigate to project directory
cd tacivo-landing-page

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with:

```env
# Anthropic API Key
# Get your API key from: https://console.anthropic.com/
ANTHROPIC_API_KEY=sk-ant-api03-...

# ElevenLabs API Key (for text-to-speech)
# Get your API key from: https://elevenlabs.io/
ELEVENLABS_API_KEY=sk_...
```

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

### Development

```bash
# Start development server
npm run dev

# Run type checking
npm run typecheck

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

The development server will start at `http://localhost:3000`

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production-ready deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Import repository at [vercel.com](https://vercel.com)
   - Add environment variables in project settings:
     - `ANTHROPIC_API_KEY`
     - `ELEVENLABS_API_KEY`
   - Deploy!

3. **Auto-Deployments**
   - Every push to `main` triggers a new deployment
   - Preview deployments for PRs

### Other Platforms

The app works on any platform supporting Next.js 15:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## API Routes

All API routes are serverless functions in `/app/api/`:

- `POST /api/chat-best-practices` - AI chat for best practices guides
- `POST /api/chat-case-study` - AI chat for case studies
- `POST /api/generate-doc-best-practices` - Generate best practices document
- `POST /api/generate-doc-case-study` - Generate case study document
- `POST /api/speech-to-text` - Transcribe audio to text
- `POST /api/text-to-speech` - Convert text to speech

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## Performance

- **First Load JS**: ~107 KB (optimized)
- **Landing Page**: Static, pre-rendered
- **Interview Page**: Static with dynamic API calls
- **Build Time**: ~4-6 seconds
- **Lighthouse Score**: 90+ across all metrics

## Contributing

This is a private repository. For questions or collaboration:
- Email: hello@tacivo.com
- Website: [tacivo.com](https://tacivo.com)

## License

Private - All rights reserved

## Acknowledgments

- Design system inspired by Anthropic and Mues AI
- Built with modern web best practices
- Powered by Anthropic Claude and ElevenLabs
