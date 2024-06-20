<script lang="ts">
	import { config, navLinks } from '$lib/config'
	import Twitter from '$lib/icons/twitter.svelte'
	import Github from '$lib/icons/github.svelte'
	import GetStarted from '../GetStarted.svelte'

	let hoverApp = false

	const handleHover = (name: string) => {
		if (name == 'Apps') {
			hoverApp = true
		}
	}
</script>

<header class="sticky top-0 h-[72px] bg-[#302C2C] bg-opacity-95 dark:bg-gray-900">
	<div class="mx-auto flex h-full items-center justify-between xl:max-w-7xl">
		<div class="flex flex-row items-center">
			<a href="/" aria-label={config.headerTitle}>
				<div class="flex items-center justify-between">
					<div class="mr-3">
						<img src="/images/logo.png" alt="Logo" class="h-10 w-auto" />
					</div>
					<!-- <div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div> -->
				</div>
			</a>

			<div class="relative ml-5 hidden sm:block">
				{#each navLinks as link}
					<a
						href={link.href}
						on:mouseenter={() => handleHover(link.title)}
						on:mouseleave={() => (hoverApp = false)}
						class="p-1 font-medium text-white sm:p-2 dark:text-gray-100">{link.title}</a
					>
					{#if hoverApp}
						<div class="absolute left-16 grid grid-cols-2 rounded-md bg-white">
							<div class="flex flex-col">
								<div class="flex flex-row gap-2 p-1">
									<div class="flex w-28">
										<img src="/images/app-logos/rate-logo.png" alt="logo" />
									</div>
									<div class="flex flex-col">
										<p class="font-bold">Memo</p>
										<p>Descritpion</p>
									</div>
								</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-row gap-2 p-1">
									<div class="flex">
										<img class="w-14" src="/images/app-logos/rate-logo.png" alt="logo" />
									</div>
									<div class="flex flex-col">
										<p class="font-bold">Memo</p>
										<p>Descritpion</p>
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="hidden items-center gap-3 text-base leading-5 md:flex">
			<a class="text-white" href={config.twitter} target="_blank">
				<Twitter />
			</a>
			<a class="text-white" href={config.github} target="_blank">
				<Github />
			</a>
			<GetStarted bgOrange />
			<!-- <MobileMenu /> -->
		</div>
	</div>
</header>
