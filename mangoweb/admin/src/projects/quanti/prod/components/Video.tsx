import * as React from 'react'
import { Component, FieldName, UploadField } from 'cms-admin'

export interface VideoProps {
	name: FieldName
	label?: string
}

export const Video = Component<VideoProps>(
	props => <UploadField label={`${props.label || 'Video'}: url`} name={`${props.name}.url`} />,
	'Image'
)
