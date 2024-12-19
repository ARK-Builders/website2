<script lang="ts">
	import { base } from '$app/paths'
	import { slug } from 'github-slugger'

	export let text
	export let classes = ''

	let url = slug(text)
</script>

<a
	href={base + '/tags/' + url}
	class="rounded-md border bg-arkGray7 px-1 text-sm font-medium hover:bg-arkGray5 {classes}"
>
	{text}
</a>
