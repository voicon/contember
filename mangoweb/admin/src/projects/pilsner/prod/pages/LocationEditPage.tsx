import * as React from 'react'
import { EditPage } from 'cms-admin'
import { LocationForm } from '../forms'

export const LocationEditPage = (
	<EditPage
		entity="Location"
		pageName={'locationEdit'}
		rendererProps={{
			title: 'Edit location'
		}}
	>
		<LocationForm withLocation={true}/>
	</EditPage>
)
