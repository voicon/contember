import { CheckboxList, Component, Slug, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LocationField } from '../components'
import { AttributesForm, GenericContentForm, SeoForm } from './'

export const PubForm = Component(
	() => (
		<>
			<IsPublishedField />
			<TextField name="name" label="Name" />
			<Slug field="link.url" drivenBy="name" prefix="/pubs/" label="URL" />
			<TextField name="subtitle" label="Subtitle" />

			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextField name="locationText" label="Location" />
			<LocationField name="location" label="Location" />
			<TextAreaField name="perex" label="Perex" />
			<AttributesForm field={'attributeSet'} />
			<GenericContentForm />
			<CheckboxList name="tags" options={`Tag[site.slug = $site].name`} label="Tags" />

			<SeoForm />
		</>
	),
	'PubForm',
)
