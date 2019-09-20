import { Field, MultiEditPage, SelectField, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'

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
			{({ data }) =>
				data.currentValue ? (
					<img
						src={'https://cz-hranipex.mgw.cz/assets/images/flags-country/' + data.currentValue + '.svg'}
						style={{ width: '20px' }}
					/>
				) : null
			}
		</Field>
		<h3>Locales</h3>
		<SortableRepeater field="locales" sortBy={'order'}>
			<TextField label="Code" name="code" />
			<Field<string | null> name={'code'}>
				{({ data }) =>
					data.currentValue ? (
						<img
							src={'https://cz-hranipex.mgw.cz/assets/images/flags-locale/' + data.currentValue + '.svg'}
							style={{ width: '20px' }}
						/>
					) : null
				}
			</Field>
			<SelectField label="Translation set" name="translationSet" options="TranslationSet.name" />
		</SortableRepeater>
	</MultiEditPage>
)
