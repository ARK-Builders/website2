<script lang="ts">
	import Tag from '$lib/components/Tag.svelte'
	import Title from '$lib/components/Title.svelte'
	import Author from '$lib/components/Author.svelte'
	import SearchBox from '$lib/components/SearchBox.svelte'
	import { page } from '$app/stores'
	import fuzzySearch from '$utils/search.js'
	import { onMount } from 'svelte'
	import { base } from '$app/paths'

	export let title = ''
	export let subtitle = ''
	export let posts = []
	export let tags = []
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

<div class="mx-auto w-full max-w-7xl divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pb-8 pt-6 md:space-y-5">
		<div class="grid gap-4 lg:grid-cols-2">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

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
		<ul>
			{#each currentPosts as post}
				<li class="py-12">
					<article>
						<div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<Author author={post.author} postDate={post.date} />
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a
												href={base + `/blog/${post.slug}`}
												class="text-gray-900 dark:text-gray-100"
											>
												{post.title}
											</a>
										</h2>
										<div class="flex flex-wrap">
											{#each post.tags as tag}
												<Tag text={tag} />
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{post.summary}
									</div>
								</div>
								{#if more}
									<div class="text-base font-medium leading-6">
										<a
											href={base + `/blog/${post.slug}`}
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Read "${post.title}"`}
										>
											Read more &rarr;
										</a>
									</div>
								{/if}
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</div>
