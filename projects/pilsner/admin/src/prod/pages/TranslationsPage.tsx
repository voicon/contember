import { Component, FieldText, MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

// TODO This is a terrible, TERRIBLE hack.
const TranslationLabel = Component(
	() => (
		<>
			Translation of "<FieldText name="translatable.identifier" />"
		</>
	),
	() => <FieldText name="translations(site.slug=$site).translatable.identifier" />,
)

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entity={'Translatable'}
		rendererProps={{ title: 'String translations', enableAddingNew: false, enableUnlink: false }}
	>
		<TextField label={<TranslationLabel />} name={`translations(site.slug=$site).value`} allowNewlines={true} />
	</MultiEditPage>
)
