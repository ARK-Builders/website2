<script lang="ts">
	import { base } from '$app/paths'
	import { communityList } from '$utils/constants'
	import Icon from '@iconify/svelte'
</script>

<footer class="bg-white px-5 pb-10 pt-40 md:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-row">
		<div class="flex flex-1 flex-col gap-5">
			<div>
				<img src="{base}/images/footer-logo.png" class="h-10" alt="footer logo" />
			</div>
			<div class="grid grid-cols-2 flex-row gap-3 lg:flex">
				{#each communityList as community}
					<a
						target="_blank"
						href={community.url}
						class="flex h-10 cursor-pointer flex-row items-center gap-4 hover:text-arkOrange"
					>
						<div
							class="flex h-full w-10 items-center justify-center rounded-full"
							style="background-color: {community.colors[0]}"
						>
							<Icon icon={community.logo} color={community.colors[1]} width="24px" />
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="flex w-full flex-1 auto-rows-auto grid-cols-3 flex-col gap-3 md:grid">
			<div>
				<p class="text-xl font-semibold">Apps</p>
				<table class="text-xl text-gray-400">
					<tr>
						<td> Memo </td>
						<td> Rate </td>
					</tr>
					<tr>
						<td class="pr-10"> Navigator </td>
						<td> Retouch </td>
					</tr>
					<tr>
						<td> Shelf </td>
						<td> Gallery </td>
					</tr>
				</table>
			</div>
			<div>
				<p class="text-xl font-semibold">Devs Dashboard</p>
			</div>
			<div>
				<a href="{base}/blog" class="text-xl font-semibold">Blog</a>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	.social-icon {
		@apply flex h-10 w-10 items-center justify-center rounded-full bg-arkOrangeLight text-arkOrange;
	}
</style>
