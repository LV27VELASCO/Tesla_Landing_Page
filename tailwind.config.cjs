/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Gotham SSm A, sans-serif']
			},
			objectPosition: {
				'center-vid': '50% 35%'
			}
		},
	},
	plugins: [],
}
