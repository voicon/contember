import { SchemaBuilder, AllowAllPermissionFactory } from 'cms-api'
import { Acl, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()
builder.enum('one', ['one'])
builder.enum('locale', ['cs', 'en'])
builder.enum('page', ['frontPage', 'team', 'whatWeDo', 'references', 'contact'])

builder.entity('Image', entity => entity.column('url'))

builder.entity('Video', entity => entity.column('vimeoId'))

// TODO: We can use this once #62 is resolved
//builder.entity('Language', entity =>
//	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('name')
//)

builder.entity('FrontPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasOne('introVideo', relation => relation.target('Video'))
		.oneHasMany('featuredClients', relation => relation.target('FrontPageFeaturedClient').ownerNotNull())
		.oneHasOne('seo', relation => relation.target('PageSeo').inversedNotNull())
		.oneHasMany('locales', relation =>
			relation
				.target('FrontPageLocale')
				.ownerNotNull()
				.ownedBy('frontPage')
		)
)

builder.entity('FrontPageLocale', entity =>
	entity
		.unique(['frontPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('introLabel')
		.column('introHeading')
		.column('introBubbleText')
		.column('whatWeDoLabel')
		.column('whatWeDoTitle')
		.oneHasMany('references', relation => relation.target('FrontPageReferenceTile').ownerNotNull())
		.column('whatWeDoAlso')
		.column('featuredClientsLabel')
		.column('featuredClientsTitle')
		.column('videosTitle')
)

builder.entity('ContactLocation', entity =>
	entity
		.column('email')
		.column('phoneNumber')
		.oneHasMany('locales', relation =>
			relation
				.target('ContactLocationLocale')
				.ownerNotNull()
				.ownedBy('contactLocation')
		)
)

builder.entity('ContactLocationLocale', entity =>
	entity
		.unique(['contactLocation', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
		.column('entity')
		.column('address')
		.column('additionalText')
)

builder.entity('Footer', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		// TODO: workaround: no in house videos until #66 is fixed.
		//.oneHasMany('inHouseVideos', relation => relation.target('Video'))
		.oneHasMany('buttons', relation => relation.target('FooterButton').ownerNotNull())
		.oneHasMany('locales', relation =>
			relation
				.target('FooterLocale')
				.ownerNotNull()
				.ownedBy('footer')
		)
)

builder.entity('FooterLocale', entity =>
	entity
		.unique(['footer', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('contactButtonText')
)

builder.entity('FooterButton', entity =>
	entity.column('url').oneHasMany('locales', relation =>
		relation
			.target('FooterButtonLocale')
			.ownerNotNull()
			.ownedBy('footerButton')
	)
)

builder.entity('FooterButtonLocale', entity =>
	entity
		.unique(['footerButton', 'locale'])
		.column('label')
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
)

builder.entity('FrontPageReferenceTile', entity =>
	entity
		.manyHasOne('image', relation => relation.target('Image'))
		.column('order', column => column.type(Model.ColumnType.Int))
		.oneHasMany('locales', relation =>
			relation
				.target('FrontPageReferenceTileLocale')
				.ownerNotNull()
				.ownedBy('frontPageReferenceTile')
		)
)
builder.entity('FrontPageReferenceTileLocale', entity =>
	entity
		.unique(['frontPageReferenceTile', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('label')
		.column('linkTarget')
)

builder.entity('FrontPageFeaturedClient', entity =>
	entity.manyHasOne('image', relation => relation.target('Image')).oneHasMany('locales', relation =>
		relation
			.target('FrontPageFeaturedClientLocale')
			.ownerNotNull()
			.ownedBy('frontPageFeaturedClient')
	)
)

builder.entity('FrontPageFeaturedClientLocale', entity =>
	entity
		.unique(['frontPageFeaturedClient', 'locale'])
		.column('label')
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
)

builder.entity('PageSeo', entity =>
	entity.oneHasOne('ogImage', relation => relation.target('Image')).oneHasMany('locales', relation =>
		relation
			.target('PageSeoLocale')
			.ownerNotNull()
			.ownedBy('pageSeo')
	)
)

builder.entity('PageSeoLocale', entity =>
	entity
		.unique(['pageSeo', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
		.column('description')
		.column('ogTitle')
		.column('ogDescription')
)

builder.entity('MenuItem', entity =>
	entity
		.column('page', column => column.type(Model.ColumnType.Enum, { enumName: 'page' }).unique())
		.column('order', column => column.type(Model.ColumnType.Int))
		.oneHasMany('locales', relation =>
			relation
				.target('MenuItemLocale')
				.ownerNotNull()
				.ownedBy('menuItem')
		)
)

builder.entity('MenuItemLocale', entity =>
	entity
		.unique(['menuItem', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('label')
)

builder.entity('TeamPage', entity =>
	entity.oneHasOne('seo', relation => relation.target('PageSeo')).oneHasMany('locales', relation =>
		relation
			.target('TeamPageLocale')
			.ownerNotNull()
			.ownedBy('teamPage')
	)
)

builder.entity('TeamPageLocale', entity =>
	entity
		.unique(['teamPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
)

builder.entity('Person', entity =>
	entity
		.column('shortName')
		.column('longName')
		.manyHasOne('imageBig', relation => relation.target('Image'))
		.manyHasOne('imageSquare', relation => relation.target('Image'))
		.column('faceOffset', column => column.type(Model.ColumnType.Double))
		.column('phoneNumber')
		.column('email')
		.column('facebook')
		.column('twitter')
		.column('likendin')
		.column('github')
		.column('instagram')
		.column('order', column => column.type(Model.ColumnType.Int))
		.oneHasMany('locales', relation =>
			relation
				.target('PersonLocale')
				.ownedBy('person')
				.ownerNotNull()
		)
)

builder.entity('PersonLocale', entity =>
	entity
		.unique(['locale', 'person'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('position')
		.column('bio')
)

builder.entity('WhatWeDoPage', entity =>
	entity
		.oneHasMany('locales', relation =>
			relation
				.target('WhatWeDoPageLocale')
				.ownedBy('whatWeDoPage')
				.ownerNotNull()
		)
		.column('buttonUrl')
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

builder.entity('WhatWeDoPageLocale', entity =>
	entity
		.unique(['whatWeDoPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
		.column('quote')
		.column('text')
		.column('buttonLabel')
)

builder.entity('ReferenceLocale', entity =>
	entity
		.unique(['reference', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
		.column('url')
		.column('urlLabel')
		.column('caseStudyUrl')
)

// Todo: Allow video references
builder.entity('Reference', entity =>
	entity
		.manyHasOne('image', relation => relation.target('Image'))
		.oneHasMany('locales', relation =>
			relation
				.target('ReferenceLocale')
				.ownedBy('reference')
				.ownerNotNull()
		)
		.column('order', column => column.type(Model.ColumnType.Int))
)

builder.entity('ReferencesPage', entity =>
	entity.oneHasOne('seo', relation => relation.target('PageSeo')).oneHasMany('locales', relation =>
		relation
			.target('ReferencesPageLocale')
			.ownedBy('referencesPage')
			.ownerNotNull()
	)
)

builder.entity('ReferencesPageLocale', entity =>
	entity
		.unique(['referencesPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title')
		.column('quote')
)

builder.entity('ContactPage', entity =>
	entity.oneHasOne('seo', relation => relation.target('PageSeo')).oneHasMany('locales', relation =>
		relation
			.target('ContactPageLocale')
			.ownedBy('contactPage')
			.ownerNotNull()
	)
)

builder.entity('ContactPageLocale', entity =>
	entity
		.unique(['contactPage', 'locale'])
		.column('buttonUrl')
		.column('buttonLabel')
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
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
