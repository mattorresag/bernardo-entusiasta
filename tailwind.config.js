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
          60: "rgba(255, 255, 255, 0.6)",
          40: "rgba(255, 255, 255, 0.4)",
          20: "rgba(255, 255, 255, 0.2)",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(106deg, #080808 23.59%, #1A1617 67.07%)",
        footer:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(153, 153, 153, 0.00) 100%)",
        juntese:
          "linear-gradient(0deg, rgba(217, 217, 217, 0.00) 0%, rgba(217, 217, 217, 0.02) 14.46%, rgba(217, 217, 217, 0.04) 29.4%, rgba(217, 217, 217, 0.06) 49.44%, rgba(217, 217, 217, 0.04) 67.27%, rgba(217, 217, 217, 0.02) 85.42%, rgba(217, 217, 217, 0.00) 100%), url('/assets/juntese.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        pt: ["PT Serif", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        sora: ["Sora", "ui-sans-serif", "system-ui"],
        fontWeight: {
          normal: "400",
        },
      },
    },
  },
  plugins: [],
};
