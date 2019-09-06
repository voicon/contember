import { CheckboxList, Component, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LinkUrlField } from '../components'
import { GenericContentForm, SeoForm } from './'

export const PostForm = Component(
	() => (
		<>
			<TextField name="title" size="large" label={'Title'} />
			<LinkUrlField drivenBy="title" softPrefix="stories/" />
			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextAreaField name="perex" label="Perex" />
			<GenericContentForm />
			<CheckboxList name="tags" options={`Tag[site.slug = $site].name`} label="Tags" />
			<CheckboxList name="categories" options={`Category[site.slug = $site].name`} label="Categories" />
			<SeoForm />
		</>
	),
	'PostForm',
)

export const PostFormSide = Component(() => <IsPublishedField />, 'PostFormSide')
