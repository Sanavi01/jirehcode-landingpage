/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3537d6",
          hover: "#5054ef",
          light: "#e1e0ff",
        },
        surface: {
          DEFAULT: "#f9f9f9",
          alt: "#f3f3f3",
          card: "#ffffff",
        },
        "text-primary": "#1b1b1b",
        "text-secondary": "#454555",
        border: {
          DEFAULT: "#e2e2e2",
          hover: "#c6c4d8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "hero-fade-up": "heroFadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        heroFadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
