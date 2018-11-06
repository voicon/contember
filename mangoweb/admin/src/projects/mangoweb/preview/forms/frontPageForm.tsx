import { H2 } from '@blueprintjs/core'
import { RichTextField, TextField, Variable } from 'cms-admin'
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
				label={
					<>
						<Variable name="flag" /> Label
					</>
				}
			/>
			<TextField
				name="$locale.introHeading"
				label={
					<>
						<Variable name="flag" /> Heading
					</>
				}
			/>
			<RichTextField
				name="$locale.introBubbleText"
				label={
					<>
						<Variable name="flag" /> Bubble text
					</>
				}
			/>
		</LocaleSideDimension>
	</>
)

export default frontPageForm
