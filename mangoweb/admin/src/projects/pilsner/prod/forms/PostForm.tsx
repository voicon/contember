import * as React from 'react'
import { Component, TextAreaField, TextField } from 'cms-admin'
import { ImageField } from '../components'
import { GenericContentForm, LinkForm, SeoForm } from './'

export const PostForm = Component(
	() => (
		<>
			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextField name="title" label="Title" />
			<TextAreaField name="perex" label="Perex" />
			<LinkForm />
			<SeoForm />
			<GenericContentForm />
		</>
	),
	'PostForm'
)
