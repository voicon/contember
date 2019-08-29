import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { LocationForm } from '../forms'

export const LocationEditPage = (
	<EditPage
		entity="Location"
		pageName={'locationEdit'}
		rendererProps={{
			title: 'Edit location',
			navigation: <NavigateBackButton to="locations">Locations</NavigateBackButton>,
		}}
	>
		<LocationForm />
	</EditPage>
)
