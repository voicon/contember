import { Component, SlugField, TextField } from 'cms-admin'
import * as React from 'react'
import { getUrlFormatter } from '../utils/getUrlFormatter'
import { SeoForm } from './'

export const TagForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<SlugField field="link.url" drivenBy="name" format={getUrlFormatter('/tag/')} label="URL" />
			<SeoForm />
		</>
	),
	'TagForm',
)
