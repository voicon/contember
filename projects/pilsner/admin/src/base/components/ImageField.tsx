import { Box, Component, FieldName, FormGroupProps, ImageUploadField } from 'cms-admin'
import * as React from 'react'

export interface ImageFieldProps {
	name: FieldName
	single?: boolean
	label?: FormGroupProps['label']
}

export const ImageField = Component<ImageFieldProps>((props: ImageFieldProps) => {
	if (props.single) {
		return <ImageUploadField label={props.label} name={`${props.name}.url`} />
	}
	return (
		<Box heading={props.label} distinction="seamlessIfNested">
			<ImageUploadField label={'Desktop'} name={`${props.name}.url`} />
			<ImageUploadField label={'Phone'} name={`${props.name}.phoneUrl`} />
		</Box>
	)
})
