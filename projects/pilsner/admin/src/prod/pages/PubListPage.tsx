import { FieldText, GenericPage, Literal } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const PubListPage = (
	<GenericPage pageName={'pubList'}>
		<h1>Pubs</h1>
		<Grid
			entityName="Pub"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'pubCreate',
				label: 'Add pub',
			}}
			editButton={{
				pageName: 'pubEdit',
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
