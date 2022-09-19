/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#242331',
      'wheat': '#e0cfa3', 
      'l-wheat': '#f5efe0',
      'blue': '#759fbc',
      'red': '#9e2a2b',
    }
  },
  plugins: [],
}
