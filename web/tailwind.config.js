const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      keyframes: {
        dash: {
          '0%': {
            strokeDasharray: '1, 150',
            strokeDashoffset: '0'
          },
          '50%': {
            strokeDasharray: '90, 150',
            strokeDashoffset: '-35'
          },
          '100%': {
            strokeDasharray: '90, 150',
            strokeDashoffset: '-124'
          }
        }
      },
      animation: {
        snake: 'dash 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
