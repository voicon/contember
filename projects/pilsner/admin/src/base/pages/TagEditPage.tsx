import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { TagForm } from '../forms'

export const TagEditPage = (
	<EditPage
		entity="Tag"
		pageName={'tagEdit'}
		rendererProps={{
			title: 'Edit tag',
			navigation: <NavigateBackButton to="tags">Tags</NavigateBackButton>,
		}}
	>
		<TagForm />
	</EditPage>
)
