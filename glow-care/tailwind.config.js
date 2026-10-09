/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glowDark: "#090A0F",
        glowCard: "#12141C",
        electricBlue: "#00F0FF",
        deepRed: "#FF1744",
      }
    },
  },
  plugins: [],
}
