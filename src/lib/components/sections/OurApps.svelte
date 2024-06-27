<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import { appList } from '$utils/constants'

	let activeApp = appList[0]
</script>

<section class="relative flex items-center py-12">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:gap-10 lg:px-0">
		<div class="flex w-full flex-col gap-4">
			<p class="text-center text-6xl font-bold">Our Apps</p>
		</div>

		<div class="flex w-full flex-col gap-7 lg:flex-row">
			<!-- Left side panel -->
			<div class="flex w-1/5 flex-row overflow-hidden bg-arkGray6 lg:flex-col">
				{#each appList as app}
					<button
						style="background-color: {activeApp.name == app.name ? app.colors[1] : ''};"
						on:click={() => (activeApp = app)}
						class="
							flex w-full flex-row items-center gap-3 border-b bg-transparent px-5 py-3 font-semibold first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg lg:h-[88px]"
					>
						<img src="/images/app-logos/{app.logo || 'placeholder'}.png" alt="app logo" />
						{app.name}
					</button>
				{/each}
			</div>

			<!-- App details -->
			<div
				style="background-color: {activeApp.colors[0]};"
				class="flex w-4/5 flex-col justify-between rounded-md p-5"
			>
				<div class="flex flex-col gap-3">
					<p class="text-3xl font-bold">{activeApp.name}</p>
					<p>{activeApp.description}</p>
				</div>
				<Cta text="Learn More" bgBlack classes="" />
			</div>
		</div>
	</div>
</section>
