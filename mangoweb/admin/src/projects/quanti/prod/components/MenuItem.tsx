import * as React from 'react'
import { Component, TextField, SelectField, RadioField } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const MenuItem = Component<{}>(
	() => (
		<>
			<LocaleSideDimension>
				<TextField label="Label" name="$locale.label" />
				{/* <SelectField label="Target" name="$locale.target" entityName="Linkable" optionFieldName="url" /> */}
			</LocaleSideDimension>
		</>
	),
	'MenuItem'
)
