import * as React from 'react'
import { Menu } from 'cms-admin'

export const SideMenu = React.memo(props => {
	return (
		<Menu>
			<Menu.Item>
				<Menu.Item title="Front page" to="frontPage" />
				<Menu.Item title="Posts" to="postList" />
				<Menu.Item title="Pages" to="contentPageList" />
				<Menu.Item title="Footer" to="footer" />
				<Menu.Item title="Header" to="header" />
			</Menu.Item>
			<Menu.Item title="Settings">
				<Menu.Item title="Sites" to="sites" />
				<Menu.Item title="Translations" to="translations" />
			</Menu.Item>
		</Menu>
	)
})
