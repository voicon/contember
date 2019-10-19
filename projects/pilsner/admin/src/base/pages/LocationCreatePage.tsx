import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { LocationForm } from '../forms'

export const LocationCreatePage = (
	<CreatePage
		entityName="Location"
		pageName={'locationCreate'}
		rendererProps={{
			title: 'Create new location',
			navigation: <NavigateBackButton to="locations">Locations</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'locations' })}
	>
		<SiteField />
		<LocationForm />
	</CreatePage>
)
