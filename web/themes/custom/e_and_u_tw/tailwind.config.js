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
