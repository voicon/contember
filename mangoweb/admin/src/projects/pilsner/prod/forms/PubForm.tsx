import { CheckboxList, Component, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocationField } from '../components'
import { AttributesForm, GenericContentForm, LinkForm, SeoForm } from './'

export const PubForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<TextField name="subtitle" label="Subtitle" />
			<LinkForm />

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
	'PubForm'
)
