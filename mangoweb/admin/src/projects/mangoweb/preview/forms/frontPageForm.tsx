import { H2 } from '@blueprintjs/core'
import { RichTextField, SortableRepeater, TextField } from 'cms-admin'
import { VariableLiteral } from 'cms-admin/dist/src/binding/dao/VariableLiteral'
import * as React from 'react'
import { ImageField } from '../components/ImageField'
import { LocaleSideDimension } from '../components/LocaleSideDimension'
import { VideoField } from '../components/VideoField'

const frontPageForm = (
	<>
		<H2>Intro</H2>
		<VideoField name="introVideo" label="URL of the title video" />
		<LocaleSideDimension>
			<TextField name="$locale.introLabel" label="Label" />
			<TextField name="$locale.introHeading" label="Heading" />
			<RichTextField name="$locale.introBubbleText" label="Bubble text" />
		</LocaleSideDimension>

		<H2>What we do</H2>
		<LocaleSideDimension>
			<TextField name="$locale.whatWeDoLabel" label="Label" />
			<TextField name="$locale.whatWeDoTitle" label="Title" />
			<SortableRepeater
				field="whatWeDo"
				sortBy="frontPageOrder"
				filter={{ locale: { eq: new VariableLiteral('currentLang') } }}
				label="Our activities"
			>
				{/* TODO */}
				<TextField name="activity" label="Activity" />
				<ImageField name="featuredImage" label="Image" />
			</SortableRepeater>
			<RichTextField name="$locale.whatWeDoAlso" label="Additional activities description" />
		</LocaleSideDimension>

		<H2>Featured clients</H2>
		<LocaleSideDimension>
			<TextField name="$locale.featuredClientsLabel" label="Label" />
			<TextField name="$locale.featuredClientsTitle" label="Title" />
			<SortableRepeater field="$locale.featuredClients" sortBy="order" label="Client logos">
				<ImageField name="image" label="Logo" />
			</SortableRepeater>
		</LocaleSideDimension>
	</>
)

export default frontPageForm
