import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const BlogCreatePage = (
	<CreatePage
		entity="Post"
		pageName={'blogCreate'}
		rendererProps={{
			title: 'Add a new story',
			navigation: <NavigateBackButton to="blogList">Stories</NavigateBackButton>,
			side: <PostFormSide />,
			onlyOneInCollection: true,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'blogList' })}
	>
		<SiteField />
		<PostForm />
	</CreatePage>
)
