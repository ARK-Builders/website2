export const config = {
	title: 'ARK Builders | Privacy-focused apps for every day',
	author: 'Kawsar Ahmed',
	headerTitle: 'ARK Builder',
	description: 'ARK Builder (un)official blog, created with Sveltekit and Tailwind.css',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'https://www.ark-builders.dev/',
	siteUrl: 'https://www.ark-builders.dev',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	email: 'info@ark-builders.dev',
	github: 'https://github.com/ARK-Builders',
	twitter: 'https://x.com/ARKBuilders_DEV',
	linkedin: '',
	locale: 'en-US',
	primaryColor: '#06a261',
	newsletter: 'mailchimp',
	multiuser: true
}

export const user = {
	name: 'ARK-Builders',
	twitter: ''
}

export const navLinks = [
	{ href: '/', title: 'Home', icon: 'mdi:home' },
	{ href: '/apps', title: 'Apps' },
	{ href: '/contribute', title: 'Contribute', icon: 'fluent:window-dev-tools-20-filled' },
	{ href: '/blog', title: 'Blog', icon: 'mdi:paper' },
	{ href: '/framework', title: 'Framework', icon: 'simple-icons:framework' },
	{ href: '#', title: 'Community' }
]

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
}

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
}
