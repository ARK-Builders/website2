import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
// export const prerender = 'auto'

export async function load() {
	const posts = getEntries('posts')
	if (!posts) {
		throw error(404, 'No post found')
	}
	return {
		posts: posts
	}
}
