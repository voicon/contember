import * as React from 'react'
import {
	Component,
	TextField,
	SortableRepeater,
	RichTextField,
	Block as BlockType,
	Mark,
	TextAreaField,
	SelectField
} from 'cms-admin'
import { Image } from './Image'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Seo } from './Seo'
import { State } from './State'
import { Block } from './Block'
import { Link } from './Link'

export const Page = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField large={true} label="Header" name="$locale.header" />
			</LocaleSideDimension>
			<Image label="Image" name="image" />
			{/*<SelectField label="Category" name="category" options="Category.locales(locale.slug='en').name"/>*/}
			<SelectField label="Category" name="category" options="Category.id" />
			<LocaleSideDimension>
				<State name="$locale.state" />
				<TextAreaField label="Perex" name="$locale.perex" />
				<SortableRepeater field="$locale.content" label="Content" sortBy="order">
					<Block />
				</SortableRepeater>
				<RichTextField
					label="Contact us"
					name="$locale.contactUs"
					blocks={[{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
				<Seo name="$locale.seo" />
				<Link name="$locale.link" />
			</LocaleSideDimension>
		</>
	),
	'Page'
)
