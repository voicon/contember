import { SchemaDefinition as d } from '@contember/schema-definition'
import { Site, SiteLocale } from './Site'
import { Seo } from './Seo'
import { Image } from './Media'

export class Post {
	site = d
		.manyHasOne(Site, 'posts')
		.cascadeOnDelete()
		.notNull()
	publishedAt = d.dateTimeColumn()
	locales = d.oneHasMany(PostLocale, 'root')
}

@d.Unique('root', 'locale')
@d.Unique('slug', 'locale')
export class PostLocale {
	root: d.ManyHasOneDefinition = d
		.manyHasOne(Post, 'locales')
		.cascadeOnDelete()
		.notNull()
	locale = d
		.manyHasOne(SiteLocale, 'posts')
		.cascadeOnDelete()
		.notNull()

	slug = d.stringColumn().notNull()
	seo = d.oneHasOne(Seo).notNull()
	title = d.stringColumn().notNull()
	perex = d.stringColumn().notNull()
	image = d.manyHasOne(Image).notNull()
}
