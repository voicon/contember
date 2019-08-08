import * as React from 'react'
import { CheckboxField, Component, TextField } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Image } from './Image'

export const Person = Component(
	() => (
		<>
			<Image label="Image" name="image" />
			<TextField label="Email" name="email" />
			<CheckboxField label="Show on front page" name="showOnFrontPage" />
			<LocaleSideDimension>
				<TextField label="Quote" name="quote" />
				<TextField label="Name" name="name" />
				<TextField label="Position" name="position" />
			</LocaleSideDimension>
		</>
	),
	'Person',
)
