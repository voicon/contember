import { Component, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const Category = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField label="Name" name="$locale.name" />
			</LocaleSideDimension>
		</>
	),
	'Category'
)
