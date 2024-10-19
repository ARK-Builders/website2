<script lang="ts">
	import Title from '$lib/components/Title.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data
	const apps = data.apps
</script>

<Head title="Apps" />

<div class="mx-auto w-full max-w-7xl divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pb-8 pt-6 md:space-y-5">
		<div class="grid gap-4 lg:grid-cols-2">
			<div>
				<Title title="All Apps" />
			</div>
		</div>
	</div>
</div>
