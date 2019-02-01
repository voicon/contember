import * as React from 'react'
import { IconNames } from '@blueprintjs/icons'
import { DimensionsSwitcher, PageLink } from 'cms-admin'
import { Button } from '@blueprintjs/core'

export default class HeaderLeft extends React.PureComponent {
	render() {
		return (
			<>
				<PageLink change={() => ({ name: 'dashboard' })}>manGoweb</PageLink>
				<DimensionsSwitcher
					entityName="Language"
					dimension="lang"
					labelName="name"
					valueName="slug"
					opener={<Button icon={IconNames.GLOBE} rightIcon={IconNames.CHEVRON_DOWN} text="Choose language" />}
				/>
			</>
		)
	}
}
