import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { LocationForm } from '../forms'

export const LocationCreatePage = (
	<CreatePage
		entity="Location"
		pageName={'locationCreate'}
		rendererProps={{
			title: 'Create new location'
		}}
	>
		<SiteField />
		<LocationForm />
	</CreatePage>
)
