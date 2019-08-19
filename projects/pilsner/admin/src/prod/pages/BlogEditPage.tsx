import { EditPage } from 'cms-admin'
import * as React from 'react'
import { PostForm, PostFormSide } from '../forms'

export const BlogEditPage = (
	<EditPage
		entity="Post"
		pageName={'blogEdit'}
		rendererProps={{
			title: 'Edit blog post',
			side: <PostFormSide />,
			onlyOneInCollection: true,
		}}
	>
		<PostForm />
	</EditPage>
)
