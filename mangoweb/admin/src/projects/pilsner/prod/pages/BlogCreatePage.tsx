import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { PostForm } from '../forms'
import { SiteField } from '../components'

export const BlogCreatePage = (
	<CreatePage
		entity="Post"
		pageName={'blogCreate'}
		rendererProps={{
			title: 'Create new post'
		}}
	>
		<SiteField />
		<PostForm />
	</CreatePage>
)
