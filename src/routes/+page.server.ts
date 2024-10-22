import type { Blog } from '$utils/constants'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
// export const prerender = 'auto'

export async function load() {
	const posts: Blog[] = getEntries('posts') as Blog[]
	if (!posts) {
		throw error(404, 'No post found')
	}
	return {
		posts: posts
	}
}
