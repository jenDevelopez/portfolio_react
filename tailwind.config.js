/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
<<<<<<< HEAD
=======

>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
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
<<<<<<< HEAD
    flowbite.plugin(),
=======
    flowbite.plugin()
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
  ],
}
