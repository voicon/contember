import { FieldText, GenericPage, Literal, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const BlogListPage = (
	<GenericPage pageName={'blogList'}>
		<h1>Stories</h1>
		<Grid
			entityName="Post"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'blogCreate',
				label: 'Create post',
			}}
			editButton={{
				pageName: 'blogEdit',
			}}
		>
			<FieldText name="title" />
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
