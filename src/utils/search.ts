const fuzzySearch = (items: any[], query: string) => {
	let search = query?.toLowerCase().split(' ')

	let ret = items.reduce((found: any[], i: any) => {
		let matches = 0
		search.forEach((s: string) => {
			let props = 0
			for (var prop in i) {
				let p = i[prop]?.toString().toLowerCase()
				if (p?.indexOf(s) > -1) {
					props++
				}
			}
			if (props >= 1) {
				matches++
			}
		})
		if (matches == search.length) {
			found.push(i)
		}
		return found
	}, [])
	return ret
}

export default fuzzySearch
