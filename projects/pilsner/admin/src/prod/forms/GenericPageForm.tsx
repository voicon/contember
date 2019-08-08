import { Component, TextField } from 'cms-admin'
import * as React from 'react'
import { GenericContentForm, LinkForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<GenericContentForm />
			<LinkForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
