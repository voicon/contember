import { FieldText, GenericPage, Literal } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const CategoryPage = (
	<GenericPage pageName={'categories'}>
		<h1>Categories</h1>
		<Grid
			entityName="Category"
			orderBy={[{ name: new Literal('asc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'categoryCreate',
				label: 'Create category'
			}}
			editButton={{
				pageName: 'categoryEdit'
			}}
		>
			<FieldText name="name" />
		</Grid>
	</GenericPage>
)
