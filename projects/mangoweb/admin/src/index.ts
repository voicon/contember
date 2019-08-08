import { ProjectConfig } from 'cms-admin'

const config: ProjectConfig[] = [
	{
		project: 'mangoweb',
		stage: 'preview',
		defaultDimensions: {
			lang: ['cs'],
		},
		component: () => import('./preview'),
		routes: {
			dashboard: { path: '/' },

			edit_frontPage: { path: '/front-page' },
			multiEdit_menuItem: { path: '/menu' },
			edit_footer: { path: '/footer' },

			edit_teamPage: { path: '/team-page' },
			multiEdit_person: { path: '/team-members' },
			create_person: { path: '/team-members/create-new' },
			edit_person: { path: '/team-members/member-:id' },

			edit_whatWeDoPage: { path: '/whatWeDo-page' },
			multiEdit_whatWeDo: { path: '/whatWeDo' },
			edit_whatWeDo: { path: '/whatWeDo/:id' },

			edit_referencesPage: { path: '/references-page' },
			edit_references: { path: '/references' },

			edit_contactPage: { path: '/contact-page' },
			edit_contact: { path: '/contact-information' },

			multiEdit_language: { path: '/languages' },
		},
	},
]

export default config
