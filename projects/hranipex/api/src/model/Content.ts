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
	'gridItem',
	'circleList',
	'circleListItem',
	'squareList',
	'squareListItem',
	'timeline',
	'timelineItem',
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

	childContent = d.oneHasOne(Content)
}
