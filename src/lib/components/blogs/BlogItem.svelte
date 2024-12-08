<script lang="ts">
	import { base } from '$app/paths'
	import Image from '$lib/components/elements/Image.svelte'
	import { config } from '$lib/config'
	import type { Blog } from '$utils/constants'

	export let post: Blog
</script>

<article>
	<a
		href="{base}/blog/{post.slug}"
		class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5 hover:bg-arkOrangeLight"
	>
		<div class="flex flex-col gap-2">
			<Image
				src="{base}{post.image ?? 'https://placehold.co/100x100/EEA050/white/?text=' + post.title}"
				class="max-h-48 w-full rounded-md object-cover xl:max-h-52"
			/>
			<div class="flex h-52 flex-col gap-1">
				<time dateTime={post.date ?? post.date} class="text-arkGray4">
					{new Date(post.date).toLocaleDateString(config.locale, {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</time>
				<p class="text-2xl font-extrabold">{post.title}</p>
				<div class="">
					<p class={post.title.length > 40 ? 'line-clamp-4' : 'line-clamp-5'}>
						{post.summary}
					</p>
				</div>
			</div>
		</div>
	</a>
</article>
