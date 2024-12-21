import type { App } from '$utils/constants'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

export async function load() {
	const apps = getEntries('apps') as App[]
	if (!apps) {
		throw error(404, 'No app found')
	}

	return {
		apps: apps.reverse(),
	}
}
