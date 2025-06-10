/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← Ceci doit inclure tous vos composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}