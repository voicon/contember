import { Component, FieldName, FormGroupProps, HiddenField, Literal, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

export interface LinkFieldProps {
	name: FieldName
	label?: FormGroupProps['label']
}

export const LinkField = Component<LinkFieldProps>((props: LinkFieldProps) => {
	return (
		<ToOne field={props.name}>
			<HiddenField defaultValue={new Literal('external')} label={undefined} name="type" />
			<TextField name="url" label="URL" />
		</ToOne>
	)
})
