import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { TagForm } from '../forms'

export const TagCreatePage = (
	<CreatePage
		entityName="Tag"
		pageName={'tagCreate'}
		rendererProps={{
			title: 'Add a new tag',
			navigation: <NavigateBackButton to="tags">Tags</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'tags' })}
	>
		<SiteField />
		<TagForm />
	</CreatePage>
)
