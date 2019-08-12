import { Component, SlugField, TextField } from 'cms-admin'
import * as React from 'react'
import { SeoForm } from './'

export const CategoryForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<SlugField field="link.url" drivenBy="name" prefix="/category/" label="URL" />
			<SeoForm />
		</>
	),
	'CategoryForm',
)
