/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-book-cloth',
    'hover:bg-book-cloth/90',
    'after:bg-book-cloth',
    'hover:border-book-cloth',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom palette colors
        "book-cloth": "hsl(var(--book-cloth))",
        "kraft": "hsl(var(--kraft))",
        "manilla": "hsl(var(--manilla))",
        "focus": "hsl(var(--focus))",
        // Slate colors for dark sections
        "slate-dark": "hsl(60 2% 10%)",
        "slate-medium": "hsl(60 2% 15%)",
        "slate-light": "hsl(60 2% 25%)",
        // Cloud colors
        "cloud-dark": "hsl(60 2% 40%)",
        "cloud-medium": "hsl(60 2% 56%)",
        "cloud-light": "hsl(60 4% 74%)",
        // Ivory colors
        "ivory-dark": "hsl(50 15% 89%)",
        "ivory-medium": "hsl(60 17% 93%)",
        "ivory-light": "hsl(60 30% 97%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'shimmer': 'shimmer 5s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'speaking-pulse': 'speaking-pulse 2s ease-in-out infinite',
        'recording-pulse': 'recording-pulse 1s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        'speaking-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 0px rgba(124, 58, 237, 0))',
          },
          '50%': {
            transform: 'scale(1.08)',
            filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.4))',
          },
        },
        'recording-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 0px rgba(239, 68, 68, 0))',
          },
          '50%': {
            transform: 'scale(1.08)',
            filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.4))',
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

