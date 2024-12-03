import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		paths: {
			base: process.env.BASE_PATH || '',
		},
		prerender: {
			crawl: true,
		},
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
}

export default config
