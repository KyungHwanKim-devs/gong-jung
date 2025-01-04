import type { Config } from "tailwindcss";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants";
import { warn } from "console";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        "-2xl": {
          max: "1535px",
        },
        "-xl": {
          max: "1279px",
        },
        "-lg": {
          max: "1024px",
        },
        "-md": {
          max: "767px",
        },
        "-sm": {
          max: "639px",
        },
      },

      colors: {
        warning: "#FF9600",
        error: "#c94b4b",

        "main-50": "#f6f6f6",
        "main-100": "#e7e7e7",
        "main-200": "#d1d1d1",
        "main-300": "#b0b0b0",
        "main-400": "#888888",
        "main-500": "#6d6d6d",
        "main-600": "#5d5d5d",
        "main-700": "#4f4f4f",
        "main-800": "#454545",
        "main-900": "#3d3d3d",
        "main-950": "#242424",

        "sub-50": "#",
        "sub-100": "#",
        "sub-200": "#",
        "sub-300": "#",
        "sub-400": "#",
        "sub-500": "#",
        "sub-600": "#",
        "sub-700": "#",
        "sub-800": "#",
        "sub-900": "#",
        "sub-950": "#",

        "shark-50": "#f6f6f6",
        "shark-100": "#e7e7e7",
        "shark-200": "#d1d1d1",
        "shark-300": "#b0b0b0",
        "shark-400": "#888888",
        "shark-500": "#6d6d6d",
        "shark-600": "#5d5d5d",
        "shark-700": "#4f4f4f",
        "shark-800": "#454545",
        "shark-900": "#3d3d3d",
        "shark-950": "#242424",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        infinite_scroll: "infinite_scroll 10s linear infinite",
        fadeIn: "fadeIn 0.2s ease-out ",
        fadeOut: "fadeOut 0.2s ease-out ",
      },
    },
  },
  plugins: [],
};
export default config;
