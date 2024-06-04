/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      width: {
        '600': '600px'
      },
      height: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}

