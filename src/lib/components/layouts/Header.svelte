<script lang="ts">
	import { config, navLinks } from '$lib/config'
	import Twitter from '$lib/icons/twitter.svelte'
	import Github from '$lib/icons/github.svelte'
	import GetStarted from '$lib/components/GetStarted.svelte'
	import AppMenus from '$lib/components/AppMenus.svelte'
	import { page } from '$app/stores'
	import { base } from '$app/paths'
	import CommunityMenus from '../CommunityMenus.svelte'
</script>

<header class="sticky top-0 z-10 bg-arkGray bg-opacity-95 px-5 md:px-0 dark:bg-gray-900">
	<div class="mx-auto flex h-[72px] items-center justify-between xl:max-w-7xl">
		<div class="flex flex-row items-center">
			<a href="{base}/" aria-label={config.headerTitle}>
				<div class="flex items-center justify-between">
					<div class="mr-3">
						<img src="{base}/images/logo.png" alt="Logo" class="h-10 w-auto" />
					</div>
					<!-- <div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div> -->
				</div>
			</a>

			<div class="relative ml-5 hidden flex-row items-center gap-1 lg:flex">
				{#each navLinks as link}
					{#if link.title == 'Apps'}
						<AppMenus {link} />
					{:else if link.title == 'Community'}
						<CommunityMenus {link} />
					{:else}
						<div>
							<a
								href={base + link.href}
								class:underline={$page.url.pathname == link.href}
								class:!text-arkOrange={$page.url.pathname == link.href}
								class="p-1 font-medium text-white hover:text-arkOrange sm:p-2"
							>
								{link.title}
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="flex flex-row items-center gap-3 text-base leading-5">
			<GetStarted bgOrange classes="hidden sm:flex" />
			<!-- <a class="hidden text-white md:flex" href={config.twitter} target="_blank">
				<Twitter />
			</a>
			<a class="hidden text-white md:flex" href={config.github} target="_blank">
				<Github />
			</a> -->
			<!-- <MobileMenu /> -->
		</div>
	</div>
</header>
