import { Box, CheckboxList, Component, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LinkUrlField } from '../components'
import { GenericContentForm, SeoForm } from './'

export const PostForm = Component(
	() => (
		<>
			<Box>
				<TextField name="title" size="large" label={'Title'} />
				<LinkUrlField drivenBy="title" softPrefix="stories/" />
			</Box>
			<Box>
				<ImageField name={'headerImage'} label={'Header image'} />
				<ImageField name={'listingImage'} label={'Listing image'} />
				<TextField name="imageDescription" label="Image description" />
			</Box>
			<Box>
				<TextAreaField name="perex" label="Perex" />
			</Box>
			<GenericContentForm />
			<Box>
				<CheckboxList name="tags" options={`Tag[site.slug = $site].name`} label="Tags" />
			</Box>
			<Box>
				<CheckboxList name="categories" options={`Category[site.slug = $site].name`} label="Categories" />
			</Box>
			<SeoForm />
		</>
	),
	'PostForm',
)

export const PostFormSide = Component(() => <IsPublishedField />, 'PostFormSide')
