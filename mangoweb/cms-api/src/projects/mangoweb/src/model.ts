import { SchemaBuilder } from 'cms-api'
import { Acl, Input, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()
builder.enum('one', ['one'])
builder.enum('location', ['prague', 'london'])

builder.entity('Image', entity => entity.column('url'))

builder.entity('Language', entity =>
	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('name')
)

builder.entity('FrontPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.column('vimeoId')
		.oneHasMany('featuredClients', relation => relation.target('FrontPageFeaturedClient').ownerNotNull())
		.oneHasMany('locale', relation =>
			relation
				.target('FrontPageLocale')
				.ownerNotNull()
				.ownedBy('frontPage')
		)
)

builder.entity('FrontPageLocationLocale', entity =>
	entity
		.column('location', column => column.type(Model.ColumnType.Enum, { enumName: 'location' }).notNull())
		.column('title')
		.column('text')
)

builder.entity('FrontPageReferenceTile', entity =>
	entity.manyHasOne('image', relation => relation.target('Image').notNull()).oneHasMany('locales', relation =>
		relation
			.target('FrontPageReferenceTileLocale')
			.ownerNotNull()
			.ownedBy('frontPageReference')
	)
)
builder.entity('FrontPageReferenceTileLocale', entity =>
	entity
		.unique(['frontPageReference', 'language'])
		.manyHasOne('language', relation => relation.target('Language').notNull())
		.column('label')
		.column('linkTarget')
)

builder.entity('FrontPageFeaturedClient', entity =>
	entity.manyHasOne('image', relation => relation.target('Image').notNull()).column('label')
)

builder.entity('FrontPageButton', entity => entity.column('label').column('url'))

builder.entity('PageSeo', entity =>
	entity
		.column('title')
		.column('description')

		.manyHasOne('ogImage', relation => relation.target('Image').notNull())
		.column('ogTitle')
		.column('ogDescription')
)

builder.entity('FrontPageLocale', entity =>
	entity
		.unique(['frontPage', 'language'])
		.manyHasOne('language', relation => relation.target('Language').notNull())
		.column('introShort')
		.column('introMain')
		.column('introLong')
		.column('referencesTitle')
		.oneHasMany('references', relation => relation.target('FrontPageReferenceTile').ownerNotNull())
		.column('buttonLabel')
		.column('buttonUrl')
		.column('locationsTitle')
		.oneHasMany('locations', relation => relation.target('FrontPageLocationLocale').ownerNotNull())
		.column('featuredClientsText')
		.column('contactButtonLabel')
		.column('contactButtonUrl')
		.oneHasMany('buttons', relation => relation.target('FrontPageButton'))
		.oneHasOne('seo', relation => relation.target('PageSeo').notNull())
)

builder.entity('MenuItem', entity =>
	entity
		.column('label')
		.column('url')
		.column('order', column => column.type(Model.ColumnType.Int))
		.manyHasOne('language', relation => relation.target('Language').notNull())
)

builder.entity('TeamPage', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language').notNull())
		.column('title')
		.oneHasOne('seo', relation => relation.target('PageSeo').notNull())
)

builder.entity('Person', entity =>
	entity
		.column('shortName')
		.column('longName')
		.manyHasOne('imageBig', relation => relation.target('Image').notNull())
		.manyHasOne('imageSquare', relation => relation.target('Image').notNull())
		.column('faceOffset', column => column.type(Model.ColumnType.Double))
		.column('phoneNumber')
		.column('email')
		.column('facebook')
		.column('twitter')
		.column('likendin')
		.column('github')
		.column('instagram')
		.column('order', column => column.type(Model.ColumnType.Int))
		.oneHasMany('locale', relation =>
			relation
				.target('PersonLocale')
				.ownedBy('person')
				.ownerNotNull()
		)
)

builder.entity('PersonLocale', entity =>
	entity
		.unique(['language', 'person'])
		.manyHasOne('language', relation => relation.target('Language').notNull())
		.column('position')
		.column('text')
)

builder.entity('WhatWeDo', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language').notNull())
		.column('title')
		.column('quote')
		.column('text')
		.column('buttonLabel')
		.column('buttonUrl')
		.oneHasOne('seo', relation => relation.target('PageSeo').notNull())
)

builder.entity('ReferenceLocale', entity =>
	entity
		.unique(['reference', 'language'])
		.manyHasOne('language', relation => relation.target('Language').notNull())
		.column('title')
		.column('url')
		.column('urlLabel')
		.column('caseStudyUrl')
)

// Todo: Allow video references
builder.entity('Reference', entity =>
	entity
		.manyHasOne('image', relation => relation.target('Image').notNull())
		.oneHasMany('locale', relation =>
			relation
				.target('ReferenceLocale')
				.ownedBy('reference')
				.ownerNotNull()
		)
		.column('order', column => column.type(Model.ColumnType.Int))
)

builder.entity('ReferencesPage', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language'))
		.column('title')
		.column('quote')
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

builder.entity('ContactLocationLocale', entity =>
	entity
		.unique(['contactLocation', 'language'])
		.manyHasOne('language', relation => relation.target('Language').notNull())
)

builder.entity('ContactLocation', entity =>
	entity
		.column('location', column => column.type(Model.ColumnType.Enum, { enumName: 'location' }))
		.column('topTitle')
		.column('address')
		.column('email')
		.column('phone')
		.column('bottomTitle')
		.column('company')
		.column('text')
		.column('slug', column => column.type(Model.ColumnType.String) /*.unique()*/)
		.oneHasMany('locale', relation =>
			relation
				.target('ContactLocationLocale')
				.ownedBy('contactLocation')
				.ownerNotNull()
		)
)

builder.entity('ContactPageLocale', entity =>
	entity
		.column('buttonUrl')
		.column('buttonLabel')
		.oneHasOne('seo', relation => relation.target('PageSeo').notNull())
		.oneHasOne('language', relation => relation.target('Language').notNull())
)

const model = builder.buildSchema()
const acl: Acl.Schema = {
	variables: {},
	roles: {}
}

const schema: Schema = {
	model: model,
	acl: acl
}

export default schema
