<script lang="ts">
	export let text
	export let bgBlack = false
	export let classes = ''
	export let url = '#'
</script>

<a
	href={url}
	class="{bgBlack
		? 'bg-black text-white'
		: 'bg-white text-black'} flex h-11 w-fit items-center rounded-md px-4 text-xl {classes}"
>
	{text}
</a>
