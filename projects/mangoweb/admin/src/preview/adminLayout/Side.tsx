import * as React from 'react'
import { Menu } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Dashboard" change={{ name: 'dashboard' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="General">
					<Menu.Item title="Front page" change={{ name: 'edit_frontPage' }}></Menu.Item>
					<Menu.Item title="Menu" change={{ name: 'multiEdit_menuItem' }}></Menu.Item>
					<Menu.Item title="Footer" change={{ name: 'edit_footer' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Team">
					<Menu.Item title="Team page" change={{ name: 'edit_teamPage' }}></Menu.Item>
					<Menu.Item title="Team members" change={{ name: 'multiEdit_person' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="What we do">
					<Menu.Item title="What we do page" change={{ name: 'edit_whatWeDoPage' }}></Menu.Item>
					<Menu.Item title="What we do" change={{ name: 'multiEdit_whatWeDo' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="References">
					<Menu.Item title="References page" change={{ name: 'edit_referencesPage' }}></Menu.Item>
					<Menu.Item title="References" change={{ name: 'edit_references' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Contact">
					<Menu.Item title="Contact page" change={{ name: 'edit_contactPage' }}></Menu.Item>
					<Menu.Item title="Contact info" change={{ name: 'edit_contact' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Miscellaneous">
					<Menu.Item title="Languages" change={{ name: 'multiEdit_language' }}></Menu.Item>
				</Menu.Item>
			</Menu>
		)
	}
}
