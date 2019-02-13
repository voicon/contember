import { Component, SelectField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const MenuItem = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField label="Label" name="$locale.label" />
				<SelectField label="Target" name="$locale.target" options="Linkable.url" />
			</LocaleSideDimension>
		</>
	),
	'MenuItem'
)
