import { EditPage } from 'cms-admin'
import * as React from 'react'
import { GenericPageForm } from '../forms'

export const GenericPageEditPage = (
	<EditPage
		entity="GenericPage"
		pageName={'pageEdit'}
		rendererProps={{
			title: 'Edit page',
		}}
	>
		<GenericPageForm />
	</EditPage>
)
