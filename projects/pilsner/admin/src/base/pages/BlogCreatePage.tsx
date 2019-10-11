import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const BlogCreatePage = (
	<CreatePage
		entityName="Post"
		pageName="blogCreate"
		rendererProps={{
			title: 'Add a new story',
			navigation: <NavigateBackButton to="blogList">Stories</NavigateBackButton>,
			side: <PostFormSide />,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'blogList' })}
	>
		<SiteField />
		<PostForm />
	</CreatePage>
)
