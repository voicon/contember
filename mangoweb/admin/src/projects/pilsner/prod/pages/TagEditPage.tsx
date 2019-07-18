import { EditPage } from 'cms-admin'
import * as React from 'react'
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
