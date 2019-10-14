import {
	DimensionsSwitcher,
	EntityListDataProvider,
	FieldText,
	GenericPage,
	Literal,
	MultiEditRenderer,
	SideDimensions,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'

export const translationStringsPage = (
	<GenericPage pageName={'translationStrings'}>
		<DimensionsSwitcher
			optionEntities="TranslationSet"
			orderBy={[{ name: new Literal('asc') }]}
			dimension="translationSet"
			labelField="name"
			slugField="id"
			maxItems={10}
		/>
		<EntityListDataProvider entityName={'Translatable'} orderBy={[{ identifier: new Literal('asc') }]}>
			<MultiEditRenderer title="String translations" enableAddingNew={true} enableUnlink={true}>
				<TextField name={'identifier'} label={'translatable'} />
				<SideDimensions dimension="translationSet" variableName="currentTranslationSet" variables={() => ({})}>
					<ToOne field={'translations(set.id=$currentTranslationSet)'}>
						<TextField name={'value'} label={<FieldText name={'set.name'} />} allowNewlines={true} />
					</ToOne>
				</SideDimensions>
			</MultiEditRenderer>
		</EntityListDataProvider>
	</GenericPage>
)
