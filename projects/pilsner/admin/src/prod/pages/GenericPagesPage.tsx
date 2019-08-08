import { FieldText, GenericPage, Literal } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const GenericPagesPage = (
	<GenericPage pageName={'pages'}>
		<h1>Pages</h1>
		<Grid
			entityName="GenericPage"
			orderBy={[{ title: new Literal('asc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'pageCreate',
				label: 'Create page',
			}}
			editButton={{
				pageName: 'pageEdit',
			}}
		>
			<FieldText name="title" />
		</Grid>
	</GenericPage>
)
