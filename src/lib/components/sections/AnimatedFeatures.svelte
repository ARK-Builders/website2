<script lang="ts">
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import ScrollContainer from '$lib/components/elements/ScrollContainer.svelte'
	import LottieAnimation from '$lib/components/elements/LottieAnimation.svelte'

	const slides = [
		{
			text: 'Connect all your devices using P2P technology',
			color: '#ACD6FC',
			animation: 'feature-1'
		}
		// {
		// 	text: 'Connect all your devices using P2P technology 2',
		// 	color: '#DBF5C8',
		// 	animation: 'feature-2'
		// },
		// {
		// 	text: 'Connect all your devices using P2P technology 3',
		// 	color: '#E1D0F7',
		// 	animation: 'feature-3'
		// },
		// {
		// 	text: 'Connect all your devices using P2P technology 4',
		// 	color: '#FFEDC3',
		// 	animation: 'feature-4'
		// }
	]
</script>

<div class="mx-auto flex w-full max-w-7xl flex-row sm:px-8 lg:px-5 xl:px-0">
	{#if browser}
		<ScrollContainer>
			{#each slides as { color, text, animation }, i}
				<div
					class="flex w-full snap-center flex-col justify-between rounded-xl lg:flex-row"
					style="background-color: {color}"
				>
					<p class="mt-10 pl-5 text-center text-3xl font-medium lg:text-start">{text}</p>
					<div class="flex justify-center">
						<LottieAnimation
							height="380px"
							width="540px"
							src={`${base}/videos/${animation}.json`}
						/>
					</div>
				</div>
			{/each}
		</ScrollContainer>
	{/if}
</div>
