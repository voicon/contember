import { SchemaDefinition as d } from '@contember/schema-definition'
import { Content, Seo, Site, SiteLocale } from './'

export class ContentPage {
	site = d
		.manyHasOne(Site, 'pages')
		.notNull()
		.cascadeOnDelete()
	locales = d.oneHasMany(ContentPageLocale, 'root')
}

@d.Unique('root', 'locale')
export class ContentPageLocale {
	root: d.ManyHasOneDefinition = d
		.manyHasOne(ContentPage, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d
		.manyHasOne(SiteLocale, 'pages')
		.cascadeOnDelete()
		.notNull()

	seo = d.oneHasOne(Seo).notNull()

	title = d.stringColumn().notNull()
	content = d.oneHasOne(Content).notNull()
}
