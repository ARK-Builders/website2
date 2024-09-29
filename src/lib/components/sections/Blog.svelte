<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import BlogItem from '$lib/components/elements/BlogItem.svelte'
</script>

<section class="relative flex items-center py-10 lg:px-5 lg:py-24 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:gap-10 lg:px-0">
		<div class="flex w-full flex-col gap-4">
			<p class="text-center text-4xl font-bold lg:text-6xl">Blog</p>
		</div>

		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			<BlogItem />
			<BlogItem />
			<BlogItem />
		</div>
		<Cta text="Read More" bgBlack classes="" />
	</div>
</section>
