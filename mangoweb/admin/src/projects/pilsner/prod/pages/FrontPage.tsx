import * as React from 'react'
import { EditPage, TextField } from 'cms-admin'
import { ImageField } from '../components'
import { FrontPageContentForm, SeoForm, LinkForm } from '../forms'
import { getSite } from '../utils/environment'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entity={'FrontPage'} where={({}, env) => ({ site: { slug: getSite(env) } })}>
		<h1>Front page</h1>
		<ImageField name={'headerImage'} label={'Header image'}/>
		<TextField name={'title'} label={'Title'}/>
		<TextField name={'scrollString'} label={'Scroll string'}/>
		<LinkForm/>
		<SeoForm/>
		<FrontPageContentForm/>
	</EditPage>
)
