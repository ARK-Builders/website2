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

		const { scrollTop, scrollHeight, clientHeight } = containerRef
		const isAtTop = scrollTop === 0
		const isAtBottom = scrollHeight === Math.floor(scrollTop + clientHeight)

		const scrollDiv = (offset: number) => {
			event.preventDefault()
			event.stopPropagation()
			containerRef.scrollTop += offset
		}

		const offset = 20 * Math.max(event.deltaY, 10)

		if (event.deltaY > 0) {
			if (!isAtBottom) scrollDiv(offset)
		} else if (event.deltaY < 0) {
			if (!isAtTop) scrollDiv(-offset)
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
	class="flex w-full snap-y snap-mandatory flex-col gap-2 overflow-y-auto scroll-smooth rounded-xl lg:h-[317px] xl:h-full"
	style="max-height: {maxHeight};"
>
	<!-- <div bind:this={contentRef} class=" flex snap-y snap-mandatory flex-col gap-2 overflow-y-auto"> -->
	<slot />
	<!-- </div> -->
</div>

<style>
	div::-webkit-scrollbar {
		display: none;
	}
</style>
