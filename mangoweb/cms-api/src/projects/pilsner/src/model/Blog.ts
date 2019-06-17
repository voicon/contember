import { Content, Image, Linkable, Seo, Site, Tag } from './'
import { SchemaDefinition as d } from 'cms-api'

export class Post {
	site = d
		.manyHasOne(Site, 'posts')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'post').notNull()
	seo = d.oneHasOne(Seo).notNull()

	publishedAt = d.dateTimeColumn()

	headerImage = d.manyHasOne(Image)
	listingImage = d.manyHasOne(Image)
	imageDescription = d.stringColumn()

	title = d.stringColumn().notNull()
	perex = d.stringColumn().notNull()
	content = d.oneHasOne(Content).notNull()

	tags = d.manyHasMany(Tag)
	categories: d.ManyHasManyDefinition = d.manyHasMany(Category, 'posts')
}

export class Category {
	site = d
		.manyHasOne(Site, 'categories')
		.cascadeOnDelete()
		.notNull()

	link = d.oneHasOneInversed(Linkable, 'category').notNull()
	seo = d.oneHasOne(Seo).notNull()

	posts = d.manyHasManyInversed(Post, 'categories')
	name = d.stringColumn().notNull()
}
