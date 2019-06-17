import { Content, Image, Linkable, Location, Seo, Site, Tag } from './'
import { SchemaDefinition as d } from 'cms-api'
import { Attribute } from './Attribute'

export class Pub {
	site = d
		.manyHasOne(Site, 'pubs')
		.cascadeOnDelete()
		.notNull()
	link = d.oneHasOneInversed(Linkable, 'pub').notNull()
	seo = d.oneHasOne(Seo).notNull()

	headerImage = d.manyHasOne(Image)
	listingImage = d.manyHasOne(Image)
	imageDescription = d.stringColumn()

	name = d.stringColumn().notNull()
	subtitle = d.stringColumn().notNull()
	locationText = d.stringColumn()

	perex = d.stringColumn()
	content = d.oneHasOne(Content).notNull()
	attributes = d.manyHasMany(Attribute)
	location = d.manyHasOne(Location)
	tags = d.manyHasMany(Tag)
}
