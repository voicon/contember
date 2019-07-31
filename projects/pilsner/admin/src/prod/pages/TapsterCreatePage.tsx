import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { TapsterForm } from '../forms'

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
