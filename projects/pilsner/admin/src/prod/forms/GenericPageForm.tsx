import { Component, Slug, TextField } from 'cms-admin'
import * as React from 'react'
import { GenericContentForm, LinkForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<Slug field="link.url" drivenBy="title" prefix="/" label="URL" />
			<GenericContentForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
