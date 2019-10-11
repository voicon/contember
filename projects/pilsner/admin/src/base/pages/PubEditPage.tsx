import { EditPage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { PubForm, PubFormSide } from '../forms'

export const PubEditPage = (
	<EditPage
		entityName="Pub"
		pageName={'pubEdit'}
		where="(id = $id)"
		rendererProps={{
			title: 'Edit pub',
			side: <PubFormSide />,
			navigation: <NavigateBackButton to="pubList">Pubs</NavigateBackButton>,
		}}
	>
		<PubForm />
	</EditPage>
)
