import * as React from 'react'
import { Menu } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item title="Menu">
					<Menu.Item title="Dashboard" to={{ pageName: 'dashboard', parameters: {} }} />
				</Menu.Item>
				<Menu.Item title="Pages">
					<Menu.Item
						title="Page"
						to={{ pageName: 'edit_page', parameters: { id: '79eb5a3e-91b0-4499-8aa4-c490e5313960' } }}
					/>
					<Menu.Item
						title="Post2"
						to={{
							pageName: 'edit_post2',
							parameters: { id: '14474645-d439-446c-bac3-e104a9b72a86' },
						}}
					/>
					<Menu.Item title="All Posts" to={{ pageName: 'postList', parameters: {} }} />
				</Menu.Item>
			</Menu>
		)
	}
}
