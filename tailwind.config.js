module.exports = {
  purge: [
    "./pages/**/*.js",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./components/**/*.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      menu: ["Voltaire"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "splash-pattern":
          "linear-gradient(100deg, rgba(255,255,255, 0.2), rgba(255,255,255, 0.6)), url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');",
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80');",
        "food-pattern":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.8) 70%, rgba(255,255,255,.1) 100%), url('https://lecoindenico.ch/food_bg.png');",
      }),
      boxShadow: {
        orange: "8px 8px 0px 2px rgba(255,170,1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
