import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const PostEditPage = (
	<EditPage
		entity="Post"
		pageName={'postEdit'}
		rendererProps={{
			title: 'Edit post',
			navigation: <NavigateBackButton to="postList">Posts</NavigateBackButton>,
			side: <PostFormSide />,
			onlyOneInCollection: true,
		}}
	>
		<PostForm />
	</EditPage>
)
