import { Component, FieldName, ImageUploadField } from 'cms-admin'
import * as React from 'react'

export interface ImageProps {
	name: FieldName
	label?: string
}

export const Image = Component<ImageProps>(
	props => <ImageUploadField label={`${props.label || 'Image'}: url`} name={`${props.name}.url`} />,
	'Image',
)
