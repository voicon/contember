import { H2 } from '@blueprintjs/core'
import { RichTextField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'
import { VideoField } from '../components/VideoField'

const frontPageForm = (
	<>
		<H2>Intro</H2>
		<VideoField name="introVideo" label="URL of the title video" />
		<LocaleSideDimension>
			<TextField
				name="$locale.introLabel"
				label="Label"
			/>
			<TextField
				name="$locale.introHeading"
				label="Heading"
			/>
			<RichTextField
				name="$locale.introBubbleText"
				label="Bubble text"
			/>
		</LocaleSideDimension>
	</>
)

export default frontPageForm
