import { AlternativeFields, Component, FieldName, Literal, ToOne } from 'cms-admin'
import * as React from 'react'
import { Image } from './Image'
import { Video } from './Video'

export interface MediumProps {
	name: FieldName
	label?: string
	imageLabel?: string
	videoLabel?: string
}

export const Medium = Component<MediumProps>(
	props => (
		<ToOne field={props.name}>
			<AlternativeFields
				name="type"
				alternatives={[
					[new Literal('image'), 'Image', <Image name="image" label={props.imageLabel} />],
					[new Literal('video'), 'Video', <Video name="video" label={props.videoLabel} />]
				]}
				label={props.label}
			/>
		</ToOne>
	),
	'Medium'
)
