import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const PubListPage = (
	<GenericPage pageName={'pubList'}>
		<Grid
			entityName="Pub"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			editButton={{
				pageName: 'pubEdit',
			}}
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
			<FieldText name="name" />
			<FieldText name="subtitle" />
			<div style={{ color: '#444', fontSize: '11px' }}>
				<FieldText
					name="publishedAt"
					format={(val: string | null) => {
						return val ? 'Published on ' + new Date(val).toLocaleDateString() : 'Not published'
					}}
				/>
			</div>
		</Grid>
	</GenericPage>
)
