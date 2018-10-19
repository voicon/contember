import * as React from 'react'
import { Menu, MenuList, MenuPageLink, LinkAppearance } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLink
						change={() => ({ name: 'dashboard' })}
						appearance={LinkAppearance.Primary}
						frontIcon="dashboard"
					>
						Dashboard
					</MenuPageLink>
				</MenuList>
				<MenuList title="Team">
					<MenuPageLink change={() => ({ name: 'list_person' })} frontIcon="people">
						Member list
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'create_person' })} frontIcon="person">
						Create new
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
