<script lang="ts">
	import { base } from '$app/paths'
	import type { Blog } from '$utils/constants'

	export let post: Blog
</script>

<div class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5">
	<div class="flex flex-col">
		<p class="text-2xl font-extrabold">{post.title}</p>
		<p class="font-medium text-arkGray4">{post.date}</p>
	</div>
	<p>
		{post.summary}
	</p>
	<a href="{base}/blog/{post.slug}" class="font-bold text-arkOrange underline">Read</a>
</div>
