import { SchemaDefinition as d } from '@contember/schema-definition'
import { TranslationSet } from './Translations'
import { FrontPage, FrontPageLocale } from './FrontPage'

export class Site {
	code = d
		.stringColumn()
		.notNull()
		.unique()
	order = d.intColumn().notNull()
	locales: d.OneHasManyDefinition = d.oneHasMany(SiteLocale, 'site')
	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPage, 'site')
}

@d.Unique('site', 'code')
export class SiteLocale {
	code = d.stringColumn().notNull()
	order = d.intColumn().notNull()
	site = d.manyHasOne(Site, 'locales')

	translationSet = d.oneHasOne(TranslationSet, 'locale').notNull()

	frontPage: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPageLocale, 'locale')
}
