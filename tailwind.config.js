/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#242331",
      wheat: "#e0cfa3",
      "l-wheat": "#f5efe0",
      blue: "#759fbc",
      red: "#9e2a2b",
    },
    extend: {
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
        textswap: "textswap 12s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 80%": { transform: "rotate(0)" },
          "85%, 95%": { transform: "rotate(-14deg)" },
          "90%": { transform: "rotate(14deg)" },
        },
        textswap: {
          "0%": {
            content: '"React"',
            marginTop: "0",
            opacity: "1",
          },
          "15%": {
            content: '"React"',
            marginTop: "0",
            opacity: "1",
          },
          "20%": {
            content: '"React"',
            marginTop: "70px",
            opacity: "0",
          },
          "25%": {
            content: '""',
            marginTop: "-100px",
            opacity: "0",
          },
          "30%": {
            content: '"Next.js"',
            marginTop: "6px",
            opacity: "1",
          },
          "32%": {
            content: '"Next.js"',
            marginTop: "-2px",
            opacity: "1",
          },
          "33%": {
            content: '"Next.js"',
            marginTop: "0",
            opacity: "1",
          },
          "45%": {
            content: '"Next.js"',
            marginTop: "0",
            opacity: "1",
          },
          "50%": {
            content: '"Next.js"',
            marginTop: "70px",
            opacity: "0",
          },
          "55%": {
            content: '""',
            marginTop: "-100px",
            opacity: "0",
          },
          "60%": {
            content: '"GraphQL"',
            marginTop: "6px",
            opacity: "1",
          },
          "62%": {
            content: '"GraphQL"',
            marginTop: "-2px",
            opacity: "1",
          },
          "63%": {
            content: '"GraphQL"',
            marginTop: "0",
            opacity: "1",
          },
          "75%": {
            content: '"GraphQL"',
            marginTop: "0",
            opacity: "1",
          },
          "80%": {
            content: '"GraphQL"',
            marginTop: "70px",
            opacity: "0",
          },
          "85%": {
            content: '""',
            marginTop: "-100px",
            opacity: "0",
          },
          "90%": {
            content: '"React"',
            marginTop: "6px",
            opacity: "1",
          },
          "92%": {
            content: '"React"',
            marginTop: "-2px",
            opacity: "1",
          },
          "93%": {
            content: '"React"',
            marginTop: "0",
            opacity: "1",
          },
          "100%": {
            content: '"React"',
            marginTop: "0",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
