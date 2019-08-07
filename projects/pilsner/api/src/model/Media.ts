import { SchemaDefinition as d } from 'cms-api'

export class Image {
	url = d.stringColumn().notNull()
	phoneUrl = d.stringColumn()
}
