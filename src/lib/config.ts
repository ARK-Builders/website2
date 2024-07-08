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
	name: 'admin',
	// avatar value can be removed for image
	avatar: '/icon-32.png',
	twitter: ''
}

export const navLinks = [
	{ href: '/', title: 'Home' },
	{ href: '#', title: 'Apps' },
	// { href: 'https://ark-builders.notion.site/Research-0e9029fa5e704ddfa8b6786b794a2f17', title: 'Research' },
	{ href: '/devs-dashboard', title: 'Devs Dashboard' },
	{ href: '/blog', title: 'Blog' },
	{ href: '#', title: 'Community' }
	// { href: '/', title: 'Support' },
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
