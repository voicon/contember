import { Box, Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LinkUrlField } from '../components'
import { GenericContentForm, SeoForm } from './'

export const GenericPageForm = Component(
	() => (
		<>
			<Box>
				<TextField name="title" label="Title" size="large" />
				<LinkUrlField drivenBy="title" />
			</Box>
			<GenericContentForm />
			<SeoForm />
		</>
	),
	'GenericPageForm',
)
