import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid, LocaleSideDimension } from '../components'

export const ContentPageListPage = (
	<GenericPage pageName={'contentPageList'}>
		<Grid
			entityName="ContentPage"
			filter="[site.code = $site]"
			editButton={{
				pageName: 'contentPageEdit',
			}}
			rendererProps={{
				title: 'Pages',
				actions: (
					<>
						<PageLinkButton to="contentPageCreate">Add a new page</PageLinkButton>
					</>
				),
			}}
		>
			<LocaleSideDimension>
				<FieldText name="title" />
			</LocaleSideDimension>
		</Grid>
	</GenericPage>
)
