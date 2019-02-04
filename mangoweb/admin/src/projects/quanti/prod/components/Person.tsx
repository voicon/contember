import * as React from 'react'
import { Component, TextField } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Image } from './Image'

export const Person = Component<{}>(
	() => (
		<>
			<Image label="Image" name="image" />
			<LocaleSideDimension>
				<TextField label="Quote" name="$locale.quote" />
				<TextField label="Name" name="$locale.name" />
			</LocaleSideDimension>
		</>
	),
	'Person'
)
