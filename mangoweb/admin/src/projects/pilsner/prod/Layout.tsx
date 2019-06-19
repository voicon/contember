import * as React from 'react'
import { LayoutDefault } from 'cms-admin'
import { SideMenu } from './SideMenu'
import logo from './logo.svg'

const layout = {
	header: {
		title: logo,
		left: false,
		right: false
	},
	side: <SideMenu />
}

export class Layout extends React.Component {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
