/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a192f',
        navy: '#112240',
        'light-navy': '#233554',
        'lightest-navy': '#303C55',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        primary: '#64ffda',
      },
    },
  },
  plugins: [],
};