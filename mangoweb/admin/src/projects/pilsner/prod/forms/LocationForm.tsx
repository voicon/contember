import * as React from 'react'
import { Component, SelectField, TextField } from 'cms-admin'

export const LocationForm = Component(
	prop => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="slug" label="Slug" />
			<TextField name="altName" label="Alternative name" />
			<SelectField name="parent" label="Parent" options={'Location.name'} />
		</>
	),
	'LocationForm'
)
