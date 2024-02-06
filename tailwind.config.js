/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      maxWidth: {
        1200: `${1200 / 16}rem`,
        800: `${800 / 16}rem`,
        708: `${708 / 16}rem`,
        358: `${358 / 16}rem`,
      },
      textColor: {
        dashboard: {
          light: "#A6A6AE",
        },
      },
      backgroundImage: {
        home_pageimg: "/images/bgimg.jpg",
      },
      borderColor: {
        light: "#ddd",
        dashboard: {
          light: "#2E3234",
        },
      },
      backgroundColor: {
        dashboard: {
          light: "#1D2022",
        },
      },
      colors: {
        purple: "#702283",
        lightGray: "#828282",
      },
    },
  },
  plugins: [],
};
