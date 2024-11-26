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
		...Object.values(rehypePlugins),

		// Image path plugin
		() => {
			return (tree) => {
				// Traverse the syntax tree and modify image nodes
				tree.children = tree.children.map((node) => {
					if (node.type === 'element' && node.tagName === 'img') {
						// Check if src is a relative path
						if (node.properties.src && !node.properties.src.startsWith('http')) {
							node.properties.src = node.properties.src.replace(/^\.?\/?/, '/')
						}
					}
					return node
				})
				return tree
			}
		}
	]
}
