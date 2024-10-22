/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{primaryColor:"#ED002E"},
      fontFamily:{google:["Poppins", 'sans-serif']}
    },
  },
  plugins: [],
}
