import * as React from 'react'
import { Component, UploadField, UploadFieldOwnProps } from 'cms-admin'

export interface ImageFieldProps extends UploadFieldOwnProps {}

export const ImageField = Component(
	class extends React.Component<ImageFieldProps> {
		public static render(props: ImageFieldProps) {
			return <UploadField {...props} name={`${props.name}.url`} />
		}
	}
)
