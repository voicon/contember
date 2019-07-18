import { EditPage, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'
import { FrontPageContentForm, LinkForm, SeoForm } from '../forms'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entity={'FrontPage'} where="(site.slug = $site)">
		<h1>Front page</h1>
		<LinkForm />
		<ImageField name={'headerImage'} label={'Header image'} />
		<TextField name={'title'} label={'Title'} large={true} />
		<TextField name={'scrollString'} label={'Scroll string'} />
		<FrontPageContentForm />
		<SeoForm />
	</EditPage>
)
