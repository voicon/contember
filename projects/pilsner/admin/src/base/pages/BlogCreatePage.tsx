import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const BlogCreatePage = (
	<CreatePage
		entity="Post"
		pageName={'blogCreate'}
		rendererProps={{
			title: 'Create new post',
			side: <PostFormSide />,
			onlyOneInCollection: true,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'blogList' })}
	>
		<SiteField />
		<PostForm />
	</CreatePage>
)
