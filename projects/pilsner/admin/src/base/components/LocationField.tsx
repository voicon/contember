import { Component, FieldText, SelectField, SelectFieldProps } from 'cms-admin'
import * as React from 'react'

export type LocationFieldProps = Omit<SelectFieldProps, 'options'>

export const LocationField = Component(
	(props: LocationFieldProps) => (
		<SelectField {...props} options={'Location'}>
			<FieldText name="name" />
			<FieldText<string> name="parent.name" format={val => val && `, ${val}`} />
		</SelectField>
	),
	'LocationField',
)
