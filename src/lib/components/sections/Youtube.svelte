<script lang="ts">
	import Icon from '@iconify/svelte'
	import VideoItem from '$lib/components/elements/VideoItem.svelte'

	const videoLinks = [
		'https://www.youtube.com/embed/j1E9NWUNGfk?si=eczMSAZFvmeWiOC3',
		'https://www.youtube.com/embed/coRL96N19fg?si=iugehynqZGAvpEY1',
		'https://www.youtube.com/embed/coRL96N19fg?si=iugehynqZGAvpEY1',
		'https://www.youtube.com/embed/loKbP5wZpYI?si=e_MN9QpFqhjuE4S6'
	]
</script>

<section class="relative flex items-center pb-16">
	<div class="mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-xl bg-[#FC0D1B]/20 p-5">
		<div class="flex flex-row items-center justify-between">
			<div class="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
				<Icon icon="ri:youtube-fill" width="44px" class="hidden sm:block" color="#FC0D1B" />
				<Icon icon="ri:youtube-fill" width="34px" class="sm:hidden" color="#FC0D1B" />
				<p class="text-lg font-bold lg:text-3xl">Check out our latest videos</p>
			</div>

			<a
				target="_blank"
				class="text-bold flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-xs lg:text-base"
				href="https://www.youtube.com/@ARK-Builders-Dev"
			>
				<Icon icon="mingcute:youtube-line" width="20px" />
				View on YouTube
			</a>
		</div>
		<div class="flex h-48 flex-row gap-4 overflow-x-auto">
			{#each videoLinks as video}
				<VideoItem url={video} />
			{/each}
		</div>
	</div>
</section>
