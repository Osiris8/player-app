import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const sportifTheme = {
  primary: "#3B82F6", // Bleu électrique (tailwind.blue.500)
  secondary: "#22C55E", // Vert citron (tailwind.green.500)
  accent: "#FB923C", // Orange vif (tailwind.orange.400)
  neutral: "#374151", // Gris foncé (tailwind.gray.700)
  "base-100": "#FFFFFF", // Blanc pur
  info: "#38BDF8", // Bleu ciel
  success: "#4ADE80", // Vert clair
  warning: "#FBBF24", // Jaune doré
  error: "#F87171", // Rouge clair
};
const elegantTheme = {
  primary: "#DC2626", // Rouge profond (tailwind.red.600)
  secondary: "#111827", // Noir fumé (tailwind.gray.900)
  accent: "#FACC15", // Doré (tailwind.amber.400)
  neutral: "#1F2937", // Gris foncé (tailwind.gray.800)
  "base-100": "#F3F4F6", // Gris clair (tailwind.gray.100)
  info: "#60A5FA", // Bleu clair
  success: "#16A34A", // Vert foncé
  warning: "#F59E0B", // Orange doré
  error: "#DC2626", // Rouge profond
};

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        sportif: sportifTheme,
      },
      {
        elegant: elegantTheme,
      },
    ],
  },
} satisfies Config;
