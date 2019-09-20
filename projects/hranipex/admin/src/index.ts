import { ProjectConfig } from 'cms-admin'

const routes = {
	dashboard: { path: '/' },

	frontPage: { path: '/front-page' },

	sites: { path: '/sites' },
	translationSets: { path: '/translation-sets' },
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
]

export default config
