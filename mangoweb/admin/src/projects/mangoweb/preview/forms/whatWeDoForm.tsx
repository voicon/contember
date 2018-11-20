import { Repeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const whatWeDoForm = (
	<>
		<TextField name="activity" label="What we do" />
		<ImageField name="featuredImage" label="Featured image" />
		<TextField name="descriptionHeading" label="Heading of the description" />
		<Repeater field="description" label="Description sections">
			<TextField name="heading" label="Section heading" />
			<ImageField name="image" label="Image" />
			<TextAreaField name="description" label="Content" />
		</Repeater>
	</>
)
