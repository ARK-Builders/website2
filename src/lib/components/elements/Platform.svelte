<script lang="ts">
	import type { Issue } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let issue: Issue

	const platforms: Record<string, string> = {
		Desktop: 'devicon:windows8',
		Linux: 'flat-color-icons:linux',
		Android: 'devicon:android',
		OSX: 'si:apple-fill'
	}
</script>

<div class="flex w-fit flex-row gap-2">
	{#if issue && issue.platforms}
		{#each issue.platforms as platform}
			<div class="flex h-7 items-center">
				<Icon icon={platforms[platform]} color={platform == 'OSX' ? 'white' : ''} />
			</div>
		{/each}
	{/if}
</div>
