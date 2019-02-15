import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Admin } from 'cms-admin'
import '../../src/index.sass'

const reactRoot = (config: any) => (
	<Admin
		config={config}
		configs={[
			{
				project: 'blog',
				stage: 'prod',
				component: () => import('./projects/blog/prod'),
				routes: {
					dashboard: { path: '/' },
					edit_page: { path: '/edit_page/:id' },
					edit_post2: { path: '/edit_post2/:id' },
					postList: { path: '/postList' }
				}
			},
			{
				project: 'mangoweb',
				stage: 'preview',
				defaultDimensions: {
					lang: ['cs']
				},
				component: () => import('./projects/mangoweb/preview'),
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

					multiEdit_language: { path: '/languages' }
				}
			},
			{
				project: 'quanti',
				stage: 'prod',
				defaultDimensions: {
					locale: ['cs']
				},
				component: () => import('./projects/quanti/prod'),
				routes: {
					dashboard: { path: '/' },
					locales: { path: '/locales' },
					edit_frontPage: { path: '/front-page' },
					menuItems: { path: '/menu' },
					list_page: { path: '/page' },
					create_page: { path: '/page/create' },
					edit_page: { path: '/page/:id' },
					places: { path: '/places' },
					social: { path: '/social' },
					footer: { path: '/footer' },
					joinUs: { path: '/joinUs' },
					translations: { path: '/translations' },
					contact: { path: '/contact' }
				}
			}
		]}
	/>
)

window.addEventListener('DOMContentLoaded', function() {
	const el = document.getElementById('root')
	if (!el) {
		return
	}
	const configEl = document.getElementById('admin-config')
	if (!configEl) {
		return
	}
	const config = JSON.parse(configEl.innerHTML)
	ReactDOM.render(reactRoot(config), el)
})
