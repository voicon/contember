import { IconNames } from '@blueprintjs/icons'
import { DimensionsSwitcher } from 'cms-admin'
import * as React from 'react'

export default class HeaderLeft extends React.PureComponent {
	render() {
		return (
			<>
				<DimensionsSwitcher
					optionEntities="Language"
					dimension="lang"
					defaultValue={[{ slug: 'cz', label: 'Czech' }]}
					maxItems={2}
					labelField="name"
					slugField="slug"
					buttonProps={{
						icon: IconNames.GLOBE
					}}
				/>
			</>
		)
	}
}
