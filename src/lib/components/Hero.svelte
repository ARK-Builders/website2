<script>
	import GetStarted from './GetStarted.svelte'
</script>

<div class="flex w-full flex-row items-center justify-between gap-1">
	<div>
		<img src="/images/left.png" alt="left" />
	</div>
	<div class="flex max-w-2xl flex-col gap-10">
		<div class="flex flex-col leading-snug">
			<p class="text-center text-[66px] font-semibold">Neat, efficient and</p>
			<p class="bg-arkOrange rounded-lg px-2 text-[66px] font-semibold leading-tight text-white">
				privacy-focused apps
			</p>
			<p class="text-center text-[66px] font-bold">for your productivity</p>
		</div>
		<p class="max-w-[650px] text-center text-xl">
			ARK Builders crafts contemporary software for all platforms, with the mission to elevate daily
			user experiences through privacy enhancements and seamless cross-device synchronization.
		</p>
		<div class="flex justify-center">
			<GetStarted />
		</div>
	</div>
	<div>
		<img src="/images/right.png" alt="right" />
	</div>
</div>
