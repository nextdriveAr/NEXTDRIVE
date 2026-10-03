/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Next Drive
        carbon: "#0B0B0B",     // Negro Carbón
        offwhite: "#F5F5F2",   // Blanco Roto
        metal: "#8E8E8E",      // Gris Metálico
        sand: "#D6C8B2",       // Beige Arena
        dark: "#2A2A2A",       // Gris Oscuro
        // Alias usados en el código existente (mismo valor, distinto nombre)
        ink: "#0B0B0B",
        graphite: "#1A1A1A",
        steel: "#6B6B6B",
        mist: "#9A9A9A",
        line: "#2A2A2A",
        paper: "#F5F5F2",
        haze: "#ECEAE4",
        moss: "#2A2A2A",
        mossLight: "#3A3A3A",
        accent: "#D6C8B2",
      },
      fontFamily: {
        display: ["'Montserrat'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};
