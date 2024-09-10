<script lang="ts">
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Carousel from 'svelte-carousel'
	import { browser } from '$app/environment'
	import Icon from '@iconify/svelte'

	const slides = [
		{
			text: 'Connect all your devices using P2P technology',
			color: '#ACD6FC',
			animation: 'feature-1'
		},
		{
			text: 'Connect all your devices using P2P technology 2',
			color: '#DDEDCC',
			animation: 'feature-2'
		},
		{
			text: 'Connect all your devices using P2P technology 3',
			color: '#E3D6F7',
			animation: 'feature-3'
		},
		{
			text: 'Connect all your devices using P2P technology 4',
			color: '#FDEAC8',
			animation: 'feature-4'
		}
	]

	let hoverGithub = false
</script>

<div class="mb-16 flex w-full flex-col">
	<div class="relative flex w-full flex-row items-center justify-between gap-1 py-10 md:mb-10">
		<!-- BG Images -->
		<div class="flex-1">
			<img class="hidden max-w-[60%] md:block" src="{base}/images/left.png" alt="left" />
			<img class="sm:hidden" src="{base}/images/mob-left.png" alt="left" />
		</div>

		<!-- Center part -->
		<div
			class="absolute flex max-w-2xl flex-col items-center gap-4 sm:w-1/2 sm:gap-10 md:relative lg:w-full"
		>
			<div class="flex flex-col items-center gap-2 md:gap-5">
				<p class="text-center text-3xl font-semibold md:text-[40px] lg:text-[66px]">
					Neat, efficient and
				</p>
				<p
					class="w-fit rounded-lg bg-arkOrange px-4 text-center text-2xl font-semibold text-white md:text-4xl md:leading-snug lg:text-[66px]"
				>
					privacy-focused apps
				</p>
				<p class="text-center text-3xl font-bold md:text-[40px] lg:text-[66px]">
					for your productivity
				</p>
			</div>
			<p class="max-w-[650px] px-5 text-center md:px-2 md:text-xl">
				ARK Builders crafts contemporary software for all platforms, with the mission to elevate
				daily user experiences through privacy enhancements and seamless cross-device
				synchronization.
			</p>
			<div class="flex items-center justify-center gap-2">
				<Cta text="Get Started" bgBlack />
				<div class="flex items-center gap-0">
					<Cta
						on:hover={(e) => (hoverGithub = e.detail)}
						target="_blank"
						text="View Github"
						classes="underline pr-2"
						url="https://github.com/ARK-Builders"
					/>
					<Icon class={hoverGithub ? 'text-arkOrange' : ''} icon="ri:github-fill" width="24px" />
				</div>
			</div>

			<div
				class="flex w-fit flex-col gap-2 rounded-full bg-arkOrangeLight px-7 py-3 lg:px-10 lg:py-5"
			>
				<p class="text-center">Be the first to know about our latest updates</p>
				<div class="flex flex-row justify-center gap-5">
					<a
						class="flex h-10 w-10 items-center justify-center rounded-full bg-arkOrangeLight2"
						href="https://www.youtube.com/@ARK-Builders-Dev"
						target="_blank"
					>
						<Icon icon="iconoir:youtube" width="24px" color="#DD7409" />
					</a>
					<a
						class="flex h-10 w-10 items-center justify-center rounded-full bg-arkOrangeLight2"
						href="https://medium.com/me/stories/public"
						target="_blank"
					>
						<Icon icon="iconoir:medium" width="24px" color="#DD7409" />
					</a>
				</div>
			</div>
		</div>

		<!-- BG Images -->
		<div class="flex flex-1 justify-end">
			<img class="hidden max-w-[50%] md:block" src="{base}/images/right.png" alt="right" />
			<img class="sm:hidden" src="{base}/images/mob-right.png" alt="right" />
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-7xl flex-row rounded-xl sm:px-8 lg:px-0">
		{#if browser}
			<Carousel dots={false} arrows={false} autoplay autoplayDuration={5000}>
				{#each slides as { color, text, animation }, i}
					<div
						class="flex w-full flex-col justify-between rounded-xl lg:flex-row"
						style="background-color: {color}"
					>
						<p class="mt-10 pl-5 text-center text-3xl font-medium lg:text-start">{text}</p>
						<div class="flex justify-center p-1">
							<!-- svelte-ignore a11y-media-has-caption -->
							<video width="540" height="480" autoplay loop muted>
								<source src="{base}/videos/{animation}.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				{/each}
			</Carousel>
		{/if}
	</div>
</div>

<style>
	video {
		filter: brightness(105%);
		-webkit-filter: brightness(105%);
	}
</style>
