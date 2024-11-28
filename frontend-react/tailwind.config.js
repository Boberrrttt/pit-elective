/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/assets/images/*.{jpg,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-bg': "url('./assets/images/landingpage-bg.jpg')"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

