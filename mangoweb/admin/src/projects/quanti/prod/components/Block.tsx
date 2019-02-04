import * as React from 'react'
import { Component, AlternativeFields, Literal, TextField, SortableRepeater } from 'cms-admin'
import { Image } from './Image'
import { ImageGrid } from './ImageGrid'

export const Block = Component<{}>(
	() => (
		<>
			<AlternativeFields
				name="type"
				alternatives={[
					[new Literal('Heading'), 'Heading', <TextField name="text" />],
					[new Literal('Text'), 'Text', <TextField name="text" />],
					[new Literal('Image'), 'Image', <Image name="image" />],
					[new Literal('ImageGrid'), 'ImageGrid', <ImageGrid name="imageGrid" />],
					[
						new Literal('Numbers'),
						'Numbers',
						<SortableRepeater field="numbers" sortBy="order">
							<TextField label="number" name="number" />
							<TextField label="label" name="label" />
						</SortableRepeater>
					]
				]}
			/>
		</>
	),
	'Block'
)
