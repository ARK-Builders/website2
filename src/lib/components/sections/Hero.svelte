<script lang="ts">
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import { browser } from '$app/environment'
	import Icon from '@iconify/svelte'
	import ScrollContainer from '$lib/components/elements/ScrollContainer.svelte'
	import { communityList } from '$utils/constants'
	import LottieAnimation from '$lib/components/elements/LottieAnimation.svelte'

	const slides = [
		{
			text: 'Connect all your devices using P2P technology',
			color: '#ACD6FC',
			animation: 'feature-1'
		},
		{
			text: 'Connect all your devices using P2P technology 2',
			color: '#DBF5C8',
			animation: 'feature-2'
		},
		{
			text: 'Connect all your devices using P2P technology 3',
			color: '#E1D0F7',
			animation: 'feature-3'
		},
		{
			text: 'Connect all your devices using P2P technology 4',
			color: '#FFEDC3',
			animation: 'feature-4'
		}
	]

	const contacts = communityList.filter((community) =>
		['Telegram', 'Discord', 'X'].includes(community.name)
	)

	let hoverGithub = false
</script>

<div class="mb-16 flex w-full flex-col">
	<div class="relative flex w-full flex-row items-center justify-between gap-1 py-10 md:mb-10">
		<!-- BG Images -->
		<div class="flex-1">
			<img class="hidden md:block xl:max-w-[60%]" src={base + '/images/left.png'} alt="left" />
			<img class="md:hidden" src={base + '/images/mob-left.png'} alt="left" />
		</div>

		<!-- Center part -->
		<div
			class="absolute flex max-w-2xl flex-col items-center gap-4 sm:relative sm:w-1/2 sm:gap-10 lg:w-full"
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
				<Cta url="/#apps" text="Get Started" bgBlack />
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
					{#each contacts as community}
						<a
							class="flex h-10 w-10 items-center justify-center rounded-full bg-arkOrangeLight2"
							href={community.url}
							target="_blank"
						>
							<Icon icon={community.logo} width="24px" color={community.colors[1]} />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- BG Images -->
		<div class="flex flex-1 justify-end">
			<img class="hidden md:block xl:max-w-[50%]" src={base + '/images/right.png'} alt="right" />
			<img class="md:hidden" src={base + '/images/mob-right.png'} alt="right" />
		</div>
	</div>

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
</div>

<style>
	video {
		filter: brightness(105%);
		-webkit-filter: brightness(105%);
	}

	::-webkit-scrollbar {
		display: none;
	}
</style>
