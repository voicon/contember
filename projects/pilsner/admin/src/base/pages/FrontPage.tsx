import { EditPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'
import { FrontPageContentForm, LinkForm, SeoForm } from '../forms'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entity={'Site'} where="(slug = $site)">
		<ToOne field={'frontPage'}>
			<h1>Front page</h1>
			<LinkForm />
			<ImageField name={'headerImage'} label={'Header image'} />
			<TextField name={'title'} label={'Title'} size="large" allowNewlines={true} />
			<TextField name={'scrollString'} label={'Scroll string'} allowNewlines={true} />
			<FrontPageContentForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
