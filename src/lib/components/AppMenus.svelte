<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import MenuItem from '$lib/components/elements/MenuItem.svelte'
	import { currentApps } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let link
</script>

<div class="menus">
	<a
		class:underline={$page.url.pathname.includes('/apps')}
		class:!text-arkOrange={$page.url.pathname.includes('/apps')}
		href={base + link.href}
		class="flex items-center p-1 font-medium text-white hover:text-arkOrange dark:text-gray-100 sm:p-2"
	>
		{link.title}
		<Icon icon="ic:outline-keyboard-arrow-down" width="24px" />
	</a>
	<div
		id="apps-menu"
		class="absolute left-16 top-10 grid w-96 grid-cols-2 rounded-xl border border-gray-300 bg-white p-4"
	>
		<div class="flex w-44 flex-col gap-2">
			{#each currentApps.slice(0, 2) as menu}
				<MenuItem
					url={link.href}
					description={menu.description}
					name={menu.name}
					logo={menu.logo}
				/>
			{/each}
		</div>
		<div class="flex w-40 flex-col gap-2">
			{#each currentApps.slice(2) as menu}
				<MenuItem
					url={link.href}
					description={menu.description}
					name={menu.name}
					logo={menu.logo}
				/>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	#apps-menu {
		display: none;
	}
	.menus:hover #apps-menu {
		display: grid;
	}
</style>
