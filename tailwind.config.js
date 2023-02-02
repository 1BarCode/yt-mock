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
            black: {
                light: "#282828",
                300: "#3d3d3d",
                500: "#212121",
                900: "#181818",
            },
            white: {
                light: "#F9F9F9",
                DEFAULT: "#ffffff",
            },
            gray: "#aaaaaa",
            red: "#FF0000",
            slate: colors.slate,
            // gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            orange: colors.orange,
            emerald: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
