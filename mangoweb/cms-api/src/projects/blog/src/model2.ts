import SchemaBuilder from "cms-api/src/schema/builder/SchemaBuilder"

const builder = new SchemaBuilder()
builder.enum("siteVisibility", ['visible', 'hidden'])
builder.enum("locale", ['cs', 'en'])

builder.entity('Author', entity => entity
  .column('name', column => column.type('string'))
)
builder.entity('Category', entity => entity
  .oneHasMany('locales', relation => relation.target('CategoryLocale'))
)
builder.entity('CategoryLocale', entity => entity
  .column('name', column => column.type('string'))
  .column('locale', column => column.type('locale'))
)
builder.entity('Post', entity => entity
  .column('publishedAt', column => column.type('datetime'))
  .manyHasOne('author', relation => relation.target('Author').inversedBy('posts'))
  .manyHasMany('categories', relation => relation.target('Category').inversedBy('posts'))
  .oneHasMany('locales', relation => relation.target('PostLocale'))
  .oneHasMany('sites', relation => relation.target('PostSite'))
)
builder.entity('PostLocale', entity => entity
  .column('locale', column => column.type('locale'))
  .column('title', column => column.type('string'))
)
builder.entity('PostSite', entity => entity
  .column('visibility', column => column.type('siteVisibility'))
  .manyHasOne('site', relation => relation.target('Site'))
)
builder.entity('Site', entity => entity
  .column('name', column => column.type('string'))
  .oneHasOne('setting', relation => relation.target('SiteSetting'))
)
builder.entity('SiteSetting', entity => entity
  .column('url', column => column.type('string'))
)

const model = builder.buildSchema()
export default model
