<script lang="ts">
	import { base } from '$app/paths'

	export let name,
		description = '',
		logo = '',
		url = ''
</script>

<div class="flex flex-row gap-3 rounded-md p-1 hover:bg-gray-100">
	<div class="flex">
		<img src="{base}/images/app-logos/{logo || 'placeholder'}.png" alt="logo" />
	</div>
	<div class="flex cursor-pointer flex-col">
		<a href={url} class="font-bold">{name}</a>
		<p class="max-w-24 truncate">{description || 'Descritpion'}</p>
	</div>
</div>
