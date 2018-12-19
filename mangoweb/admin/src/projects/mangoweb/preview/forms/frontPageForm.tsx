import { H2 } from '@blueprintjs/core'
import { SortableRepeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension, VideoField } from '../components'

export const frontPageForm = (
	<>
		<H2>Intro</H2>
		<VideoField name="introVideo" label="URL of the title video" />
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
		{/* TODO seo */}
	</>
)
