import { EditPage, GenericPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<EditPage pageName={'blogPage'} entity={'Site'} where="(slug = $site)">
		<h1>Stories Page</h1>
		<ToOne field={'blogPage'}>
			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
