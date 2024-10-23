<script lang="ts">
	import Icon from '@iconify/svelte'

	export let name = ''

	const languages: Record<string, string> = {
		Rust: 'skill-icons:rust',
		Kotlin: 'devicon:kotlin',
		Svelte: 'skill-icons:svelte',
		TypeScript: 'skill-icons:typescript'
	}
</script>

<div class="bg-arkDeep2 flex h-7 flex-row items-center gap-1 rounded-md px-2">
	<Icon icon={languages[name]} />
	{name}
</div>
