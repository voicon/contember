import * as React from 'react'
import { Component, TextField, TextFieldProps } from 'cms-admin'

interface VideoFieldProps extends TextFieldProps {}

export const VideoField = Component(
	class extends React.Component<VideoFieldProps> {
		public static render(props: VideoFieldProps) {
			return <TextField {...props} name={`${props.name}.src`} />
		}
	}
)
