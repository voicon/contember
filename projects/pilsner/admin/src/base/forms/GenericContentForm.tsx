import {
	Block,
	BlockType,
	Component,
	LineBreakBehavior,
	Mark,
	RichTextField,
	SelectField,
	SortableBlockRepeater,
	SortableRepeater,
	TextAreaField,
	TextField,
	ToOne,
	VideoUploadField,
} from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const GenericContentForm = Component(
	() => (
		<>
			<SortableBlockRepeater
				sortBy="order"
				field="content.blocks"
				removeType="delete"
				discriminationField="type"
				label="Content"
			>
				<Block discriminateBy="contentTextSection" label="Text section">
					<RichTextField
						label="Text"
						name="text"
						lineBreakBehavior={LineBreakBehavior.SMART}
						blocks={[
							{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK, Mark.ITALIC] },
							{ block: BlockType.HEADING_H2, marks: [] },
							{ block: BlockType.HEADING_H3, marks: [] },
						]}
					/>
				</Block>
				<Block discriminateBy="contentImage" label="Image">
					<ImageField name="image" label="Image" />
				</Block>
				<Block discriminateBy="contentHtml" label="HTML">
					<TextAreaField name="text" label="Text" />
				</Block>
				<Block discriminateBy="contentGallery" label="Desktop gallery">
					<ToOne field="gallery">
						<SortableRepeater sortBy="order" field="images" removeType="delete">
							<ImageField name="image" label="Image" />
							<TextField name="caption" label="Caption" />
						</SortableRepeater>
					</ToOne>
				</Block>
				<Block discriminateBy="frontTextBox" label="Text box">
					<TextField name="title" label="Title" allowNewlines />
					<TextField name="subtitle" label="Subtitle" allowNewlines />
					<TextAreaField name="text" label="Text" />
				</Block>
				<Block discriminateBy="hero" label="Hero" description="Image covered by a text">
					<TextField name="title" label="Title" allowNewlines />
					<ImageField name="image" label="Image" />
				</Block>
				<Block discriminateBy="relatedTapsters" label="Related tapsters">
					<ToOne field="tapsterSet">
						<SortableRepeater sortBy="order" field="tapsters" removeType="delete">
							<SelectField name={'tapster'} label={'Tapster'} options={'Tapster[site.slug=$site].name'} />
						</SortableRepeater>
					</ToOne>
				</Block>
				<Block discriminateBy="relatedPosts" label="Related posts">
					<ToOne field="postSet">
						<SortableRepeater sortBy="order" field="posts" removeType="delete">
							<SelectField name={'post'} label={'Post'} options={'Post[site.slug=$site].title'} />
						</SortableRepeater>
					</ToOne>
				</Block>
				<Block discriminateBy="videos" label="Videos">
					<ToOne field="gallery">
						<SortableRepeater sortBy="order" field="images" removeType="delete">
							<VideoUploadField name="video.url" label="Video URL" />
							<ImageField name="image" label="Image" />
							<TextField name="caption" label="Caption" allowNewlines />
							<TextField name="subtitle" label="Subtitle" />
						</SortableRepeater>
					</ToOne>
				</Block>
				<Block discriminateBy="frontPhoneGallery" label="Front phone gallery">
					<ToOne field="gallery">
						<SortableRepeater sortBy="order" field="images" removeType="delete">
							<ImageField name="image" label="Image" single />
						</SortableRepeater>
					</ToOne>
				</Block>
				<Block discriminateBy="frontDesktopGallery" label="Front desktop gallery">
					<ToOne field="gallery">
						<SortableRepeater sortBy="order" field="images" removeType="delete">
							<ImageField name="image" label="Image" single />
						</SortableRepeater>
					</ToOne>
				</Block>
			</SortableBlockRepeater>
		</>
	),
	'GenericContentForm',
)
