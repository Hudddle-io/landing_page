/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "scale(1.5)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                floatOne: {
                    "0%": { transform: "translate(0px, 0px )" },
                    "25%": { transform: "translate(-10px, -10px)" },
                    "50%": { transform: "translate(20px, -10px)" },
                    "75%": { transform: "translate(10px, 20px)" },
                    "100%": { transform: "translate(0px , 0px)" },
                },
                floatTwo: {
                    "0%": { transform: "translate(0px, 0px )" },
                    "25%": { transform: "translate(-10px, 30px)" },
                    "50%": { transform: "translate(-30px, 10px)" },
                    "75%": { transform: "translate(10px, -30px)" },
                    "100%": { transform: "translate(0px , 0px)" },
                },
            },
            backgroundImage: {
                hero: "url('/src/assets/Hero-background.svg')",
            },
            backgroundSize: {
                hero: "cover",
            },
        },
        animation: {
            "spin-slow": "rotate 10s linear infinite",
            "float-One": "floatOne 10s linear infinite",
            "float-Two": "floatTwo 10s linear infinite",
        },
    },
    plugins: [],
};
