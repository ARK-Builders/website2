<script lang="ts">
	import { onMount } from 'svelte'

	export let maxHeight = '380px'

	let containerRef: HTMLDivElement
	let isScrolling = false
	let isVisible = false
	let observer: IntersectionObserver

	function handleScroll(event: WheelEvent) {
		if (!isVisible || isScrolling) return

		isScrolling = true
		const container = containerRef
		const { scrollTop, scrollHeight, clientHeight } = container
		const isAtTop = scrollTop === 0
		console.log(window.scrollY)
		console.log(clientHeight, container.offsetTop)

		if (event.deltaY > 0) {
			// Scrolling down
		} else if (event.deltaY < 0) {
			// Scrolling up
		}

		isScrolling = false
	}

	function handleIntersection(entries: any) {
		isVisible = entries[0].isIntersecting
	}

	onMount(() => {
		window.addEventListener('wheel', handleScroll, { passive: false })

		observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		})

		if (containerRef) {
			observer.observe(containerRef)
		}

		return () => {
			window.removeEventListener('wheel', handleScroll)
			if (observer) {
				observer.disconnect()
			}
		}
	})
</script>

<div
	bind:this={containerRef}
	class="flex w-full snap-y flex-col gap-2 overflow-y-auto rounded-xl"
	style="max-height: {maxHeight};"
>
	<slot></slot>
</div>

<style>
	div::-webkit-scrollbar {
		display: none;
	}
</style>
