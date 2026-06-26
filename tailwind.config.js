/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#0f172a',
          navy: '#111827',
          orange: '#f97316',
          red: '#dc2626',
          soft: '#f8fafc',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'industrial-grid':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}