import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PostForm } from '../forms'

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
