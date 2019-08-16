import * as React from 'react'
import { Menu } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Dashboard" to={{ pageName: 'dashboard' }} />
				</Menu.Item>
				<Menu.Item title="General">
					<Menu.Item title="Front page" to={{ pageName: 'edit_frontPage' }} />
					<Menu.Item title="Menu" to={{ pageName: 'multiEdit_menuItem' }} />
					<Menu.Item title="Footer" to={{ pageName: 'edit_footer' }} />
				</Menu.Item>
				<Menu.Item title="Team">
					<Menu.Item title="Team page" to={{ pageName: 'edit_teamPage' }} />
					<Menu.Item title="Team members" to={{ pageName: 'multiEdit_person' }} />
				</Menu.Item>
				<Menu.Item title="What we do">
					<Menu.Item title="What we do page" to={{ pageName: 'edit_whatWeDoPage' }} />
					<Menu.Item title="What we do" to={{ pageName: 'multiEdit_whatWeDo' }} />
				</Menu.Item>
				<Menu.Item title="References">
					<Menu.Item title="References page" to={{ pageName: 'edit_referencesPage' }} />
					<Menu.Item title="References" to={{ pageName: 'edit_references' }} />
				</Menu.Item>
				<Menu.Item title="Contact">
					<Menu.Item title="Contact page" to={{ pageName: 'edit_contactPage' }} />
					<Menu.Item title="Contact info" to={{ pageName: 'edit_contact' }} />
				</Menu.Item>
				<Menu.Item title="Miscellaneous">
					<Menu.Item title="Languages" to={{ pageName: 'multiEdit_language' }} />
				</Menu.Item>
			</Menu>
		)
	}
}
