<script lang="ts">
	import '$lib/app.css'
	import '@fontsource/jost'
	import Header from '$lib/components/layouts/Header.svelte'
	import Footer from '$lib/components/layouts/Footer.svelte'
</script>

<div class="mx-auto md:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto mt-[72px] flex flex-col">
			<slot />
		</main>
		<Footer />
	</div>
</div>
