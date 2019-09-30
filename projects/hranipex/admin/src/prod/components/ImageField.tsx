import { Box, Component, FieldName, FormGroupProps, ImageUploadField, TextField } from 'cms-admin'
import * as React from 'react'

export interface ImageFieldProps {
	name: FieldName
	label?: FormGroupProps['label']
}

export const ImageField = Component<ImageFieldProps>((props: ImageFieldProps) => {
	return (
		<>
			<ImageUploadField label={props.label} name={`${props.name}.url`} />
			<TextField name={`${props.name}.url`} label={undefined} size={'small'} />
		</>
	)
})
