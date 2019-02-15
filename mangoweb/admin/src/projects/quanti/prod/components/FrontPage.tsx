import * as React from 'react'
import { H2 } from '@blueprintjs/core'
import {
	Block,
	Component,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SortableRepeater,
	TextAreaField,
	TextField
} from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { ImageGrid } from './ImageGrid'
import { Seo } from './Seo'
import { Person } from './Person'
import { Link } from './Link'
import { Image } from './Image'

export const FrontPage = Component(
	() => (
		<>
			<H2>
				<Image label="Header image" name="headerImage" />
			</H2>
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
			<H2>People</H2>
			<SortableRepeater field="people" sortBy="order" removeType="delete">
				<Person />
			</SortableRepeater>
		</>
	),
	'FrontPage'
)
