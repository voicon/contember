import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { ContentPageForm } from '../forms'

export const ContentPageCreatePage = (
	<CreatePage
		entity="ContentPage"
		pageName={'contentPageCreate'}
		rendererProps={{
			title: 'Add a new page',
			navigation: <NavigateBackButton to="contentPageList">Pages</NavigateBackButton>,
			onlyOneInCollection: true,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'contentPageList' })}
	>
		<SiteField />
		<ContentPageForm />
	</CreatePage>
)
