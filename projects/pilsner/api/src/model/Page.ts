import { SchemaDefinition as d } from 'cms-api'
import { Content, Image, Linkable, Seo, Site } from './'

export class FrontPage {
	site = d
		.oneHasOne(Site, 'frontPage')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'frontPage').notNull()
	seo = d.oneHasOne(Seo).notNull()

	headerImage = d.manyHasOne(Image)
	title = d.stringColumn().notNull()
	scrollString = d.stringColumn()
	content = d.oneHasOne(Content, 'frontPage').notNull()
}

export class BlogPage {
	site = d
		.oneHasOne(Site, 'blogPage')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'blogPage').notNull()
	seo = d.oneHasOne(Seo).notNull()
}

export class PubsPage {
	site = d
		.oneHasOne(Site, 'pubsPage')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'pubsPage').notNull()
	seo = d.oneHasOne(Seo).notNull()
	headerImage = d.manyHasOne(Image)
	title = d.stringColumn().notNull()
}

export class TapstersPage {
	site = d
		.oneHasOne(Site, 'tapstersPage')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'tapstersPage').notNull()
	seo = d.oneHasOne(Seo).notNull()
	headerImage = d.manyHasOne(Image)
	title = d.stringColumn().notNull()
}

export class GenericPage {
	site = d
		.manyHasOne(Site, 'genericPages')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'genericPage').notNull()
	seo = d.oneHasOne(Seo).notNull()

	title = d.stringColumn().notNull()
	content = d.oneHasOne(Content, 'genericPage').notNull()
}

export class PourPage {
	site = d
		.oneHasOne(Site, 'pourPage')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'pourPage').notNull()
	seo = d.oneHasOne(Seo).notNull()
}
