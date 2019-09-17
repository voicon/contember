import { Block, Component, DiscriminatedBlocks, FieldName, Literal, ToOne } from 'cms-admin'
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
			<DiscriminatedBlocks name="type" label={props.label}>
				<Block discriminateBy="image" label="Image">
					<Image name="image" label={props.imageLabel} />
				</Block>
				<Block discriminateBy="video" label="Video">
					<Video name="video" label={props.videoLabel} />
				</Block>
			</DiscriminatedBlocks>
		</ToOne>
	),
	'Medium',
)
