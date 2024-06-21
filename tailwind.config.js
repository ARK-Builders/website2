const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				arkOrange: '#DD7409',
				arkGray: '#302C2C',
				arkGray2: '#453F3F',
				arkGray3: '#685F5F',
				arkOrangeLight: '#FFF3E6'
			}
		}
	},
	plugins: []
}
