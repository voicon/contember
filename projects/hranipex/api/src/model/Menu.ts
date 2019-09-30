import { SchemaDefinition as d } from '@contember/schema-definition'
import { Link, Site } from './'

export class Menu {
	site = d
		.manyHasOne(Site)
		.cascadeOnDelete()
		.notNull()
	items: d.OneHasManyDefinition = d.oneHasMany(MenuItem, 'menu')
}

export class MenuItem {
	menu = d
		.manyHasOne(Menu, 'items')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	title = d.stringColumn()
	link = d
		.manyHasOne(Link)
		.notNull()
		.cascadeOnDelete()
}
