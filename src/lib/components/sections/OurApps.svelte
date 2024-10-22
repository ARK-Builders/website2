<script lang="ts">
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import { appList } from '$utils/constants'
	import RateImage1 from '$lib/assets/images/apps/rate/1.png'
	import RateImage2 from '$lib/assets/images/apps/rate/2.png'
	import RateImage3 from '$lib/assets/images/apps/rate/3.png'
	import MemoImage1 from '$lib/assets/images/apps/memo/1.png'
	import MemoImage2 from '$lib/assets/images/apps/memo/2.png'
	import MemoImage3 from '$lib/assets/images/apps/memo/3.png'
	import RetouchImage1 from '$lib/assets/images/apps/retouch/1.png'
	import RetouchImage2 from '$lib/assets/images/apps/retouch/2.png'
	import RetouchImage3 from '$lib/assets/images/apps/retouch/3.png'
	import RateLogo from '$lib/assets/images/app-logos/rate.svelte'
	import MemoLogo from '$lib/assets/images/app-logos/memo.svelte'
	import RetouchLogo from '$lib/assets/images/app-logos/retouch.svelte'
	import type { ComponentType } from 'svelte'

	const currentApps = appList.slice(0, 3)
	const appImages: Record<string, string> = {
		rate1: RateImage1,
		rate2: RateImage2,
		rate3: RateImage3,
		memo1: MemoImage1,
		memo2: MemoImage2,
		memo3: MemoImage3,
		retouch1: RetouchImage1,
		retouch2: RetouchImage2,
		retouch3: RetouchImage3
	}

	const appLogos: Record<string, ComponentType> = {
		rate: RateLogo,
		memo: MemoLogo,
		retouch: RetouchLogo
	}

	let activeApp = currentApps[0]
</script>

<section id="apps" class="relative flex py-12 lg:px-5 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:gap-10 lg:px-0">
		<div class="flex w-full flex-col gap-4">
			<p class="text-center text-4xl font-bold lg:text-6xl">Our Apps</p>
		</div>

		<div class="flex w-full flex-col gap-7 lg:flex-row">
			<!-- Left side panel -->
			<div
				class="grid h-fit w-full grid-cols-3 flex-row overflow-hidden rounded-lg bg-arkGray6 md:flex lg:w-1/5 lg:flex-col"
			>
				{#each currentApps as app}
					<button
						style="background-color: {activeApp.name == app.name ? app.colors[1] : ''};"
						on:click={() => (activeApp = app)}
						class="
						{activeApp.name != app.name ? 'hover:bg-arkGray5' : ''} flex w-full flex-col items-center gap-3
						border-b bg-transparent px-5 py-3 font-semibold first:rounded-tl-lg last:rounded-br-lg lg:h-[88px] lg:flex-row lg:first:rounded-tr-lg lg:last:rounded-bl-lg"
					>
						{#if !app.logo}
							<img src="{base}/images/placeholder.png" alt="app logo" />
						{:else}
							<svelte:component this={appLogos[app.name.toLowerCase()]} />
						{/if}
						{app.name}
					</button>
				{/each}
			</div>

			<!-- App details -->
			<div
				style="background-color: {activeApp.colors[0]};"
				class="flex w-full flex-col items-center justify-between gap-3 rounded-md p-5 lg:w-4/5 lg:items-start"
			>
				<div class="flex flex-col items-center gap-3 lg:items-start">
					<p class="text-center text-2xl font-bold lg:text-start lg:text-3xl">{activeApp.name}</p>
					<p class="text-center lg:text-start">{activeApp.description}</p>
					<div class="flex-flow flex gap-3 overflow-auto">
						{#each new Array(3) as a, i}
							<img
								class="max-h-[500px]"
								src={appImages[activeApp.name.toLowerCase() + (i + 1)]}
								alt="{activeApp.name} app screens"
							/>
						{/each}
					</div>
				</div>
				<Cta url={'/apps/' + activeApp.name.toLowerCase()} text="Learn More" bgBlack classes="" />
			</div>
		</div>
	</div>
</section>
