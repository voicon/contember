import { EditPage, GenericPage, Literal, SortableRepeater, FieldText } from 'cms-admin'
import * as React from 'react'
import { CreateButton, EditButton, Grid } from '../components'

export const CategoryPage = (
	<EditPage pageName={'categories'} entity={'Site'} where="(slug = $site)">
		<h1>Categories</h1>
		<CreateButton pageName={'categoryCreate'} label={'Create category'} />
		<SortableRepeater sortBy={'order'} field={'categories'} removeType={'delete'} enableAddingNew={false}>
			<FieldText name={'name'} />
			<div style={{ float: 'right' }}>
				<EditButton pageName={'categoryEdit'} />
			</div>
		</SortableRepeater>
	</EditPage>
)
