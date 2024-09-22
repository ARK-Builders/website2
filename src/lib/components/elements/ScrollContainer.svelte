<script lang="ts">
	import { onMount } from 'svelte'

	export let maxHeight = '380px'

	let containerRef: HTMLDivElement
	let contentRef: HTMLDivElement
	let isScrolling = false
	let isVisible = false
	let observer: IntersectionObserver

	function handleScroll(event: WheelEvent) {
		if (!isVisible || isScrolling) return

		isScrolling = true
		const container = containerRef
		const { scrollTop, scrollHeight, clientHeight } = container
		const isAtTop = scrollTop === 0
		const isAtBottom = contentRef.clientHeight === Math.floor(scrollTop + clientHeight)
		const scrollDiv = () => {
			event.preventDefault()
			event.stopPropagation()
			container.scrollTop += event.deltaY * 3.8
		}
		if (event.deltaY > 0) {
			// Scrolling down
			if (!isAtBottom) {
				scrollDiv()
			}
		} else if (event.deltaY < 0) {
			// Scrolling up
			if (!isAtTop) {
				scrollDiv()
			}
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
			rootMargin: '-100px',
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
	class="flex w-full flex-col overflow-y-auto scroll-smooth rounded-xl"
	style="max-height: {maxHeight};"
>
	<div bind:this={contentRef} class="flex flex-col gap-2">
		<slot />
	</div>
</div>

<style>
	div::-webkit-scrollbar {
		display: none;
	}
</style>
