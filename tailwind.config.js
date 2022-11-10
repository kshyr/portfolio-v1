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
        shine:
          "shine-pos 12s cubic-bezier(.36,.34,.88,-0.16) infinite, shine-effects 12s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 80%": { transform: "rotate(0)" },
          "85%, 95%": { transform: "rotate(-14deg)" },
          "90%": { transform: "rotate(14deg)" },
        },
        "shine-pos": {
          "0%": { marginLeft: "-50%", transform: "rotate(0)" },
          "20%, 100%": { marginLeft: "100%" },
        },
        "shine-effects": {
          "0%, 100%": { opacity: "0.5", width: "1.5rem" },
          "7.5%": { opacity: "0.8", width: "0.6rem", transform: "rotate(8)" },
          "8.5%": { opacity: "0.85", width: "0.5rem" },
          "12%": { opacity: "0.9", width: "0.35rem" },
          "17%": { opacity: "0.4", width: "1rem" },
          "20%, 90%": {
            opacity: "0.3",
            width: "3.5rem",
            tranform: "rotate(45)",
          },
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
