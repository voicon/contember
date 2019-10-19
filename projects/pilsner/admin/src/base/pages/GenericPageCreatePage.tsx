import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { GenericPageForm } from '../forms'

export const GenericPageCreatePage = (
	<CreatePage
		entityName="GenericPage"
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
