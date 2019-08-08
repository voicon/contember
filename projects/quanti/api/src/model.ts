import { InputValidation as v, SchemaDefinition as d } from 'cms-api'

export const One = d.createEnum('One')
export const MediumType = d.createEnum('image', 'video')

export class Locale {
	@v.required('The locale slug is required.')
	@v.assertPattern(/^[a-z]+$/, 'The locale slug must consist of lowercase letters only.')
	slug = d.stringColumn().unique()

	@v.required('The switch to label is required.')
	switchToLabel = d.stringColumn()
}

export class Linkable {
	url = d
		.stringColumn()
		.notNull()
		.unique()
	redirect: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Redirect, 'link')
	frontPageLocale: d.OneHasOneInversedDefinition = d.oneHasOneInversed(FrontPageLocale, 'link')
	page: d.OneHasOneInversedDefinition = d.oneHasOneInversed(PageLocale, 'link')
	contact: d.OneHasOneInversedDefinition = d.oneHasOneInversed(ContactLocale, 'link')
}

export class Redirect {
	link = d.oneHasOne(Linkable, 'redirect').notNull()
	target = d.manyHasOne(Linkable).notNull()
}

export const State = d.createEnum('Draft', 'ToBePublished', 'Published')

export class Image {
	url = d.stringColumn()
}

export class Video {
	url = d.stringColumn()
	poster = d.manyHasOne(Image).cascadeOnDelete()
}

export class Medium {
	type = d.enumColumn(MediumType)
	image = d.manyHasOne(Image).cascadeOnDelete()
	video = d.manyHasOne(Video).cascadeOnDelete()
}

export class Seo {
	title = d.stringColumn()
	description = d.stringColumn()
	ogImage = d.oneHasOne(Image).cascadeOnDelete()
	ogTitle = d.stringColumn()
	ogDescription = d.stringColumn()
}

export class ImageGrid {
	imagePosition1 = d.manyHasOne(Image).cascadeOnDelete()
	imagePosition2 = d.manyHasOne(Image).cascadeOnDelete()
	imagePosition3 = d.manyHasOne(Image).cascadeOnDelete()
	imagePosition4 = d.manyHasOne(Image).cascadeOnDelete()
	imagePosition5 = d.manyHasOne(Image).cascadeOnDelete()
	imagePosition6 = d.manyHasOne(Image).cascadeOnDelete()
}

export const BlockType = d.createEnum(
	'Heading',
	'Text',
	'Image',
	'ImageGrid',
	'Numbers',
	'Perks',
	'People',
	'Category',
	'Collapse',
)

export class Numbers {
	order = d.intColumn()
	number = d.stringColumn()
	label = d.stringColumn()
	block: d.ManyHasOneDefinition = d.manyHasOne(Block, 'numbers')
}

export class Perk {
	order = d.intColumn()
	title = d.stringColumn()
	description = d.stringColumn()
	block: d.ManyHasOneDefinition = d.manyHasOne(Block, 'perks')
}

export class Collapse {
	title = d.stringColumn()
	items: d.OneHasManyDefinition = d.oneHasMany(CollapseItem, 'collapse')
}

export class CollapseItem {
	order = d.intColumn()
	heading = d.stringColumn()
	text = d.stringColumn()
	linkTarget = d.stringColumn()
	linkCaption = d.stringColumn()

	image = d.manyHasOne(Image).cascadeOnDelete()
	collapse = d.manyHasOne<Collapse>(Collapse, 'items').cascadeOnDelete()
}

export class Block {
	pageLocale: d.ManyHasOneDefinition = d.manyHasOne(PageLocale, 'content').cascadeOnDelete()
	order = d.intColumn()
	type = d.enumColumn(BlockType)
	text = d.stringColumn()
	imageGrid = d.manyHasOne(ImageGrid)
	image = d.manyHasOne(Image)
	category = d.manyHasOne(Category).cascadeOnDelete()
	numbers = d.oneHasMany(Numbers, 'block')
	perks = d.oneHasMany(Perk, 'block')
	people: d.OneHasManyDefinition = d.oneHasMany(BlockPerson, 'block')
	collapse = d.manyHasOne(Collapse)
}

export class BlockPerson {
	order = d.intColumn()
	block = d.manyHasOne(Block, 'people')
	person = d.manyHasOne(Person).cascadeOnDelete()
}

export class MenuItem {
	order = d.intColumn()
	locales: d.OneHasManyDefinition = d.oneHasMany(MenuItemLocale, 'menuItem')
}

@d.Unique('menuItem', 'locale')
export class MenuItemLocale {
	label = d.stringColumn()
	menuItem = d
		.manyHasOne(MenuItem, 'locales')
		.cascadeOnDelete()
		.notNull()
	locale = d.manyHasOne(Locale).notNull()
	target = d.manyHasOne(Linkable).notNull()
}

export const SocialNetwork = d.createEnum('Facebook', 'Twitter', 'LinkedIn', 'Instagram')

export class Social {
	network = d.enumColumn(SocialNetwork).unique()
	url = d.stringColumn()
}

export class Footer {
	unique = d
		.enumColumn(One)
		.notNull()
		.unique()
	locales: d.OneHasManyDefinition = d.oneHasMany(FooterLocale, 'footer')
}

@d.Unique('footer', 'locale')
export class FooterLocale {
	address = d.stringColumn()

