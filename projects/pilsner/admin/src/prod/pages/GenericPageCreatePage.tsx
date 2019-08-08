import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { GenericPageForm } from '../forms'

export const GenericPageCreatePage = (
	<CreatePage
		entity="GenericPage"
		pageName={'pageCreate'}
		rendererProps={{
			title: 'Create new page',
		}}
	>
		<SiteField />
		<GenericPageForm />
	</CreatePage>
)
