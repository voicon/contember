import { Repeater, RichTextField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components/ImageField'


export const whatWeDoForm = (
	<>
		<TextField name="activity" label="What we do" />
		<ImageField name="featuredImage" label="Featured image" />
		<TextField name="descriptionHeading" label="Heading of the description" />
		<Repeater field="description" label="Description sections">
			<TextField name="heading" label="Section heading" />
			<ImageField name="image" label="Image" />
			<RichTextField name="description" label="Content" />
		</Repeater>
	</>
)
