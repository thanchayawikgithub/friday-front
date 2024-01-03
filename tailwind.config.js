import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "white",
              DEFAULT: "#ea580c",
            },
            secondary: {
              foreground: "#ea580c",
              DEFAULT: "white",
            },
          },
        },
      },
    }),
  ],
};
