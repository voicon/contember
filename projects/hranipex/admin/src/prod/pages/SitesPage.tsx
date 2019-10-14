import { Field, MultiEditPage, SelectField, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { getCountryFlag, getLocaleFlag } from '../utils'

export const SitesPage = (
	<MultiEditPage
		entityName="Site"
		pageName="sites"
		rendererProps={{
			title: 'Sites',
			sortable: {
				sortBy: 'order',
			},
		}}
	>
		<TextField
			label={
				<>
					Code
					<Field<string | null> name={'code'}>
						{({ data }) => (data.currentValue ? getLocaleFlag(data.currentValue) : null)}
					</Field>
				</>
			}
			name="code"
		/>
		<h3>Locales</h3>
		<SortableRepeater field="locales" sortBy={'order'}>
			<TextField
				label={
					<>
						Code
						<Field<string | null> name={'code'}>
							{({ data }) => (data.currentValue ? getLocaleFlag(data.currentValue) : null)}
						</Field>
					</>
				}
				name="code"
			/>

			<ToOne field={'translationSet'}>
				<TextField name={'name'} label={'Translation set description'} />
				<SelectField label="Fallback translation set" name="fallback" options="TranslationSet[locale.id=null].name" />
			</ToOne>
		</SortableRepeater>
	</MultiEditPage>
)
