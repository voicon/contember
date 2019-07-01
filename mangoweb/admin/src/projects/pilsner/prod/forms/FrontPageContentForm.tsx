import * as React from 'react'
import { AlternativeFields, Component, Literal, SortableRepeater, TextAreaField, TextField } from 'cms-admin'
import { ImageField } from '../components'

export const FrontPageContentForm = Component(
	() => (
		<SortableRepeater sortBy={'order'} field={'content.blocks'}>
			<AlternativeFields
				name="type"
				alternatives={[
					[
						new Literal('frontTextBox'),
						'Text box',
						<>
							<TextField name="title" label={'Title'} />
							<TextField name="subtitle" label={'Subtitle'} />
							<TextAreaField name="text" label={'Text'} />
						</>
					],
					[
						new Literal('frontHalfImageLeft'),
						'Image with text half split',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image.image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontHalfImageRight'),
						'Image with text half split #2',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image.image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontPhotoBox'),
						'Photo box',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image.image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontLargeImageWithTextBox'),
						'Text and large photo',
						<>
							<TextField name="title" label={'Title'} />
							<TextField name="subtitle" label={'Subtitle'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image.image'} label={'Image'} />
						</>
					]
				]}
			/>
		</SortableRepeater>
	),
	'FrontPageContentForm'
)
