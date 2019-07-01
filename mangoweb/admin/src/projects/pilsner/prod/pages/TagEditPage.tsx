import * as React from 'react'
import { EditPage } from 'cms-admin'
import { TagForm } from '../forms'

export const TagEditPage = (
	<EditPage
		entity="Tag"
		pageName={'tagEdit'}
		rendererProps={{
			title: 'Edit tag'
		}}
	>
		<TagForm />
	</EditPage>
)
