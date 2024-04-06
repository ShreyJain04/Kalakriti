/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_navy: "#161A30",
        my_gray1: "#B6BBC4",
        my_navy2: "#0A1D56",
      },
    },
    fontFamily: {
      my_font1: ["Oleo Script", "system-ui"],
      my_font2: ["Dancing Script", "cursive"],
      my_font3: ["Handlee", "cursive"],
    },
  },
  plugins: [require("flowbite/plugin"),require("tailwind-scrollbar")],
};
