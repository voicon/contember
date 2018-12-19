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
					<MenuPageLink
						change={() => ({ name: 'edit_frontPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="application"
					>
						Front page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_menuItem' })} frontIcon="menu">
						Menu
					</MenuPageLink>
					<MenuPageLink
						change={() => ({ name: 'edit_footer', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="widget-footer"
					>
						Footer
					</MenuPageLink>
				</MenuList>
				<MenuList title="Team">
					<MenuPageLink
						change={() => ({ name: 'edit_teamPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="mugshot"
					>
						Team page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_person' })} frontIcon="people">
						Team members
					</MenuPageLink>
				</MenuList>
				<MenuList title="What we do">
					<MenuPageLink
						change={() => ({ name: 'edit_whatWeDoPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="oil-field"
					>
						What we do page
					</MenuPageLink>
					<MenuPageLink change={() => ({ name: 'multiEdit_whatWeDo' })} frontIcon="briefcase">
						What we do
					</MenuPageLink>
				</MenuList>
				<MenuList title="References">
					<MenuPageLink
						change={() => ({ name: 'edit_referencesPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="thumbs-up"
					>
						References page
					</MenuPageLink>
				</MenuList>
				<MenuList title="Contact">
					<MenuPageLink
						change={() => ({ name: 'edit_contactPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="envelope"
					>
						Contact page
					</MenuPageLink>
					<MenuPageLink
						change={() => ({ name: 'edit_contact', params: { unique: new GraphQlBuilder.Literal('one') } })}
						frontIcon="phone"
					>
						Contact info
					</MenuPageLink>
				</MenuList>
			</Menu>
		)
	}
}
