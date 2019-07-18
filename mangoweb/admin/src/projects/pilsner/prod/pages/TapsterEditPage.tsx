import { EditPage } from 'cms-admin'
import * as React from 'react'
import { TapsterForm } from '../forms'

export const TapsterEditPage = (
	<EditPage
		entity="Tapster"
		pageName={'tapsterEdit'}
		rendererProps={{
			title: 'Edit tapster'
		}}
	>
		<TapsterForm />
	</EditPage>
)
