import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { GenericPageForm } from '../forms'

export const GenericPageCreatePage = (
	<CreatePage
		entity="GenericPage"
		pageName={'pageCreate'}
		rendererProps={{
			title: 'Add a new page',
			navigation: <NavigateBackButton to="pageList">Pages</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'pageList' })}
	>
		<SiteField />
		<GenericPageForm />
	</CreatePage>
)
