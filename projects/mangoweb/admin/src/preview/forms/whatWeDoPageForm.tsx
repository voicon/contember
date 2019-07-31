import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { seoForm } from './seoForm'

export const whatWeDoPageForm = (
	<>
		<LocaleSideDimension>
			<TextField name="titleShort" label="Abbreviated page title" />
			<TextField name="titleFull" label="Full page title" />
		</LocaleSideDimension>

		{seoForm}
	</>
)
