<script lang="ts">
	import { base } from '$app/paths'
	import MemoImage1 from '$lib/assets/images/apps/memo/1.png'
	import { appLogos } from '$utils/constants'

	export let app: any
</script>

<div class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5">
	<div class="flex flex-row items-center gap-2">
		<div class="flex h-10 w-10 items-center">
			{#if !app.title}
				<img src="{base}/images/placeholder.png" alt="app logo" />
			{:else}
				<svelte:component this={appLogos[app.title.toLowerCase()]} />
			{/if}
		</div>

		<p class="text-2xl font-bold">{app.title}</p>
	</div>

	<img
		class="max-h-[220px] rounded-md object-cover lg:max-h-[350px]"
		src={MemoImage1}
		alt="{app.title} app screens"
	/>

	<a
		href="{base}/apps/{app.slug}"
		class="w-full rounded-md bg-arkGray p-2 text-center font-bold text-white hover:bg-opacity-90"
		>Learn More</a
	>
</div>
