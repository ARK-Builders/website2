<script lang="ts">
	import Title from '$lib/components/Title.svelte'

	export let data
	const projects = data.projects
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pb-8 pt-6 md:space-y-5">
		<Title title="Apps" subtitle="All the apps are completely open-source and ads-free" />
	</div>
	<div class="container py-12">
		<div class="-m-4 flex flex-wrap">
			<!-- {#if !projects.length}
				No project found.
			{:else}
				{#each projects as project}
					<Card card={project} />
				{/each}
			{/if} -->
		</div>
	</div>
</div>
