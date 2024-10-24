<script lang="ts">
	import Icon from '@iconify/svelte'

	export let name = ''

	const category: Record<string, { icon: string; color: string }> = {
		enhancement: { icon: 'mdi:settings', color: '#FFE352' },
		'good first issue': { icon: 'mdi:git-issue', color: '#65a30d' },
		feature: { icon: 'mdi:star', color: '#56DD9E' },
		bug: { icon: 'ri:bug-fill', color: '#FF985F' }
	}
</script>

<div
	class="flex h-7 w-fit items-center gap-1 rounded-lg px-2 text-black"
	style="background-color: {category[name].color};"
>
	<Icon icon={category[name].icon} />
	<span class="capitalize">
		{name}
	</span>
</div>
