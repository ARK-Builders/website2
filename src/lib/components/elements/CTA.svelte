<script lang="ts">
	import { base } from '$app/paths'

	export let text
	export let bgBlack = false
	export let classes = ''
	export let url = '#'
	export let target = ''
</script>

<a
	target={target && target}
	href={url.indexOf('https://') != -1 ? url : base + url}
	class="{bgBlack
		? 'bg-black text-white'
		: 'bg-white text-black'} flex h-11 w-fit items-center rounded-md px-4 text-xl {classes}"
>
	{text}
</a>
