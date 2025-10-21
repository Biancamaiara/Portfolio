/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
        DEFAULT: '1rem', //16px
        sm: '2rem',      //32px
        lg: '4rem',      //48px
        xl: '5rem', // 80px
       '2xl': '6rem', // big screens 96px
      },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "1024px",
          xl: "1280px",
          '2xl': "1536px",
        },
      },
    },
  },
  plugins: [],
}
