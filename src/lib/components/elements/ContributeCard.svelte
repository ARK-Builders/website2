<script lang="ts">
	export let title = ''
	export let classes = ''
</script>

<div
	class="flex flex-col justify-between gap-5 rounded-lg bg-arkGray2 px-5 py-4 text-white {classes}"
>
	<div class="mb-2 flex flex-col gap-2">
		<p class="text-xl font-medium lg:text-2xl">{title}</p>
		<slot name="title-tag" />
	</div>
	<slot name="labels" />
</div>
