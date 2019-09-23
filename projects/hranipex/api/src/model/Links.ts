import { SchemaDefinition as d } from '@contember/schema-definition'
import { Site } from './Site'

export const LinkType = d.createEnum('predefined', 'external', 'internal')

export class Link {
	type = d.enumColumn(LinkType).notNull()
	// mainly for predefined
	description = d.stringColumn()

	// predefined
	destination = d.stringColumn()
	parameters = d.stringColumn()

	// external
	url = d.stringColumn()

	// internal
	linkable = d.oneHasOne(Linkable).cascadeOnDelete()
}

export class Linkable {
	site = d
		.manyHasOne(Site)
		.notNull()
		.cascadeOnDelete()
	url = d.stringColumn().notNull()
}
