import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const PostCreatePage = (
	<CreatePage
		entityName="Post"
		pageName={'postCreate'}
		rendererProps={{
			title: 'Add a new post',
			navigation: <NavigateBackButton to="postList">Posts</NavigateBackButton>,
			side: <PostFormSide />,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'postList' })}
	>
		<SiteField />
		<PostForm />
	</CreatePage>
)
