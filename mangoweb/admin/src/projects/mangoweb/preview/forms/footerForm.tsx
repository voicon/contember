import { H2 } from '@blueprintjs/core'
import { SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension } from '../components'

export const footerForm = (
	<>
		<H2>Contact us button</H2>
		<LocaleSideDimension>
			<TextField name="contactButtonText" label="Button text" />
		</LocaleSideDimension>

		<H2>Footer links</H2>
		<SortableRepeater field="buttons" sortBy="order" removeType="delete">
			<LocaleSideDimension>
				<TextField name="label" label="Link text" />
				<TextField name="url" label="Link url" />
			</LocaleSideDimension>
		</SortableRepeater>

		<H2>In-house videos</H2>
		<LocaleSideDimension>
			<TextField name="inHouseVideosTitle" label="Title" />
		</LocaleSideDimension>
		<SortableRepeater field="inHouseVideos" sortBy="order" removeType="delete">
			<TextField name="src" label="YouTube video URL" />
			<ImageField name="poster" label="Video poster image" />
		</SortableRepeater>
	</>
)
