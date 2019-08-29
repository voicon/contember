import { Menu } from 'cms-admin'
import * as React from 'react'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" to="edit_frontPage" />
					<Menu.Item title="Pages" to="list_page" />
				</Menu.Item>
				<Menu.Item title="Entities">
					<Menu.Item title="People" to="people" />
					<Menu.Item title="Places" to="places" />
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Menu" to="menuItems" />
					<Menu.Item title="Footer" to="footer" />
					<Menu.Item title="Social" to="social" />
					<Menu.Item title="Join us" to="joinUs" />
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Categories" to="categories" />
					<Menu.Item title="Translations" to="translations" />
					<Menu.Item title="Locales" to="locales" />
					<Menu.Item title="Contact messages" to="contactMessages" />
					{/*<Menu.Item title="Staging" to="diff"></Menu.Item>*/}
				</Menu.Item>
			</Menu>
		)
	}
}
