import { Component, ImageUploadField, ImageUploadFieldProps } from 'cms-admin'
import * as React from 'react'

export interface ImageFieldProps extends ImageUploadFieldProps {}

export const ImageField = Component(
	class extends React.Component<ImageFieldProps> {
		public static render(props: ImageFieldProps) {
			return <ImageUploadField {...props} name={`${props.name}.url`} />
		}
	}
)
