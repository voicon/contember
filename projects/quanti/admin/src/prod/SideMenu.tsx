import { Menu } from 'cms-admin'
import * as React from 'react'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" to={{ pageName: 'edit_frontPage' }} />
					<Menu.Item title="Pages" to={{ pageName: 'list_page' }} />
				</Menu.Item>
				<Menu.Item title="Entities">
					<Menu.Item title="People" to={{ pageName: 'people' }} />
					<Menu.Item title="Places" to={{ pageName: 'places' }} />
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Menu" to={{ pageName: 'menuItems' }} />
					<Menu.Item title="Footer" to={{ pageName: 'footer' }} />
					<Menu.Item title="Social" to={{ pageName: 'social' }} />
					<Menu.Item title="Join us" to={{ pageName: 'joinUs' }} />
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Categories" to={{ pageName: 'categories' }} />
					<Menu.Item title="Translations" to={{ pageName: 'translations' }} />
					<Menu.Item title="Locales" to={{ pageName: 'locales' }} />
					<Menu.Item title="Contact messages" to={{ pageName: 'contactMessages' }} />
					{/*<Menu.Item title="Staging" to={{ pageName: 'diff' }}></Menu.Item>*/}
				</Menu.Item>
			</Menu>
		)
	}
}
