import { SchemaDefinition as d } from '@contember/schema-definition'
import { TranslationSet } from './Translations'
import { FrontPage, FrontPageLocale } from './FrontPage'
import { Post, PostLocale } from './Post'
import { FooterLocale } from './Footer'
import { HeaderLocale } from './Header'
import { ContentPage, ContentPageLocale } from './ContentPage'

export class Site {
	code = d
		.stringColumn()
		.notNull()
		.unique()
	order = d.intColumn().notNull()
	locales: d.OneHasManyDefinition = d.oneHasMany(SiteLocale, 'site')
	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPage, 'site')
	posts: d.OneHasManyDefinition = d.oneHasMany(Post, 'site')
	pages: d.OneHasManyDefinition = d.oneHasMany(ContentPage, 'site')
}

@d.Unique('site', 'code')
export class SiteLocale {
	code = d.stringColumn().notNull()
	order = d.intColumn().notNull()
	site = d.manyHasOne(Site, 'locales').notNull()

	translationSet = d.oneHasOne(TranslationSet, 'locale').notNull()

	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPageLocale, 'locale')
	posts: d.OneHasManyDefinition = d.oneHasMany(PostLocale, 'locale')
	footer: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FooterLocale, 'locale')
	header: d.OneHasOneInversedDefinition = d.oneHasOneInversed(HeaderLocale, 'locale')
	pages: d.OneHasManyDefinition = d.oneHasMany(ContentPageLocale, 'locale')
}
