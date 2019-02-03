import { GraphQlBuilder } from 'cms-client'
import * as React from 'react'
import { Menu, MenuList, MenuPageLink, LinkAppearance } from 'cms-admin'

export default class Side extends React.Component {
	render() {
		return (
			<Menu>
				<MenuList>
					<MenuPageLink
						change={() => ({ name: 'dashboard' })}
						appearance={LinkAppearance.Primary}
						frontIcon="dashboard"
					>
						Dashboard
					</MenuPageLink>
				</MenuList>
				<MenuList title="General">
					<MenuPageLink change={() => ({ name: 'edit_frontPage' })} frontIcon="application">
						Front page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_menuItem' })} frontIcon="menu">
						Menu
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_footer' })} frontIcon="widget-footer">
						Footer
					</MenuPageLink>
				</MenuList>
				<MenuList title="Team">
					<MenuPageLink change={() => ({ name: 'edit_teamPage' })} frontIcon="mugshot">
						Team page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_person' })} frontIcon="people">
						Team members
					</MenuPageLink>
				</MenuList>
				<MenuList title="What we do">
					<MenuPageLink change={() => ({ name: 'edit_whatWeDoPage' })} frontIcon="oil-field">
						What we do page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_whatWeDo' })} frontIcon="briefcase">
						What we do
					</MenuPageLink>
				</MenuList>
				<MenuList title="References">
					<MenuPageLink change={() => ({ name: 'edit_referencesPage' })} frontIcon="shop">
						References page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_references' })} frontIcon="thumbs-up">
						References
					</MenuPageLink>
				</MenuList>
				<MenuList title="Contact">
					<MenuPageLink change={() => ({ name: 'edit_contactPage' })} frontIcon="envelope">
						Contact page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'edit_contact' })} frontIcon="phone">
						Contact info
					</MenuPageLink>
				</MenuList>
				<MenuList title="Miscellaneous">
					<MenuPageLink change={() => ({ name: 'multiEdit_language' })} frontIcon="globe">
						Languages
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
