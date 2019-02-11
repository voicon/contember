import * as React from 'react'
import { Component, FieldName, UploadField } from 'cms-admin'

export interface ImageProps {
	name: FieldName
	label?: string
}

export const Image = Component<ImageProps>(
	props => <UploadField label={`${props.label || 'Image'}: url`} name={`${props.name}.url`} />,
	'Image'
)
