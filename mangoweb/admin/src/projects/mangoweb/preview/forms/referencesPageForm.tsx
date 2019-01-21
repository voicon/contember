import { H2 } from '@blueprintjs/core'
import { SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension } from '../components'

export const referencesPageForm = (
	<>
		<H2>General</H2>
		<LocaleSideDimension>
			<TextField name="$locale.titleShort" label="Abbreviated page title" />
			<TextField name="$locale.titleFull" label="Full page title" />
		</LocaleSideDimension>

		<H2>References</H2>
		<LocaleSideDimension>
			<SortableRepeater sortBy="order" field="$locale.references">
				<TextField name="title" label="Title" />
				<ImageField name="image" label="Reference image" />
				<TextField name="url" label="Reference link url" />
				<TextField name="urlLabel" label="Reference link text" />
			</SortableRepeater>
		</LocaleSideDimension>
	</>
)
