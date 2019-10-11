import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from 'cms-admin'
import { TapsterForm, TapsterFormSide } from '../forms'

export const TapsterEditPage = (
	<EditPage
		entityName="Tapster"
		where="(id = $id)"
		pageName={'tapsterEdit'}
		rendererProps={{
			title: 'Edit tapster',
			side: <TapsterFormSide />,
			navigation: <NavigateBackButton to="tapsterList">Tapsters</NavigateBackButton>,
		}}
	>
		<TapsterForm />
	</EditPage>
)
