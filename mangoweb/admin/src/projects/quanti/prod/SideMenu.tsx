import * as React from 'react'
import { Menu, MenuList, MenuPageLink, LinkAppearance } from 'cms-admin'

export class SideMenu extends React.Component {
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
					<MenuPageLink change={() => ({ name: 'edit_frontPage' })} frontIcon="page-layout">
						Front page
					</MenuPageLink>
				</MenuList>
				<MenuList title="Pages">
					<MenuPageLink change={() => ({ name: 'list_page' })} frontIcon="properties">
						List
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'create_page' })} frontIcon="add">
						Create page
					</MenuPageLink>
				</MenuList>
				<MenuList title="Other">
					<MenuPageLink change={() => ({ name: 'locales' })} frontIcon="flag">
						Locales
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'menuItems' })} frontIcon="menu">
						Menu
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'places' })} frontIcon="map-marker">
						Places
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'social' })} frontIcon="social-media">
						Social
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'footer' })} frontIcon="widget-footer">
						Footer
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'joinUs' })} frontIcon="people">
						Join us
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'translations' })} frontIcon="translate">
						Translations
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'contact' })} frontIcon="envelope">
						Contact
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
