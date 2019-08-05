import { IconNames } from '@blueprintjs/icons'
import { DimensionsSwitcher, LayoutDefault } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

const layout = {
	header: {
		title: logo,
		left: (
			<DimensionsSwitcher
				options="Site.name"
				dimension="site"
				defaultValue={[{ slug: 'en', label: 'English' }]}
				maxItems={1}
				slugField="slug"
				buttonProps={{
					icon: IconNames.GLOBE
				}}
			/>
		),
		right: false
	},
	side: <SideMenu />
}

export class Layout extends React.Component {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
