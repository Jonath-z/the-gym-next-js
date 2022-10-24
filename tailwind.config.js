/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#4397A4",
        "content-green-primary": "#486A6F",
        "content-green-secondary": "#678C92",
        "sky-violet": "#C6DBFF",
      },
      fontSize: {
        xsm: "16px",
        s2xl: "22px",
        "6.5xl": "64px",
      },
      height: {
        13: "3.125rem",
      },
      width: {
        13: "3.125rem",
      },
      borderRadius: {
        xsm: "5px",
      },
    },
  },
  plugins: [],
};
