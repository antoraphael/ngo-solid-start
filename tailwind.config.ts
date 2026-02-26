import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        accent: "var(--accent)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },
      keyframes: {
        headerIn: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        imageIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        contentIn: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        softPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
          "50%": { boxShadow: "0 10px 30px rgba(0,0,0,0.15)" },
        },
      },
      animation: {
        header: "headerIn 0.7s ease-out forwards",
        image: "imageIn 0.9s ease-out forwards",
        content: "contentIn 1s ease-out forwards",
        fade: "fade 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "soft-pulse": "softPulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
