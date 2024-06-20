<script lang="ts">
	import '$lib/app.css'
	import '@fontsource/jost'
	import Header from '$lib/components/layouts/Header.svelte'
	import Transition from '$lib/components/layouts/Transition.svelte'
	import Footer from '$lib/components/layouts/Footer.svelte'

	export let data
</script>

<div class="mx-auto md:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto flex flex-col">
			<!-- <Transition pathname={data?.pathname}> -->
			<slot />
			<!-- </Transition> -->
		</main>
		<Footer />
	</div>
</div>
