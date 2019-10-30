import { ProjectConfig } from 'cms-admin'

const routes = {
	dashboard: { path: '/' },

	frontPage: { path: '/front-page' },

	postList: { path: '/posts' },
	postCreate: { path: '/posts/new' },
	postEdit: { path: '/posts/:id' },

	contentPageList: { path: '/pages' },
	contentPageCreate: { path: '/pages/new' },
	contentPageEdit: { path: '/pages/:id' },

	footer: { path: '/footer' },
	header: { path: '/header' },
	faq: { path: '/faq' },
	contact: { path: '/contact' },
	contactSales: { path: '/contact/sales' },

	sites: { path: '/sites' },
	translations: { path: '/translations' },
	translationStrings: { path: '/translations/strings' },
	translationSets: { path: '/translations/sets' },

	icons: { path: '/icons' },

	// tenant
	tenantChangePassword: { path: '/change-password' },
	tenantUsers: { path: '/users' },
	tenantInviteUser: { path: '/invite-user' },
	tenantEditUser: { path: '/edit-user/:id' },
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
