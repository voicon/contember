import { Site, Linkable, Seo } from './'
import { SchemaDefinition as d } from 'cms-api'

export class Tag {
	site = d
		.manyHasOne(Site, 'tags')
		.cascadeOnDelete()
		.notNull()
	link = d.oneHasOneInversed(Linkable, 'tag').notNull()
	seo = d.oneHasOne(Seo).notNull()

	name = d.stringColumn().notNull()
}
