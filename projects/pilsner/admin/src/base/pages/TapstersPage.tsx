import { EditPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, NavigateBackButton } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const TapstersPage = (
	<EditPage
		pageName={'tapstersPage'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Tapsters page',
			navigation: <NavigateBackButton to="tapsterList">Tapsters</NavigateBackButton>,
		}}
	>
		<ToOne field={'tapstersPage'}>
			<TextField name={'title'} size="large" label="Title" allowNewlines={true} />
			<LinkForm />
			<ImageField name={'headerImage'} label={'Header image'} />
			<SeoForm />
		</ToOne>
	</EditPage>
)
