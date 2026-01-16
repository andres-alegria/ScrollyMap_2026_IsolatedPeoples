const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lora", "Open Sans", ...defaultTheme.fontFamily.sans],
        body: ["Lora", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#03755E",
        mongazon: "#F1BA30",
      },
      borderWidth: {
        0.75: "0.75px",
      },
      fontSize: {
        "2xl": "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
