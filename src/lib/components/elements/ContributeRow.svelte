<script lang="ts">
	import type { Issue } from '$utils/constants'
	import Category from './Category.svelte'
	import Language from './Language.svelte'
	import Platform from './Platform.svelte'

	export let issue: Issue
</script>

<div
	class="flex cursor-pointer flex-col gap-5 rounded-lg bg-arkDeep px-5 py-4 text-white hover:bg-arkDeep2"
>
	<p>{issue.title}</p>

	<div class="flex flex-row gap-4">
		<div class="flex flex-col gap-1">
			<p>Language</p>
			<Language {issue} />
		</div>
		<div class="flex flex-col gap-1">
			<p>Platforms</p>
			<Platform {issue} />
		</div>
		<div class="flex flex-col gap-1">
			<p>Category</p>
			<Category {issue} />
		</div>
	</div>
</div>
