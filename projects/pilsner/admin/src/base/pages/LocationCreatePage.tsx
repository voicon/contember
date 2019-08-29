import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { LocationForm } from '../forms'

export const LocationCreatePage = (
	<CreatePage
		entity="Location"
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
