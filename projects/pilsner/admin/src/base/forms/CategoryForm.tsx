import { Component, SlugField, TextField } from 'cms-admin'
import * as React from 'react'
import { getUrlFormatter } from '../utils/getUrlFormatter'
import { SeoForm } from './'

export const CategoryForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<SlugField name="link.url" drivenBy="name" format={getUrlFormatter('/category/')} label="URL" />
			<SeoForm />
		</>
	),
	'CategoryForm',
)
