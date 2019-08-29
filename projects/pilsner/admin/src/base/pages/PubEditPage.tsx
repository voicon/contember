import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { PubForm, PubFormSide } from '../forms'

export const PubEditPage = (
	<EditPage
		entity="Pub"
		pageName={'pubEdit'}
		rendererProps={{
			title: 'Edit pub',
			side: <PubFormSide />,
			onlyOneInCollection: true,
			navigation: <NavigateBackButton to="pubList">Pubs</NavigateBackButton>,
		}}
	>
		<PubForm />
	</EditPage>
)
