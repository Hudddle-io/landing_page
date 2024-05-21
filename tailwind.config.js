/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/Hero-background.svg')",
      },
      backgroundSize: {
        'hero': 'cover',
      },
    },
  },
  plugins: [],
}