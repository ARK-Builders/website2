<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import ContributeCard from '$lib/components/elements/ContributeCard.svelte'
	import Label from '$lib/components/elements/Label.svelte'
	import Tag from '$lib/components/elements/TechTag.svelte'
	import Android from '$lib/icons/android.svelte'
	import Icon from '@iconify/svelte'
</script>

<section class="relative flex items-center bg-arkGray py-24 lg:px-5 xl:px-0">
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:flex-row lg:items-start lg:px-0"
	>
		<div class="flex flex-col gap-4 md:w-2/3">
			<p class="text-center text-xl font-semibold uppercase text-arkOrange lg:text-start">
				Contribute
			</p>
			<p class="text-center text-[40px] font-bold leading-snug text-white lg:text-start">
				We greatly appreciate every bit of support!
			</p>
			<div class="flex w-full justify-center lg:justify-start">
				<p class="text-center text-white lg:max-w-[70%] lg:text-start">
					We're passionate about making everyone's day-to-day life better through our open source
					apps. We've poured hundreds of hours into creating them, and while they're not perfect and
					we've got lots more we want to do, your support means everything. It's the fuel that keeps
					us going!
				</p>
			</div>
			<Cta text="View More" classes="hidden lg:flex mt-5" />
		</div>
		<div class="flex w-full flex-col gap-3 md:grid md:grid-cols-2">
			<ContributeCard title="Automatically extract Domain tags">
				<Tag slot="title-tag">
					<Icon icon="mdi:language-kotlin" />
					Kotlin
				</Tag>
				<div class="flex flex-row items-center gap-2" slot="labels">
					<Label name="Feature" --background="#56DD9E"></Label>
					<Android />
				</div>
			</ContributeCard>

			<ContributeCard title="Replace alphabetical sorting by un-sorting">
				<div class="flex flex-row flex-wrap gap-2" slot="title-tag">
					<Tag>
						<Icon icon="ri:svelte-line" />
						Svelte</Tag
					>
					<Tag><Icon icon="teenyicons:rust-outline" />Rust</Tag>
					<Tag>
						<Icon icon="teenyicons:typescript-outline" />
						TypeScript
					</Tag>
				</div>

				<div class="flex flex-row items-center gap-2" slot="labels">
					<Label name="Enhancement" --background="#DAD67B"></Label>
					<Icon icon="devicon:windows8" width="22px" />
					<Icon icon="flat-color-icons:linux" width="32px" />
					<Icon icon="uil:apple" width="26px" />
				</div>
			</ContributeCard>

			<ContributeCard title="Move resources with their associated data">
				<Tag slot="title-tag">
					<Icon icon="mdi:language-kotlin" />
					Kotlin
				</Tag>
				<div class="flex flex-row items-center gap-2" slot="labels">
					<Label name="Enhancement" --background="#DAD67B"></Label>
					<Android />
				</div>
			</ContributeCard>

			<ContributeCard title="Empty previews are generated" classes="hidden md:flex">
				<div class="flex flex-row gap-2" slot="title-tag">
					<Tag>
						<Icon icon="teenyicons:rust-outline" />
						Rust
					</Tag>
					<Tag>
						<Icon icon="mdi:language-kotlin" />
						Kotlin
					</Tag>
				</div>
				<div class="flex flex-row items-center gap-2" slot="labels">
					<Label name="Enhancement" --background="#DAD67B"></Label>
					<Android />
				</div>
			</ContributeCard>
		</div>
		<Cta text="View More" classes="lg:hidden" />
	</div>
</section>
