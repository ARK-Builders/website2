<script lang="ts">
	import { base } from '$app/paths'
	import type { Blog } from '$utils/constants'

	export let post: Blog
</script>

<article>
	<a
		href="{base}/blog/{post.slug}"
		class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5 hover:bg-arkOrangeLight"
	>
		<div class="flex flex-col">
			<p class="text-2xl font-extrabold">{post.title}</p>
			<p class="font-medium text-arkGray4">{post.date}</p>
		</div>

		<div class="h-full max-h-36 overflow-hidden">
			{post.summary}
		</div>
		<a href="{base}/blog/{post.slug}" class="w-fit font-bold text-arkOrange">Read</a>
	</a>
</article>
