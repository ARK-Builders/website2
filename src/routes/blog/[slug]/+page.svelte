<script lang="ts">
	import Blog from '$lib/components/Blog.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data

	const post = data.post
	const author = data.author
</script>

<Head title={post.title} />

<Blog {post} {author} />
