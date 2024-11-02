<script lang="ts">
	import '$lib/app.css'
	import '@fontsource/jost'
	import Header from '$lib/components/layouts/Header.svelte'
	import Footer from '$lib/components/layouts/Footer.svelte'
	import Transition from '$lib/components/layouts/Transition.svelte'
	import { page } from '$app/stores'
</script>

<div class="mx-auto md:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto mt-[72px] flex flex-col">
			<!-- <Transition pathname={$page.url.pathname}> -->
			<slot />
			<!-- </Transition> -->
		</main>
		<Footer />
	</div>
</div>
