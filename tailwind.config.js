/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      fontFamily: {
        'serif': ['var(--font-merriweather)', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'tacivo': {
          'purple': '#b974f4',
          'purple-dark': '#5d3d89',
          'orange': '#ff6b4a',
          'orange-dark': '#8f3528',
        }
      },
    },
  },
  plugins: [],
};

