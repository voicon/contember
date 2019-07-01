import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { CategoryForm } from '../forms'
import { SiteField } from '../components'

export const CategoryCreatePage = (
	<CreatePage
		entity="Category"
		pageName={'categoryCreate'}
		rendererProps={{
			title: 'Create new category'
		}}
	>
		<SiteField />
		<CategoryForm />
	</CreatePage>
)
