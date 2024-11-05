import type { Blog } from '$utils/constants'
import { getEntries, getTags } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */

export async function load() {
	const posts = getEntries('posts') as Blog[]
	if (!posts) {
		throw error(404, 'No post found')
	}

	const tags = getTags()

	return {
		posts: posts,
		tags: tags
	}
}
