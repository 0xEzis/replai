/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "malt-color": "#FC5656",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        button:"0px 0px 0px 0px rgba(0, 0, 0, 0.07), 0px 34px 75px 0px rgba(0, 0, 0, 0.07), 0px 137px 137px 0px rgba(0, 0, 0, 0.06), 0px 308px 185px 0px rgba(0, 0, 0, 0.04), 0px 548px 219px 0px rgba(0, 0, 0, 0.01), 0px 856px 240px 0px rgba(0, 0, 0, 0.00)",
        buttonhigh:"0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 5px 11px 0px rgba(0, 0, 0, 0.10), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 45px 27px 0px rgba(0, 0, 0, 0.05), 0px 81px 32px 0px rgba(0, 0, 0, 0.01), 0px 126px 35px 0px rgba(0, 0, 0, 0.00)"
      }
    },
  },
  plugins: [],
};
