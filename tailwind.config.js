const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				arkOrange: '#DD7409',
				arkOrangeDeep: '#C96000',
				arkOrangeLight: '#FFF3E6',
				arkOrangeLight2: '#FFE0BF',
				arkOrangeLighter: '#FFF5DD',

				arkBlueLight: '#A5D6FF',
				arkGray: '#302C2C',
				arkGray2: '#453F3F',
				arkGray3: '#685F5F',
				arkGray4: '#968D8D',
				arkGray5: '#F5F4F2',
				arkGray6: '#F9F9F9'
			}
		}
	},
	plugins: []
}
