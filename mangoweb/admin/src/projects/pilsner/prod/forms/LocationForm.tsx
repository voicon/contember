import * as React from 'react'
import { Component, SelectField, TextField } from 'cms-admin'

export const LocationForm = Component<{ withLocation?: boolean }>(
	prop => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="altName" label="Alternative name" />
			{prop.withLocation && <SelectField name="parent" label="Parent" options={'Location.name'} />}
		</>
	),
	'LocationForm'
)
