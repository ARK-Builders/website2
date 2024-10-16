<script lang="ts">
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import { appList } from '$utils/constants'
	import RateLogo1 from '$lib/assets/images/apps/rate/1.png'
	import RateLogo2 from '$lib/assets/images/apps/rate/2.png'
	import RateLogo3 from '$lib/assets/images/apps/rate/3.png'
	import MemoLogo1 from '$lib/assets/images/apps/memo/1.png'
	import MemoLogo2 from '$lib/assets/images/apps/memo/2.png'
	import MemoLogo3 from '$lib/assets/images/apps/memo/3.png'
	import RetouchLogo1 from '$lib/assets/images/apps/retouch/1.png'
	import RetouchLogo2 from '$lib/assets/images/apps/retouch/2.png'
	import RetouchLogo3 from '$lib/assets/images/apps/retouch/3.png'

	const currentApps = appList.slice(0, 3)
	const logos: Record<string, string> = {
		rate1: RateLogo1,
		rate2: RateLogo2,
		rate3: RateLogo3,
		memo1: MemoLogo1,
		memo2: MemoLogo2,
		memo3: MemoLogo3,
		retouch1: RetouchLogo1,
		retouch2: RetouchLogo2,
		retouch3: RetouchLogo3
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
							flex w-full flex-col items-center gap-3 border-b bg-transparent px-5 py-3 font-semibold first:rounded-tl-lg last:rounded-br-lg lg:h-[88px] lg:flex-row lg:first:rounded-tr-lg lg:last:rounded-bl-lg"
					>
						<img src="{base}/images/app-logos/{app.logo || 'placeholder'}.png" alt="app logo" />
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
								src={logos[activeApp.name.toLowerCase() + (i + 1)]}
								alt="{activeApp.name} app screens"
							/>
						{/each}
					</div>
				</div>
				<Cta text="Learn More" bgBlack classes="" />
			</div>
		</div>
	</div>
</section>
