import * as React from 'react'
import { Menu, useProjectUserRoles } from 'cms-admin'
import { UserRoles } from './acl'

export const SideMenu = React.memo(props => {
	const userRoles = useProjectUserRoles()

	const isAdmin = userRoles.has(UserRoles.Admin)
	return (
		<Menu>
			<Menu.Item>
				<Menu.Item title="Front page" to="frontPage" />
				<Menu.Item title="Posts" to="postList" />
				<Menu.Item title="Pages" to="contentPageList" />
				<Menu.Item title="FAQs" to="faq" />
				<Menu.Item title="Contacts" to="contact" />
				<Menu.Item title="Header" to="header" />
				<Menu.Item title="Footer" to="footer" />
			</Menu.Item>
			<Menu.Item title="Settings">
				<Menu.Item title="Sites" to="sites" />
				<Menu.Item title="Translations" to="translations" />
				<Menu.Item title="Icons" to="icons" />
				{isAdmin && <Menu.Item title="Users" to="tenantUsers" />}
			</Menu.Item>
		</Menu>
	)
})
