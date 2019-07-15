import * as React from 'react'
import { CheckboxList, Component, SelectField, TextAreaField, TextField } from 'cms-admin'
import { AttributesForm, GenericContentForm, SeoForm, LinkForm } from './'
import { ImageField } from '../components'

interface PubFormProps {
	withLocation: boolean
}

export const PubForm = Component<PubFormProps>(
	props => (
		<>
			<ImageField name={'headerImage'} label={'Header image'} />
			<ImageField name={'listingImage'} label={'Listing image'} />
			<TextField name="imageDescription" label="Image description" />

			<TextField name="name" label="Name" />
			<TextField name="subtitle" label="Subtitle" />
			<TextField name="locationText" label="Location" />
			{props.withLocation && <SelectField name={'location'} label={'Location'} options={'Location.name'} />}
			<TextAreaField name="perex" label="Perex" />
			<AttributesForm field={'attributeSet'} />
			<GenericContentForm />
			<CheckboxList name="tags" options="Tag[site.slug = 'en'].name" label="Tags" />

			<LinkForm />
			<SeoForm />
		</>
	),
	'PubForm'
)
