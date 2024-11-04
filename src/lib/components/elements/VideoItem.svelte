<script lang="ts">
	export let url: {
		url: string
		title: string
	}
	const { url: videoUrl, title } = url
</script>

<a
	href={videoUrl.replace('watch?v=', 'embed/')}
	target="_blank"
	class="flex min-w-56 flex-col rounded-lg"
>
	<iframe
		class="h-full w-full rounded-t-md"
		src={videoUrl}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
	<p class="truncate rounded-b-lg bg-white p-2">{title || ''}</p>
</a>
