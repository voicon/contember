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
		<div className={'inputBox'}>
			<div className={'inputBox-header'}>{props.label}</div>
			<div className={'inputBox-row'}>
				<ImageUploadField label={'Desktop'} name={`${props.name}.url`} />
				<ImageUploadField label={'Phone'} name={`${props.name}.phoneUrl`} />
			</div>
		</div>
	)
})
