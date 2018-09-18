import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Admin } from 'cms-admin'
import '../../src/index.sass'

const reactRoot = (
	<Admin
		configs={[
			{
				project: 'blog',
				stage: 'prod',
				component: () => import('./projects/blog/prod').then(r => r.default),
				routes: {
					dashboard: { path: '/' },
					edit_page: { path: '/edit_page/:id' },
					edit_post2: { path: '/edit_post2/:id' },
					postList: { path: '/postList'},
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
	ReactDOM.render(reactRoot, el)
})
