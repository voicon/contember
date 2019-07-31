import { SortableRepeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { Medium } from '../components/Medium'

export const referencesForm = (
	<>
		<LocaleSideDimension>
			<SortableRepeater sortBy="order" field="references" removeType="delete">
				<TextAreaField name="title" label="Title" />
				<Medium field="medium" label="Reference medium" />
				<TextField name="url" label="Reference link url" />
				<TextField name="urlLabel" label="Reference link text" />
			</SortableRepeater>
		</LocaleSideDimension>
	</>
)
