<script lang="ts">
	import Blog from '$lib/components/Blog.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data

	$: post = data.post
	$: author = data.author
</script>

<Head title={post.title} />

<Blog {post} {author} />
