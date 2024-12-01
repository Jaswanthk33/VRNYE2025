/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vibrant-yellow": "#FFE600",
        "vibrant-pink": "#FF00FF",
        "vibrant-orange": "#FF6600",
        "vibrant-blue": "#0033FF",
        "vibrant-purple": "#2B0030",
        "vibrant-white": "#FFFFFF",
      },
      fontFamily: {
        title: ["Orbitron", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glossy: "0px 4px 30px rgba(255, 255, 255, 0.25)",
      },
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
