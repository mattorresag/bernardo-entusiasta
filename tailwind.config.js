/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        black: {
          100: "rgba(0, 0, 0, 1)",
          87: "rgba(0, 0, 0, 0.87)",
          bg: "#050505",
        },
        white: {
          100: "rgba(255, 255, 255, 1)",
          87: "rgba(255, 255, 255, 0.87)",
          70: "rgba(255, 255, 255, 0.7)",
          40: "rgba(255, 255, 255, 0.4)",
          20: "rgba(255, 255, 255, 0.2)",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(106deg, #080808 23.59%, #1A1617 67.07%)",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        pt: ["PT Serif", "ui-sans-serif", "system-ui"],
        fontWeight: {
          normal: "400",
        },
      },
    },
  },
  plugins: [],
};
