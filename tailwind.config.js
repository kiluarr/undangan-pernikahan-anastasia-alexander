/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f4ead6',
          300: '#ecd9b8',
          400: '#e0c394',
          500: '#d4ab73',
        },
        champagne: {
          50: '#fbf7f0',
          100: '#f5ead9',
          200: '#e8d2b0',
          300: '#dab887',
          400: '#cda063',
          500: '#b8854a',
          600: '#9a6b3a',
        },
        gold: {
          50: '#fbf7ec',
          100: '#f6edcf',
          200: '#ecd99e',
          300: '#e2c46d',
          400: '#d4af37',
          500: '#c19a2e',
          600: '#a07d24',
          700: '#7e611c',
        },
        ink: {
          50: '#f6f5f3',
          100: '#e7e3de',
          200: '#c9c2b9',
          300: '#a59c90',
          400: '#7d7264',
          500: '#5e5448',
          600: '#463e34',
          700: '#2f2a22',
          800: '#1c1914',
          900: '#100e0a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(120, 100, 70, 0.25)',
        glow: '0 0 40px -5px rgba(212, 175, 55, 0.35)',
        'inner-gold': 'inset 0 1px 0 0 rgba(212, 175, 55, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
