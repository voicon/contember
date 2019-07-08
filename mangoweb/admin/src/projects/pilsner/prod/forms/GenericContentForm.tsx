import * as React from 'react'
import { AlternativeFields, Component, Literal, SortableRepeater, TextAreaField, TextField } from 'cms-admin'
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
								<TextField name="title" label={'Title'} />
								<TextAreaField name="text" label={'Text'} />
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
