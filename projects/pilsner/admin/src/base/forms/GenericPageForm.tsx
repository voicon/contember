import { Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LinkUrlField } from '../components'
import { GenericContentForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<LinkUrlField drivenBy="title" />
			<GenericContentForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
