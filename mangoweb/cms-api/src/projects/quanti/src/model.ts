import { SchemaBuilder, AllowAllPermissionFactory } from 'cms-api'
import { Acl, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()

// Meta things
builder.entity('Locale', entity =>
	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('switchToLabel')
)

builder.entity('Linkable', entity =>
	entity
		.column('url', col =>
			col
				.type(Model.ColumnType.String)
				.notNull()
				.unique()
		)
		.column('isPrimary', col => col.type(Model.ColumnType.Bool).notNull())
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

// Menu
builder.entity('MenuItem', entity =>
	entity
		.column('label')
		.manyHasOne('target', ref => ref.target('Linkable').notNull())
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('order', col => col.type(Model.ColumnType.Int))
)

// Social
builder.enum('SocialNetwork', ['Facebook', 'Twitter', 'LinkedIn'])
builder.entity('Social', entity =>
	entity.column('network', col => col.type(Model.ColumnType.Enum, { enumName: 'SocialNetwork' })).column('url')
)

// Footer
builder.entity('FooterLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale'))
		.column('footer')
		.unique(['locale'])
)

// Front page
builder.entity('FrontPage', entity =>
	entity
		.oneHasOne('locale', ref => ref.target('Locale').notNull())
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.column('bigHeader')
		.column('smallHeader')
		.column('partnersHeader')
		.column('partnersContent')
		.column('peopleHeader')
		.column('peopleSubheader')
		.column('imageGrid')
		.oneHasMany('people', ref =>
			ref
				.target('Person')
				.ownedBy('frontPage')
				.ownerNotNull()
		)
		.column('contactUs')
		.column('findUsHeader')
		.column('findUsSubheader')
		.oneHasMany('link', ref => ref.target('Linkable').ownedBy('frontPage'))
)

builder.entity('Person', entity =>
	entity
		.column('order', col => col.type(Model.ColumnType.Int))
		.manyHasOne('image', ref => ref.target('Image'))
		.oneHasMany('locales', ref => ref.target('PersonLocale').ownedBy('person'))
)
builder.entity('PersonLocale', entity => entity.column('quote').column('name'))

// Page
builder.entity('Page', entity => entity.oneHasMany('locales', ref => ref.target('PageLocale').ownedBy('page')))
builder.entity('PageLocale', entity =>
	entity
		.column('state', col => col.type(Model.ColumnType.Enum, { enumName: 'State' }).notNull())
		.column('header')
		.column('perex')
		.column('content')
		.column('contactUs')
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.oneHasMany('link', ref => ref.target('Linkable').ownedBy('page'))
		.unique(['page', 'locale'])
)

// Contact
builder.entity('ContactLocale', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale').notNull())
		.column('header')
		.oneHasOne('seo', ref => ref.target('Seo').notNull())
		.oneHasMany('link', ref => ref.target('Linkable').ownedBy('contact'))
)

builder.entity('Place', entity =>
	entity
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
)

// String translations
builder.enum('Translatable', ['emailContent', 'emailContact', 'emailSend'])
builder.entity('Translated', entity =>
	entity
		.manyHasOne('locale', ref => ref.target('Locale'))
		.column('translatable', col => col.type(Model.ColumnType.Enum, { enumName: 'Translatable' }).notNull())
		.unique(['locale', 'translatable'])
		.column('translated', col => col.type(Model.ColumnType.String).notNull())
)

builder.entity('JoinUs', entity =>
	entity
		.column('label', col => col.type(Model.ColumnType.String).notNull())
		.manyHasOne('target', ref => ref.target('Linkable').notNull())
		.oneHasOne('locale', ref => ref.target('Locale').notNull())
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
