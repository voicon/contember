import { Input } from 'cms-common'
import { Grid } from '../components'
import * as React from 'react'
import { FieldText, GenericPage } from 'cms-admin'

export const GenericPagesPage = (
	<GenericPage pageName={'pages'}>
		<h1>Pages</h1>
		<Grid
			entityName="GenericPage"
			orderBy={[{ title: Input.OrderDirection.asc }]}
			createButton={{
				pageName: 'pageCreate',
				label: 'Create page'
			}}
			editButton={{
				pageName: 'pageEdit'
			}}
		>
			<FieldText name="title" />
		</Grid>
	</GenericPage>
)
