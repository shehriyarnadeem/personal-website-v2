const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        themeBackground: "var(--bg-base-100)",
        footer: "var(--bg-footer)",
        hoverCard: "var(--bg-hover-card)",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        jura: ["Jura", ...defaultTheme.fontFamily.sans],
        heebo: ["Heebo", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        primary: "var(--text-primary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
  },
};
