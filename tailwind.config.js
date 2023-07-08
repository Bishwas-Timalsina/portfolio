/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: 'var(--nav-color)',
        body:'var(--bg-color)',
        textPrimary:'var(--text-primary)',
        textSec:'var(--text-secondary)',
        ctaPrimary:'var(--cta-primary)',
        ctaSecondary:'var(--cta-secondary)',
        ctaHover:'var(--cta-hover)'
      },
     

    },
  },
  plugins: [],
}