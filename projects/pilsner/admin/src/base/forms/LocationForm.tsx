import { Box, Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LocationField } from '../components'

export const LocationForm = Component(
	prop => (
		<Box>
			<TextField name="name" label="Name" size="large" />
			<TextField name="slug" label="Slug" />
			<TextField name="altName" label="Alternative name" />
			<LocationField name="parent" label="Parent" />
		</Box>
	),
	'LocationForm',
)
