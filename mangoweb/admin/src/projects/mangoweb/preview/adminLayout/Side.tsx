import { GraphQlBuilder } from 'cms-client'
import * as React from 'react'
import { Menu, MenuList, MenuPageLink } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLink change={() => ({ name: 'dashboard' })}>Dashboard</MenuPageLink>
				</MenuList>
				<MenuList title="General">
					<MenuPageLink change={() => ({ name: 'edit_frontPage' })}>Front page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_menuItem' })}>Menu</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_footer' })}>Footer</MenuPageLink>
				</MenuList>
				<MenuList title="Team">
					<MenuPageLink change={() => ({ name: 'edit_teamPage' })}>Team page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_person' })}>Team members</MenuPageLink>
				</MenuList>
				<MenuList title="What we do">
					<MenuPageLink change={() => ({ name: 'edit_whatWeDoPage' })}>What we do page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_whatWeDo' })}>What we do</MenuPageLink>
				</MenuList>
				<MenuList title="References">
					<MenuPageLink change={() => ({ name: 'edit_referencesPage' })}>References page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_references' })}>References</MenuPageLink>
				</MenuList>
				<MenuList title="Contact">
					<MenuPageLink change={() => ({ name: 'edit_contactPage' })}>Contact page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_contact' })}>Contact info</MenuPageLink>
				</MenuList>
				<MenuList title="Miscellaneous">
					<MenuPageLink change={() => ({ name: 'multiEdit_language' })}>Languages</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
