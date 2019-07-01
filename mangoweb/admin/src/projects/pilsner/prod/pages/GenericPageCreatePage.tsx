import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { GenericPageForm } from '../forms'
import { SiteField } from '../components'

export const GenericPageCreatePage = (
	<CreatePage
		entity="Post"
		pageName={'pageCreate'}
		rendererProps={{
			title: 'Create new page'
		}}
	>
		<SiteField />
		<GenericPageForm />
	</CreatePage>
)
