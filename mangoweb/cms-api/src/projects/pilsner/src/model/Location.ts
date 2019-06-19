import { SchemaDefinition as d } from 'cms-api'
import { Site } from './Site'

export class Location {
	site = d
		.manyHasOne(Site, 'locations')
		.cascadeOnDelete()
		.notNull()
	name = d.stringColumn().notNull()
	altName = d.stringColumn()
	children: d.OneHasManyDefinition = d.oneHasMany(Location, 'parent')
	parent: d.ManyHasOneDefinition = d.manyHasOne(Location, 'children')
}
