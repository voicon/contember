import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { TagForm } from '../forms'
import { SiteField } from '../components'

export const TagCreatePage = (
	<CreatePage
		entity="Tag"
		pageName={'tagCreate'}
		rendererProps={{
			title: 'Create new tag'
		}}
	>
		<SiteField />
		<TagForm />
	</CreatePage>
)
