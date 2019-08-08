import { Component, FieldName, VideoUploadField } from 'cms-admin'
import * as React from 'react'

export interface VideoProps {
	name: FieldName
	label?: string
}

export const Video = Component<VideoProps>(
	props => <VideoUploadField label={`${props.label || 'Video'}: url`} name={`${props.name}.url`} />,
	'Image',
)
