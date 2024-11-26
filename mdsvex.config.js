// import remarkPlugins from './src/plugins/remark/index.js';
import relativeImages from 'mdsvex-relative-images'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePlugins from './src/plugins/rehype/index.js'

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages],
	// remarkPlugins: [...Object.values(remarkPlugins)],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		...Object.values(rehypePlugins)
	]
}
