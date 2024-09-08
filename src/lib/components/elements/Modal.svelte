<script lang="ts">
	import { makeid, receive, send } from '$utils/tools'
	import Icon from '@iconify/svelte'

	export let show: boolean

	const id = makeid(6)
</script>

{#if show}
	<div
		class="fixed top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-40"
	>
		<div
			in:receive={{ key: id, duration: 200 }}
			out:send={{ key: id, duration: 200 }}
			class="relative flex w-1/4 flex-col rounded border bg-white p-2 shadow"
		>
			<button
				class="absolute right-0 top-0 w-fit rounded-full p-[3px]"
				on:click|stopPropagation={() => (show = false)}
			>
				<Icon icon="majesticons:multiply" width="20px" />
			</button>
			<slot />
		</div>
	</div>
{/if}
