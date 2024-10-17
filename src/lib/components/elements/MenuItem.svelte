<script lang="ts">
	import { base } from '$app/paths'
	import type { ComponentType } from 'svelte'
	import RateLogo from '$lib/assets/images/app-logos/rate.svelte'
	import MemoLogo from '$lib/assets/images/app-logos/memo.svelte'
	import RetouchLogo from '$lib/assets/images/app-logos/retouch.svelte'

	export let name,
		description = '',
		logo = '',
		url = ''

	const appLogos: Record<string, ComponentType> = {
		rate: RateLogo,
		memo: MemoLogo,
		retouch: RetouchLogo
	}
</script>

<a
	href={base + url}
	class="flex flex-row gap-3 rounded-md p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
>
	<div class="flex">
		{#if !logo}
			<img src="{base}/images/placeholder.png" alt="app logo" />
		{:else}
			<svelte:component this={appLogos[logo.toLowerCase()]} />
		{/if}
	</div>
	<div class="flex flex-col">
		<p class="font-bold">{name}</p>
		<p class="max-w-24 truncate">{description || 'Descritpion'}</p>
	</div>
</a>
