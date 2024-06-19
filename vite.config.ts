import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			$utils: path.resolve('./src/utils')
		}
	},
	plugins: [sveltekit()]
})
