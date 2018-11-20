import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

const menuItemForm = (
	<>
		<LocaleSideDimension>
			<TextField name="$locale.label" label="Menu item label" />
			<TextField name="$locale.url" label="Menu item url" />
		</LocaleSideDimension>
	</>
)

export { menuItemForm }
