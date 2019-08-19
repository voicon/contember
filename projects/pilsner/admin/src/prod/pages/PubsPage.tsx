import { EditPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubsPage = (
	<EditPage entity="Site" pageName="pubsPage" where="(slug = $site)">
		<h1>Pubs Page</h1>
		<ToOne field={'pubsPage'}>
			<TextField name={'title'} size="large" label="Title" allowNewlines={true} />
			<LinkForm />
			<ImageField name={'headerImage'} label={'Header image'} />
			<SeoForm />
		</ToOne>
	</EditPage>
)
