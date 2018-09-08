import { SchemaBuilder } from 'cms-api'
import { Model } from 'cms-common'

const builder = new SchemaBuilder()
builder.enum('siteVisibility', ['visible', 'hidden'])
builder.enum('locale', ['cs', 'en'])

builder.entity('Author', entity => entity.column('name', column => column.type(Model.ColumnType.String)))
builder.entity('Category', entity => entity.oneHasMany('locales', relation => relation.target('CategoryLocale')))
builder.entity('CategoryLocale', entity =>
	entity
		.column('name', column => column.type(Model.ColumnType.String))
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
)
builder.entity('Post', entity =>
	entity
		.column('publishedAt', column => column.type(Model.ColumnType.DateTime))
		.manyHasOne('author', relation => relation.target('Author').inversedBy('posts'))
		.manyHasMany('categories', relation => relation.target('Category').inversedBy('posts'))
		.oneHasMany('locales', relation => relation.target('PostLocale').ownedBy('post'))
		.oneHasMany('sites', relation => relation.target('PostSite'))
)
builder.entity('PostLocale', entity =>
	entity
		.unique(['post', 'locale'])
		.column('locale', column => column.type(Model.ColumnType.Enum, { enumName: 'locale' }))
		.column('title', column => column.type(Model.ColumnType.String))
)
builder.entity('PostSite', entity =>
	entity
		.column('visibility', column => column.type(Model.ColumnType.Enum, { enumName: 'siteVisibility' }))
		.manyHasOne('site', relation => relation.target('Site'))
)
builder.entity('Site', entity =>
	entity
		.column('name', column => column.type(Model.ColumnType.String))
		.oneHasOne('setting', relation => relation.target('SiteSetting'))
)
builder.entity('SiteSetting', entity => entity.column('url', column => column.type(Model.ColumnType.String)))

builder.entity('FeaturedLink', entity =>
	entity
		.column('title', column => column.type(Model.ColumnType.String))
		.column('url', column => column.type(Model.ColumnType.String))
		.column('color', column => column.type(Model.ColumnType.String))
)
builder.entity('Page', entity =>
	entity
		.column('title', column => column.type(Model.ColumnType.String))
		.column('urlSlug', column => column.type(Model.ColumnType.String))
		.column('perex', column => column.type(Model.ColumnType.String))
		.column('content', column => column.type(Model.ColumnType.String))
		.column('featured', column => column.type(Model.ColumnType.Bool))
		.oneHasMany('featuredLinks', relation => relation.target('FeaturedLink'))
)

const model = builder.buildSchema()
export default model
