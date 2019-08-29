import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { GenericPageForm } from '../forms'

export const GenericPageEditPage = (
	<EditPage
		entity="GenericPage"
		pageName={'pageEdit'}
		rendererProps={{
			title: 'Edit page',
			navigation: <NavigateBackButton to="pageList">Pages</NavigateBackButton>,
		}}
	>
		<GenericPageForm />
	</EditPage>
)
