<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import { config } from '$lib/config'
	import Icon from '@iconify/svelte'

	let hoverGithub = false
</script>

<Head title="Contribute" />

<div class="flex h-full w-full flex-col items-center bg-arkGray bg-opacity-95">
	<div
		class="mx-auto mt-10 flex w-full max-w-6xl flex-row justify-between rounded-md bg-arkGray2 px-4 py-6 text-white"
	>
		<div>
			<p class="text-2xl">Research</p>
		</div>

		<div class="flex flex-row gap-3">
			<Cta text="View documentation" />

			<div class="flex items-center rounded-lg bg-white pr-2">
				<Cta
					on:hover={(e) => (hoverGithub = e.detail)}
					target="_blank"
					text="View Github"
					classes="px-2"
					url={config.github}
				/>
				<Icon
					class={hoverGithub ? 'text-arkOrange' : 'text-black'}
					icon="pajamas:github"
					width="24px"
				/>
			</div>
		</div>
	</div>

	<div class="my-10 text-white">
		<Title title="Contribute" h2 />
	</div>

	<div class="flex w-full max-w-6xl flex-col text-white">
		<table class="hidden border-separate border-spacing-y-3 lg:table">
			<thead>
				<tr>
					<td class="w-[45%]">Titile</td>
					<td>Language</td>
					<td>Platforms</td>
					<td>Category</td>
				</tr>
			</thead>

			<tbody>
				<tr class="">
					<td>Sample text</td>
					<td>Sample text</td>
					<td>Sample text</td>
					<td>Sample text</td>
				</tr>
				<tr>
					<td>Sample text</td>
					<td>Sample text</td>
					<td>Sample text</td>
					<td>Sample text</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	thead tr td {
		@apply pl-5 text-lg font-semibold;
	}

	tbody tr {
		@apply cursor-pointer bg-arkDeep hover:bg-opacity-70;
	}

	tbody tr td {
		@apply p-4;
	}
</style>
