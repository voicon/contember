import {
	Block,
	BlockType,
	Box,
	Component,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SlugField,
	SortableBlockRepeater,
	TextAreaField,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LocaleSideDimension, SiteField } from '../components'
import { SeoForm } from './'

export const GenericContentForm = Component(
	() => (
		<ToOne field="content">
			<SiteField />
			<SortableBlockRepeater
				sortBy="order"
				field="blocks"
				removeType="delete"
				discriminationField="type"
				label="Content"
				enableUnlinkAll={true}
			>
				<Block discriminateBy="text" label="Text">
					<RichTextField
						label="Text"
						name="text"
						lineBreakBehavior={LineBreakBehavior.SMART}
						blocks={[
							{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK, Mark.ITALIC, Mark.UNDERLINED] },
							{ block: BlockType.HEADING_H2, marks: [] },
							{ block: BlockType.HEADING_H3, marks: [] },
						]}
					/>
				</Block>
				<Block discriminateBy="image" label="Image">
					<ImageField name="image" label="Image" />
				</Block>
			</SortableBlockRepeater>
		</ToOne>
	),
	'GenericContentForm',
)

export const PostForm = Component(
	() => (
		<>
			<LocaleSideDimension>
				<Box>
					<TextField name="title" size="large" label={'Title'} />
					<SlugField drivenBy="title" label={'Slug'} name={'slug'} />
					<ImageField name={'image'} label={'Image'} />
					<TextAreaField name="perex" label="Perex" />
					<GenericContentForm />
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</>
	),
	'PostForm',
)

export const PostFormSide = Component(() => <IsPublishedField />, 'PostFormSide')
