<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import Blogs from '$lib/components/Blogs.svelte'

	export let data
	const posts = data.posts
</script>

<Head title="Blog" />

<Blogs title="All Posts" {posts} />
