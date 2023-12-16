/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#17181c',
        secondary: '#353841'
      }
    }
  },
  plugins: []
}
