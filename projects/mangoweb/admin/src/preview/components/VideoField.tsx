import { Card, H3 } from '@blueprintjs/core'
import { Component, VideoUploadField } from 'cms-admin'
import * as React from 'react'
import { ImageField } from './ImageField'

interface VideoFieldProps {
	name: string
	title: React.ReactNode
}

export const VideoField = Component<VideoFieldProps>(props => (
	<Card>
		<H3>{props.title}</H3>
		<VideoUploadField name={`${props.name}.src`} label="Video" />
		<ImageField name={`${props.name}.poster`} label="Video poster image" />
	</Card>
))
