import { ProjectConfig } from 'cms-admin'

const routes = {
	dashboard: { path: '/' },

	frontPage: { path: '/front-page' },
	postList: { path: '/posts' },
	postCreate: { path: '/posts/new' },
	postEdit: { path: '/posts/:id' },
	footer: { path: '/footer' },
	header: { path: '/header' },

	sites: { path: '/sites' },
	translations: { path: '/translations' },
	translationStrings: { path: '/translations/strings' },
	translationSets: { path: '/translations/sets' },
}
const config: ProjectConfig[] = [
	{
		project: 'hranipex',
		stage: 'prod',
		component: () => import('./prod'),
		defaultDimensions: {
			site: ['en'],
		},
		routes: routes,
	},
	{
		project: 'hranipex-beta',
		stage: 'prod',
		component: () => import('./prod'),
		defaultDimensions: {
			site: ['en'],
		},
		routes: routes,
	},
]

export default config
