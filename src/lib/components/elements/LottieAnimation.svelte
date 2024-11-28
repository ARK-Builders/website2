<script lang="ts">
	import { browser } from '$app/environment'
	import lottie, { type AnimationItem } from 'lottie-web'
	import { onMount } from 'svelte'

	export let src = ''
	export let width = '100%'
	export let height = '100%'

	let container: HTMLDivElement
	let animation: AnimationItem

	onMount(() => {
		if (browser) {
			animation = lottie.loadAnimation({
				container: container,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: src
			})
		}
		return () => animation?.destroy()
	})
</script>

<div bind:this={container} style="width: {width}; height: {height};"></div>
