import { CreatePage, HiddenField } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { CategoryForm } from '../forms'

export const CategoryCreatePage = (
	<CreatePage
		entity="Category"
		pageName={'categoryCreate'}
		rendererProps={{
			title: 'Add a new category',
			navigation: <NavigateBackButton to="categories">Categories</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'categories' })}
	>
		<HiddenField name={'order'} defaultValue={99} label={undefined} />
		<SiteField />
		<CategoryForm />
	</CreatePage>
)
