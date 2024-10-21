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
		class="mx-auto mt-10 flex w-full max-w-7xl flex-row justify-between rounded-md bg-arkGray2 px-4 py-6 text-white"
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
</div>
