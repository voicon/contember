import { SchemaDefinition as d } from '@contember/schema-definition'
import { Image, Link, Seo, Site, SiteLocale } from './'
import { IconShape } from './Misc'

export class FrontPage {
	site = d.oneHasOne(Site, 'frontPage').notNull()
	locales = d.oneHasMany(FrontPageLocale, 'root')
}

export class FrontPageLocale {
	root: d.ManyHasOneDefinition = d
		.manyHasOne(FrontPage, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d
		.oneHasOne(SiteLocale, 'frontPage')
		.cascadeOnDelete()
		.notNull()

	seo = d.oneHasOne(Seo).notNull()

	introBlock = d.oneHasOne(FrontPageContentBlock).notNull()

	productPromoItems = d.oneHasMany(FrontPageProductPromoItem, 'frontPage')

	contentPromoBlock = d.oneHasOne(FrontPageContentBlock).notNull()
	contentPromoItems = d.oneHasMany(FrontPageContentPromoItem, 'frontPage')

	aboutCompanyBlock = d.oneHasOne(FrontPageContentBlock).notNull()
	aboutCompanyColumns = d.oneHasMany(FrontPageAboutCompanyColumn, 'frontPage')

	references = d.oneHasMany(FrontPageReference, 'frontPage')

	joinUsBlock = d.oneHasOne(FrontPageContentBlock).notNull()

	newsletterTitle = d.stringColumn()
}

export class FrontPageContentBlock {
	title = d.stringColumn()
	subtitle = d.stringColumn()
	text = d.stringColumn()
	image = d.manyHasOne(Image)
	link = d.manyHasOne(Link).setNullOnDelete()
	buttonCaption = d.stringColumn()
	buttonLink = d.manyHasOne(Link).setNullOnDelete()
}

export class FrontPageAboutCompanyColumn {
	frontPage: d.ManyHasOneDefinition = d
		.manyHasOne(FrontPageLocale, 'aboutCompanyColumns')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	title = d.stringColumn()
	text = d.stringColumn()
}

export class FrontPageProductPromoItem {
	frontPage: d.ManyHasOneDefinition = d
		.manyHasOne(FrontPageLocale, 'productPromoItems')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	shape = d.manyHasOne(IconShape).setNullOnDelete()
	title = d.stringColumn()
	image = d.manyHasOne(Image)
	link = d.manyHasOne(Link).setNullOnDelete()
}

export class FrontPageContentPromoItem {
	frontPage: d.ManyHasOneDefinition = d
		.manyHasOne(FrontPageLocale, 'contentPromoItems')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	title = d.stringColumn()
	subtitle = d.stringColumn()
	image = d.manyHasOne(Image)
	buttonCaption = d.stringColumn()
	link = d.manyHasOne(Link).setNullOnDelete()
}

export class FrontPageReference {
	frontPage: d.ManyHasOneDefinition = d
		.manyHasOne(FrontPageLocale, 'references')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()

	quote = d.stringColumn()
	name = d.stringColumn()
	company = d.stringColumn()
	image = d.manyHasOne(Image)
}
