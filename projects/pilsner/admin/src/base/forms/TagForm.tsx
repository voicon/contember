import { Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LinkUrlField } from '../components'
import { SeoForm } from './'

export const TagForm = Component(
	() => (
		<>
			<TextField name="name" label="Name" />
			<LinkUrlField drivenBy="name" softPrefix="tag/" />
			<SeoForm />
		</>
	),
	'TagForm',
)
