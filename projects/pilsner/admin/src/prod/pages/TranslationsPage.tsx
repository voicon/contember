import { MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entity={'Translatable'}
		rendererProps={{ title: 'String translations', enableAddingNew: false }}
	>
		<TextField label="Identifier" name="identifier" />
		<TextField label="Translation" name={`translations(site.slug=$site).value`} />
	</MultiEditPage>
)
