import { SchemaBuilder, AllowAllPermissionFactory } from 'cms-api'
import { Acl, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()

// ****************************************************** COMMON *******************************************************
builder.enum('one', ['one'])
builder.enum('locale', ['cs', 'en'])
builder.enum('mediumType', ['image', 'video'])
builder.enum('page', ['front', 'team', 'whatWeDo', 'references', 'contact'])

builder.entity('Image', entity => entity.column('url'))

builder.entity('Video', entity => entity.column('src'))

builder.entity('Medium', entity =>
	entity
		.column('type', column => column.type(Model.ColumnType.Enum, { enumName: 'mediumType' }))
		.oneHasOne('image', relation => relation.target('Image').onDelete(Model.OnDelete.cascade))
		.oneHasOne('video', relation => relation.target('Video').onDelete(Model.OnDelete.cascade))
)

// TODO: We can use this since #62 is resolved but there's not enough time for now
//builder.entity('Language', entity =>
//	entity.column('slug', column => column.type(Model.ColumnType.String).unique()).column('name')
//)

builder.entity('PageSeo', entity =>
	entity.oneHasOne('ogImage', relation => relation.target('Image')).oneHasMany('locales', relation =>
		relation
			.target('PageSeoLocale')
			.onDelete(Model.OnDelete.cascade)
			.ownerNotNull()
			.ownedBy('pageSeo')
	)
)

builder.entity('PageSeoLocale', entity =>
	entity
		.unique(['pageSeo', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('description')
		.column('ogTitle')
		.column('ogDescription')
)

// ****************************************************** GENERAL ******************************************************

// MENU
builder.entity('MenuItem', entity =>
	entity
		.column('order', column => column.type(Model.ColumnType.Int))
		.column('target', column => column.type(Model.ColumnType.Enum, { enumName: 'page' }))
		.oneHasMany('locales', relation =>
			relation
				.target('MenuItemLocale')
				.onDelete(Model.OnDelete.cascade)
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

// FOOTER
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
				.onDelete(Model.OnDelete.cascade)
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
	entity.column('order', column => column.type(Model.ColumnType.Int)).oneHasMany('locales', relation =>
		relation
			.target('FooterButtonLocale')
			.onDelete(Model.OnDelete.cascade)
			.ownerNotNull()
			.ownedBy('footerButton')
	)
)

builder.entity('FooterButtonLocale', entity =>
	entity
		.unique(['footerButton', 'locale'])
		.column('label')
		.column('url')
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
)

// **************************************************** FRONT PAGE *****************************************************

// FRONT PAGE
builder.entity('FrontPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasOne('heroImage', relation => relation.target('Image'))
		.oneHasOne('introVideo', relation => relation.target('Video'))
		.oneHasOne('seo', relation => relation.target('PageSeo').inversedNotNull())
		.oneHasMany('locales', relation =>
			relation
				.target('FrontPageLocale')
				.onDelete(Model.OnDelete.cascade)
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
		.column('whatWeDoAlso')
		.column('featuredClientsLabel')
		.column('featuredClientsTitle')
		.oneHasMany('featuredClients', relation =>
			relation
				.target('FrontPageFeaturedClient')
				.onDelete(Model.OnDelete.cascade)
				.ownerNotNull()
		)

		.column('videosTitle')
)

builder.entity('FrontPageFeaturedClient', entity =>
	entity
		.manyHasOne('logo', relation => relation.target('Image'))
		.column('order', column => column.type(Model.ColumnType.Int))
)

// **************************************************** WHAT WE DO *****************************************************

// WHAT WE DO
builder.entity('WhatWeDo', entity =>
	entity
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		//.column('frontPageOrder', column => column.type(Model.ColumnType.Int))
		//.column('whatWeDoPageOrder', column => column.type(Model.ColumnType.Int))
		.column('order', column => column.type(Model.ColumnType.Int)) // TODO just one order for now
		.column('activity')
		.oneHasOne('featuredMedium', relation => relation.target('Medium'))
		.column('descriptionHeading')
		.oneHasOne('featuredVideo', relation => relation.target('Video'))
		.oneHasMany('description', relation => relation.target('WhatWeDoDescription').onDelete(Model.OnDelete.cascade))
)

builder.entity('WhatWeDoDescription', entity =>
	entity
		.column('heading')
		.oneHasOne('featuredMedium', relation => relation.target('Medium'))
		.column('description')
)

// WHAT WE DO PAGE
builder.entity('WhatWeDoPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasMany('locales', relation =>
			relation
				.target('WhatWeDoPageLocale')
				.onDelete(Model.OnDelete.cascade)
				.ownedBy('whatWeDoPage')
				.ownerNotNull()
		)
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

builder.entity('WhatWeDoPageLocale', entity =>
	entity
		.unique(['whatWeDoPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('titleShort')
		.column('titleFull')
)

// ******************************************************* TEAM ********************************************************

// TEAM PAGE
builder.entity('TeamPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasOne('seo', relation => relation.target('PageSeo'))
)

// PERSON
builder.entity('Person', entity =>
	entity
		.column('shortName')
		.column('longName')
		.oneHasOne('photo', relation => relation.target('Image'))
		.oneHasOne('mugshot', relation => relation.target('Image'))
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
				.onDelete(Model.OnDelete.cascade)
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

// **************************************************** REFERENCES *****************************************************

// REFERENCES PAGE
builder.entity('ReferencesPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasOne('seo', relation => relation.target('PageSeo'))
		.oneHasMany('locales', relation =>
			relation
				.target('ReferencesPageLocale')
				.onDelete(Model.OnDelete.cascade)
				.ownedBy('referencesPage')
				.ownerNotNull()
		)
)

builder.entity('ReferencesPageLocale', entity =>
	entity
		.unique(['referencesPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('titleShort')
		.column('titleFull')
		.oneHasMany('references', relation =>
			relation
				.target('Reference')
				.onDelete(Model.OnDelete.cascade)
				.ownedBy('referencePageLocale')
				.ownerNotNull()
		)
)

// REFERENCES
builder.entity(
	'Reference',
	entity =>
		entity
			.oneHasOne('medium', relation => relation.target('Medium'))
			.column('order', column => column.type(Model.ColumnType.Int))
			.column('title')
			.column('url')
			.column('urlLabel')
	// TODO case studies
)

// ****************************************************** CONTACT ******************************************************

// CONTACT PAGE
builder.entity('ContactPage', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.oneHasOne('seo', relation => relation.target('PageSeo'))
		.oneHasMany('locales', relation =>
			relation
				.target('ContactPageLocale')
				.onDelete(Model.OnDelete.cascade)
				.ownedBy('contactPage')
				.ownerNotNull()
		)
)

builder.entity('ContactPageLocale', entity =>
	entity
		.unique(['contactPage', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('titleShort')
		.column('titleFull')
		.column('contactUsButtonLabel')
		.column('userMessageLabel')
		.column('userContactLabel')
		.column('submitButtonText')
		.column('formSuccessMessage')
		.column('formErrorMessage')
		.column('unfilledMessageMessage')
		.column('unfilledContactMessage')
)

// CONTACT
builder.entity('Contact', entity =>
	entity
		.column('unique', column =>
			column
				.type(Model.ColumnType.Enum, { enumName: 'one' })
				.unique()
				.notNull()
		)
		.column('facebook')
		.column('linkedIn')
		.column('instagram')
		.column('twitter')
		.oneHasMany('locations', relation => relation.target('ContactLocation').onDelete(Model.OnDelete.cascade))
)

builder.entity('ContactLocation', entity =>
	entity
		.column('email')
		.column('phoneNumber')
		.oneHasMany('locales', relation =>
			relation
				.target('ContactLocationLocale')
				.onDelete(Model.OnDelete.cascade)
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
		.column('description')
		.column('additionalInfo')
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
