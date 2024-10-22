import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const apps = getEntries('apps') || []
	return apps.map((app) => ({ slug: app.slug }))
}

export const load = ({ params }) => {
	const apps = getEntries('apps') || []
	const { slug } = params
	const app = apps.find((app) => app.slug === slug)

	if (!app) {
		throw error(404, 'No app found')
	}

	return {
		app
	}
}
