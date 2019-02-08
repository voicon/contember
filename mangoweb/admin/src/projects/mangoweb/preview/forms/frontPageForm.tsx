import { H2 } from '@blueprintjs/core'
import { SortableRepeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension, VideoField } from '../components'
import { seoForm } from './seoForm'

export const frontPageForm = (
	<>
		<H2>Intro</H2>
		<VideoField name="introVideo" title="Title video" />
		<ImageField name="heroImage" label="Hero image to be displayed instead of the video on smaller screens" />
		<LocaleSideDimension>
			<TextField name="$locale.introLabel" label="Label" />
			<TextField name="$locale.introHeading" label="Heading" />
			<TextAreaField name="$locale.introBubbleText" label="Bubble text" />
		</LocaleSideDimension>

		<H2>What we do</H2>
		<LocaleSideDimension>
			<TextField name="$locale.whatWeDoLabel" label="Label" />
			<TextField name="$locale.whatWeDoTitle" label="Title" />
			<TextAreaField name="$locale.whatWeDoAlso" label="Additional activities description" />
		</LocaleSideDimension>

		<H2>Featured clients</H2>
		<LocaleSideDimension>
			<TextField name="$locale.featuredClientsLabel" label="Label" />
			<TextField name="$locale.featuredClientsTitle" label="Title" />
			<SortableRepeater field="$locale.featuredClients" sortBy="order" label="Client logos" removeType="delete">
				<ImageField name="logo" label="Logo" />
			</SortableRepeater>
		</LocaleSideDimension>

		{seoForm}
	</>
)
