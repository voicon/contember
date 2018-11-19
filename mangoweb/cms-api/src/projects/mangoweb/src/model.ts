import { SchemaBuilder, AllowAllPermissionFactory } from 'cms-api'
import { Acl, Model, Schema } from 'cms-common'

const builder = new SchemaBuilder()
builder.enum('one', ['one'])
builder.enum('locale', ['cs', 'en'])

builder.entity('Image', entity => entity.column('url'))

builder.entity('Video', entity => entity.column('src'))

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
		.oneHasMany('whatWeDo', relation => relation.target('WhatWeDo'))
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
	entity
		.column('url')
		.column('order', column => column.type(Model.ColumnType.Int))
		.oneHasMany('locales', relation =>
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
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
)

builder.entity('FrontPageFeaturedClient', entity =>
	entity
		.manyHasOne('image', relation => relation.target('Image'))
		.column('order', column => column.type(Model.ColumnType.Int))
)

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
		.column('title')
		.column('description')
		.column('ogTitle')
		.column('ogDescription')
)

builder.entity('MenuItem', entity =>
	entity
		.column('url')
		.column('order', column => column.type(Model.ColumnType.Int))
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

builder.entity('WhatWeDo', entity =>
	entity
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('frontPageOrder', column => column.type(Model.ColumnType.Int))
		.column('whatWeDoPageOrder', column => column.type(Model.ColumnType.Int))
		.column('activity')
		.oneHasOne('featuredImage', relation => relation.target('Image'))
		.column('descriptionHeading')
		.oneHasOne('featuredVideo', relation => relation.target('Video'))
		.oneHasMany('description', relation => relation.target('WhatWeDoDescription').onDelete(Model.OnDelete.cascade))
)

builder.entity('WhatWeDoDescription', entity =>
	entity
		.column('heading')
		.oneHasOne('image', relation => relation.target('Image'))
		.column('description')
)

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
		.column('title')
)

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
		.column('title')
		.column('quote')
		.oneHasMany('references', relation =>
			relation
				.target('Reference')
				.onDelete(Model.OnDelete.cascade)
				.ownedBy('referencesPage')
				.ownerNotNull()
		)
)

builder.entity(
	'Reference',
	entity =>
		entity
			.manyHasOne('image', relation => relation.target('Image'))
			.manyHasOne('video', relation => relation.target('Video'))
			.column('order', column => column.type(Model.ColumnType.Int))
			.column('title')
			.column('isFeatured', column => column.type(Model.ColumnType.Bool))
			.column('url')
			.column('urlLabel')
	// TODO case studies
)

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
		.column('contactUsButtonLabel')
		.column('userMessageLabel')
		.column('userPhoneLabel')
		.column('contactFormButtonText')
		.column('contactFormSuccessMessage')
		.column('contactFormErrorMessage')
)

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
