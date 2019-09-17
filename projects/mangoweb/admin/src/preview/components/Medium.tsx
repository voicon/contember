import { Block, Component, DiscriminatedBlocks, FieldName, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField } from './ImageField'
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
			<DiscriminatedBlocks name="type" label={props.label}>
				<Block discriminateBy="image" label="Image">
					<ImageField name="image" label={props.imageLabel || 'The image'} />
				</Block>
				<Block discriminateBy="video" label="Video">
					<VideoField name="video" title={props.videoLabel || 'Video'} />
				</Block>
			</DiscriminatedBlocks>
		</ToOne>
	),
	'Medium',
)
