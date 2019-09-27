import { SchemaDefinition as d } from '@contember/schema-definition'
import { Menu } from './Menu'
import { SiteLocale } from './Site'

export class HeaderLocale {
	locale = d
		.oneHasOne(SiteLocale, 'header')
		.notNull()
		.cascadeOnDelete()
	leftMenu = d.oneHasOne(Menu).notNull()
	rightMenu = d.oneHasOne(Menu).notNull()
}
