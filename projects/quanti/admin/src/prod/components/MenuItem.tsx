import { Component, SelectField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const MenuItem = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField label="Label" name="label" />
				<SelectField label="Target" name="target" options="Linkable.url" />
			</LocaleSideDimension>
		</>
	),
	'MenuItem',
)
