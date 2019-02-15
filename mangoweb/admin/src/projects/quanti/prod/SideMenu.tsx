import * as React from 'react'
import { Menu, MenuList, MenuPageLink, MenuPageLinkPrimary } from 'cms-admin'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLinkPrimary change={() => ({ name: 'dashboard' })} avatar="D" name="Dashboard" />
					<MenuPageLink change={() => ({ name: 'edit_frontPage' })}>Front page</MenuPageLink>
				</MenuList>
				<MenuList title="Pages">
					<MenuPageLink change={() => ({ name: 'list_page' })}>List</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'create_page' })}>Create page</MenuPageLink>
				</MenuList>
				<MenuList title="Other">
					<MenuPageLink change={() => ({ name: 'locales' })}>Locales</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'menuItems' })}>Menu</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'places' })}>Places</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'social' })}>Social</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'footer' })}>Footer</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'joinUs' })}>Join us</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'translations' })}>Translations</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'contact' })}>Contact</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
