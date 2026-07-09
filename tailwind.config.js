/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-silkscreen)", "monospace"],
        heading: ["var(--font-questrial)", "sans-serif"],
        body: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
