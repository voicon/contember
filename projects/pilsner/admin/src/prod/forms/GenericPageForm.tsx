import { Component, SlugField, TextField } from 'cms-admin'
import * as React from 'react'
import { GenericContentForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<SlugField field="link.url" drivenBy="title" prefix="/" label="URL" />
			<GenericContentForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
