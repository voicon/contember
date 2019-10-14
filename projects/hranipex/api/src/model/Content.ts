import { Image, Link, Site, Video } from './'
import { SchemaDefinition as d } from '@contember/schema-definition'

export class Content {
	site = d
		.manyHasOne(Site)
		.notNull()
		.cascadeOnDelete()
	blocks: d.OneHasManyDefinition = d.oneHasMany(ContentBlock, 'content')
}

export const ContentBlockType = d.createEnum(
	'text',
	'image',
	'video',
	'actionButton',
	'textBox',
	'toc',
	'imageBoxLeft',
	'imageBoxRight',
	'imageBoxCircleLeft',
	'grid',
	'circleList',
	'squareList',
	'timeline',
)

export class ContentBlock {
	content = d
		.manyHasOne(Content, 'blocks')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	type = d.enumColumn(ContentBlockType).notNull()

	tocCaption = d.stringColumn()

	title = d.stringColumn()
	subtitle = d.stringColumn()
	link = d.manyHasOne(Link).setNullOnDelete()

	text = d.stringColumn()
	image = d.manyHasOne(Image).setNullOnDelete()
	video = d.manyHasOne(Video).setNullOnDelete()

	buttonCaption = d.stringColumn()
	buttonLink = d.manyHasOne(Link).setNullOnDelete()

	children = d.oneHasOne(ContentBlockChildren, 'block')
}

export class ContentBlockChildren {
	block: d.OneHasOneInversedDefinition = d.oneHasOneInversed(ContentBlock, 'children').notNull()
	items: d.OneHasManyDefinition = d.oneHasMany(ContentBlockChildItem, 'parent')
}

export class ContentBlockChildItem {
	parent = d
		.manyHasOne(ContentBlockChildren, 'items')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	title = d.stringColumn()
	text = d.stringColumn()
	image = d.manyHasOne(Image).setNullOnDelete()
	buttonCaption = d.stringColumn()
	buttonLink = d.manyHasOne(Link).setNullOnDelete()
}
