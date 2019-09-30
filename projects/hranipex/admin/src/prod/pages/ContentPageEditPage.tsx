import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { ContentPageForm } from '../forms'

export const ContentPageEditPage = (
	<EditPage
		entity="ContentPage"
		pageName={'contentPageEdit'}
		rendererProps={{
			title: 'Edit page',
			navigation: <NavigateBackButton to="contentPageList">Pages</NavigateBackButton>,
			onlyOneInCollection: true,
		}}
	>
		<ContentPageForm />
	</EditPage>
)
