/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
