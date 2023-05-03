/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        accent: "#D35C38",
        bgLight: "#F2EDE9",
        bgDark: "#D9CCC1",
      },
      textColor: {
        textDark: "#403732",
        accent: "#D35C38",
        "textDark-hover": "#302B27",
      },
      borderColor: {
        accent: "#D35C38",
        textDark: "#403732",
      },
      boxShadow: {
        accent: "4px 6px 6px rgba(211,92,56,0.2)",
      },
      fontFamily: {
        text: ["Quicksand", "sans-serif"],
        heading: ["Secular One", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
