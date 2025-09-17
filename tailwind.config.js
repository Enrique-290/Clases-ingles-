/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dinamita: {
          red: "#E11D48",
          black: "#0B0B0B",
          white: "#FFFFFF",
          gray: "#1F2937"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
}
