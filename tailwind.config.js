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
          87: "rgba(0, 0, 0, 0.87)",
          bg: "#050505",
        },
        white: {
          87: "rgba(255, 255, 255, 0.87)",
          70: "rgba(255, 255, 255, 0.7)",
          40: "rgba(255, 255, 255, 0.4)",
          20: "rgba(255, 255, 255, 0.2)",
        },
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
