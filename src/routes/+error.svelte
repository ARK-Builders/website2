<script lang="ts">
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>ARK Builders | {$page.error?.message}</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl flex-col justify-center gap-3">
	<h1 class="text-center text-6xl" style="color: red;">ERROR</h1>
	<p class="text-center" style="color: red;">{$page.error?.message}</p>
</div>
