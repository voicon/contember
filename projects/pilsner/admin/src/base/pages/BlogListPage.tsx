import { FieldText, Literal, PageLinkButton, TableCell, TablePage } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components'

export const BlogListPage = (
	<TablePage
		pageName={'blogList'}
		entityName="Post"
		orderBy={[{ publishedAt: new Literal('desc') }]}
		filter="[site.slug = $site]"
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
		<TableCell>
			<FieldText name="title" />
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
			<EditButton pageName="blogEdit" />
		</TableCell>
	</TablePage>
)
