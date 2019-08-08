import * as React from 'react'
import { IconNames } from '@blueprintjs/icons'
import { LayoutDefault, DimensionsSwitcher } from 'cms-admin'
import { SideMenu } from './SideMenu'

const layout = {
	header: {
		title: 'Quanti',
		left: (
			<DimensionsSwitcher
				optionEntities="Locale"
				dimension="locale"
				defaultValue={[{ slug: 'cs', label: 'cs' }]}
				labelField="slug"
				slugField="slug"
				buttonProps={{
					icon: IconNames.GLOBE,
				}}
			/>
		),
		right: false,
	},
	side: <SideMenu />,
}

export class Layout extends React.Component {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
