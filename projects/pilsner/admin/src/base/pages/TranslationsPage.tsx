import { FieldText, MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entityName={'Translatable'}
		rendererProps={{ title: 'String translations', enableAddingNew: false, enableRemove: false }}
	>
		<TextField
			label={
				<>
					Translation of "<FieldText name="identifier" />"
				</>
			}
			name={`translations(site.slug=$site).value`}
			allowNewlines={true}
		/>
	</MultiEditPage>
)
