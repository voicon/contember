import { FieldText, GenericPage, Literal, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const TapsterListPage = (
	<GenericPage pageName={'tapsterList'}>
		<h1>Tapsters</h1>
		<Grid
			entityName="Tapster"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'tapsterCreate',
				label: 'Add tapster',
			}}
			editButton={{
				pageName: 'tapsterEdit',
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
