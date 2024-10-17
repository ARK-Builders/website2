<script lang="ts">
	import { onMount } from 'svelte'
	import lottie from 'lottie-web'

	export let src = ''
	export let width = '100%'
	export let height = '100%'

	let container: HTMLDivElement

	onMount(() => {
		const animation = lottie.loadAnimation({
			container: container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: src
		})

		return () => animation.destroy()
	})
</script>

<div bind:this={container} style="width: {width}; height: {height};"></div>
