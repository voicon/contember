import { EditPage } from 'cms-admin'
import * as React from 'react'
import { PubForm, PubFormSide } from '../forms'

export const PubEditPage = (
	<EditPage
		entity="Pub"
		pageName={'pubEdit'}
		rendererProps={{
			title: 'Edit pub',
			side: <PubFormSide />,
			onlyOneInCollection: true,
		}}
	>
		<PubForm />
	</EditPage>
)
