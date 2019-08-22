import {
	Block,
	Component,
	LineBreakBehavior,
	Literal,
	Mark,
	RichTextField,
	SortableBlockRepeater,
	SortableRepeater,
	TextAreaField,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const GenericContentForm = Component(
	() => (
		<>
			<h2>Content</h2>
			<SortableBlockRepeater
				sortBy="order"
				field="content.blocks"
				discriminationField="type"
				alternatives={[
					[
						new Literal('contentTextSection'),
						'Text section',
						<>
							<RichTextField
								label="Text"
								name="text"
								lineBreakBehavior={LineBreakBehavior.SMART}
								blocks={[
									{ block: Block.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK, Mark.ITALIC] },
									{ block: Block.HEADING_H2, marks: [] },
									{ block: Block.HEADING_H3, marks: [] },
								]}
							/>
						</>,
					],
					[
						new Literal('contentImage'),
						'Image',
						<>
							<ImageField name={'image'} label={'Image'} />
						</>,
					],
					[
						new Literal('contentHtml'),
						'HTML',
						<>
							<TextAreaField name="text" label={'Text'} />
						</>,
					],
					[
						new Literal('contentGallery'),
						'Desktop gallery',
						<>
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<ImageField name={'image'} label={'Image'} />
									<TextField name={'caption'} label={'Caption'} />
								</SortableRepeater>
							</ToOne>
						</>,
					],
					[
						new Literal('frontTextBox'),
						'Text box',
						<>
							<TextField name="title" label={'Title'} allowNewlines />
							<TextField name="subtitle" label={'Subtitle'} allowNewlines />
							<TextAreaField name="text" label={'Text'} />
						</>,
					],
					[
						new Literal('hero'),
						'Hero',
						<>
							<TextField name="title" label={'Title'} allowNewlines />
							<ImageField name={'image'} label={'Image'} />
						</>,
					],
					[new Literal('relatedTapsters'), 'Related tapsters', <>Related tapsters</>],
					[new Literal('relatedPosts'), 'Related posts', <>Related posts</>],
					[new Literal('videos'), 'Videos', <>Videos</>],
					[
						new Literal('frontPhoneGallery'),
						'Front phone gallery',
						<>
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<ImageField name={'image'} label={'Image'} single={true} />
								</SortableRepeater>
							</ToOne>
						</>,
					],
					[
						new Literal('frontDesktopGallery'),
						'Front desktop gallery',
						<>
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<ImageField name={'image'} label={'Image'} single={true} />
								</SortableRepeater>
							</ToOne>
						</>,
					],
				]}
			/>
		</>
	),
	'GenericContentForm',
)
