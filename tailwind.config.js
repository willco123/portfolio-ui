/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontFamily: {
    //   sans: ["ui-sans-serif", "system-ui"],
    //   serif: ["ui-serif", "Georgia"],
    //   mono: ["ui-monospace", "SFMono-Regular"],
    //   display: ["Oswald"],
    //   body: ['"Open Sans"'],
    // },
    extend: {
      colors: {
        foreground: {
          light: "rgb(0, 0, 0)",
          dark: "rgb(235, 235, 235)",
        },
        "background-start": {
          light: "rgb(205, 205, 205)",
          dark: "rgb(50, 50, 50)",
        },
        "background-end": {
          light: "rgb(220, 220, 220)",
          dark: "rgb(35, 35, 35)",
        },
        softblue: {
          light: "rgb(var(--primary) / <alpha-value>)",
          DEFAULT: "rgb(134, 168, 208)",
          dark: "rgb(var(--primary) / <alpha-value>)",
          darker: "rgb(33, 76, 117)",
        },
        dustyrose: {
          light: "rgba(228, 193, 193, 1)",
          DEFAULT: "rgba(216, 166, 166, 1)",
          dark: "rgba(166, 112, 94, 1)",
          darker: "rgba(124, 74, 54, 1)",
        },
        "subtle-white": {
          DEFAULT: "rgba(225, 225, 225, 1)",
          dark: "rgb(190,190,190)",
          darker: "rgb(160,160,160)",
        },
        "subtle-gray": {
          DEFAULT: "rgba(60, 60, 60, 1)",
          dark: "rgb(40,40,40)",
          light: "rgb(140,140,140)",
        },
        "weak-black": "rgba(0, 0, 0, 0.3)",
        olivegreen: {
          light: "rgba(200, 228, 201, 1)",
          DEFAULT: "rgba(161, 213, 164, 1)",
          dark: "rgba(94, 121, 71, 1)",
          darker: "rgba(66, 94, 49, 1)",
        },

        lavendergray: {
          light: "rgba(209, 193, 227, 1)",
          DEFAULT: " rgba(180, 164, 204, 1)",
          dark: "rgba(126, 121, 150, 1)",
          darker: " rgba(86, 79, 112, 1)",
        },
      },
      animation: {
        fade: "fadeOut 5s ease-in",
        fadeFast: "fadeOut 1s ease-in-out",
        "slide-midUp": "slideMidUp 2s ease-in-out forwards",
        "slide-upMid": "slideUpMid 1s ease-in-out forwards",
        "slide-midDown": "slideMidDown 2s ease-in-out forwards",
        "slide-downMid": "slideDownMid 1s ease-in-out forwards",
        test: "test 1s ease-in-out forwards",
      },

      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideMidUp: {
          "0%": { top: "45%", position: "fixed" },
          "100%": { top: "0", position: "fixed" },
        },
        slideUpMid: {
          "0%": { top: "0", position: "fixed" },
          "99%": { top: "45%", position: "fixed" },
          "100%": { position: "relative" },
        },

        slideMidDown: {
          "0%": { bottom: "30%", position: "absolute" },
          "100%": { bottom: "0", position: "absolute" },
        },
        slideDownMid: {
          "0%": { bottom: "0", position: "absolute" },
          "99%": { bottom: "20%", position: "absolute" },
          "100%": { position: "relative" },
        },
      }),
      transitionDuration: {
        2000: "2000ms",
        10000: "10000ms",
      },
      dropShadow: {
        glow: "0px 0px 10px rgb(var(--primary))",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        glow: "0px 0px 10px #366b9e",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
      transitionProperty: {
        height: "height",
        top: "top",
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
