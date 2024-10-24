<script lang="ts">
	import Icon from '@iconify/svelte'

	export let name = ''

	const platforms: Record<string, string> = {
		Desktop: 'devicon:windows8',
		Linux: 'flat-color-icons:linux',
		Android: 'devicon:android',
		OSX: 'si:apple-fill'
	}
</script>

<div class="flex h-7 items-center">
	<Icon icon={platforms[name]} color={name == 'OSX' ? 'white' : ''} />
</div>
