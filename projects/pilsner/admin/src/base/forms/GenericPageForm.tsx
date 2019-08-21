import { Component, SlugField, TextField } from 'cms-admin'
import * as React from 'react'
import { getUrlFormatter } from '../utils/getUrlFormatter'
import { GenericContentForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<TextField name="title" label="Title" />
			<SlugField name="link.url" drivenBy="title" format={getUrlFormatter('/')} label="URL" />
			<GenericContentForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
