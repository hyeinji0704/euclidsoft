/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
    colors:  {
      'bg-purple-200' : '#D4D9FE', 
      'bg-purple-100' : '#E4E7FA',
      'bg-btn-100' : '#19286E',
    },
    fontFamily: {
      NotoSans: ["NotoSans"],
    },
    padding: {
      '10px': '10px',
      '100px': '100px',
      '75px': '75px',
      '45px': '45px',
      '30px': '30px',
      '27px': '27px',
    },
    dropShadow: {
      '3xl': '0 4px 10px rgba(176, 176, 254, 0.5)',
      '4xl': '2px 4px 10px rgba(25, 40, 110, 0.2)',
    },
    height: {
      '95': '95px',
    },
   },
  plugins: []
}
