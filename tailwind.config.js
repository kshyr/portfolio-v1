/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#242331",
      wheat: "#e0cfa3",
      "l-wheat": "#f5efe0",
      blue: "#759fbc",
      red: "#9e2a2b",
    },
    extend: {
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 80%": { transform: "rotate(0)" },
          "85%, 95%": { transform: "rotate(-14deg)" },
          "90%": { transform: "rotate(14deg)" },
        },
      },
    },
  },
  plugins: [],
};
