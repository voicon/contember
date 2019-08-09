import { Image } from './'
import { SchemaDefinition as d } from '@contember/schema-definition'

export class Seo {
	title = d.stringColumn()
	description = d.stringColumn()
	ogImage = d.oneHasOne(Image).cascadeOnDelete()
	ogTitle = d.stringColumn()
	ogDescription = d.stringColumn()
}
