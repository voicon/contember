import { Box, Component, SlugField, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LocaleSideDimension } from '../components'
import { SeoForm } from './'

export const PostForm = Component(
	() => (
		<LocaleSideDimension>
			<Box>
				<TextField name="title" size="large" label={'Title'} />
				<SlugField drivenBy="title" label={'Slug'} name={'slug'} />
				<ImageField name={'image'} label={'Image'} />
				<TextAreaField name="perex" label="Perex" />
			</Box>
			<SeoForm />
		</LocaleSideDimension>
	),
	'PostForm',
)

export const PostFormSide = Component(() => <IsPublishedField />, 'PostFormSide')
