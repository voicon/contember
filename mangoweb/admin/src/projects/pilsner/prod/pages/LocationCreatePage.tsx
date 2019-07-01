import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { LocationForm } from '../forms'
import { SiteField } from '../components'

export const LocationCreatePage = (
	<CreatePage
		entity="Location"
		pageName={'locationCreate'}
		rendererProps={{
			title: 'Create new location'
		}}
	>
		<SiteField/>
		<LocationForm/>
	</CreatePage>
)
