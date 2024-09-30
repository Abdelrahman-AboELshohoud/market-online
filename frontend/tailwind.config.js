/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx.ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED9907",
        secondary: "#89C9E6",
        "type-secondary": "#2A2213",
        danger: "#FA0F32",
        success: "#5AB22E",
        mwhite: "#fefefe",
        mblack: "#151515",
      },
    },
  },
  plugins: [],
};
