/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        "text-primary": "#343A40",
        "text-secondary": "#ADB5BD",
        "backgroundBody": "#F7F7F7",
        "background": "#fafaff",
        "background-secondary": "#D8D8D850",
        "accent": "#30D681",

        "backgroundBody-dark": '#082032',
        "background-dark": '#2C394B',
        "background-seondary-dark": "#526D82 ",
        "text-primary-dark": "#DEE2E6",
        "text-secondary-dark": "#9DB2BF",
      }
    },
  },
  plugins: [],
}

