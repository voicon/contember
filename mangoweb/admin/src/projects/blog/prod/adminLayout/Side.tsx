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
						change={() => ({ name: 'edit_post', params: { id: '14474645-d439-446c-bac3-e104a9b72a86' } })}
						frontIcon={'page-layout'}
					>
						Post
					</MenuPageLink>
					<MenuPageLink
						change={() => ({ name: 'edit_post2', params: { id: '14474645-d439-446c-bac3-e104a9b72a86' } })}
						frontIcon={'page-layout'}
					>
						Post2
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
