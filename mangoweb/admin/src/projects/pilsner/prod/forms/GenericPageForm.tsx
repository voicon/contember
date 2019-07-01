import * as React from 'react'
import { Component, TextField } from 'cms-admin'
import { SeoForm, LinkForm, GenericContentForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<GenericContentForm />
			<LinkForm />
			<SeoForm />
		</>
	),
	'GenericPageForm'
)
