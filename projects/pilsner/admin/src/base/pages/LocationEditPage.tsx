import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from 'cms-admin'
import { LocationForm } from '../forms'

export const LocationEditPage = (
	<EditPage
		entityName="Location"
		where="(id = $id)"
		pageName={'locationEdit'}
		rendererProps={{
			title: 'Edit location',
			navigation: <NavigateBackButton to="locations">Locations</NavigateBackButton>,
		}}
	>
		<LocationForm />
	</EditPage>
)
