<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import { navLinks } from '$lib/config'
	import { communityList } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let showMobileMenu: boolean
</script>

<div class="fixed left-0 top-0 flex h-full w-full flex-col bg-arkGray bg-opacity-95">
	<div class="flex flex-row justify-end">
		<button class="mr-5 mt-5" on:click={() => (showMobileMenu = !showMobileMenu)}>
			<Icon icon="gridicons:cross" width="34px" color="white" />
		</button>
	</div>

	<div class="mt-16 flex flex-col items-center justify-center gap-6">
		{#each navLinks as link}
			{#if ['Apps', 'Community'].includes(link.title)}
				<!-- <AppMenus {link} /> -->
			{:else}
				<div>
					<a
						on:click={() => (showMobileMenu = false)}
						href={base + link.href}
						class:underline={$page.url.pathname == link.href}
						class:!text-arkOrange={$page.url.pathname == link.href}
						class="p-1 text-xl font-medium text-white hover:text-arkOrange sm:p-2"
					>
						{link.title}
					</a>
				</div>
			{/if}
		{/each}
	</div>

	<div class="absolute bottom-2 flex w-full justify-center pb-10">
		<div class="grid w-8/12 grid-cols-4 gap-4">
			{#each communityList as community}
				<a
					target="_blank"
					href={community.url}
					class="flex h-10 cursor-pointer flex-row items-center justify-center gap-4 hover:text-arkOrange"
				>
					<div
						class="flex h-full w-10 items-center justify-center rounded-full"
						style="background-color: {community.colors[0]}"
					>
						<Icon icon={community.logo} color={community.colors[1]} width="24px" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
