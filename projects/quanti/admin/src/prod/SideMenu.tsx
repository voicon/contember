import { Menu } from 'cms-admin'
import * as React from 'react'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" change={{ name: 'edit_frontPage' }}></Menu.Item>
					<Menu.Item title="Pages" change={{ name: 'list_page' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Entities">
					<Menu.Item title="People" change={{ name: 'people' }}></Menu.Item>
					<Menu.Item title="Places" change={{ name: 'places' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Menu" change={{ name: 'menuItems' }}></Menu.Item>
					<Menu.Item title="Footer" change={{ name: 'footer' }}></Menu.Item>
					<Menu.Item title="Social" change={{ name: 'social' }}></Menu.Item>
					<Menu.Item title="Join us" change={{ name: 'joinUs' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Categories" change={{ name: 'categories' }}></Menu.Item>
					<Menu.Item title="Translations" change={{ name: 'translations' }}></Menu.Item>
					<Menu.Item title="Locales" change={{ name: 'locales' }}></Menu.Item>
					<Menu.Item title="Contact messages" change={{ name: 'contactMessages' }}></Menu.Item>
					{/*<Menu.Item title="Staging" change={{ name: 'diff' }}></Menu.Item>*/}
				</Menu.Item>
			</Menu>
		)
	}
}
