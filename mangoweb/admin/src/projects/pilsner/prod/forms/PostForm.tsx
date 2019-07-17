import * as React from 'react'
import { CheckboxList, Component, Environment, EnvironmentContext, TextAreaField, TextField } from 'cms-admin'
import { ImageField } from '../components'
import { GenericContentForm, LinkForm, SeoForm } from './'
import { getSite } from '../utils/environment'

const PostFormInner = (env: Environment) => (
	<>
		<TextField name="title" large={true} label={'Title'} />
		<LinkForm />
		<ImageField name={'headerImage'} label={'Header image'} />
		<ImageField name={'listingImage'} label={'Listing image'} />
		<TextField name="imageDescription" label="Image description" />

		<TextAreaField name="perex" label="Perex" />
		<GenericContentForm />
		<CheckboxList name="tags" options={`Tag[site.slug = '${getSite(env)}'].name`} label="Tags" />
		<CheckboxList name="categories" options={`Category[site.slug = '${getSite(env)}'].name`} label="Categories" />
		<SeoForm />
	</>
)

export const PostForm = Component(
	() => <EnvironmentContext.Consumer>{PostFormInner}</EnvironmentContext.Consumer>,
	'PostForm',
	(props, env) => PostFormInner(env)
)
