import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { TapsterForm } from '../forms'
import { SiteField } from '../components'

export const TapsterCreatePage = (
	<CreatePage
		entity="Tapster"
		pageName={'tapsterCreate'}
		rendererProps={{
			title: 'Add new tapster'
		}}
	>
		<SiteField />
		<TapsterForm />
	</CreatePage>
)
