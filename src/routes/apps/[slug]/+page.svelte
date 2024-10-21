<script lang="ts">
	import { page } from '$app/stores'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'

	const app_name = $page.params.slug
</script>

<Head title="Apps | {app_name}" />

<div class="flex h-full w-full flex-col items-center">
	<div class="my-10">
		<Title title={app_name} h2 />
	</div>

	<div class="mx-auto grid w-full max-w-7xl grid-cols-3 gap-4"></div>
</div>
