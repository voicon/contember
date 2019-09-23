import { Field, MultiEditPage, SelectField, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { getCountryFlag, getLocaleFlag } from '../utils'

export const SitesPage = (
	<MultiEditPage
		entity="Site"
		pageName="sites"
		rendererProps={{
			title: 'Sites',
			sortable: {
				sortBy: 'order',
			},
		}}
	>
		<TextField label="Code" name="code" />
		<Field<string | null> name={'code'}>
			{({ data }) => (data.currentValue ? getCountryFlag(data.currentValue) : null)}
		</Field>
		<h3>Locales</h3>
		<SortableRepeater field="locales" sortBy={'order'}>
			<TextField label="Code" name="code" />
			<Field<string | null> name={'code'}>
				{({ data }) => (data.currentValue ? getLocaleFlag(data.currentValue) : null)}
			</Field>
			<SelectField label="Translation set" name="translationSet" options="TranslationSet.name" />
		</SortableRepeater>
	</MultiEditPage>
)
