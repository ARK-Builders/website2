<script lang="ts">
	import '$lib/app.css'
	import Header from '$lib/components/layouts/Header.svelte'
	import Transition from '$lib/components/layouts/Transition.svelte'

	export let data
</script>

<div class="mx-auto px-4 sm:px-6 xl:px-0">
	<div class=" h-screen flex flex-col justify-between">
		<Header />
		<main class="mx-auto mb-auto w-full xl:max-w-7xl">
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<!-- <Footer /> -->
	</div>
</div>
