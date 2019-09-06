import { SchemaBuilder, AllowAllPermissionFactory } from '@contember/schema-definition'
import { Acl, Model, Schema } from '@contember/schema'

const builder = new SchemaBuilder()
builder.enum('siteVisibility', ['visible', 'hidden'])
builder.enum('locale', ['cs', 'en'])

builder.entity('Author', entity => entity.column('name', column => column.type(Model.ColumnType.String)))
builder.entity('Category', entity =>
	entity.oneHasMany('locales', relation =>
		relation
			.target('CategoryLocale')
			.ownedBy('category')
			.onDelete(Model.OnDelete.cascade),
	),
)
builder.entity('CategoryLocale', entity =>
	entity
		.unique(['category', 'locale'])
		.column('name', column => column.type(Model.ColumnType.String))
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' })),
)
builder.entity('Post', entity =>
	entity
		.column('publishedAt', column => column.type(Model.ColumnType.DateTime))
		.manyHasOne('author', relation =>
			relation
				.target('Author')
				.inversedBy('posts')
				.onDelete(Model.OnDelete.setNull),
		)
		.manyHasMany('categories', relation => relation.target('Category').inversedBy('posts'))
		.oneHasMany('locales', relation =>
			relation
				.target('PostLocale')
				.ownedBy('post')
				.onDelete(Model.OnDelete.cascade),
		)
		.oneHasMany('sites', relation => relation.target('PostSite')),
)
builder.entity('PostLocale', entity =>
	entity
		.unique(['post', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title', column => column.type(Model.ColumnType.String)),
)
builder.entity('PostSite', entity =>
	entity
		.column('visibility', column => column.type(Model.ColumnType.Enum, { enumName: 'siteVisibility' }))
		.manyHasOne('site', relation => relation.target('Site').onDelete(Model.OnDelete.cascade)),
)
builder.entity('Site', entity =>
	entity
		.column('name', column => column.type(Model.ColumnType.String))
		.oneHasOne('setting', relation => relation.target('SiteSetting').onDelete(Model.OnDelete.cascade)),
)
builder.entity('SiteSetting', entity => entity.column('url', column => column.type(Model.ColumnType.String)))

builder.entity('FeaturedLink', entity =>
	entity
		.column('title', column => column.type(Model.ColumnType.String))
		.column('url', column => column.type(Model.ColumnType.String))
		.column('color', column => column.type(Model.ColumnType.String)),
)
builder.entity('Page', entity =>
	entity
		.column('title', column => column.type(Model.ColumnType.String))
		.column('urlSlug', column => column.type(Model.ColumnType.String))
		.column('perex', column => column.type(Model.ColumnType.String))
		.column('content', column => column.type(Model.ColumnType.String))
		.column('featured', column => column.type(Model.ColumnType.Bool))
		.oneHasMany('featuredLinks', relation => relation.target('FeaturedLink')),
)

const model = builder.buildSchema()
const acl: Acl.Schema = {
	roles: {
		admin: {
			stages: '*',
			variables: {},
			entities: new AllowAllPermissionFactory().create(model),
		},
		editor: {
			stages: '*',
			variables: {
				site: { type: Acl.VariableType.entity, entityName: 'Site' },
			},
			entities: {
				Post: {
					predicates: {},
					operations: {
						read: {
							id: true,
							locales: true,
						},
						update: {
							locales: true,
						},
					},
				},
				PostLocale: {
					predicates: {
						locale_site: {
							and: [
								//{ locale: 'locale' },
								{ post: { site: 'site' } },
							],
						},
					},
					operations: {
						read: {
							id: true,
							title: true,
							content: true,
						},
						update: {
							title: 'locale_site',
							content: 'locale_site',
						},
					},
				},
			},
		},
		deleter: {
			stages: '*',
			variables: {},
			entities: {
				Post: {
					predicates: {},
					operations: {
						read: {
							id: true,
							locales: true,
						},
						update: {
							locales: true,
						},
						delete: true,
					},
				},
				PostLocale: {
					predicates: {
						cs_locale: {
							and: [{ locale: { eq: 'cs' } }],
						},
					},
					operations: {
						read: {
							id: true,
							title: true,
							content: true,
						},
						delete: 'cs_locale',
					},
				},
			},
		},
	},
}

const schema: Schema = {
	model: model,
	acl: acl,
	validation: {},
}

export default schema
