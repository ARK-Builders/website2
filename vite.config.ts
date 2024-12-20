import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	resolve: {
		alias: {
			$utils: path.resolve('./src/utils'),
		},
	},
	plugins: [
		sveltekit(),
		ViteImageOptimizer({
			jpeg: {
				quality: 85,
			},
		}),
	],
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
	},
})
