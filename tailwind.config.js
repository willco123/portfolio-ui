/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dustyrose: {
        light: "#e4c1c1",
        DEFAULT: "#d8a6a6",
        dark: "#a6705e",
        darker: "#7c4a36",
      },
      softblue: {
        light: "#b5c9e3",
        DEFAULT: "#86a8d0",
        dark: "#366b9e",
        darker: "#214c75",
      },
      olivegreen: {
        light: "#c8e4c9",
        DEFAULT: "#a1d5a4",
        dark: "#5e7947",
        darker: "#425e31",
      },
      lavendergray: {
        light: "#d1c1e3",
        DEFAULT: "#b4a4cc",
        dark: "#7e7996",
        darker: "#564f70",
      },
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      transitionDuration: {
        10000: "10000ms",
      },
      dropShadow: {
        glow: ["0px 0px 10px rgba(255, 127, 0, 1)"],
      },
      boxShadow: {
        glow: "0px 0px 10px rgba(255, 127, 0, 1)",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
