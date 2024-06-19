import { error } from '@sveltejs/kit'
import { getEntries } from '$utils/entries.js'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ slug: 'about-ark' }]
}

export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = getEntries('posts')
	const authors = getEntries('authors')
	const { slug } = params
	const post = posts.find((p) => p.slug === slug)
	const author = authors.find((a) => a.name === post.author)

	if (!post) {
		throw error(404, 'No post found')
	}

	return {
		post: post,
		author: author
	}
}
