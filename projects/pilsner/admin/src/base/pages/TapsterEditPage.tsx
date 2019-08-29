import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { TapsterForm, TapsterFormSide } from '../forms'

export const TapsterEditPage = (
	<EditPage
		entity="Tapster"
		pageName={'tapsterEdit'}
		rendererProps={{
			title: 'Edit tapster',
			side: <TapsterFormSide />,
			onlyOneInCollection: true,
			navigation: <NavigateBackButton to="tapsterList">Tapsters</NavigateBackButton>,
		}}
	>
		<TapsterForm />
	</EditPage>
)
