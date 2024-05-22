/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:  {
      'bg-purple-400' : '#D8DBEC', 
      'bg-purple-300' : '#5C67B0', 
      'bg-purple-200' : '#D4D9FE', 
      'bg-purple-100' : '#E4E7FA',
      'border-100': 'rgba(92, 103, 176, 0.6)',
      'bg-btn-100' : '#19286E',
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
