import { EditPage } from 'cms-admin'
import * as React from 'react'
import { PostForm } from '../forms'

export const BlogEditPage = (
	<EditPage
		entity="Post"
		pageName={'blogEdit'}
		rendererProps={{
			title: 'Edit blog post',
		}}
	>
		<PostForm />
	</EditPage>
)
