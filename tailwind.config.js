/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        grey: '#EAECF0',
        blue: '#1570EF',
        red: '#FF0000',
      },
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        lora: "'Lora', serif",
        sand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
};
