/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'modal': '1px 1px 14px 2px rgba(255, 255, 255, 0.85)',
      },
      colors: {
        dark: '#3E5674',
        gray: {
          50:'#F9FAFB'
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

