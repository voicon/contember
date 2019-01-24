import { AlternativeFields, Component, FieldName, Literal, TextField, TextFieldProps, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, ImageFieldProps } from './ImageField'
import { VideoField } from './VideoField'

export interface MediumProps {
	field: FieldName
	label?: string
	imageLabel?: string
	videoLabel?: string
}

export const Medium = Component<MediumProps>(
	props => (
		<ToOne field={props.field}>
			<AlternativeFields
				name="type"
				alternatives={[
					[new Literal('image'), 'Image', <>
						<ImageField name="image" label={props.imageLabel || 'The image'} />
					</>],
					[new Literal('video'), 'Video', <>
						<VideoField name="video" label={props.videoLabel || 'Video URL'} />
					</>]
				]}
				label={props.label}
			/>
		</ToOne>
	),
	'Medium'
)
