# Tacivo Landing Page

A modern B2B SaaS landing page for Tacivo, an AI-powered tacit knowledge base platform that helps organizations preserve critical undocumented knowledge before it's lost.

## Overview

Tacivo transforms organizational tacit knowledge into structured, searchable AI-ready documentation. This landing page showcases the platform's capabilities with a clean, modern design featuring smooth animations and brand-focused visuals.

## Tech Stack

- **Framework**: Next.js 15.5.6 (App Router) with React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.344.0
- **Font**: Inter (via next/font/google for optimal loading)

## Design System

### Colors

```css
Purple: #b974f4
Purple Dark: #5d3d89
Orange: #ff6b4a
Orange Dark: #8f3528
```

### Typography

- **Headlines**: 48-72px, Inter font, -0.02em letter-spacing
- **Body**: 18-20px, Inter font, -0.01em letter-spacing
- **Font Weight**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Animations

- Scroll-triggered animations using Framer Motion
- Hover effects with subtle lifts and scale transforms
- Custom shimmer effect on hero button and platform heading
- Smooth scroll behavior
- Viewport-based animation triggers

## Project Structure

```
tacivo-landing-page/
├── app/
│   ├── layout.tsx        # Root layout with metadata and fonts
│   ├── page.tsx          # Main page component (client component)
│   └── globals.css       # Global styles and Tailwind directives
├── public/
│   ├── assets/           # SVG logos and icons
│   ├── hero-bg.avif      # Hero section background
│   ├── footer-bg.avif    # Footer section background
│   └── image.avif        # Feature section image
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration with brand colors
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Key Sections

1. **Hero**: Animated headline with gradient shimmer button
2. **Platform Introduction**: Shimmer text effect on main heading
3. **Beyond Documented Knowledge**: Visual differentiation with background image
4. **How It Works**: 4-step process with animated gradient cards
5. **Documentation Types**: Vertical scrollable showcase of 8+ document types
6. **Measurable Impact**: Statistics and testimonials
7. **Features**: Detailed platform capabilities
8. **Founding Partner Program**: Call-to-action with investment terms

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PietroPavesi/tacivo-landing-page.git

# Navigate to project directory
cd tacivo-landing-page

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run type checking
npm run typecheck

# Run linter
npm run lint
```

The development server will start at `http://localhost:3000`

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Deployment

The project is optimized for deployment on Vercel with automatic GitHub integration. It also supports other Next.js hosting platforms.

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Every push to `main` will trigger a new deployment

Build output will be in the `.next/` directory.

## Features

- **Server-Side Rendering (SSR)**: Full HTML content rendered on the server for optimal SEO
- **Responsive design**: Optimized for all screen sizes from mobile to desktop
- **Smooth animations**: Framer Motion scroll-triggered animations
- **Custom shimmer effects**: Gradient animations on CTA buttons
- **Glass-morphism UI**: Modern translucent design elements
- **Gradient overlays**: Beautiful background compositions
- **Interactive hover states**: Engaging micro-interactions
- **Optimized fonts**: Next.js font optimization with Inter from Google Fonts
- **TypeScript**: Full type safety across the codebase
- **SEO optimized**: Complete meta tags, OpenGraph, and Twitter Card support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Contact

For more information about Tacivo, visit [tacivo.com](https://tacivo.com)
