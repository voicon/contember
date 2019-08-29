import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const BlogListPage = (
	<GenericPage pageName={'blogList'}>
		<Grid
			entityName="Post"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			editButton={{
				pageName: 'blogEdit',
			}}
			rendererProps={{
				title: 'Stories',
				actions: (
					<>
						<PageLinkButton to="blogPage">Edit the Stories page</PageLinkButton>
						<PageLinkButton to="blogCreate">Add a new story</PageLinkButton>
					</>
				),
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