	footer = d
		.manyHasOne(Footer, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
}

export class FrontPage {
	unique = d
		.enumColumn(One)
		.notNull()
		.unique()
	headerMedium = d.manyHasOne(Medium)
	imageGrid = d.manyHasOne(ImageGrid)
	locales: d.OneHasManyDefinition = d.oneHasMany(FrontPageLocale, 'frontPage')
}

@d.Unique('frontPage', 'locale')
export class FrontPageLocale {
	seo = d.oneHasOne(Seo).notNull()
	header = d.stringColumn()
	quote = d.stringColumn()

	partnersHeader = d.stringColumn()
	partnersContent = d.stringColumn()

	peopleHeader = d.stringColumn()
	peopleSubheader = d.stringColumn()
	peopleLink = d.stringColumn()
	peopleLinkTarget = d.manyHasOne(Linkable).onDelete(d.OnDelete.setNull)

	contactUs = d.stringColumn()
	findUsHeader = d.stringColumn()
	findUsSubheader = d.stringColumn()
	link = d.oneHasOne(Linkable, 'frontPageLocale').notNull()

	frontPage = d
		.manyHasOne(FrontPage, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
}

export class Person {
	order = d.intColumn()
	image = d.manyHasOne(Image).cascadeOnDelete()
	showOnFrontPage = d.boolColumn().notNull()
	email = d.stringColumn()
	locales: d.OneHasManyDefinition = d.oneHasMany(PersonLocale, 'person')
}

@d.Unique('person', 'locale')
export class PersonLocale {
	quote = d.stringColumn()
	name = d.stringColumn()
	position = d.stringColumn()
	person = d.manyHasOne(Person, 'locales').cascadeOnDelete() // fixme .notNull()
	locale = d.manyHasOne(Locale).notNull()
}

export class Page {
	image = d.manyHasOne(Image).cascadeOnDelete()
	category = d.manyHasOne(Category, 'pages').onDelete(d.OnDelete.setNull)
	locales: d.OneHasManyDefinition = d.oneHasMany(PageLocale, 'page')
}

@d.Unique('page', 'locale')
export class PageLocale {
	page = d.manyHasOne(Page, 'locales').cascadeOnDelete() // fixme .notNull()
	locale = d.manyHasOne(Locale).notNull()
	state = d.enumColumn(State).notNull()
	header = d.stringColumn()
	perex = d.stringColumn()
	content = d.oneHasMany(Block, 'pageLocale')
	contactUs = d.stringColumn()
	seo = d
		.oneHasOne(Seo)
		.notNull()
		.cascadeOnDelete()
	link = d.oneHasOne(Linkable, 'page').notNull()
}

export class Category {
	pages: d.OneHasManyDefinition = d.oneHasMany(Page, 'category')
	locales: d.OneHasManyDefinition = d.oneHasMany(CategoryLocale, 'category')
}

@d.Unique('category', 'locale')
export class CategoryLocale {
	locale = d.manyHasOne(Locale).notNull()
	category = d
		.manyHasOne(Category, 'locales')
		.notNull()
		.cascadeOnDelete()
	name = d.stringColumn()
}

export class Contact {
	unique = d
		.enumColumn(One)
		.notNull()
		.unique()
	locales: d.OneHasManyDefinition = d.oneHasMany(ContactLocale, 'contact')
}

@d.Unique('contact', 'locale')
export class ContactLocale {
	contact = d
		.manyHasOne(Contact, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
	header = d.stringColumn()
	seo = d
		.oneHasOne(Seo)
		.notNull()
		.cascadeOnDelete()
	link = d.oneHasOne(Linkable, 'contact').notNull()
}

export class Place {
	order = d.intColumn().notNull()
	state = d.enumColumn(State).notNull()
	isBiggerOnFrontPage = d.boolColumn().notNull()
	gpsLat = d.doubleColumn()
	gpsLng = d.doubleColumn()
	locales: d.OneHasManyDefinition = d.oneHasMany(PlaceLocale, 'place')
}

@d.Unique('place', 'locale')
export class PlaceLocale {
	place = d
		.manyHasOne(Place, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
	name = d.stringColumn().notNull()
	address = d.stringColumn().notNull()
	subAddress = d.stringColumn()
	email = d.stringColumn()
	phone = d.stringColumn()
}

export class TranslationRoot {
	unique = d
		.enumColumn(One)
		.unique()
		.notNull()
	translated: d.OneHasManyDefinition = d.oneHasMany(Translated, 'root')
}

export const Translatable = d.createEnum('emailContent', 'emailContact', 'emailSend', 'emailSentMessage')

@d.Unique('locale', 'translatable')
export class Translated {
	root = d
		.manyHasOne(TranslationRoot, 'translated')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
	translatable = d.enumColumn(Translatable).notNull()
	translated = d.stringColumn().notNull()
}

export class JoinUsRoot {
	unique = d
		.enumColumn(One)
		.notNull()
		.unique()
	joinUs: d.OneHasManyDefinition = d.oneHasMany(JoinUs, 'root')
}

@d.Unique('root', 'locale')
export class JoinUs {
	root = d
		.manyHasOne(JoinUsRoot, 'joinUs')
		.notNull()
		.cascadeOnDelete()
	locale = d.manyHasOne(Locale).notNull()
	target = d.manyHasOne(Linkable).notNull()
	label = d.stringColumn().notNull()
}

export class ContactMessage {
	contact = d.stringColumn()
	message = d.stringColumn()
	sentAt = d.dateTimeColumn()
}
