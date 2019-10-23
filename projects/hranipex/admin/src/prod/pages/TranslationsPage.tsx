import { FieldText, Literal, MultiEditPage, PageLinkButton, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entityName="Translatable"
		orderBy={[{ identifier: new Literal('asc') }]}
		rendererProps={{
			title: 'String translations',
			enableAddingNew: false,
			enableRemove: false,
			beforeContent: (
				<>
					<PageLinkButton to="translationSets">Edit translation sets</PageLinkButton>
					<PageLinkButton to="translationStrings">Edit strings</PageLinkButton>
				</>
			),
		}}
	>
		<FieldText name={'identifier'} />

		<LocaleSideDimension toOneField="translations(set.locale.code=$currentLocaleCode, set.locale.site.code=$site)">
			<TextField name={'value'} label={'Translation'} allowNewlines={true} />
		</LocaleSideDimension>
	</MultiEditPage>
)
