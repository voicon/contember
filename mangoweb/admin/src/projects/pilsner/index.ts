import { ProjectConfig } from 'cms-admin'

const config: ProjectConfig[] = [
	{
		project: 'pilsner',
		stage: 'prod',
		component: () => import('./prod'),
		routes: {
			dashboard: { path: '/' },

			frontPage: { path: '/front-page' },
			footer: { path: '/footer' },

			blog: { path: '/stories' },
			blogNew: { path: '/stories/new' },
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

			menuItems: { path: '/menu' },
			categories: { path: '/categories' },
			tags: { path: '/tags' },
			locations: { path: '/locations' },
			social: { path: '/social-networks' },

			sites: { path: '/sites' },
			translations: { path: '/translations' }
		}
	}
]

export default config
