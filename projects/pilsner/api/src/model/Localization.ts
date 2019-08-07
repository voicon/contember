import { SchemaDefinition as d } from 'cms-api'
import { Site } from './Site'

export class Translatable {
	identifier = d
		.stringColumn()
		.notNull()
		.unique()
	translations: d.OneHasManyDefinition = d.oneHasMany(Translation, 'translatable')
}

@d.Unique('translatable', 'site')
export class Translation {
	translatable = d
		.manyHasOne(Translatable, 'translations')
		.cascadeOnDelete()
		.notNull()
	site = d
		.manyHasOne(Site, 'translations')
		.notNull()
		.cascadeOnDelete()
	value = d.stringColumn().notNull()
}
