import { Menu, MenuList, MenuPageLink } from 'cms-admin'
import * as React from 'react'
import { DeployButton } from './components'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLink change={() => ({ name: 'frontPage' })}>Front page</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'blog' })}>Stories</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'pubs' })}>Pubs</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'tapsters' })}>Tapsters</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'pages' })}>Pages</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'pour' })}>Pour</MenuPageLink>
				</MenuList>
				<MenuList title="Settings">
					<MenuPageLink change={() => ({ name: 'footer' })}>Footer</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'menu' })}>Menu</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'categories' })}>Categories</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'tags' })}>Tags</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'locations' })}>Locations</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'social' })}>Social networks</MenuPageLink>
				</MenuList>
				<MenuList title="System">
					<MenuPageLink change={() => ({ name: 'translations' })}>Translations</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'sites' })}>Sites</MenuPageLink>
				</MenuList>
				<MenuList title="Deployment">
					<DeployButton />
				</MenuList>
			</Menu>
		)
	}
}
