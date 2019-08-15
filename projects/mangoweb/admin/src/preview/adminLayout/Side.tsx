import * as React from 'react'
import { Menu } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Dashboard" target={{ pageName: 'dashboard' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="General">
					<Menu.Item title="Front page" target={{ pageName: 'edit_frontPage' }}></Menu.Item>
					<Menu.Item title="Menu" target={{ pageName: 'multiEdit_menuItem' }}></Menu.Item>
					<Menu.Item title="Footer" target={{ pageName: 'edit_footer' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Team">
					<Menu.Item title="Team page" target={{ pageName: 'edit_teamPage' }}></Menu.Item>
					<Menu.Item title="Team members" target={{ pageName: 'multiEdit_person' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="What we do">
					<Menu.Item title="What we do page" target={{ pageName: 'edit_whatWeDoPage' }}></Menu.Item>
					<Menu.Item title="What we do" target={{ pageName: 'multiEdit_whatWeDo' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="References">
					<Menu.Item title="References page" target={{ pageName: 'edit_referencesPage' }}></Menu.Item>
					<Menu.Item title="References" target={{ pageName: 'edit_references' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Contact">
					<Menu.Item title="Contact page" target={{ pageName: 'edit_contactPage' }}></Menu.Item>
					<Menu.Item title="Contact info" target={{ pageName: 'edit_contact' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Miscellaneous">
					<Menu.Item title="Languages" target={{ pageName: 'multiEdit_language' }}></Menu.Item>
				</Menu.Item>
			</Menu>
		)
	}
}
