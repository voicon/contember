import { SchemaDefinition as d } from 'cms-api'
import { Site } from './Site'
import { Linkable } from './Links'

export class Footer {
	site = d
		.oneHasOne(Site, 'footer')
		.notNull()
		.cascadeOnDelete()
	contactLabel = d.stringColumn()
	contactLink = d.stringColumn()

	copyright = d.stringColumn()
	copyrightJap = d.stringColumn()

	dontDriveSticky = d.stringColumn()
	dontDriveHeading = d.stringColumn()
	dontDriveLink = d.stringColumn()

	links: d.OneHasManyDefinition = d.oneHasMany(FooterLink, 'footer')
}

export class FooterLink {
	footer = d
		.manyHasOne(Footer, 'links')
		.cascadeOnDelete()
		.notNull()
	order = d.intColumn().notNull()
	caption = d.stringColumn()

	linkType = d.enumColumn(d.createEnum('internal', 'external')).notNull()
	link = d.manyHasOne(Linkable).cascadeOnDelete()
	linkUrl = d.stringColumn()
}
