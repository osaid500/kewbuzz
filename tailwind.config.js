/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        postSize: "50rem",
      },
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};
