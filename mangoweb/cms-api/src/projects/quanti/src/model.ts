import { AllowAllPermissionFactory, SchemaBuilder } from 'cms-api'
import { Acl, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()

// Meta things
builder.enum('One', ['One'])

builder.entity('Locale', entity =>
	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('switchToLabel')
)

builder.entity('Linkable', entity =>
	entity.column('url', col =>
		col
			.type(Model.ColumnType.String)
			.notNull()
			.unique()
	)
)

builder.entity('Redirect', entity =>
	entity
		.oneHasOne('link', ref =>
			ref
				.target('Linkable')
				.inversedBy('redirect')
				.notNull()
		)
		.manyHasOne('target', ref => ref.target('Linkable').notNull())
)

builder.enum('State', ['Draft', 'ToBePublished', 'Published'])

builder.entity('Image', entity => entity.column('url'))

builder.entity('Seo', entity =>
	entity
		.column('title')
		.oneHasOne('ogImage', relation => relation.target('Image'))
		.column('description')
		.column('ogTitle')
		.column('ogDescription')
)

// Reusable
builder.entity('ImageGrid', entity =>
	entity
		.manyHasOne('imagePosition1', ref => ref.target('Image'))
		.manyHasOne('imagePosition2', ref => ref.target('Image'))
		.manyHasOne('imagePosition3', ref => ref.target('Image'))
		.manyHasOne('imagePosition4', ref => ref.target('Image'))
		.manyHasOne('imagePosition5', ref => ref.target('Image'))
		.manyHasOne('imagePosition6', ref => ref.target('Image'))
)

builder.enum('BlockType', ['Heading', 'Text', 'Image', 'ImageGrid', 'Numbers', 'Perks', 'People', 'Category'])

builder.entity('Numbers', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.column('number')
		.column('label')
)

builder.entity('Perk', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.column('title')
		.column('description')
)

builder.entity('Block', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.column('type', col => col.type(Model.ColumnType.Enum, { enumName: 'BlockType' }))
		.column('text')
		.manyHasOne('imageGrid', ref => ref.target('ImageGrid'))
		.manyHasOne('image', ref => ref.target('Image'))
		.manyHasOne('category', ref => ref.target('Category').onDelete(Model.OnDelete.cascade))
		.oneHasMany('numbers', ref => ref.target('Numbers'))
		.oneHasMany('perks', ref => ref.target('Perk'))
		.oneHasMany('people', ref => ref.target('BlockPerson', entity =>
			entity.column('order', col => col.type(Model.ColumnType.Int))
				.manyHasOne('person', ref => ref.target('Person').onDelete(Model.OnDelete.cascade))
		))
)

// Menu
builder.entity('MenuItem', entity =>
	entity.column('order', col => col.type(Model.ColumnType.Int)).oneHasMany('locales', ref =>
		ref
			.target('MenuItemLocale')
			.ownedBy('menuItem')
			.ownerNotNull()
	)
)

builder.entity('MenuItemLocale', entity =>
	entity
		.column('label')
		.manyHasOne('target', ref => ref.target('Linkable').notNull())
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.unique(['menuItem', 'locale'])
)

// Social
builder.enum('SocialNetwork', ['Facebook', 'Twitter', 'LinkedIn'])
builder.entity('Social', entity =>
	entity.column('network', col => col.type(Model.ColumnType.Enum, { enumName: 'SocialNetwork' }).unique()).column('url')
)

// Footer
builder.entity('Footer', entity =>
	entity
		.column('unique', col =>
			col
				.type(Model.ColumnType.Enum, { enumName: 'One' })
				.notNull()
				.unique()
		)
		.oneHasMany('locales', ref =>
			ref
				.target('FooterLocale')
				.ownedBy('footer')
				.ownerNotNull()
		)
)

builder.entity('FooterLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('address')
		.unique(['footer', 'locale'])
)

// Front page
builder.entity('FrontPage', entity =>
	entity
		.column('unique', col =>
			col
				.type(Model.ColumnType.Enum, { enumName: 'One' })
				.notNull()
				.unique()
		)
		.manyHasOne('headerImage', ref => ref.target('Image'))
		.manyHasOne('imageGrid', ref => ref.target('ImageGrid'))
		.oneHasMany('locales', ref =>
			ref
				.target('FrontPageLocale')
				.ownerNotNull()
				.ownedBy('frontPage')
		)
)

builder.entity('FrontPageLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.column('header')
		.column('quote')
		.column('partnersHeader')
		.column('partnersContent')
		.column('peopleHeader')
		.column('peopleSubheader')
		.column('peopleLink')
		.manyHasOne('peopleLinkTarget', ref => ref.target('Linkable').onDelete(Model.OnDelete.setNull))
		.column('contactUs')
		.column('findUsHeader')
		.column('findUsSubheader')
		.oneHasOne('link', ref =>
			ref
				.target('Linkable')
				.inversedBy('frontPageLocale')
				.notNull()
		)
		.unique(['frontPage', 'locale'])
)

builder.entity('Person', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.manyHasOne('image', ref => ref.target('Image'))
		.column('showOnFrontPage', col => col.type(Model.ColumnType.Bool).notNull())
		.oneHasMany('locales', ref => ref.target('PersonLocale').ownedBy('person'))
)
builder.entity('PersonLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('quote')
		.column('name')
		.column('position')
		.unique(['person', 'locale'])
)

// Page
builder.entity('Page', entity =>
	entity
		.oneHasMany('locales', ref => ref.target('PageLocale').ownedBy('page'))
		.manyHasOne('image', ref => ref.target('Image'))
		.manyHasOne('category', ref => ref.target('Category').onDelete(Model.OnDelete.setNull).inversedBy('pages'))
)

builder.entity('PageLocale', entity =>
	entity
		.column('state', col => col.type(Model.ColumnType.Enum, { enumName: 'State' }).notNull())
		.column('header')
		.column('perex')
		.oneHasMany('content', ref => ref.target('Block'))
		.column('contactUs')
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.oneHasOne('link', ref =>
			ref
				.target('Linkable')
				.inversedBy('page')
				.notNull()
		)
		.unique(['page', 'locale'])
)

// Category + CategoryLocale

builder.entity('Category', entity =>
	entity
		.oneHasMany('locales', ref =>
		ref
			.target('CategoryLocale', entity => entity
				.column('name')
				.unique(['category', 'locale'])
				.manyHasOne('locale', ref => ref.target('Locale').notNull())
			)
			.onDelete(Model.OnDelete.cascade)
			.ownedBy('category')
			.ownerNotNull()
	)
)

// Contact
builder.entity('Contact', entity =>
	entity
		.column('unique', col =>
			col
				.type(Model.ColumnType.Enum, { enumName: 'One' })
				.notNull()
				.unique()
		)
		.oneHasMany('locales', ref =>
			ref
				.target('ContactLocale')
				.ownedBy('contact')
				.ownerNotNull()
		)
)

builder.entity('ContactLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('header')
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.oneHasOne('link', ref =>
			ref
				.target('Linkable')
				.inversedBy('contact')
				.notNull()
		)
		.unique(['contact', 'locale'])
)

builder.entity('Place', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.column('state', col => col.type(Model.ColumnType.Enum, { enumName: 'State' }).notNull())
		.column('isBiggerOnFrontPage', col => col.type(Model.ColumnType.Bool).notNull())
		.column('order', col => col.type(Model.ColumnType.Int).notNull())
		.column('gpsLat', col => col.type(Model.ColumnType.Double))
		.column('gpsLng', col => col.type(Model.ColumnType.Double))
		.oneHasMany('locales', ref =>
			ref
				.target('PlaceLocale')
				.ownedBy('place')
				.ownerNotNull()
		)
)

builder.entity('PlaceLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.unique(['place', 'locale'])
		.column('name', col => col.type(Model.ColumnType.String).notNull())
		.column('address', col => col.type(Model.ColumnType.String).notNull())
		.column('subAddress')
		.column('email')
		.column('phone')
)

// String translations
builder.entity('TranslationRoot', entity =>
	entity
		.column('unique', col =>
			col
				.type(Model.ColumnType.Enum, { enumName: 'One' })
				.notNull()
				.unique()
		)
		.oneHasMany('translated', ref =>
			ref
				.target('Translated')
				.ownedBy('root')
				.ownerNotNull()
		)
)

builder.enum('Translatable', ['emailContent', 'emailContact', 'emailSend'])
builder.entity('Translated', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('translatable', col => col.type(Model.ColumnType.Enum, { enumName: 'Translatable' }).notNull())
		.unique(['locale', 'translatable'])
		.column('translated', col => col.type(Model.ColumnType.String).notNull())
)

builder.entity('JoinUsRoot', entity =>
	entity
		.column('unique', col =>
			col
				.type(Model.ColumnType.Enum, { enumName: 'One' })
				.notNull()
				.unique()
		)
		.oneHasMany('joinUs', ref =>
			ref
				.target('JoinUs')
				.ownedBy('root')
				.ownerNotNull()
		)
)

builder.entity('JoinUs', entity =>
	entity
		.column('label', col => col.type(Model.ColumnType.String).notNull())
		.manyHasOne('target', ref => ref.target('Linkable').notNull())
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.unique(['root', 'locale'])
)

const model = builder.buildSchema()
const acl: Acl.Schema = {
	variables: {},
	roles: {
		admin: { entities: new AllowAllPermissionFactory().create(model) }
	}
}

const schema: Schema = {
	model: model,
	acl: acl
}

export default schema
