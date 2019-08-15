import { Menu } from 'cms-admin'
import * as React from 'react'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" target={{ pageName: 'edit_frontPage' }}></Menu.Item>
					<Menu.Item title="Pages" target={{ pageName: 'list_page' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Entities">
					<Menu.Item title="People" target={{ pageName: 'people' }}></Menu.Item>
					<Menu.Item title="Places" target={{ pageName: 'places' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Menu" target={{ pageName: 'menuItems' }}></Menu.Item>
					<Menu.Item title="Footer" target={{ pageName: 'footer' }}></Menu.Item>
					<Menu.Item title="Social" target={{ pageName: 'social' }}></Menu.Item>
					<Menu.Item title="Join us" target={{ pageName: 'joinUs' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Categories" target={{ pageName: 'categories' }}></Menu.Item>
					<Menu.Item title="Translations" target={{ pageName: 'translations' }}></Menu.Item>
					<Menu.Item title="Locales" target={{ pageName: 'locales' }}></Menu.Item>
					<Menu.Item title="Contact messages" target={{ pageName: 'contactMessages' }}></Menu.Item>
					{/*<Menu.Item title="Staging" target={{ pageName: 'diff' }}></Menu.Item>*/}
				</Menu.Item>
			</Menu>
		)
	}
}
