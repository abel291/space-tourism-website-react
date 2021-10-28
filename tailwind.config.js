// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: "#0B0D17",
            secondary: "#D0D6F9",
            white: "#ffffff",
        },
        extend: {
            fontFamily: {
                bellefair: ["Bellefair"],
                "barlow-condensed": ["Barlow Condensed"],
                barlow: ["Barlow"],
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1440px',
            // => @media (min-width: 1024px) { ... }
      
            
          }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
