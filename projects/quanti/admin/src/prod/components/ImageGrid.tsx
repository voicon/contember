import * as React from 'react'
import { Component, FieldName } from 'cms-admin'
import { Image } from './Image'

export interface ImageGridProps {
	name: FieldName
}

export const ImageGrid = Component<ImageGridProps>(
	props => (
		<>
			<Image label="Position 1" name={`${props.name}.imagePosition1`} />
			<Image label="Position 2" name={`${props.name}.imagePosition2`} />
			<Image label="Position 3" name={`${props.name}.imagePosition3`} />
			<Image label="Position 4" name={`${props.name}.imagePosition4`} />
			<Image label="Position 5" name={`${props.name}.imagePosition5`} />
			<Image label="Position 6" name={`${props.name}.imagePosition6`} />
		</>
	),
	'ImageGrid',
)
