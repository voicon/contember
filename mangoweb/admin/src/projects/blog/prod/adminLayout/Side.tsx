import * as React from 'react'
import { Menu, MenuList, MenuPageLink, LinkAppearance } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLink
						change={() => ({ name: 'dashboard', params: {} })}
						appearance={LinkAppearance.Primary}
						frontIcon={'dashboard'}
					>
						dasboard
					</MenuPageLink>
				</MenuList>
				<MenuList title="Pages">
					<MenuPageLink
						change={() => ({ name: 'edit_page', params: { id: '79eb5a3e-91b0-4499-8aa4-c490e5313960' } })}
						frontIcon={'document'}
					>
						Page
					</MenuPageLink>
					<MenuPageLink
						change={() => ({ name: 'edit_post2', params: { id: '14474645-d439-446c-bac3-e104a9b72a86' } })}
						frontIcon={'page-layout'}
					>
						Post2
					</MenuPageLink>
					<MenuPageLink
						change={() => ({ name: 'postList', params: {} })}
						frontIcon={'page-layout'}
					>
						All Posts
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
