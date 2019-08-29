import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const TapsterListPage = (
	<GenericPage pageName={'tapsterList'}>
		<Grid
			entityName="Tapster"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			editButton={{
				pageName: 'tapsterEdit',
			}}
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
