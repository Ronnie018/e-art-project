/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: '#373737E3',
      white: '#FFFFFF',
      purple: '#8F78A1',
      black: '#000000',

      'nav-gray': '#4c4545',
      't-gray': '#37373711',
      'l-gray': '#D9D9D9',
      'l-white': '#acacac',
      'l-purple': '#8F78A1',
      'l-black': '#020202aa',
    },
    extend: {
      fontFamily: {
        // main: ['Luxia Display', 'serif'],
        main: ['Spectral SC', 'serif'],
        secondary: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        nav: '1rem',
        'nav-lg': '1.10rem',
        'load-lg': '1.35rem',
      },
      minHeight: {
        'c-screen': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
};
