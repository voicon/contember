import * as React from 'react'
import { Component, TextField, TextFieldProps } from 'cms-admin'

interface ImageFieldProps extends TextFieldProps {}

export const ImageField = Component(
	class extends React.Component<ImageFieldProps> {
		public static render(props: ImageFieldProps) {
			return <TextField {...props} name={`${props.name}.url`} />
		}
	}
)
