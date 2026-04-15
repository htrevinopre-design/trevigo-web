import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Trevigo — colores de trevigo.com.mx
        navy: {
          50:  "#f0f7ff",
          100: "#dbeeff",
          200: "#b8dcfc",
          300: "#83c4f7",
          400: "#50adef",
          500: "#379ad6",  // Azul principal (#379ad6 de trevigo.com.mx)
          600: "#2882bb",
          700: "#1f6898",
          800: "#1a4f73",
          900: "#163e5b",
          950: "#242833",  // Fondo oscuro (#242833 de trevigo.com.mx)
        },
        orange: {
          50:  "#fffbf0",
          100: "#fff5d6",
          400: "#ffd280",
          500: "#ffc96b",  // Dorado (#ffc96b de trevigo.com.mx)
          600: "#e5b04a",
          700: "#c28f2e",
        },
        steel: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, #242833 0%, #1a4f73 50%, #242833 100%)",
      },
      // Opacidades personalizadas para border/bg con modificadores /3 /5 /8 /15
      opacity: {
        "3": "0.03",
        "5": "0.05",
        "8": "0.08",
        "15": "0.15",
      },
      keyframes: {
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.25s ease-out both",
        "fade-in":  "fadeIn 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
