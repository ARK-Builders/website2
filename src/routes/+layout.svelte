<script lang="ts">
	import '$lib/app.css'
	import '@fontsource/jost'
	import Header from '$lib/components/layouts/Header.svelte'
	import Transition from '$lib/components/layouts/Transition.svelte'

	export let data
</script>

<div class="mx-auto md:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<!-- <Transition pathname={data?.pathname}> -->
			<slot />
			<!-- </Transition> -->
		</main>
		<!-- <Footer /> -->
	</div>
</div>
