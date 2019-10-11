import { EditPage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { GenericPageForm } from '../forms'

export const GenericPageEditPage = (
	<EditPage
		entityName="GenericPage"
		pageName={'pageEdit'}
		where="(id = $id)"
		rendererProps={{
			title: 'Edit page',
			navigation: <NavigateBackButton to="pageList">Pages</NavigateBackButton>,
		}}
	>
		<GenericPageForm />
	</EditPage>
)
