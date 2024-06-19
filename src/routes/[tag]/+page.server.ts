import { error } from '@sveltejs/kit'
import { slug } from 'github-slugger'
import { getEntries } from '$utils/entries.js'

export let prerender = false

function slugsArray(tags: Array<string>) {
	return tags?.map((t) => slug(t)) || []
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { tag } = params
	const posts = getEntries('posts')
	const filteredPosts = posts.filter((p) => slugsArray(p.tags).includes(tag))

	if (!filteredPosts) {
		throw error(404, 'No post found')
	}

	return {
		tag: tag,
		posts: filteredPosts
	}
}
