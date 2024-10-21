<script lang="ts">
	import AppsCard from '$lib/components/elements/AppsCard.svelte'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import Icon from '@iconify/svelte'

	export let data
</script>

<Head title="Apps" />

<div class="flex h-full w-full flex-col items-center">
	<div class="my-10">
		<Title title="Our Apps" h2 />
	</div>

	<div class="mx-auto grid w-full max-w-7xl grid-cols-3 gap-4">
		{#each data.apps as app}
			<AppsCard {app} />
		{/each}
	</div>
</div>
