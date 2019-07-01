import { AttributeSet, Content, Image, Linkable, Location, Seo, Site, Tag } from '../model'
import { SchemaDefinition as d } from 'cms-api'

export class Tapster {
	site = d
		.manyHasOne(Site, 'tapsters')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'tapster').notNull()
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
	location = d.manyHasOne(Location)
	tags = d.manyHasMany(Tag)
}
