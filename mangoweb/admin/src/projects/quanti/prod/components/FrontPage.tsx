import { H2 } from '@blueprintjs/core'
import {
	Block,
	Component,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SelectField,
	TextAreaField,
	TextField
} from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { ImageGrid } from './ImageGrid'
import { Link } from './Link'
import { Medium } from './Medium'
import { Seo } from './Seo'

export const FrontPage = Component(
	() => (
		<>
			<Medium label="Header medium" name="headerMedium" />
			<LocaleSideDimension>
				<TextAreaField label="Heading" name="$locale.header" />
				<TextField label="Quote" name="$locale.quote" />
			</LocaleSideDimension>
			<H2>Partners</H2>
			<LocaleSideDimension>
				<TextField label="Header" name="$locale.partnersHeader" />
				<RichTextField
					label="Content"
					name="$locale.partnersContent"
					lineBreakBehavior={LineBreakBehavior.DISABLE}
					blocks={[{ block: Block.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
			</LocaleSideDimension>
			<H2>People</H2>
			<LocaleSideDimension>
				<TextField label="Header" name="$locale.peopleHeader" />
				<TextField label="Subheader" name="$locale.peopleSubheader" />
				<TextField label="Link caption" name="$locale.peopleLink" />
				<SelectField label="Link target" name="$locale.peopleLinkTarget" options="Linkable.url" />
			</LocaleSideDimension>
			<H2>Image grid</H2>
			<ImageGrid name="imageGrid" />
			<LocaleSideDimension>
				<Seo name="$locale.seo" />
			</LocaleSideDimension>

			<H2>Contact and find us</H2>
			<LocaleSideDimension>
				<RichTextField
					label="Contact us"
					name="$locale.contactUs"
					blocks={[{ block: Block.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
				<TextField label="Find us header" name="$locale.findUsHeader" />
				<TextField label="Find us subheader" name="$locale.findUsSubheader" />
			</LocaleSideDimension>

			<H2>Links</H2>
			<LocaleSideDimension>
				<Link name="$locale.link" />
			</LocaleSideDimension>
		</>
	),
	'FrontPage'
)
