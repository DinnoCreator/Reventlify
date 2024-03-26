/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'BuyTicket': "url('https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg')",
        'LandingBg': "url('https://static.vecteezy.com/system/resources/thumbnails/024/234/201/small/elegant-golden-stage-horizontal-glowing-with-lighting-effect-sparkle-on-dark-background-template-premium-award-design-vector.jpg')",
        
      }
    },
  },
  plugins: [],
};
