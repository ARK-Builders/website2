<script lang="ts">
	import Category from '$lib/components/elements/Category.svelte'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Dropdown from '$lib/components/elements/Dropdown.svelte'
	import Language from '$lib/components/elements/Language.svelte'
	import Platform from '$lib/components/elements/Platform.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import { config } from '$lib/config'
	import type { Issue } from '$utils/constants.ts'
	import Icon from '@iconify/svelte'

	export let data

	let hoverGithub = false
	let issues: Issue[]
	let selectedLanguages: string[] = []
	let selectedPlatforms: string[] = []
	let selectedCategory: string[] = []

	$: issues = JSON.parse(data.data).default

	$: generalIssues = [
		...new Set(issues.filter((issue: Issue) => !issue.labels.length).flat())
	] as Issue[]
	$: languages = [...new Set(issues.map((issue: Issue) => issue.languages).flat())] as string[]
	$: platforms = [...new Set(issues.map((issue: Issue) => issue.platforms).flat())] as string[]
	$: categories = [...new Set(issues.map((issue: Issue) => issue.labels).flat())] as string[]

	$: filteredIssues = issues.filter((issue) => {
		const languageMatch =
			selectedLanguages.length === 0 ||
			issue.languages.some((lang) => selectedLanguages.includes(lang))
		const platformMatch =
			selectedPlatforms.length === 0 ||
			issue.platforms.some((platform) => selectedPlatforms.includes(platform))
		const categoryMatch =
			selectedCategory.length === 0 ||
			issue.labels.some((label) => selectedCategory.includes(label))

		return languageMatch && platformMatch && categoryMatch
	})
	$: hasFilter = selectedLanguages.length || selectedPlatforms.length || selectedCategory.length

	const gotoIssue = (issue: Issue) => {
		window.open(issue.repo + '/issues/' + issue.number, '_blank')
	}
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
			<Dropdown items={languages} bind:values={selectedLanguages} title="Language" />
			<Dropdown items={platforms} bind:values={selectedPlatforms} title="Platforms" />
			<Dropdown items={categories} bind:values={selectedCategory} title="Category" />
		</div>
		<table class="mt-5 hidden table-fixed border-separate border-spacing-y-3 lg:table">
			<thead>
				<tr>
					<td class="">Titile</td>
					<td>Language</td>
					<td>Platforms</td>
					<td>Category</td>
				</tr>
			</thead>

			<tbody>
				{#each hasFilter ? filteredIssues : generalIssues as issue}
					<tr class="" on:click={() => gotoIssue(issue)}>
						<td class="truncate">{issue.title}</td>
						<td class="">
							<div class="flex w-fit flex-row gap-2">
								{#each issue.languages as language}
									<Language name={language} />
								{/each}
							</div>
						</td>
						<td>
							<div class="flex w-fit flex-row gap-2">
								{#each issue.platforms as platform}
									<Platform name={platform} />
								{/each}
							</div>
						</td>
						<td>
							<div class="flex w-fit flex-col gap-1">
								{#each issue.labels as label}
									<Category name={label} />
								{/each}
							</div>
						</td>
					</tr>
				{/each}
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
