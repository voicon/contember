import { Button, DimensionsSwitcher, LayoutDefault, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

interface LayoutProps {
	deployButton: boolean
}

const dimSwitcher = (
	<DimensionsSwitcher
		optionEntities="Site"
		orderBy={[{ order: new Literal('asc') }]}
		dimension="site"
		maxItems={1}
		labelField="name"
		slugField="slug"
	/>
)
export class Layout extends React.PureComponent<LayoutProps> {
	render() {
		return (
			<LayoutDefault
				header={{
					title: logo,
					left: dimSwitcher,
					right: false,
				}}
				side={<SideMenu deployButton={this.props.deployButton} />}
				content={this.props.children}
				userMenu={
					<>
						<PageLinkButton distinction="seamless" flow="generousBlock" to="tenantChangePassword">
							Change password
						</PageLinkButton>
					</>
				}
			/>
		)
	}
}
