import { EditPage } from 'cms-admin'
import * as React from 'react'
import { CategoryForm } from '../forms'

export const CategoryEditPage = (
	<EditPage
		entity="Category"
		pageName={'categoryEdit'}
		rendererProps={{
			title: 'Edit category',
		}}
	>
		<CategoryForm />
	</EditPage>
)
