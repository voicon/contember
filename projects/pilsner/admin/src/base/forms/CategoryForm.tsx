import { Box, Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LinkUrlField } from '../components'
import { SeoForm } from './'

export const CategoryForm = Component(
	() => (
		<>
			<Box>
				<TextField name="name" label="Name" size="large" />
				<LinkUrlField drivenBy="name" softPrefix="category/" />
			</Box>
			<SeoForm />
		</>
	),
	'CategoryForm',
)
