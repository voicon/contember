import { FieldText, Literal, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components'

export const TapsterListPage = (
	<TablePage
		pageName={'tapsterList'}
		entityName="Tapster"
		orderBy={[{ publishedAt: new Literal('desc') }]}
		filter="[site.slug = $site]"
		rendererProps={{
			title: 'Tapsters',
			actions: (
				<>
					<PageLinkButton to="tapstersPage">Edit the Tapsters page</PageLinkButton>
					<PageLinkButton to="tapsterCreate">Add a new tapster</PageLinkButton>
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
			<EditButton pageName="tapsterEdit" />
		</TableCell>
	</TablePage>
)
