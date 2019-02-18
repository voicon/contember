import * as React from 'react'
import { Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { LayoutDefault, DimensionsSwitcher } from 'cms-admin'
import { SideMenu } from './SideMenu'

const layout = {
	header: {
		title: 'Quanti',
		left: (
			<DimensionsSwitcher
				entityName="Locale"
				dimension="locale"
				labelName="slug"
				valueName="slug"
				emptyText="Choose language"
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
