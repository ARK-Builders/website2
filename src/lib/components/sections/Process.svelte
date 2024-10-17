<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	type Tab = 'typical' | 'ark'

	let activeType: Tab = 'typical'
	let intervalId: number | undefined = undefined

	onMount(() => {
		intervalId = setInterval(() => {
			activeType = activeType == 'typical' ? 'ark' : 'typical'
		}, 5000)

		return () => {
			clearInterval(intervalId)
		}
	})

	const setActiveType = (type: Tab) => {
		activeType = type
		clearInterval(intervalId)
	}
</script>

<section class="relative flex items-center bg-arkGray py-12">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:gap-10 lg:px-0">
		<div class="flex w-full flex-col gap-4">
			<p class="text-center text-4xl font-bold text-white lg:text-6xl">Process</p>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-7">
			<div
				class="flex h-11 w-fit flex-row items-center justify-between overflow-hidden rounded-full bg-arkOrange bg-opacity-40 text-lg font-semibold text-white lg:h-12 lg:text-2xl"
			>
				<button
					on:click={() => setActiveType('ark')}
					class:bg-arkOrange={activeType == 'ark'}
					class:text-arkGray4={activeType != 'ark'}
					class="flex h-full items-center justify-center rounded-full px-6"
				>
					Suggested by ARK
				</button>
				<button
					on:click={() => setActiveType('typical')}
					class:bg-arkOrange={activeType == 'typical'}
					class:text-arkGray4={activeType != 'typical'}
					class="flex h-full items-center justify-center rounded-full px-5"
				>
					Typical App
				</button>
			</div>

			<div class="flex w-full flex-col justify-center gap-16 lg:flex-row">
				<div class="flex justify-center">
					<img
						class="h-fit max-h-[680px] w-fit {activeType == 'ark' && 'ml-8'}"
						src="{base}/images/process/{activeType}-left.png"
						alt="ARK process"
					/>
				</div>

				<!-- Right Column -->
				<div
					class="flex flex-col text-white md:h-[750px] {activeType != 'typical' &&
						'lg:justify-end'}"
				>
					<!-- ARK App -->
					<!-- <p
						class="{activeType == 'typical' &&
							'text-center'} text-[32px] font-semibold lg:text-start"
					>
						Resources Needed
					</p> -->
					<div class="flex flex-col gap-3">
						{#if activeType == 'ark'}
							<img
								class="h-fit max-h-[720px] w-fit"
								src="{base}/images/process/{activeType}-right.png"
								alt="ARK process"
							/>
						{/if}
					</div>

					<!-- Typical App -->
					{#if activeType == 'typical'}
						<div class="mt-3 flex flex-col gap-5">
							<!-- <p class="text-center text-[32px] font-semibold lg:text-start">Resources Needed</p> -->
							<div class="flex flex-col items-center gap-3 lg:items-start">
								<p class="text-2xl">People</p>
								<img
									class="max-h-[110px] w-fit"
									src="{base}/images/process/typical-right1.png"
									alt="typical"
								/>
							</div>
							<div class="h-[1px] bg-arkGray3" />
							<div class="flex flex-col items-center gap-3 lg:items-start">
								<p class="text-2xl">Infrastructure</p>
								<img
									class="max-h-[70px] w-fit"
									src="{base}/images/process/typical-right2.png"
									alt="typical"
								/>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
