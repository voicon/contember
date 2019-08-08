import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { TagForm } from '../forms'

export const TagCreatePage = (
	<CreatePage
		entity="Tag"
		pageName={'tagCreate'}
		rendererProps={{
			title: 'Create new tag',
		}}
	>
		<SiteField />
		<TagForm />
	</CreatePage>
)
