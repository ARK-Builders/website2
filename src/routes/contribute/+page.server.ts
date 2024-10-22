import { getEntries } from '$utils/entries'

export const load = async () => {
	const data = getEntries('issues')

	return {
		data: JSON.stringify(data)
	}
}
