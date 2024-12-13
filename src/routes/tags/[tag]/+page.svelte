<script lang="ts">
	import Blogs from '$lib/components/blogs/Blogs.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data
	const { tag, posts } = data
</script>

<Head title="Blog" />

<Blogs title={tag} {posts} />
