<script lang="ts">
	import type { Issue } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let issue: Issue

	const category: Record<string, { icon: string; color: string }> = {
		enhancement: { icon: 'mdi:settings', color: '#FFE352' },
		'good first issue': { icon: 'mdi:git-issue', color: '#65a30d' },
		feature: { icon: 'mdi:star', color: '#56DD9E' },
		bug: { icon: 'ri:bug-fill', color: '#FF985F' }
	}
</script>

<div class="flex w-fit flex-col gap-1">
	{#if issue.labels}
		{#each issue.labels as label}
			<div
				class="flex h-7 w-fit items-center gap-1 rounded-lg px-2 text-black"
				style="background-color: {category[label].color};"
			>
				<Icon icon={category[label].icon} />
				<span class="capitalize">
					{label}
				</span>
			</div>
		{/each}
	{/if}
</div>
