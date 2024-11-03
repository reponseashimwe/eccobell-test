// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#197594",
        grayBg: "#F5F5F3",
      },
      width: {
        "content-row": "100%",
        "content-div": "95%", // default width
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".content-row": {
          display: "flex",
          width: "100%",
          justifyContent: "center",
        },
        ".content-div": {
          width: "95%",
          "@screen md": {
            width: "90%",
          },
          "@screen lg": {
            width: "80%",
          },
        },
      });
    },
  ],
};
