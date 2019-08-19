import { EditPage, GenericPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const TapstersPage = (
	<EditPage pageName={'tapstersPage'} entity={'Site'} where="(slug = $site)">
		<h1>Tapsters Page</h1>
		<ToOne field={'tapstersPage'}>
			<TextField name={'title'} size="large" label="Title" />
      <TextField name={'title'} size="large" label="Title" allowNewlines={true} />
			<LinkForm />
			<ImageField name={'headerImage'} label={'Header image'} />
			<SeoForm />
		</ToOne>
	</EditPage>
)
