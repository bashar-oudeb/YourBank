/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#CAFF33',
        Grey: '#262626',
        White: '#f1f5f9',
        White2: '#B3B3B3',
        hover: '#caff80',
      },
     
    },
    fontFamily: {
      Lexend: ['"Lexend"', 'sans-serif'],
      poppins: ['Poppins'],
    },
  },
  plugins: [],
}

