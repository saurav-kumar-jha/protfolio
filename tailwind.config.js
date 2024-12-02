/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 100px rgba(68, 68, 56, 0.37)',
      },
    },
  },
  plugins: [],
}

