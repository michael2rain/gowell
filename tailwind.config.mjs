/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				button: ['IBM Plex Mono', 'sans-serif'],
				heading: ['Archivo', 'sans-serif'],
			},
			colors: {
				'brand': {
					'acero': '#8C8C8C',
				}
			},
			boxShadow: {
				button: '4px 6px 27px 0 #e3ebf7',
			}
		},
	},
	plugins: [],
}
