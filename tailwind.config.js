/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Outline: {
          'gray': '#E2E3E6',
        },
        Primary: {
          'Blue': '#3375F1',
          'LightBlue': '#F3F5FE',
          'Purple': '#6338F5',
          'White': '#FFFFFF',
        },
        Secondary: {
          'LightYellow': '#FFFDE3',
          'LightTeal': '#CFE0FF',
        },
        Text: {
          'Black': '#282828',
          'Placeholder': '#878787',
        },
       
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Oswald' : ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

