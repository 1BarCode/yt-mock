const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            inherit: colors.inherit,
            current: colors.current,
            blue: colors.blue,
            black: {
                light: "#282828",
                300: "#3d3d3d",
                500: "#212121",
                900: "#000000",
            },
            white: {
                light: "#F9F9F9",
                DEFAULT: "#ffffff",
            },
            gray: "#aaaaaa",
            red: "#FF0000",
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
