import * as React from 'react'
import { Component, TextAreaField, TextField } from 'cms-admin'
import { ImageField } from '../components'
import { GenericContentForm, LinkForm, SeoForm } from './'

export const PostForm = Component(
	() => (
		<>
			<TextField name="title" large={true} label={'Title'} />
			<LinkForm />
			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextAreaField name="perex" label="Perex" />
			<GenericContentForm />

			<SeoForm />
		</>
	),
	'PostForm'
)
