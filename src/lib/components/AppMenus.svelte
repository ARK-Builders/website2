<script lang="ts">
	import { base } from '$app/paths'
	import MenuItem from '$lib/components/elements/MenuItem.svelte'
	import { appList } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let link
</script>

<div class="menus">
	<a
		href={base + link.href}
		class="flex items-center p-1 font-medium text-white hover:text-arkOrange sm:p-2 dark:text-gray-100"
	>
		{link.title}
		<Icon icon="ic:outline-keyboard-arrow-down" width="24px" />
	</a>
	<div
		id="apps-menu"
		class="absolute left-16 top-10 grid w-96 grid-cols-2 rounded-xl border border-gray-300 bg-white p-4"
	>
		<div class="flex w-44 flex-col gap-2">
			{#each appList.slice(0, 3) as menu}
				<MenuItem description={menu.description} name={menu.name} logo={menu.logo} />
			{/each}
		</div>
		<div class="flex w-40 flex-col gap-2">
			{#each appList.slice(3) as menu}
				<MenuItem name={menu.name} logo={menu.logo} />
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
