import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

export const whatWeDoPageForm = (
	<>
		<LocaleSideDimension>
			<TextField name="$locale.title" label="Page title" />
		</LocaleSideDimension>
	</>
)
