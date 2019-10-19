import { FieldText, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { EditButton } from '../components/EditButton'

export const ContentPageListPage = (
	<TablePage
		pageName={'contentPageList'}
		entityName="ContentPage"
		filter="[site.code = $site]"
		rendererProps={{
			title: 'Pages',
			actions: (
				<>
					<PageLinkButton to="contentPageCreate">Add a new page</PageLinkButton>
				</>
			),
		}}
	>
		<TableCell>
			<LocaleSideDimension>
				<FieldText name="title" />
			</LocaleSideDimension>
		</TableCell>
		<TableCell shrunk>
			<EditButton pageName="contentPageEdit" />
		</TableCell>
	</TablePage>
)
