import * as React from 'react'
import { LayoutDefault, DimensionsSwitcher } from 'cms-admin'
import { SideMenu } from './SideMenu'

const layout = {
	header: {
		title: 'Quanti',
		left: <DimensionsSwitcher optionEntities="Locale" dimension="locale" labelField="slug" slugField="slug" />,
		right: false,
	},
	side: <SideMenu />,
}

export class Layout extends React.Component {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
