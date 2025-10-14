/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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

