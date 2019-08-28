import { AttributeSet, Content, Image, Linkable, Location, Post, Seo, Site, Tag } from '../model'
import { SchemaDefinition as d } from '@contember/schema-definition'

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
	content = d.oneHasOne(Content, 'tapster').notNull()
	attributeSet = d.oneHasOne(AttributeSet, 'tapster').notNull()
	location = d.manyHasOne(Location, 'tapsters')
	tags = d.manyHasMany(Tag)
}

export class TapsterSet {
	tapsters = d.oneHasMany(TapsterSetEntry, 'set')
}

export class TapsterSetEntry {
	set: d.ManyHasOneDefinition = d
		.manyHasOne(TapsterSet)
		.notNull()
		.cascadeOnDelete()
	tapster = d
		.manyHasOne(Tapster)
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
}
