import { FieldText, Literal, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components'

export const PubListPage = (
	<TablePage
		pageName={'pubList'}
		entityName="Pub"
		orderBy={[{ publishedAt: new Literal('desc') }]}
		filter="[site.slug = $site]"
		rendererProps={{
			title: 'Pubs',
			actions: (
				<>
					<PageLinkButton to="pubsPage">Edit the Pubs page</PageLinkButton>
					<PageLinkButton to="pubCreate">Add a new pub</PageLinkButton>
				</>
			),
		}}
	>
		<TableCell>
			<FieldText name="name" />
		</TableCell>
		<TableCell>
			<FieldText name="subtitle" />
		</TableCell>
		<TableCell>
			<div style={{ color: '#444', fontSize: '11px' }}>
				<FieldText
					name="publishedAt"
					format={(val: string | null) => {
						return val ? 'Published on ' + new Date(val).toLocaleDateString() : 'Not published'
					}}
				/>
			</div>
		</TableCell>
		<TableCell shrunk>
			<EditButton pageName="pubEdit" />
		</TableCell>
	</TablePage>
)
