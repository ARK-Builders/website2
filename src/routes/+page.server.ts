import type { App, Blog } from '$utils/constants'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

export const prerender = true
export const ssr = true

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = getEntries('posts') as Blog[]
	const apps = getEntries('apps') as App[]

	if (!posts) {
		throw error(404, 'No post found')
	}

	return {
		posts: posts,
		apps: apps || [],
	}
}
