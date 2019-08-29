import { EditPage, FieldText, PageLinkButton, SortableRepeater } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../components'

export const CategoryPage = (
	<EditPage
		pageName={'categories'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Categories',
			actions: <PageLinkButton to="categoryCreate">Add a new category</PageLinkButton>,
		}}
	>
		<SortableRepeater sortBy={'order'} field={'categories'} removeType={'delete'} enableAddingNew={false}>
			<FieldText name={'name'} />
			<div style={{ float: 'right' }}>
				<EditButton pageName={'categoryEdit'} />
			</div>
		</SortableRepeater>
	</EditPage>
)
