<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Support from '$lib/components/sections/Support.svelte'
	import Blog from '$lib/components/sections/Blog.svelte'
	import Contribute from '$lib/components/sections/Contribute.svelte'
	import OurApps from '$lib/components/sections/OurApps.svelte'
	import Youtube from '$lib/components/sections/Youtube.svelte'
	import AnimatedFeatures from '$lib/components/sections/AnimatedFeatures.svelte'

	export let data
</script>

<Head />
<Hero />
<OurApps />
<AnimatedFeatures />
<Blog posts={data.posts} />
<Youtube />
<Contribute />
<Support />
