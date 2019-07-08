import { AttributeSet, Content, Image, Linkable, Location, Seo, Site, Tag } from './'
import { SchemaDefinition as d } from 'cms-api'

export class Pub {
	site = d
		.manyHasOne(Site, 'pubs')
		.cascadeOnDelete()
		.notNull()
	link = d.oneHasOneInversed(Linkable, 'pub').notNull()
	seo = d.oneHasOne(Seo).notNull()

	publishedAt = d.dateTimeColumn()

	headerImage = d.manyHasOne(Image)
	listingImage = d.manyHasOne(Image)
	imageDescription = d.stringColumn()

	name = d.stringColumn().notNull()
	subtitle = d.stringColumn().notNull()
	locationText = d.stringColumn().notNull()

	perex = d.stringColumn().notNull()
	content = d.oneHasOne(Content).notNull()
	attributeSet = d.oneHasOne(AttributeSet).notNull()
	location = d.manyHasOne(Location, 'pubs')
	tags = d.manyHasMany(Tag)
}
