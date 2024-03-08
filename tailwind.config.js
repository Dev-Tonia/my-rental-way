/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#FF5C00",
        secondary: "#159131",
        "neutral-50": "#141414",
        "neutral-30": "#666666",
        "neutral-20": "#8C8C8C",
        "white-20": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
