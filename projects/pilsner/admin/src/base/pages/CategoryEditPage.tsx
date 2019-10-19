import { EditPage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { CategoryForm } from '../forms'

export const CategoryEditPage = (
	<EditPage
		entityName="Category"
		where="(id = $id)"
		pageName={'categoryEdit'}
		rendererProps={{
			title: 'Edit category',
			navigation: <NavigateBackButton to="categories">Categories</NavigateBackButton>,
		}}
	>
		<CategoryForm />
	</EditPage>
)
