/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    
    extend: {
        colors: {
            primary: '#04327A',
            black: '#000000',
            white: '#FFFFFF',
            orange: {
                DEFAULT: '#FF623E',
                dark: '#C44822',
            },
            green: {
                DEFAULT: '#68C89E'
            },
            'warm-white': '#FEF8F1',
            'dark-blue': '#041C43',
            'blue-grey': '#F0F4F7',
            gray: {   
                '0': '#000000',
                '1': '#7D7D7D',
                '2': '#B7B7B7',
                '3': '#F6F6F6',
            }
        },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"]
  }
}