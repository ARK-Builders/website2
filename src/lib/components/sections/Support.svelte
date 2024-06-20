<script lang="ts">
	const supportLogos = ['bitcoin', 'ethereum', 'buycoffee', 'patreon']
</script>

<section class="relative flex items-center bg-arkOrangeLight py-14">
	<div class=" mx-auto flex w-full max-w-7xl flex-col gap-5">
		<div class="flex flex-col gap-3">
			<p class="text-xl font-semibold uppercase text-arkOrange">Support us</p>
			<p class="text-[40px] font-bold">We greatly appreciate every bit of support!</p>
			<p class="max-w-[60%]">
				We're passionate about making everyone's day-to-day life better through our open source
				apps. We've poured hundreds of hours into creating them, and while they're not perfect and
				we've got lots more we want to do, your support means everything. It's the fuel that keeps
				us going!
			</p>
		</div>
		<div class="my-5 flex flex-row gap-2">
			{#each supportLogos as logo}
				<a href="/" target="_blank">
					<img src="/images/support/{logo}.png" alt="support logo" />
				</a>
			{/each}
		</div>
	</div>
	<img class="absolute right-0" src="/images/support/support.png" alt="support" />
</section>
