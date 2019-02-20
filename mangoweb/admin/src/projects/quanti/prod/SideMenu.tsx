import * as React from 'react'
import { Menu, MenuList, MenuPageLink, MenuPageLinkPrimary } from 'cms-admin'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList title="Pages">
					<MenuPageLink change={() => ({ name: 'edit_frontPage' })}>Front page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'contact' })}>Contact</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'categories' })}>Categories</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'list_page' })}>List</MenuPageLink>
				</MenuList>
				<MenuList title="Settings">
					<MenuPageLink change={() => ({ name: 'people' })}>People</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'places' })}>Places</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'menuItems' })}>Menu</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'social' })}>Social</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'footer' })}>Footer</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'joinUs' })}>Join us</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'translations' })}>Translations</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'locales' })}>Locales</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
