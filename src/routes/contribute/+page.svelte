<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import Dropdown from '$lib/components/elements/Dropdown.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import { config } from '$lib/config'
	import type { Issue } from '$utils/constants.ts'
	import Icon from '@iconify/svelte'

	export let data

	$: issues = JSON.parse(data.data).default

	$: languages = [...new Set(issues.map((issue: Issue) => issue.languages).flat())] as string[]
	$: platforms = [...new Set(issues.map((issue: Issue) => issue.platforms).flat())] as string[]
	$: categories = [...new Set(issues.map((issue: Issue) => issue.labels).flat())] as string[]

	let hoverGithub = false

	// Track selected items
	let selectedLanguages: string[] = []
	let selectedPlatforms: string[] = []
	let selectedCategory: string[] = []
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
		<div class="flex flex-row gap-3">
			<Dropdown items={languages} values={selectedLanguages} title="Language" />
			<Dropdown items={platforms} values={selectedPlatforms} title="Platforms" />
			<Dropdown items={categories} values={selectedCategory} title="Category" />
		</div>
		<table class="mt-5 hidden border-separate border-spacing-y-3 lg:table">
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
