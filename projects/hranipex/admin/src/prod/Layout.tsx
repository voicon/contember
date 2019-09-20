import { LayoutDefault } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

interface LayoutProps {}

export class Layout extends React.PureComponent<LayoutProps> {
	render() {
		return (
			<LayoutDefault
				header={{
					title: logo,
					left: false,
					right: false,
				}}
				side={<SideMenu />}
				content={this.props.children}
			/>
		)
	}
}
