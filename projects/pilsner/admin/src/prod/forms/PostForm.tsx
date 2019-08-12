import { CheckboxList, Component, Slug, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField } from '../components'
import { GenericContentForm, SeoForm } from './'

export const PostForm = Component(
	() => (
		<>
			<IsPublishedField />
			<TextField name="title" large={true} label={'Title'} />
			<Slug field="link.url" drivenBy="title" prefix="/stories/" label="URL" />
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
