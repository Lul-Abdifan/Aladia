

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(174, 112, 159)', 
        secondary: '#F7F7F7', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      fontSize: {
        small: '12px',
        medium: '16px',
        large: '24px',
      },
      spacing: {
        small: '4px',
        medium: '8px',
        large: '16px',
      },
    },
  },
  plugins: [],
};
