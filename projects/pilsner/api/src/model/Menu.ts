import { SchemaDefinition as d } from 'cms-api'
import { Linkable, Site } from './'

export class Menu {
	site = d
		.oneHasOne(Site, 'menu')
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
	caption = d.stringColumn()
	link = d
		.manyHasOne(Linkable)
		.notNull()
		.cascadeOnDelete()
	showCategories = d.boolColumn().notNull()
}
