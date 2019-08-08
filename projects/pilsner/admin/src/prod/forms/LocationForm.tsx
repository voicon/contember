import { Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LocationField } from '../components'

export const LocationForm = Component(
	prop => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="slug" label="Slug" />
			<TextField name="altName" label="Alternative name" />
			<LocationField name="parent" label="Parent" />
		</>
	),
	'LocationForm',
)
