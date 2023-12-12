/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
      debugScreens: {
        position:["bottom","left"]
    },
    extend:{},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
