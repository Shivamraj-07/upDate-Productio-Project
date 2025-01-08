/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 2px 8px rgba(0, 0, 0, 0.4)', // Customize inset shadow
      },
      fontFamily: {
        'archivo': ['"Archivo Black"', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'red-orange': 'linear-gradient(to right, #F87171, #FBBF24)',
        'red-pink': 'linear-gradient(to right, #F87171, #F472B6)',
        'red-purple': 'linear-gradient(to right, #F87171, #A78BFA)',
        'red-yellow': 'linear-gradient(to right, #F87171, #FDE047)',
        'light-dark-red': 'linear-gradient(to right, #FCA5A5, #B91C1C)',
      },
      keyframes: {
        slideshow: {
          '0%, 100%': { opacity: '0' },
          '25%, 75%': { opacity: '1' },
        },
      },
      animation: {
        slideshow: 'slideshow 20s infinite',
      },
      fontFamily: {
        archivo: ["'Archivo Black'", 'sans-serif'],
        inter: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
