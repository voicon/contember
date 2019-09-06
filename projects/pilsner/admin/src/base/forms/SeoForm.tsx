import { Component, TextAreaField, TextField, ToOne, Box } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export interface SeoFormProps {}

export const SeoForm = Component<SeoFormProps>(
	props => (
		<Box heading="Page SEO">
			<ToOne field="seo">
				<TextField name="title" label="Title" />
				<TextAreaField name="description" label="Description" />
				<ImageField name="ogImage" label="OG image" single={true} />
				<TextField name="ogTitle" label="OG title" />
				<TextAreaField name="ogDescription" label="OG description" />
			</ToOne>
		</Box>
	),
	'SeoForm',
)
