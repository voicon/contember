import { SchemaDefinition as d } from '@contember/schema-definition'
import { SiteLocale } from './Site'
import { Menu } from './Menu'

export class FooterLocale {
	locale = d
		.oneHasOne(SiteLocale, 'footer')
		.notNull()
		.cascadeOnDelete()
	columns = d.oneHasMany(FooterColumn, 'footer')
}

export class FooterColumn {
	footer: d.ManyHasOneDefinition = d
		.manyHasOne(FooterLocale, 'columns')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	title = d.stringColumn()
	menu = d
		.oneHasOne(Menu)
		.notNull()
		.cascadeOnDelete()
}
