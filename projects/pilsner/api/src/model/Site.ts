import { SchemaDefinition as d } from '@contember/schema-definition'
import {
	BlogPage,
	Category,
	Footer,
	FrontPage,
	GenericPage,
	Location,
	Menu,
	Post,
	PourPage,
	Pub,
	PubsPage,
	SocialLink,
	Tag,
	Tapster,
	TapstersPage,
	Translation,
} from './'

export class Site {
	name = d.stringColumn().notNull()
	slug = d
		.stringColumn()
		.notNull()
		.unique()
	order = d.intColumn().notNull()

	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPage, 'site')
	pubsPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(PubsPage, 'site')
	tapstersPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(TapstersPage, 'site')
	blogPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(BlogPage, 'site')
	pourPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(PourPage, 'site')
	genericPages: d.OneHasManyDefinition = d.oneHasMany(GenericPage, 'site')
	socialLinks: d.OneHasManyDefinition = d.oneHasMany(SocialLink, 'site')
	footer: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Footer, 'site')
	posts: d.OneHasManyDefinition = d.oneHasMany(Post, 'site')
	categories: d.OneHasManyDefinition = d.oneHasMany(Category, 'site')
	translations: d.OneHasManyDefinition = d.oneHasMany(Translation, 'site')
	menu: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Menu, 'site')
	pubs: d.OneHasManyDefinition = d.oneHasMany(Pub, 'site')
	tags: d.OneHasManyDefinition = d.oneHasMany(Tag, 'site')
	tapsters: d.OneHasManyDefinition = d.oneHasMany(Tapster, 'site')
	locations: d.OneHasManyDefinition = d.oneHasMany(Location, 'site')
}
