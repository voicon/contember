import * as React from 'react'
import { Component, TextAreaField, TextField } from 'cms-admin'
import { GenericContentForm } from './GenericContentForm'

export const PubForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="subtitle" label="Subtitle" />
			<TextField name="locationText" label="Location" />
			<TextAreaField name="perex" label="Perex" />

			<GenericContentForm />
		</>
	),
	'PubForm'
)
