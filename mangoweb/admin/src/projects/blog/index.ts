import { ProjectConfig } from 'cms-admin'

const config: ProjectConfig[] = [
	{
		project: 'blog',
		stage: 'prod',
		component: () => import('./prod'),
		routes: {
			dashboard: { path: '/' },
			edit_page: { path: '/edit_page/:id' },
			edit_post2: { path: '/edit_post2/:id' },
			postList: { path: '/postList' }
		}
	}
]

export default config
