import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

export const whatWeDoPageForm = (
	<>
		<LocaleSideDimension>
			<TextField name="$locale.titleShort" label="Abbreviated page title" />
			<TextField name="$locale.titleFull" label="Full page title" />
		</LocaleSideDimension>
	</>
)
