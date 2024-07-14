/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212F3C",
        secondary: "#F4D03F",
        logoColor: "red[700]"

      },
      transitionProperty: {
        'width': 'width',
      }
    },
    plugins: [],
  }
}
