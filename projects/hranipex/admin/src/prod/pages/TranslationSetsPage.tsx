import { MultiEditPage, SelectField, TextField } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components/EditButton'

export const TranslationSetsPage = (
	<MultiEditPage
		entity="TranslationSet"
		pageName="translationSets"
		rendererProps={{
			title: 'Translation sets',
		}}
	>
		<TextField label="Name" name="name" />
		<SelectField name="fallback" options="TranslationSet.name" label="Fallback" />
		<EditButton pageName={'translationSetEdit'} />
	</MultiEditPage>
)
