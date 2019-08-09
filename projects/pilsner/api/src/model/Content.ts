import { FrontPage, GenericPage, Image, Post, Pub, Tapster } from './'
import { SchemaDefinition as d } from '@contember/schema-definition'

export class Content {
	blocks: d.OneHasManyDefinition = d.oneHasMany(ContentBlock, 'content')

	tapster: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Tapster, 'content')
	pub: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Pub, 'content')
	genericPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(GenericPage, 'content')
	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPage, 'content')
	post: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Post, 'content')
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
	'contentGallery',
	'contentHtml',
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
	buttonCaption = d.stringColumn()

	image = d.manyHasOne(Image).setNullOnDelete()
	gallery = d.oneHasOne(ContentGallery, 'block').setNullOnDelete()
}

export class ContentGallery {
	block: d.OneHasOneInversedDefinition = d.oneHasOneInversed(ContentBlock, 'gallery')
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
