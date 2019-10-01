import { Box, CheckboxList, Component, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LinkUrlField, LocationField } from '../components'
import { AttributesForm, GenericContentForm, SeoForm } from './'

export const TapsterForm = Component(
	() => (
		<>
			<Box>
				<TextField name="name" label="Name" />
				<LinkUrlField drivenBy="name" softPrefix="tapsters/" />
				<TextField name="subtitle" label="Subtitle" />
			</Box>

			<Box>
				<ImageField name={'headerImage'} label={'Header image'} />
				<ImageField name={'listingImage'} label={'Listing image'} />
				<TextField name="imageDescription" label="Image description" />
			</Box>

			<Box heading="Location">
				<TextField name="locationText" label="Text" />
				<LocationField name="location" label="Location" />
			</Box>

			<Box>
				<TextAreaField name="perex" label="Perex" />
			</Box>

			<AttributesForm field={'attributeSet'} />

			<GenericContentForm />

			<Box>
				<CheckboxList name="tags" options="Tag[site.slug = $site].name" label="Tags" />
			</Box>

			<SeoForm />
		</>
	),
	'TapsterForm',
)

export const TapsterFormSide = Component(() => <IsPublishedField />, 'TapsterFormSide')
