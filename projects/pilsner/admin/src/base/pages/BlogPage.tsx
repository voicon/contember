import { EditPage, NavigateBackButton, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<EditPage
		pageName={'blogPage'}
		entityName={'Site'}
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
