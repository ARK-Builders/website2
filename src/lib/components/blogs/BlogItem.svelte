<script lang="ts">
	import { base } from '$app/paths'
	import Image from '$lib/components/elements/Image.svelte'
	import { config } from '$lib/config'
	import type { Blog } from '$utils/constants'

	export let post: Blog

	let hover: boolean = false
</script>

<article on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
	<a
		href="{base}/blog/{post.slug}"
		class="flex flex-col gap-3 rounded-2xl bg-arkGray5 hover:bg-arkOrangeLight"
	>
		<div class="flex flex-col gap-2">
			<div class="overflow-hidden rounded-t-2xl">
				<Image
					src="{base}{post.image ??
						'https://placehold.co/100x100/EEA050/white/?text=' + post.title}"
					class="max-h-48 w-full rounded-t-xl object-cover object-top xl:max-h-52 {hover &&
						'scale-105'}"
				/>
			</div>

			<div class="flex h-52 flex-col gap-1 px-5">
				<time dateTime={post.date ?? post.date} class="text-arkGray4">
					{new Date(post.date).toLocaleDateString(config.locale, {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</time>
				<p class="text-2xl font-extrabold {hover && 'underline'}">
					{post.title}
				</p>
				<div class="">
					<p class={post.title.length > 40 ? 'line-clamp-3' : 'line-clamp-4'}>
						{post.summary}
					</p>
				</div>
			</div>
		</div>
	</a>
</article>
