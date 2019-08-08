import { ProjectConfig } from 'cms-admin'

const config: ProjectConfig[] = [
	{
		project: 'quanti',
		stage: 'prod',
		defaultDimensions: {
			locale: ['cs'],
		},
		component: () => import('./prod'),
		routes: {
			dashboard: { path: '/' },
			locales: { path: '/locales' },
			edit_frontPage: { path: '/front-page' },
			menuItems: { path: '/menu' },
			categories: { path: '/categories' },
			list_page: { path: '/page' },
			create_page: { path: '/page/create' },
			edit_page: { path: '/page/:id' },
			places: { path: '/places' },
			people: { path: '/people' },
			social: { path: '/social' },
			footer: { path: '/footer' },
			joinUs: { path: '/joinUs' },
			translations: { path: '/translations' },
			contact: { path: '/contact' },
			contactMessages: { path: '/contact-messages' },
			diff: { path: '/diff' },
			diff_stage: { path: '/diff/:targetStage' },
		},
	},
]

export default config
