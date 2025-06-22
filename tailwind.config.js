/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af',   // Strong blue
          light: '#3b82f6',  // Accent blue
          sky: '#38bdf8',    // Sky blue (Tailwind's sky-400)
          pale: '#e0f2fe',   // Very light sky (sky-100)
          dark: '#0f172a',   // Very dark navy
          black: '#000000',  // Pure black
          gray: '#1f2937',   // Slate gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
