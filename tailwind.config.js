/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // to remove red under require . on eslint node: true in jest config file
  plugins: [require("daisyui")],
}

