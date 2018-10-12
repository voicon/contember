import { SchemaBuilder } from 'cms-api'
import { Acl, Input, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()
builder.enum('one', ['one'])
builder.enum('location', ['prague', 'london'])

builder.entity('Language', entity =>
	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('name')
)

builder.entity('FrontPage', entity =>
	entity.column('unique', column => column.type(Model.ColumnType.Enum, { enumName: 'one' })).column('vimeoId')
)

builder.entity('FrontPageLocation', entity =>
	entity
		.column('location', column => column.type(Model.ColumnType.Enum, { enumName: 'location' }))
		.column('title')
		.column('text')
)

builder.entity('FrontPageReferenceTile', entity =>
	entity
		.column('label')
		.column('image')
		.column('linkTarget')
)

builder.entity('FrontPageFeaturedClient', entity => entity.column('image'))
builder.entity('FrontPageButton', entity => entity.column('label').column('url'))

builder.entity('PageSeo', entity =>
	entity
		.column('title')
		.column('description')
		.column('ogImage')
		.column('ogTitle')
		.column('ogDescription')
)

builder.entity('FrontPageLocale', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language'))
		.column('introShort')
		.column('introMain')
		.column('introLong')
		.column('referencesTitle')
		.oneHasMany('references', relation => relation.target('FrontPageReferenceTile'))
		.column('buttonLabel')
		.column('buttonUrl')
		.column('locationsTitle')
		.oneHasMany('locations', relation => relation.target('FrontPageLocation'))
		.column('featuredClientsText')
		.oneHasMany('featuredClients', relation => relation.target('FrontPageFeaturedClient'))
		.column('contactButtonLabel')
		.column('contactButtonUrl')
		.oneHasMany('buttons', relation => relation.target('FrontPageButton'))
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

builder.entity('MenuItem', entity =>
	entity
		.column('label')
		.column('url')
		.column('order', column => column.type(Model.ColumnType.Int))
		.manyHasOne('language', relation => relation.target('Language'))
)

builder.entity('TeamPage', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language'))
		.column('title')
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

builder.entity('Person', entity =>
	entity
		.column('imageBig')
		.column('imageSquare')
		.column('phoneNumber')
		.column('email')
		.column('facebook')
		.column('twitter')
		.column('likendin')
		.column('github')
		.column('instagram')
		.oneHasMany('locale', relation => relation.target('PersonLocale').ownedBy('person'))
)

builder.entity('PersonLocale', entity =>
	entity
		.unique(['language', 'person'])
		.manyHasOne('language', relation => relation.target('Language'))
		.column('position')
		.column('shortName')
		.column('longName')
		.column('text')
)

builder.entity('WhatWeDo', entity =>
	entity
		.oneHasOne('language', relation => relation.target('Language'))
		.column('title')
		.column('quote')
		.column('text')
		.column('buttonLabel')
		.column('buttonUrl')
)

builder.entity('ReferenceLocale', entity =>
	entity
		.manyHasOne('language', relation => relation.target('Language'))
		.column('title')
		.column('url')
		.column('urlLabel')
		.column('caseStudyUrl')
)

// Todo: Allow video references
builder.entity('Reference', entity =>
	entity.column('image').oneHasMany('locale', relation => relation.target('ReferenceLocale').ownedBy('reference'))
)

builder.entity('ContactLocationLocale', entity =>
	entity.unique(['contactLocation', 'language']).manyHasOne('language', relation => relation.target('Language'))
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
		.oneHasMany('locale', relation => relation.target('ContactLocationLocale').ownedBy('contactLocation'))
)

builder.entity('ContactPageLocale', entity =>
	entity
		.column('buttonUrl')
		.column('buttonLabel')
		.oneHasOne('seo', relation => relation.target('PageSeo'))
		.oneHasOne('language', relation => relation.target('Language'))
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
