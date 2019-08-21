import { ProjectConfig } from 'cms-admin'

const routes = {
	dashboard: { path: '/' },

	frontPage: { path: '/front-page' },
	footer: { path: '/footer' },

	blogPage: { path: '/stories/page' },
	blogList: { path: '/stories' },
	blogCreate: { path: '/stories/new' },
	blogEdit: { path: '/stories/:id' },

	pubsPage: { path: '/pubs/page' },
	pubList: { path: '/pubs' },
	pubCreate: { path: '/pubs/new' },
	pubEdit: { path: '/pubs/:id' },

	tapstersPage: { path: '/tapsters/page' },
	tapsterList: { path: '/tapsters' },
	tapsterCreate: { path: '/tapsters/new' },
	tapsterEdit: { path: '/tapsters/:id' },

	pageList: { path: '/pages' },
	pageCreate: { path: '/page/create' },
	pageEdit: { path: '/page/:id' },

	pour: { path: '/pour' },

	menu: { path: '/menu' },
	categories: { path: '/categories' },
	categoryCreate: { path: '/categories/new' },
	categoryEdit: { path: '/categories/:id' },
	tags: { path: '/tags' },
	tagCreate: { path: '/tags/new' },
	tagEdit: { path: '/tags/:id' },
	locations: { path: '/locations' },
	locationCreate: { path: '/locations/new' },
	locationEdit: { path: '/locations/:id' },
	social: { path: '/social-networks' },

	sites: { path: '/sites' },
	translations: { path: '/translations' },
}
const config: ProjectConfig[] = [
	{
		project: 'pilsner',
		stage: 'prod',
		component: () => import('./prod'),
		defaultDimensions: {
			site: ['en'],
		},
		routes: routes,
	},
	{
		project: 'pilsner-beta',
		stage: 'beta',
		component: () => import('./beta'),
		defaultDimensions: {
			site: ['en'],
		},
		routes: routes,
	},
]

export default config
