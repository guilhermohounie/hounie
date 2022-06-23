module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        dark: "#0f0f17",
        gray: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        orange: {
          50: "#fff4e6",
          100: "#ffe8cc",
          200: "#ffd8a8",
          300: "#ffc078",
          400: "#ffa94d",
          500: "#ff922b",
          600: "#fd7e14",
          700: "#f76707",
          800: "#e8590c",
          900: "#d9480f",
        },
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
