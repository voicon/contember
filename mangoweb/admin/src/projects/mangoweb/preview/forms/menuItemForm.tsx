import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

const menuItemForm = (
	<>
		<LocaleSideDimension>
			<TextField name="$locale.label" label="Menu item label" />
		</LocaleSideDimension>
	</>
)

export { menuItemForm }
