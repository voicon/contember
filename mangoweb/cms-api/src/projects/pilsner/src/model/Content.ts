import { Image } from './'
import { SchemaDefinition as d } from 'cms-api'

export class Content {
	blocks: d.OneHasManyDefinition = d.oneHasMany(ContentBlock, 'content')
}

export const ContentBlockType = d.createEnum(
	'frontTextBox',
	'frontHalfImageLeft',
	'frontHalfImageRight',
	'frontCarousel',
	'frontGallery',
	'frontPhotoBox',
	'frontLargeImageWithTextBox',
	'contentTextSection',
	'contentImage'
)

export class ContentBlock {
	content = d.manyHasOne(Content, 'blocks')
	order = d.intColumn().notNull()
	type = d.enumColumn(ContentBlockType)

	title = d.stringColumn()
	subtitle = d.stringColumn()
	text = d.stringColumn()
	url = d.stringColumn()

	image = d.manyHasOne(ContentImage).onDelete(d.OnDelete.setNull)
	gallery = d.oneHasOne(ContentGallery).onDelete(d.OnDelete.setNull)
}

export class ContentGallery {
	type = d.stringColumn()
	images = d.oneHasMany(ContentImage, 'gallery')
}

export class ContentImage {
	type = d.stringColumn()
	gallery: d.ManyHasOneDefinition = d.manyHasOne(ContentGallery, 'images').cascadeOnDelete()
	caption = d.stringColumn()
	image = d.manyHasOne(Image).cascadeOnDelete()
}
