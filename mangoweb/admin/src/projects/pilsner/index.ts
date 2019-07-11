import { ProjectConfig } from 'cms-admin'

const config: ProjectConfig[] = [
	{
		project: 'pilsner',
		stage: 'prod',
		component: () => import('./prod'),
		defaultDimensions: {
			site: ['en']
		},
		routes: {
			dashboard: { path: '/' },

			frontPage: { path: '/front-page' },
			footer: { path: '/footer' },

			blog: { path: '/stories' },
			blogCreate: { path: '/stories/new' },
			blogEdit: { path: '/stories/:id' },

			pubs: { path: '/pubs' },
			pubCreate: { path: '/pubs/new' },
			pubEdit: { path: '/pubs/:id' },

			tapsters: { path: '/tapsters' },
			tapsterCreate: { path: '/tapsters/new' },
			tapsterEdit: { path: '/tapsters/:id' },

			pages: { path: '/page' },
			pageCreate: { path: '/page/create' },
			pageEdit: { path: '/page/:id' },

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
			translations: { path: '/translations' }
		}
	}
]

export default config
