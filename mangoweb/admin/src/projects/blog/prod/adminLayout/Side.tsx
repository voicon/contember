import * as React from 'react'
import { Icon } from '@blueprintjs/core'
import { Menu, MenuList, MenuPageLink, MenuPageLinkPrimary } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList title="Menu">
					<MenuPageLinkPrimary
						change={() => ({ name: 'dashboard', params: {} })}
						name="Dashboard"
						// note="The starting point"
					/>
				</MenuList>
				<MenuList title="Pages">
					<MenuPageLink change={() => ({ name: 'edit_page', params: { id: '79eb5a3e-91b0-4499-8aa4-c490e5313960' } })}>
						Page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_post2', params: { id: '14474645-d439-446c-bac3-e104a9b72a86' } })}>
						Post2
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'postList', params: {} })}>All Posts</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
