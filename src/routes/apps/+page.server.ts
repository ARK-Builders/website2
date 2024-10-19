import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const apps = getEntries('apps')
	if (!apps) {
		throw error(404, 'No app found')
	}

	return {
		apps
	}
}
