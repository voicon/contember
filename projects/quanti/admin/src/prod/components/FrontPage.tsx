import { H2 } from '@blueprintjs/core'
import {
	Block,
	Component,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SelectField,
	TextAreaField,
	TextField,
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
				<TextAreaField label="Heading" name="header" />
				<TextField label="Quote" name="quote" />
			</LocaleSideDimension>
			<H2>Partners</H2>
			<LocaleSideDimension>
				<TextField label="Header" name="partnersHeader" />
				<RichTextField
					label="Content"
					name="partnersContent"
					lineBreakBehavior={LineBreakBehavior.DISABLE}
					blocks={[{ block: Block.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
			</LocaleSideDimension>
			<H2>People</H2>
			<LocaleSideDimension>
				<TextField label="Header" name="peopleHeader" />
				<TextField label="Subheader" name="peopleSubheader" />
				<TextField label="Link caption" name="peopleLink" />
				<SelectField label="Link target" name="peopleLinkTarget" options="Linkable.url" />
			</LocaleSideDimension>
			<H2>Image grid</H2>
			<ImageGrid name="imageGrid" />
			<LocaleSideDimension>
				<Seo name="seo" />
			</LocaleSideDimension>

			<H2>Contact and find us</H2>
			<LocaleSideDimension>
				<RichTextField
					label="Contact us"
					name="contactUs"
					blocks={[{ block: Block.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
				<TextField label="Find us header" name="findUsHeader" />
				<TextField label="Find us subheader" name="findUsSubheader" />
			</LocaleSideDimension>

			<H2>Links</H2>
			<LocaleSideDimension>
				<Link name="link" />
			</LocaleSideDimension>
		</>
	),
	'FrontPage',
)
