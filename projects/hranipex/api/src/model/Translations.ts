import { SchemaDefinition as d } from '@contember/schema-definition'
import { SiteLocale } from './Site'

export class Translatable {
	identifier = d
		.stringColumn()
		.notNull()
		.unique()
	translations: d.OneHasManyDefinition = d.oneHasMany(Translation, 'translatable')
}

export class TranslationSet {
	name = d.stringColumn().notNull()
	translations: d.OneHasManyDefinition = d.oneHasMany(Translation, 'set')
	fallback: d.ManyHasOneDefinition = d.manyHasOne(TranslationSet).setNullOnDelete()
	locale: d.OneHasOneInversedDefinition = d.oneHasOneInversed(SiteLocale, 'translationSet')
}

@d.Unique('translatable', 'set')
export class Translation {
	translatable = d
		.manyHasOne(Translatable, 'translations')
		.cascadeOnDelete()
		.notNull()
	set = d
		.manyHasOne(TranslationSet, 'translations')
		.notNull()
		.cascadeOnDelete()

	value = d.stringColumn().notNull()
}
