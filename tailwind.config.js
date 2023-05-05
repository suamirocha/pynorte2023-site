/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['64px', '96px'],
      },
      colors: {
        background: '#1A1A1A',
      },
      backgroundImage: {
        'desktop-dark': 'url(/bg-dark-desktop.png)',
        'desktop-presentation': 'url(/bg-presentation-desktop.png)',
        'mobile-presentation': 'url(/bg-presentation-mobile.png)',
        'desktop-coc': 'url(/bg-coc-desktop.png)',
        'mobile-coc': 'url(/bg-coc-mobile.png)',
      },
    },
  },
  plugins: [],
}
