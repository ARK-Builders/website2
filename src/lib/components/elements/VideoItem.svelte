<script lang="ts">
	import { base } from '$app/paths'

	export let url = 'https://www.youtube.com/embed/jrmw2KEu27o?si=amhZtIDyTMVssf0t'
</script>

<a href={url} target="_blank" class="flex min-w-60 flex-col rounded-lg">
	<iframe
		class="h-full w-full rounded-t-md"
		src={url}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
	<p class="rounded-b-lg bg-white p-2">What is "local-first"</p>
</a>
