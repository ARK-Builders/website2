<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import Blog from '$lib/components/Blog.svelte'

	export let data

	const post = data.post
	const author = data.author
</script>

<Head title={post.title} />

<Blog {post} {author} />
