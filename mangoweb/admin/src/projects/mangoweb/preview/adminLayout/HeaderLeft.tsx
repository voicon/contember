import { IconNames } from '@blueprintjs/icons'
import { DimensionsSwitcher } from 'cms-admin'
import * as React from 'react'

export default class HeaderLeft extends React.PureComponent {
	render() {
		return (
			<>
				<DimensionsSwitcher
					options="Language.name"
					dimension="lang"
					defaultValue={[{ slug: 'cz', label: 'Czech' }]}
					maxItems={2}
					slugField="slug"
					buttonProps={{
						icon: IconNames.GLOBE
					}}
				/>
			</>
		)
	}
}
