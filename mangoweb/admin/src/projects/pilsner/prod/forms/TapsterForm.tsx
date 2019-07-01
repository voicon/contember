import * as React from 'react'
import { Component, TextAreaField, TextField } from 'cms-admin'

export const TapsterForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="subtitle" label="Subtitle" />
			<TextField name="locationText" label="Location" />
			<TextAreaField name="perex" label="Perex" />
		</>
	),
	'TapsterForm'
)
