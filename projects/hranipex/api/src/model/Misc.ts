import { SchemaDefinition as d } from '@contember/schema-definition'

export class IconShape {
	identifier = d
		.stringColumn()
		.unique()
		.notNull()
}
