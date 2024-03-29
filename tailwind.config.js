/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./safelist.txt",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        ruta_dark: '#0e1e2a',
        ruta_blue: {
          dark: '#002487',
          DEFAULT: '#0030AB',
          light: '#c2d9ff',
        },
        ruta_purple: {
          dark: '#867afc',
          DEFAULT: '#7752fe',
          light: '#8e8ffa',
        },
        ruta_yellow: {
          dark: '#FCD12A',
          DEFAULT: '#FFF200',
          light: '#FFF798',
        }
      },
      content: {
        'chevron_right': 'url("/assets/content/chevron_right.svg")',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

