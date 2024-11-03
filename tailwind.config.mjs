/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				secondary: '#666'
			},
			fontFamily: {
				geist: ['Geist Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
