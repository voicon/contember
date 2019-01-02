import { Literal, RadioField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

const menuItemForm = (
	<>
		<RadioField name="target" label="Target page" inline={true} options={[
			[new Literal('front'), 'Front page'],
			[new Literal('team'), 'Team'],
			[new Literal('whatWeDo'), 'What we do'],
			[new Literal('references'), 'References'],
			[new Literal('contact'), 'Contact'],
		]}/>
		<LocaleSideDimension>
			<TextField name="$locale.label" label="Menu item label" />
		</LocaleSideDimension>
	</>
)

export { menuItemForm }
