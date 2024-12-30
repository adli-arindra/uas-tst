import type { Config } from "tailwindcss";

export default {
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
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        trich: {
          "primary": "#204B49", 
          "primary-content": "#FFFFFF",
          "secondary": "#1A3B3A",
          "secondary-content": "#FFFFFF",
          "accent": "#F26524", 
          "accent-content": "#FFFFFF",
          "neutral": "#292929",
          "base-100": "#FFFFFF", 
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ]
  },
} satisfies Config;
