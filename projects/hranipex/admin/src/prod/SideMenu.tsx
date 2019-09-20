import * as React from 'react'
import { Menu } from 'cms-admin'

export const SideMenu = React.memo(props => {
	return (
		<Menu>
			<Menu.Item title="Settings">
				<Menu.Item title="Sites" to="sites" />
				<Menu.Item title="Translations" to="translationSets" />
			</Menu.Item>
		</Menu>
	)
})
