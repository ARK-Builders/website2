<script lang="ts">
	import { slug } from 'github-slugger'

	export let text
	export let size = 'text-sm'

	let url = slug(text)
</script>

<a
	href={'/tags/' + url}
	class="rounded border px-1 font-medium uppercase text-arkOrange2 hover:text-arkOrangeDeep {size}"
>
	{text}
</a>
