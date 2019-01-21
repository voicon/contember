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
					create_whatWeDo: { path: '/whatWeDo/create-new' },

					edit_referencesPage: { path: '/references-page' },

					edit_contactPage: { path: '/contact-page' },
					edit_contact: { path: '/contact-information' }
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
