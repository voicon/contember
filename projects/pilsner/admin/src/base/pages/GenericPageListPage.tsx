import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const GenericPageListPage = (
	<GenericPage pageName={'pageList'}>
		<Grid
			entityName="GenericPage"
			orderBy={[{ title: new Literal('asc') }]}
			filter="[site.slug = $site]"
			editButton={{
				pageName: 'pageEdit',
			}}
			rendererProps={{
				title: 'Pages',
				actions: <PageLinkButton to="pageCreate">Add a new page</PageLinkButton>,
			}}
		>
			<FieldText name="title" />
		</Grid>
	</GenericPage>
)
