import { MultiEditPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

export const TranslationSetEditPage = (
	<MultiEditPage
		pageName={'translationSetEdit'}
		entity={'Translatable'}
		rendererProps={{ title: 'String translations', enableAddingNew: true, enableUnlink: true }}
	>
		<TextField name={'identifier'} label={'translatable'} />
		<ToOne field="translations(set.id=$id)">
			<TextField name={'value'} label={'Translation'} allowNewlines={true} />
		</ToOne>
	</MultiEditPage>
)
