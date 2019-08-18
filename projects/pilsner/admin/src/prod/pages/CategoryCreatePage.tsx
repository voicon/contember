import { CreatePage, HiddenField } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { CategoryForm } from '../forms'

export const CategoryCreatePage = (
	<CreatePage
		entity="Category"
		pageName={'categoryCreate'}
		rendererProps={{
			title: 'Create new category',
		}}
	>
		<HiddenField name={'order'} defaultValue={99} label={undefined} />
		<SiteField />
		<CategoryForm />
	</CreatePage>
)
