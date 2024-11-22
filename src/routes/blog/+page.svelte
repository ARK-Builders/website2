<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import Blogs from '$lib/components/Blogs.svelte'

	export let data
	const { posts, tags } = data
</script>

<Head title="Blog" />

<Blogs title="Blog" {posts} {tags} />
