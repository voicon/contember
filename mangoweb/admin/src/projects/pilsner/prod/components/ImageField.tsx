import { Component, FieldName, FormGroup, FormGroupProps, ImageUploadField } from 'cms-admin'
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
		<FormGroup label={props.label}>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: '1 1 50%' }}>
					<ImageUploadField label={'Desktop'} name={`${props.name}.url`} />
				</div>
				<div style={{ flex: '1 1 50%' }}>
					<ImageUploadField label={'Phone'} name={`${props.name}.phoneUrl`} />
				</div>
			</div>
		</FormGroup>
	)
})
