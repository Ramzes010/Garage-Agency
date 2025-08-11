/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            nothing: ['Nothing', 'sans-serif'],
            ppmori: ['PPMori-Regular', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

