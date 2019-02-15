import { IconNames } from '@blueprintjs/icons'
import { DimensionsSwitcher, PageLink } from 'cms-admin'
import * as React from 'react'

export default class HeaderLeft extends React.PureComponent {
	render() {
		return (
			<>
				<DimensionsSwitcher
					entityName="Language"
					dimension="lang"
					labelName="name"
					valueName="slug"
					emptyText="Choose language"
					buttonProps={{
						icon: IconNames.GLOBE
					}}
				/>
			</>
		)
	}
}
