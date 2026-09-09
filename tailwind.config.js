module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        kaushan: ['"Kaushan Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        robotoslab: ['"Roboto Slab"', 'serif'],
        lora: ['Lora', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
