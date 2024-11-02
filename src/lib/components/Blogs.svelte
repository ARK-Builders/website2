<script lang="ts">
	import Tag from '$lib/components/Tag.svelte'
	import Title from '$lib/components/Title.svelte'
	import BlogItem from '$lib/components/elements/BlogItem.svelte'
	import SearchBox from '$lib/components/SearchBox.svelte'
	import { page } from '$app/stores'
	import fuzzySearch from '$utils/search'
	import { onMount } from 'svelte'
	import type { Blog } from '$utils/constants'
	import { base } from '$app/paths'

	export let title = ''
	export let subtitle = ''
	export let posts: Blog[] = []
	export let tags: any[] = []
	export let more = true
	export let search = false
	export let h2 = false
	export let count = 0

	let filter: string | null = null

	if (count) {
		posts = posts.slice(0, count)
	}
	onMount(() => {
		filter = $page.url.searchParams.get('query')
	})

	$: currentPosts = filter ? fuzzySearch(posts, filter) : posts
</script>

<div class="mx-auto w-full max-w-7xl px-5 xl:px-0">
	<div class="space-y-2 pb-8 pt-6 md:space-y-5">
		<div class="flex w-full justify-center">
			<Title {title} {subtitle} {h2} />

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<SearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<p class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
									{` (${tag.count})`}
								</p>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if !currentPosts.length}
		No post found.
	{:else}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each currentPosts as post}
				<BlogItem {post} />
			{/each}
		</div>
	{/if}
</div>
