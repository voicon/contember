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
									{ block: Block.HEADING, marks: [] },
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
				]}
			/>
		</>
	),
	'GenericContentForm',
)
