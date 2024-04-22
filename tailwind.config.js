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
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      light: "#FFFFFF",
      dark: "#191919",
      primary: {
        50: '#F3F8FF',
        100: '#E7F0FF',
        200: '#70A7FF',
        500: '#116DFF',
        600: '#0E57CC',
        700: '#0A4199',
        900: '#072C66'
      },
      secondary: {
        50: '#FFF6E7',
        200: '#FFC870',
        500: '#FFA311',
        900: '#CC820E'
      },
      gray: {
        50: '#FAFAFA',
        200: '#E5E5E5',
        300: '#B2B2B2',
        400: '#999999',
        500: '#7F7F7F',
        600: '#4C4C4C',
        900: '#333333'
      },
      error: {
        50: '#FFA0A0',
        400: '#FF1111',
        500: '#CC0E0E',
        700: '#990A0A',
        900: '#660707'
      },
      success: {
        50: '#A7FFA0',
        400: '#24FF11',
        500: '#1DCC0E',
        700: '#16990A',
        900: '#0E6607'
      },
    },
  },
  plugins: [],
}

