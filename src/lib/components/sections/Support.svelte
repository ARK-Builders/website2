<script lang="ts">
	import { base } from '$app/paths'

	const supportLogos = ['bitcoin', 'ethereum', 'buycoffee', 'patreon']
</script>

<section class="relative flex items-center bg-arkOrangeLight py-14">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:items-start">
		<div class="flex flex-col gap-3 px-10 md:px-0">
			<p class="text-center text-xl font-semibold uppercase text-arkOrange lg:text-start">
				Support us
			</p>
			<p class="text-center text-[40px] font-bold lg:text-start">
				We greatly appreciate every bit of support!
			</p>
			<div class="flex w-full justify-center lg:justify-start">
				<p class="text-center md:max-w-[70%] lg:text-start">
					We're passionate about making everyone's day-to-day life better through our open source
					apps. We've poured hundreds of hours into creating them, and while they're not perfect and
					we've got lots more we want to do, your support means everything. It's the fuel that keeps
					us going!
				</p>
			</div>
		</div>
		<div class="my-5 grid grid-cols-2 gap-2 md:flex md:flex-row">
			{#each supportLogos as logo}
				<a href="{base}/" target="_blank">
					<img src="/images/support/{logo}.png" alt="support logo" />
				</a>
			{/each}
		</div>
	</div>
	<img class="absolute right-0 hidden lg:flex" src="/images/support/support.png" alt="support" />
</section>
