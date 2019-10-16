import { SchemaDefinition as d } from '@contember/schema-definition'
import { Site, SiteLocale } from './Site'

export class FaqCategory {
	locales = d.oneHasMany(FaqCategoryLocale, 'root')
	site = d
		.manyHasOne(Site, 'faqCategories')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	questions: d.OneHasManyDefinition = d.oneHasMany(FaqQuestion, 'category')
}

@d.Unique('root', 'locale')
export class FaqCategoryLocale {
	root: d.ManyHasOneDefinition = d
		.manyHasOne(FaqCategory, 'locales')
		.cascadeOnDelete()
		.notNull()
	locale = d
		.manyHasOne(SiteLocale, 'faqCategories')
		.cascadeOnDelete()
		.notNull()
	name = d.stringColumn().notNull()
}

export class FaqQuestion {
	locales = d.oneHasMany(FaqQuestionLocale, 'root')
	site = d
		.manyHasOne(Site, 'faqQuestions')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	category = d
		.manyHasOne(FaqCategory, 'questions')
		.notNull()
		.cascadeOnDelete()
}

@d.Unique('root', 'locale')
export class FaqQuestionLocale {
	root: d.ManyHasOneDefinition = d
		.manyHasOne(FaqQuestion, 'locales')
		.cascadeOnDelete()
		.notNull()
	locale = d
		.manyHasOne(SiteLocale, 'faqQuestions')
		.cascadeOnDelete()
		.notNull()
	question = d.stringColumn().notNull()
	answer = d.stringColumn().notNull()
}
