import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const elegantTheme = {
  primary: "#DC2626", //  (tailwind.red.600)
  secondary: "#111827", //  (tailwind.gray.900)
  accent: "#FACC15", //  (tailwind.amber.400)
  neutral: "#1F2937", //  (tailwind.gray.800)
  "base-100": "#F3F4F6", //  (tailwind.gray.100)
  info: "#60A5FA", //
  success: "#16A34A", //
  warning: "#F59E0B", //
  error: "#DC2626", //
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        elegant: elegantTheme,
      },
    ],
  },
} satisfies Config;
