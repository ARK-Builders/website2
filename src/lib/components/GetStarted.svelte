<script lang="ts">
	import { base } from '$app/paths'

	export let bgOrange = false
	export let classes = ''
</script>

<a
	href="{base}#"
	class="{bgOrange
		? 'bg-arkOrange'
		: 'bg-black'} flex h-10 items-center rounded-md px-4 text-white {classes}"
>
	Get Started
</a>
