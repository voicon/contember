import { FieldText, Literal, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components'

export const TagPage = (
	<TablePage
		pageName={'tags'}
		entityName="Tag"
		orderBy={[{ name: new Literal('asc') }]}
		filter="[site.slug = $site]"
		rendererProps={{
			title: 'Tags',
			actions: <PageLinkButton to="tagCreate">Add a new tag</PageLinkButton>,
		}}
	>
		<TableCell>
			<FieldText name="name" />
		</TableCell>
		<TableCell shrunk>
			<EditButton pageName="tagEdit" />
		</TableCell>
	</TablePage>
)
