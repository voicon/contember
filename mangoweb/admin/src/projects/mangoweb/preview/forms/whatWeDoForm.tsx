import { Repeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, VideoField } from '../components'
import { Medium } from '../components/Medium'

export const whatWeDoForm = (
	<>
		<TextField name="activity" label="What we do" />
		<ImageField name="featuredPhoto" label="Featured image" />
		<VideoField name="featuredVideo" title="Featured video" />
		<VideoField name="boomerangVideo" title="Boomerang video" />
		<TextField name="descriptionHeading" label="Heading of the description" />
		<Repeater field="description" label="Description sections">
			<TextField name="heading" label="Section heading" />
			<Medium field="featuredMedium" label="Description medium" />
			<TextAreaField name="description" label="Content" />
		</Repeater>
	</>
)
