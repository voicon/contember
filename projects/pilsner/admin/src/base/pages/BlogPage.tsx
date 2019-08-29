import { EditPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<EditPage
		pageName={'blogPage'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Stories page',
			navigation: <NavigateBackButton to="blogList">Stories</NavigateBackButton>,
		}}
	>
		<ToOne field={'blogPage'}>
			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
