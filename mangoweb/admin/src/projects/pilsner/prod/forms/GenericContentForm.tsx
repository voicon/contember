import {
	AlternativeFields,
	Block,
	Component,
	LineBreakBehavior,
	Literal,
	Mark,
	RichTextField,
	SortableRepeater,
	TextAreaField,
	TextField
} from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const GenericContentForm = Component(
	() => (
		<>
			<h2>Content</h2>
			<SortableRepeater sortBy={'order'} field={'content.blocks'}>
				<AlternativeFields
					name="type"
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
										{ block: Block.HEADING, marks: [] }
									]}
								/>
							</>
						],
						[
							new Literal('contentImage'),
							'Image',
							<>
								<ImageField name={'image'} label={'Image'} />
							</>
						],
						[
							new Literal('contentHtml'),
							'HTML',
							<>
								<TextAreaField name="text" label={'Text'} />
							</>
						]
					]}
				/>
			</SortableRepeater>
		</>
	),
	'GenericContentForm'
)
