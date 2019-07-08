import { SchemaDefinition as d } from 'cms-api'
import { Site } from './Site'
import { Pub } from './Pub'
import { Tapster } from './Tapster'

export class Location {
	site = d
		.manyHasOne(Site, 'locations')
		.cascadeOnDelete()
		.notNull()
	name = d.stringColumn().notNull()
	slug = d
		.stringColumn()
		.notNull()
		.unique()
	altName = d.stringColumn()
	children: d.OneHasManyDefinition = d.oneHasMany(Location, 'parent')
	parent: d.ManyHasOneDefinition = d.manyHasOne(Location, 'children').setNullOnDelete()
	pubs: d.OneHasManyDefinition = d.oneHasMany(Pub, 'location')
	tapsters: d.OneHasManyDefinition = d.oneHasMany(Tapster, 'location')
}
