import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const TagPage = (
	<GenericPage pageName={'tags'}>
		<Grid
			entityName="Tag"
			orderBy={[{ name: new Literal('asc') }]}
			filter="[site.slug = $site]"
			editButton={{
				pageName: 'tagEdit',
			}}
			rendererProps={{
				title: 'Tags',
				actions: <PageLinkButton to="tagCreate">Add a new tag</PageLinkButton>,
			}}
		>
			<FieldText name="name" />
		</Grid>
	</GenericPage>
)
