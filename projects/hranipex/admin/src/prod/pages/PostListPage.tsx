import { FieldText, Literal, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { EditButton } from '../components/EditButton'

export const PostListPage = (
	<TablePage
		pageName={'postList'}
		entityName="Post"
		orderBy={[{ publishedAt: new Literal('desc') }]}
		filter="[site.code = $site]"
		rendererProps={{
			title: 'Posts',
			actions: (
				<>
					<PageLinkButton to="postCreate">Add a new post</PageLinkButton>
				</>
			),
		}}
	>
		<TableCell>
			<LocaleSideDimension>
				<FieldText name="title" />
			</LocaleSideDimension>
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
			<EditButton pageName="postEdit" />
		</TableCell>
	</TablePage>
)
