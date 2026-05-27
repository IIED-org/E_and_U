
// Only relavent for Tailwind v3. If you are using Tailwind v4, you can ignore this file and the content within it.
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["**/*.twig"],
  theme: {
    extend: {
      // Define your project colour palette here.
      colors: {
        primary: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
