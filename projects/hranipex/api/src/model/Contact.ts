import { SchemaDefinition as d } from '@contember/schema-definition'
import { Site, SiteLocale } from './Site'
import { Image } from './Media'

export class Contact {
	site = d
		.oneHasOne(Site, 'contact')
		.notNull()
		.cascadeOnDelete()
	locales: d.OneHasManyDefinition = d.oneHasMany(ContactLocale, 'root')
	departments: d.OneHasManyDefinition = d.oneHasMany(ContactDepartment, 'contact')
	countries: d.OneHasManyDefinition = d.oneHasMany(ContactCountry, 'contact')
}

@d.Unique('root', 'locale')
export class ContactLocale {
	root = d
		.manyHasOne(Contact, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d
		.manyHasOne(SiteLocale)
		.notNull()
		.cascadeOnDelete()
	info = d.stringColumn().notNull()
	items: d.OneHasManyDefinition = d.oneHasMany(ContactLocaleItem, 'contactLocale')
}

export class ContactLocaleItem {
	contactLocale = d
		.manyHasOne(ContactLocale, 'items')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	key = d.stringColumn()
	value = d.stringColumn()
}

@d.Unique('contact', 'code')
export class ContactCountry {
	contact = d
		.manyHasOne(Contact, 'countries')
		.notNull()
		.cascadeOnDelete()
	regions: d.OneHasManyDefinition = d.oneHasMany(ContactRegion, 'country')
	people: d.OneHasManyDefinition = d.oneHasMany(ContactCountryPerson, 'country')
	// ISO 3166-2
	code = d.stringColumn().notNull()
	site = d.oneHasOne(Site).setNullOnDelete()
}

@d.Unique('country', 'code')
export class ContactRegion {
	country = d.manyHasOne(ContactCountry, 'regions').notNull()
	people: d.OneHasManyDefinition = d.oneHasMany(ContactRegionPerson, 'region')
	// ISO 3166-2
	code = d.stringColumn().notNull()
	name = d.stringColumn().notNull()
}

export const ContactDepartmentSpecialType = d.createEnum('sales', 'management')

@d.Unique('contact', 'type')
export class ContactDepartment {
	contact = d
		.manyHasOne(Contact, 'departments')
		.notNull()
		.cascadeOnDelete()
	type = d.enumColumn(ContactDepartmentSpecialType)
	order = d.intColumn().notNull()
	locales: d.OneHasManyDefinition = d.oneHasMany(ContactDepartmentLocale, 'root')
	people: d.OneHasManyDefinition = d.oneHasMany(ContactPerson, 'department')
}

@d.Unique('root', 'locale')
export class ContactDepartmentLocale {
	root = d
		.manyHasOne(ContactDepartment, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d
		.manyHasOne(SiteLocale)
		.notNull()
		.cascadeOnDelete()
	name = d.stringColumn().notNull()
}

export class ContactPerson {
	name = d.stringColumn().notNull()
	image = d.manyHasOne(Image)
	phone = d.stringColumn()
	email = d.stringColumn()
	locales: d.OneHasManyDefinition = d.oneHasMany(ContactPersonLocale, 'root')
	department = d
		.manyHasOne(ContactDepartment, 'people')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	countries: d.OneHasManyDefinition = d.oneHasMany(ContactCountryPerson, 'person')
	regions: d.OneHasManyDefinition = d.oneHasMany(ContactRegionPerson, 'person')
}

@d.Unique('root', 'locale')
export class ContactPersonLocale {
	root = d
		.manyHasOne(ContactPerson, 'locales')
		.notNull()
		.cascadeOnDelete()
	locale = d
		.manyHasOne(SiteLocale)
		.notNull()
		.cascadeOnDelete()
	jobTitle = d.stringColumn()
}

export class ContactCountryPerson {
	person = d
		.manyHasOne(ContactPerson, 'countries')
		.notNull()
		.cascadeOnDelete()
	country = d
		.manyHasOne(ContactCountry, 'people')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
}

export class ContactRegionPerson {
	person = d
		.manyHasOne(ContactPerson, 'regions')
		.notNull()
		.cascadeOnDelete()
	region = d
		.manyHasOne(ContactRegion, 'people')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
}
