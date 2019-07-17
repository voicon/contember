import { Input } from 'cms-common'
import * as React from 'react'
import { FieldText, GenericPage } from 'cms-admin'
import { Grid } from '../components'

export const TagPage = (
	<GenericPage pageName={'tags'}>
		<h1>Tags</h1>
		<Grid
			entityName="Tag"
			orderBy={[{ name: Input.OrderDirection.asc }]}
			createButton={{
				pageName: 'tagCreate',
				label: 'Create tag'
			}}
			editButton={{
				pageName: 'tagEdit'
			}}
		>
			<FieldText name="name" />
		</Grid>
	</GenericPage>
)
