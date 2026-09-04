/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#121316",
        steel: "#6B7076",
        mist: "#9AA0A6",
        line: "#26282C",
        paper: "#FAFAF8",
        haze: "#EFEEEB",
        moss: "#28402F",
        mossLight: "#3D5C46",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};
