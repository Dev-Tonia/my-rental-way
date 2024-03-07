/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#FF5C00",
        "neutral-50": "#141414",
        "neutral-30": "#666666",
      },
    },
  },
  plugins: [],
};
