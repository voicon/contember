import * as React from 'react'
import { Component, TextField } from 'cms-admin'
import { LinkForm, SeoForm } from './'

export const CategoryForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<LinkForm />
			<SeoForm />
		</>
	),
	'CategoryForm'
)
