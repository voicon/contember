import * as React from 'react'
import { Menu } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Dashboard" to="dashboard" />
				</Menu.Item>
				<Menu.Item title="General">
					<Menu.Item title="Front page" to="edit_frontPage" />
					<Menu.Item title="Menu" to="multiEdit_menuItem" />
					<Menu.Item title="Footer" to="edit_footer" />
				</Menu.Item>
				<Menu.Item title="Team">
					<Menu.Item title="Team page" to="edit_teamPage" />
					<Menu.Item title="Team members" to="multiEdit_person" />
				</Menu.Item>
				<Menu.Item title="What we do">
					<Menu.Item title="What we do page" to="edit_whatWeDoPage" />
					<Menu.Item title="What we do" to="multiEdit_whatWeDo" />
				</Menu.Item>
				<Menu.Item title="References">
					<Menu.Item title="References page" to="edit_referencesPage" />
					<Menu.Item title="References" to="edit_references" />
				</Menu.Item>
				<Menu.Item title="Contact">
					<Menu.Item title="Contact page" to="edit_contactPage" />
					<Menu.Item title="Contact info" to="edit_contact" />
				</Menu.Item>
				<Menu.Item title="Miscellaneous">
					<Menu.Item title="Languages" to="multiEdit_language" />
				</Menu.Item>
			</Menu>
		)
	}
}
