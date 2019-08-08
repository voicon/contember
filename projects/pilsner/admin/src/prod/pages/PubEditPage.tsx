import { EditPage } from 'cms-admin'
import * as React from 'react'
import { PubForm } from '../forms'

export const PubEditPage = (
	<EditPage
		entity="Pub"
		pageName={'pubEdit'}
		rendererProps={{
			title: 'Edit pub',
		}}
	>
		<PubForm />
	</EditPage>
)
