<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import RateLogo from '$lib/assets/images/app-logos/rate.svelte'
	import MemoLogo from '$lib/assets/images/app-logos/memo.svelte'
	import RetouchLogo from '$lib/assets/images/app-logos/retouch.svelte'
	import type { ComponentType } from 'svelte'
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Icon from '@iconify/svelte'
	import { config } from '$lib/config.js'

	export let data

	const appLogos: Record<string, ComponentType> = {
		rate: RateLogo,
		memo: MemoLogo,
		retouch: RetouchLogo
	}

	$: app = data.app
</script>

<Head title="Apps | {app.title}" />

<div class="flex h-full w-full flex-col items-center p-3 lg:p-0">
	<div
		class="my-10 flex w-full max-w-5xl flex-col justify-between gap-4 lg:flex-row lg:items-center"
	>
		<div class="flex flex-row items-center gap-4">
			<div class="flex h-10 w-10 items-center">
				{#if !app.slug}
					<img src="{base}/images/placeholder.png" alt="app logo" />
				{:else}
					<svelte:component this={appLogos[app.slug.toLowerCase()]} />
				{/if}
			</div>
			<Title title={app.title} h2 />
		</div>

		<div class="flex flex-col gap-3 lg:flex-row">
			<Cta text="View documentation" bgBlack />

			<div class="flex w-fit items-center rounded-lg border border-arkGray bg-white pr-2">
				<Cta target="_blank" text="View on Github" classes="px-2" url={config.github} />
				<Icon icon="pajamas:github" width="24px" />
			</div>
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-5xl flex-col gap-5">
		<div class="prose dark:prose-dark w-full">
			{@html app.content}
		</div>

		<h2 class="text-4xl font-bold">App Preview</h2>

		{#if app.preview && app.preview.length}
			<div class="flex grid-cols-3 gap-2 overflow-x-auto lg:grid lg:w-fit">
				{#each app.preview as preview}
					<img class="max-h-[550px] max-w-[300px]" src="{base}{preview}" alt="app logo" />
				{/each}
			</div>
		{/if}
	</div>
</div>
