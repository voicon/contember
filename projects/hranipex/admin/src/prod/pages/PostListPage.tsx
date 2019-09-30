import { FieldText, GenericPage, Literal, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { Grid, LocaleSideDimension } from '../components'

export const PostListPage = (
	<GenericPage pageName={'postList'}>
		<Grid
			entityName="Post"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.code = $site]"
			editButton={{
				pageName: 'postEdit',
			}}
			rendererProps={{
				title: 'Posts',
				actions: (
					<>
						<PageLinkButton to="postCreate">Add a new post</PageLinkButton>
					</>
				),
			}}
		>
			<LocaleSideDimension>
				<FieldText name="title" />
			</LocaleSideDimension>
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
