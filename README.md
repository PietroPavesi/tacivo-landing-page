# Tacivo Landing Page

A modern B2B SaaS landing page for Tacivo, an AI-powered tacit knowledge base platform that helps organizations preserve critical undocumented knowledge before it's lost.

## Overview

Tacivo transforms organizational tacit knowledge into structured, searchable AI-ready documentation. This landing page showcases the platform's capabilities with a clean, modern design featuring smooth animations and brand-focused visuals.

## Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.344.0
- **Font**: Inter (Google Fonts)

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
├── src/
│   ├── App.tsx           # Main application component with all sections
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and custom animations
├── public/
│   └── assets/           # Images and SVG files
├── index.html            # HTML entry point
├── tailwind.config.js    # Tailwind configuration with brand colors
├── vite.config.ts        # Vite configuration
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

The development server will start at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is configured for deployment on platforms like Vercel, Netlify, or any static hosting service.

Build output will be in the `dist/` directory.

## Features

- Responsive design for all screen sizes
- Smooth scroll animations
- Custom shimmer effects
- Glass-morphism UI elements
- Gradient overlays
- Interactive hover states
- Optimized performance with Vite
- TypeScript for type safety

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Contact

For more information about Tacivo, visit [tacivo.com](https://tacivo.com)
