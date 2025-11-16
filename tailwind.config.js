/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'shimmer': 'shimmer 5s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'speaking-pulse': 'speaking-pulse 2s ease-in-out infinite',
        'recording-pulse': 'recording-pulse 1s ease-in-out infinite',
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

