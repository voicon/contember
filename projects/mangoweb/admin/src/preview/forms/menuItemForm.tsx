import { Literal, RadioField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

const menuItemForm = (
	<>
		<RadioField
			name="target"
			label="Target page"
			inline={true}
			options={[
				{ value: new Literal('front'), label: 'Front page' },
				{ value: new Literal('team'), label: 'Team' },
				{ value: new Literal('whatWeDo'), label: 'What we do' },
				{ value: new Literal('references'), label: 'References' },
				{ value: new Literal('contact'), label: 'Contact' },
			]}
		/>
		<LocaleSideDimension>
			<TextField name="label" label="Menu item label" />
		</LocaleSideDimension>
	</>
)

export { menuItemForm }
