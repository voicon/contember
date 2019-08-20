import { DimensionsSwitcher, LayoutDefault, Literal } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

const layout = {
	header: {
		title: logo,
		left: (
			<DimensionsSwitcher
				optionEntities="Site"
				orderBy={[{ order: new Literal('asc') }]}
				dimension="site"
				maxItems={1}
				labelField="name"
				slugField="slug"
			/>
		),
		right: false,
	},
	side: <SideMenu />,
}

export class Layout extends React.PureComponent {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
