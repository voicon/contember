import {
	Block,
	BlockType,
	Box,
	Component,
	FileUploadField,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SlugField,
	SortableBlockRepeater,
	SortableRepeater,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'
import { ImageField, LinkField, LocaleSideDimension, SiteField } from '../components'
import { SeoForm } from './'

export const ContentPageContentForm = Component(
	() => (
		<ToOne field={'content'}>
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
					<ImageField name={'image'} label={'Image'} />
				</Block>
				<Block discriminateBy="textBox" label="Text box">
					<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
				</Block>
				<Block discriminateBy="imageBoxLeft" label="Image box left">
					<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<ImageField name={'image'} label={'Image'} />
				</Block>
				<Block discriminateBy="imageBoxRight" label="Image box right">
					<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<ImageField name={'image'} label={'Image'} />
				</Block>
				<Block discriminateBy="imageBoxCircleLeft" label="Image box circle">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<ImageField name={'image'} label={'Image'} />
				</Block>
				<Block discriminateBy="grid" label="Grid">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<TextField name={'buttonCaption'} label={'Button caption'} />
					<LinkField name={'buttonLink'} />
					<SortableRepeater field={'children.items'} sortBy={'order'} removeType={'delete'}>
						<TextField name={'title'} label={'Title'} allowNewlines={true} />
						<TextField name={'text'} label={'Text'} allowNewlines={true} />
						<ImageField name={'image'} label={'Image'} />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="circleList" label="Circle list">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<TextField name={'subtitle'} label={'Subtitle'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<SortableRepeater field={'children.items'} sortBy={'order'} removeType={'delete'}>
						<TextField name={'title'} label={'Title'} allowNewlines={true} />
						<TextField name={'text'} label={'Text'} allowNewlines={true} />
						<ImageField name={'image'} label={'Image'} />
						<TextField name={'buttonCaption'} label={'Button caption'} />
						{/*<LinkField name={'buttonLink'} />*/}
					</SortableRepeater>
				</Block>
				<Block discriminateBy="squareList" label="Square list">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<TextField name={'subtitle'} label={'Subtitle'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<SortableRepeater field={'children.items'} sortBy={'order'} removeType={'delete'}>
						<TextField name={'title'} label={'Title'} allowNewlines={true} />
						<TextField name={'text'} label={'Text'} allowNewlines={true} />
						<ImageField name={'image'} label={'Image'} />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="timeline" label="Timeline">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<TextField name={'text'} label={'Text'} allowNewlines={true} />
					<SortableRepeater field={'children.items'} sortBy={'order'} removeType={'delete'}>
						<TextField name={'title'} label={'Title'} allowNewlines={true} />
						<TextField name={'text'} label={'Text'} allowNewlines={true} />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="attachmentSection" label="Attachment section">
					<TextField name={'title'} label={'Title'} allowNewlines={true} />
					<SortableRepeater field={'children.items'} sortBy={'order'} removeType={'delete'}>
						<TextField name={'title'} label={'Title'} allowNewlines={true} />
						<FileUploadField name="attachment.url" label="File" />
					</SortableRepeater>
				</Block>
			</SortableBlockRepeater>
		</ToOne>
	),
	'GenericContentForm',
)

export const ContentPageForm = Component(
	() => (
		<>
			<LocaleSideDimension>
				<Box>
					<TextField name="title" size="large" label={'Title'} />
					<SlugField drivenBy="title" label={'Slug'} name={'slug'} />
					<ContentPageContentForm />
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</>
	),
	'PostForm',
)
