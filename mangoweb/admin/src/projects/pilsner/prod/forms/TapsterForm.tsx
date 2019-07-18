import { CheckboxList, Component, SelectField, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'
import { AttributesForm, GenericContentForm } from './'

export const TapsterForm = Component(
	() => (
		<>
			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextField name="name" label="Name" />
			<TextField name="subtitle" label="Subtitle" />
			<TextField name="locationText" label="Location" />
			<SelectField name={'location'} label={'Location'} options={'Location.name'} />
			<TextAreaField name="perex" label="Perex" />
			<AttributesForm field={'attributeSet'} />
			<GenericContentForm />
			<CheckboxList name="tags" options="Tag[site.slug = $site].name" label="Tags" />
		</>
	),
	'TapsterForm'
)
