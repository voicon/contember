import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

const menuItemForm = (
	<>
		<LocaleSideDimension>
			<TextField name="$locale.label" label="Menu item label" />
		</LocaleSideDimension>
		<TextField name="url" label="Menu item url" />
	</>
)

export { menuItemForm }
