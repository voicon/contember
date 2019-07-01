import { Image } from './'
import { SchemaDefinition as d } from 'cms-api'

export class Content {
	blocks: d.OneHasManyDefinition = d.oneHasMany(ContentBlock, 'content')
}

export const ContentBlockType = d.createEnum(
	'frontTextBox',
	'frontHalfImageLight',
	'frontHalfImageLeft',
	'frontHalfImageRight',
	'frontCarousel',
	'frontDesktopGallery',
	'frontPhoneGallery',
	'frontPhotoBoxLeft',
	'frontPhotoBoxRight',
	'frontLargeImage',
	'frontLargeImageWithTextBox',
	'contentTextSection',
	'contentImage',
	'contentHtml'
)

export class ContentBlock {
	content = d
		.manyHasOne(Content, 'blocks')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	type = d.enumColumn(ContentBlockType)

	title = d.stringColumn()
	subtitle = d.stringColumn()
	text = d.stringColumn()
	url = d.stringColumn()

	image = d.manyHasOne(Image).setNullOnDelete()
	gallery = d.oneHasOne(ContentGallery).setNullOnDelete()
}

export class ContentGallery {
	images = d.oneHasMany(ContentImage, 'gallery')
}

export class ContentImage {
	gallery: d.ManyHasOneDefinition = d
		.manyHasOne(ContentGallery, 'images')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()

	caption = d.stringColumn()
	image = d.manyHasOne(Image).cascadeOnDelete()
}
