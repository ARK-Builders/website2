<script>
	import { base } from '$app/paths'
	import RenderMarkdown from '$lib/components/RenderMarkdown.svelte'
	import { config } from '$lib/config'
	import Author from '../Author.svelte'

	export let post
	export let author
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
	<article>
		<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
			<header class="pt-6 xl:pb-6">
				<div class="space-y-1 text-center lg:text-start">
					<div class="py-5">
						<h1
							class="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl"
						>
							{post.title}
						</h1>
					</div>
					<div class="flex flex-row items-center gap-4">
						<dl class="py-3">
							<dt class="sr-only">Authors</dt>
							<dd>
								<ul
									class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
								>
									<li class="flex items-center space-x-2">
										<Author author={author.name} avatar={author.avatar} twitter={author.twitter} />
									</li>
								</ul>
							</dd>
						</dl>
						<div class="flex flex-col border-s-2 pl-4 text-start">
							<dt class="sr-only">Published on</dt>
							<dd class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
								Published on: <time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString(config.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</time>
							</dd>
							<dd class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
								Last Update:
								<time dateTime={post.updated_at ?? post.date}>
									{new Date(post.updated_at ?? post.date).toLocaleDateString(config.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</time>
							</dd>
						</div>
					</div>
					<dl class="space-y-10">
						<dd class="mt-4 text-justify lg:text-start">
							{post.summary}
						</dd>
					</dl>
				</div>
			</header>
			<div
				class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
				style="grid-template-rows: auto 1fr;"
			>
				<!-- <dl class="py-6 xl:border-b xl:border-gray-200 xl:pt-10 xl:dark:border-gray-700">
					<dt class="sr-only">Authors</dt>
					<dd>
						<ul
							class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
						>
							<li class="flex items-center space-x-2">
								<Author author={author.name} avatar={author.avatar} twitter={author.twitter} />
							</li>
						</ul>
					</dd>
				</dl> -->

				<div
					class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0"
				>
					<div
						class="prose max-w-none pb-8 pt-10 prose-a:text-arkOrange prose-a:no-underline hover:prose-a:underline"
					>
						{#if post.image}
							<img
								alt={post.image.split('/').reverse()[0]}
								src={base + post.image}
								class="h-auto w-full object-cover object-center"
							/>
						{/if}
						<RenderMarkdown content={post.content} />
					</div>
				</div>
				<!-- <footer class="">
					<div
						class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
					>
						{#if post.next || post.prev}
							<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
								{#if post.prev}
									<div>
										<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Previous Article
										</h2>
										<div
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
										>
											<a href={base + `/blog/${post.prev.slug}`}>{post.prev.title}</a>
										</div>
									</div>
								{/if}
								{#if post.next}
									<div>
										<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Next Article
										</h2>
										<div
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
										>
											<a href={base + `/blog/${post.next.slug}`}>{post.next.title}</a>
										</div>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</footer> -->
			</div>
		</div>
	</article>
</div>
