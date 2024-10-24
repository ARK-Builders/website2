<script lang="ts">
	import type { Issue } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let issue: Issue

	const languages: Record<string, string> = {
		Rust: 'skill-icons:rust',
		Kotlin: 'devicon:kotlin',
		Svelte: 'skill-icons:svelte',
		TypeScript: 'skill-icons:typescript'
	}
</script>

<div class="flex w-fit flex-row gap-2">
	{#each issue.languages as language}
		<div class="flex h-7 flex-row items-center gap-1 rounded-md bg-arkDeep2 px-2">
			<Icon icon={languages[language]} />
			{language}
		</div>
	{/each}
</div>
