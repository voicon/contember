import { EditPage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { TagForm } from '../forms'

export const TagEditPage = (
	<EditPage
		entityName="Tag"
		pageName={'tagEdit'}
		where="(id = $id)"
		rendererProps={{
			title: 'Edit tag',
			navigation: <NavigateBackButton to="tags">Tags</NavigateBackButton>,
		}}
	>
		<TagForm />
	</EditPage>
)
