import * as React from 'react'
import { Component, TextAreaField } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const Footer = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextAreaField label="Address in footer" name="$locale.address" />
			</LocaleSideDimension>
		</>
	),
	'Footer'
)
