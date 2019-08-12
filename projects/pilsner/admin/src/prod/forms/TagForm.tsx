import { Component, Slug, TextField } from 'cms-admin'
import * as React from 'react'
import { SeoForm } from './'

export const TagForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<Slug field="link.url" drivenBy="name" prefix="/tag/" label="URL" />
			<SeoForm />
		</>
	),
	'TagForm',
)
