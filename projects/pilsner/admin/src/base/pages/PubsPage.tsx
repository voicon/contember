import { Box, EditPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, NavigateBackButton } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubsPage = (
	<EditPage
		entity="Site"
		pageName="pubsPage"
		where="(slug = $site)"
		rendererProps={{
			title: 'Pubs page',
			navigation: <NavigateBackButton to="pubList">Pubs</NavigateBackButton>,
		}}
	>
		<ToOne field={'pubsPage'}>
			<Box>
				<TextField name={'title'} size="large" label="Title" allowNewlines={true} />
				<LinkForm />
			</Box>
			<ImageField name={'headerImage'} label={'Header image'} />
			<SeoForm />
		</ToOne>
	</EditPage>
)
