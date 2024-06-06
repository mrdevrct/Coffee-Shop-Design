/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      // => @media (min-width: 480px) { ... }
      xs: "480px",

      // => @media (min-width: 640px) { ... }
      sm: "640px",

      // => @media (min-width: 768px) { ... }
      md: "768px",

      // => @media (min-width: 1024px) { ... }
      lg: "1024px",

      // => @media (min-width: 1280px) { ... }
      xl: "1280px",
    },

    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },

      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },

      letterSpacing: {
        tightest: "-0.065em",
      },

      spacing: {
        "25" : "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem",
        "4.5": "1.125rem"
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },

      backgroundImage: {
        "home-mobile": "url(../images/headerBgMobile.webp)",
        "home-desktop": "url(../images/headerBgDesktop.webp)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
