import * as React from 'react'
import { EditPage } from 'cms-admin'
import { GenericPageForm } from '../forms'

export const GenericPageEditPage = (
	<EditPage
		entity="GenericPage"
		pageName={'pageEdit'}
		rendererProps={{
			title: 'Edit page'
		}}
	>
		<GenericPageForm />
	</EditPage>
)
