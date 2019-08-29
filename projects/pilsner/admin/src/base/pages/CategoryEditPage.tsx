import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { CategoryForm } from '../forms'

export const CategoryEditPage = (
	<EditPage
		entity="Category"
		pageName={'categoryEdit'}
		rendererProps={{
			title: 'Edit category',
			navigation: <NavigateBackButton to="categories">Categories</NavigateBackButton>,
		}}
	>
		<CategoryForm />
	</EditPage>
)
