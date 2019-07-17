import * as React from 'react'
import {
	CheckboxList,
	Component,
	Environment,
	EnvironmentContext,
	SelectField,
	TextAreaField,
	TextField
} from 'cms-admin'
import { ImageField } from '../components'
import { AttributesForm, GenericContentForm, LinkForm, SeoForm } from './'
import { getSite } from '../utils/environment'

interface TapsterFormProps {}

const TapsterFormInner = (props: TapsterFormProps, env: Environment) => (
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
		<CheckboxList name="tags" options={`Tag[site.slug = '${getSite(env)}'].name`} label="Tags" />

		<LinkForm />
		<SeoForm />
	</>
)

export const TapsterForm = Component<TapsterFormProps>(
	props => <EnvironmentContext.Consumer>{env => TapsterFormInner(props, env)}</EnvironmentContext.Consumer>,
	'TapsterForm',
	TapsterFormInner
)
