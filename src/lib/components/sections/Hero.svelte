<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
</script>

<div class="relative flex w-full flex-row items-center justify-between gap-1">
	<div>
		<img class="hidden md:block" src="/images/left.png" alt="left" />
		<img class="sm:hidden" src="/images/mob-left.png" alt="left" />
	</div>

	<div class="absolute flex max-w-2xl flex-col gap-5 md:relative md:gap-10">
		<div class="flex flex-col items-center gap-2 md:gap-5">
			<p class="text-center text-3xl font-semibold md:text-[40px] lg:text-[66px]">
				Neat, efficient and
			</p>
			<p
				class="w-fit rounded-lg bg-arkOrange px-4 text-center text-2xl font-semibold text-white md:text-4xl md:leading-tight lg:text-[66px]"
			>
				privacy-focused apps
			</p>
			<p class="text-center text-3xl font-bold md:text-[40px] lg:text-[66px]">
				for your productivity
			</p>
		</div>
		<p class="max-w-[650px] px-5 text-center md:px-2 md:text-xl">
			ARK Builders crafts contemporary software for all platforms, with the mission to elevate daily
			user experiences through privacy enhancements and seamless cross-device synchronization.
		</p>
		<div class="flex justify-center">
			<Cta text="Get Started" bgBlack />
		</div>
	</div>
	<div>
		<img class="hidden md:block" src="/images/right.png" alt="right" />
		<img class="sm:hidden" src="/images/mob-right.png" alt="right" />
	</div>
</div>
