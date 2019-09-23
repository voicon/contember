import { FieldText, MultiEditPage, PageLinkButton, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimensionBase } from '../components'

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entity={'Translatable'}
		rendererProps={{
			title: 'String translations',
			enableAddingNew: false,
			enableUnlink: false,
			beforeContent: (
				<>
					<PageLinkButton to="translationSets">Edit translation sets</PageLinkButton>
				</>
			),
		}}
	>
		<FieldText name={'identifier'} />

		<LocaleSideDimensionBase>
			<ToOne field="translations(set.locale.code=$currentLocaleCode, set.locale.site.code=$site)">
				<TextField name={'value'} label={'Translation'} allowNewlines={true} />
			</ToOne>
		</LocaleSideDimensionBase>
	</MultiEditPage>
)
