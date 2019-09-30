import { SchemaDefinition as d } from '@contember/schema-definition'

export class Image {
	url = d.stringColumn().notNull()
}

export class Video {
	url = d.stringColumn().notNull()
}
